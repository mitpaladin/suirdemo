
import React from 'react';
import url from 'url';
import ReactTestUtils from 'react-dom/test-utils';

import ExampleCard from './ExampleCard';

const defaultState = {
  avatar: 'matthew',
  friendCount: 22,
  homeCity: 'Nashville',
  jobName: 'a musician',
  joinedYear: 2015,
  memberName: 'Matthew',
};

const fnRenderCard = state => ReactTestUtils.renderIntoDocument(<ExampleCard
  avatar={state.avatar} friendCount={state.friendCount}
  homeCity={state.homeCity} job={state.jobName} joinedYear={state.joinedYear}
  name={state.memberName}
/>);

const renderedCard = (state = defaultState) => {
  const rendered = fnRenderCard(state);
  return ReactTestUtils.findRenderedDOMComponentWithClass(rendered, 'card ui');
};

describe('renders expected markup for', () => {
  const card = renderedCard();

  describe('the outer container, which', () => {
    it('exists as a div with "ui" and "card" styles', () => {
      expect(card.tagName.toLowerCase()).toEqual('div');
    });

    it('has three children', () => {
      expect(card.children.length).toBe(3);
    });
  }); // describe('the outer container, which' ...)

  /**
   * We don't have a way to relate the image back to the user data, since it's
   * presently a randomly-selected image. Oops.
   */
  describe('the first child element, which', () => {
    const child = card.children[0];

    it('is an img element', () => {
      expect(child.tagName.toLowerCase()).toEqual('img');
    });

    it('has the "ui" and "image" CSS class names', () => {
      const classNames = child.classList;
      expect(classNames).toContain('image');
      expect(classNames).toContain('ui');
    });

    it('has a :src attribute referencing a PNG or JPG URL', () => {
      const ext = url.parse(child.src).path.split('.').reverse()[0];
      expect(['jpg', 'png']).toContain(ext.toLowerCase());
    });
  }); // describe('the first child element, which' ...)

  describe('the second child element, which', () => {
    const content = card.children[1];

    it('is a div with the "content" class name', () => {
      const expected = /^<div class="content">.+?<\/div>$/;
      expect(content.outerHTML).toMatch(expected);
    });

    it('has three children of its own', () => {
      expect(content.children.length).toBe(3);
    });

    it('has a first child as a div.header', () => {
      const child = content.children[0];
      const actual = child.outerHTML.match(/^(<div class="header">.+?<\/div>)/);
      expect(actual).not.toBeNull();
    });

    it('has a second child as a div with the "meta" class name', () => {
      const expected = /^<div class="meta">.+?<\/div>$/;
      const meta = content.children[1];

      expect(meta.outerHTML).toMatch(expected);
    });

    it('has a third child as a div with the "description" class name', () => {
      const descrip = content.children[2];
      const expected = /^<div class="description">.+?<\/div>$/;

      expect(descrip.outerHTML).toMatch(expected);
    });
  }); // describe('the second child element, which' ...)

  describe('the third child element, which', () => {
    const extraContent = card.children[2];

    it('is a div with the CSS styles "extra" and "content"', () => {
      const expected = /^<div class="extra content">.+?<\/div>$/;

      expect(extraContent.outerHTML).toMatch(expected);
    });
  }); // describe('the third child element, which' ...)
}); // describe('renders expected markup for'

describe('correctly reflects specified prop values, including', () => {
  const state = defaultState;

  /**
   * Using most logically invalid values *won't* raise errors. Presentational
   * ("dumb") components (see https://jaketrent.com/post/smart-dumb-components-react/)
   * like `ExampleCard` don't enforce valid values. React 15 requires PropTypes,
   * however, which warns of type mismatches *in development mode*. (See
   * https://facebook.github.io/react/docs/typechecking-with-proptypes.html for
   * details.) As such, there's no real point to actually running tests to see
   * what the component will do with these values; it will treat them as
   * legitimate since there's no logic in *this* component that says otherwise.
   * These invalid values include
   *
   * * negative integer value;
   * * non-integer numeric value;
   * * non-numeric value;
   * * string value.
   *
   * Values of `null` for string values will be treated as empty strings; for
   * numeric values, as `NaN` (which will render as "NaN").
   */
  describe('simple values for', () => {
    describe('name', () => {
      afterEach(() => {
        const actual = renderedCard(state).children[1].children[0].innerHTML;
        expect(actual).toEqual(state.memberName);
      });

      it('that are simple', () => {
        state.memberName = 'Kristiana';
      });

      it('with embedded spaces', () => {
        state.memberName = 'Jane Q Public';
      });

      // BUG: Something should scream and die.
      it('that are empty', () => {
        state.memberName = '';
      });
    }); // describe('name' ...)

    describe('friendCount', () => {
      describe('when supplied a valid numeric value that is', () => {
        afterEach(() => {
          // Third child element of div.card is div.extra.content
          //   First child of that is the embedded 'a' element
          //     Text of the 'a' element is 'NN friends', where NN is a number
          const friendStr = renderedCard(state).children[2].children[0]
            .text.split(' ')[0];
          expect(parseInt(friendStr, 10)).toEqual(state.friendCount);
        });

        it('with a positive integer', () => {
          state.friendCount = 49;
        });

        it('with a value of zero', () => {
          state.friendCount = 0;
        });
      }); // describe('when supplied a valid numeric value that is' ...)
    }); // describe('friendCount' ...)
  }); // describe('simple values for' ...)

  /**
   * NOTE: Other prop values skipped for purposes of this demo.
   */
}); // describe('correctly reflects specified prop values, including' ...)

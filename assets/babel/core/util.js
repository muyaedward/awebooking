const Util = (($) => {
  'use strict';

  function getTransitionEndEvent() {
    let transitionEndEvent = '';

    const transitionEndEvents = {
      'WebkitTransition' : 'webkitTransitionEnd',
      'MozTransition'    : 'transitionend',
      'OTransition'      : 'otransitionend',
      'transition'       : 'transitionend'
    };

    for (let name in transitionEndEvents) {
      if ({}.hasOwnProperty.call(transitionEndEvents, name)) {
        let tempEl = document.createElement('p');
        if (typeof tempEl.style[name] !== 'undefined') {
          transitionEndEvent = transitionEndEvents[name];
        }
      }
    }

    return transitionEndEvent;
  }

  return {
    TRANSITION_END: getTransitionEndEvent(),

    getTargetFromElement(element) {
      let selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        selector = element.getAttribute('href') || '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },

    getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      }

      // Get transition-duration of the element.
      let transitionDuration = $(element).css('transition-duration');
      const floatTransitionDuration = parseFloat(transitionDuration);

      // Return 0 if element or transition duration is not found.
      if (!floatTransitionDuration) {
        return 0;
      }

      // If multiple durations are defined, take the first.
      transitionDuration = transitionDuration.split(',')[0];

      return parseFloat(transitionDuration) * 1000;
    },
  };
})(jQuery);

module.exports = Util
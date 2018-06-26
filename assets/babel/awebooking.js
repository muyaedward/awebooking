window.awebooking = {};

(function ($, plugin) {
  'use strict';

  const _defaults = function (options, defaults) {
    return $.extend( {}, defaults, options );
  };

  // Polyfill location.origin in IE, @see https://stackoverflow.com/a/25495161
  if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  }

  // Main objects
  plugin.utils = {};
  plugin.instances = {};
  plugin.utils.rangeDates = require('./core/flatpickr-dates.js');

  /**
   * Configure.
   *
   * @type {Object}
   */
  plugin.config = _defaults(window._awebooking, {
    route: window.location.origin + '?awebooking_route=/',
    ajax_url: window.location.origin + '/wp-admin/admin-ajax.php',
    i18n: {
      date_format: 'F j, Y',
      time_format: 'H:i:s',
    }
  });

  /**
   * The admin route.
   *
   * @param  {string} route
   * @return {string}
   */
  plugin.route = function (route) {
    return this.config.route + (route || '').replace(/^\//g, '');
  };

  /**
   * Create new datepicker.
   *
   * @see https://flatpickr.js.org/options/
   *
   * @return {flatpickr}
   */
  plugin.datepicker = function (instance, options) {
    const i18n = plugin.config.i18n;
    const defaults = plugin.config.datepicker;
    const disable = Array.isArray(defaults.disable) ? defaults.disable : [];

    if (Array.isArray(defaults.disable_days)) {
      disable.push(function (date) {
        return defaults.disable_days.indexOf(date.getDay()) !== -1;
      });
    }

    const minDate = new Date().fp_incr(defaults.min_date);
    const maxDate = (defaults.max_date && defaults.max_date !== 0) ? new Date().fp_incr(defaults.max_date) : '';

    const fp = flatpickr(instance, _defaults(options, {
      dateFormat: 'Y-m-d',
      ariaDateFormat: i18n.date_format,
      minDate: 'today',
      // maxDate: max_date,
      // disable: disable,
      showMonths: defaults.show_months,
      enableTime: false,
      enableSeconds: false,
      onReady(_, __, fp) {
        fp.calendarContainer.classList.add('awebooking-datepicker');
      }
    }));

    return fp;
  };

  /**
   * Document ready.
   *
   * @return {void}
   */
  $(function () {
    // Init
    require('./frontend/search-form').init();

    window.tippy('[data-awebooking="tooltip"]', {
      theme: 'awebooking-tooltip'
    });

    $('[data-init="awebooking-dialog"]').each( (e, el) => {
      const dialog = new window.A11yDialog(el);

      dialog.on('show', () => {
        el.classList.add('open');
        el.removeAttribute('aria-hidden');
      });

      dialog.on('hide', () => {
        el.classList.remove('open');
        el.setAttribute('aria-hidden', true);
      });
    });

  });

})(jQuery, window.awebooking);

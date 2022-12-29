(function ($, Drupal, once) {
  "use strict";

  function init(element) {
    const userDropDown = $("#user-dropdown");
    $(element).on("click", function () {
      toggleUserMenu();
    });

    function toggleUserMenu() {
      userDropDown.toggle();
    }
  }

  Drupal.behaviors.userMenu = {
    attach: function (context, settings) {
      // Use context to filter the DOM to only the elements of interest,
      // and use once() to guarantee that our callback function processes
      // any given element one time at most, regardless of how many times
      // the behaviour itself is called (it is not sufficient in general
      // to assume an element will only ever appear in a single context).
      once("btn-user-dropdown", $("#btn-user-dropdown"), context).forEach(init);
    },
  };
})(jQuery, Drupal, once);

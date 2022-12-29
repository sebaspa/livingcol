(function ($, Drupal, once) {
  "use strict";

  function init(element) {
    const btnMainMenu = $("#btn-main-menu");
    btnMainMenu.on("click", function () {
      toggleMainMenu();
    });

    function toggleMainMenu() {
      $(element).toggle();
    }
  }

  Drupal.behaviors.mainMenu = {
    attach: function (context, settings) {
      // Use context to filter the DOM to only the elements of interest,
      // and use once() to guarantee that our callback function processes
      // any given element one time at most, regardless of how many times
      // the behaviour itself is called (it is not sufficient in general
      // to assume an element will only ever appear in a single context).
      once("main-menu", $("#main-menu"), context).forEach(init);
    },
  };
})(jQuery, Drupal, once);

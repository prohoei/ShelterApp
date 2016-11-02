// Toggle sidebar nav
$(document).ready(function () {
  var trigger = $('.hamburger')
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {      
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
	}
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});
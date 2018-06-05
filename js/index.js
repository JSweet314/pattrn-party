const $accordionPanel = $('.accordion-panel');
const $accordionButton = $('.accordion-button');

$.fn.visible = function () {
  return this.css('visibility', 'visible');
};

$.fn.invisible = function () {
  return this.css('visibility', 'hidden');
};

$accordionButton.on('click', function() {
  if (window.innerWidth <= 800) {
    if ($(this).next('.accordion-panel').is(':visible')) {
      $(this).toggleClass('active-mobile');
      $(this).next('.accordion-panel').css({ display: 'none'});
    } else {
      $accordionButton.removeClass('active-mobile');
      $(this).addClass('active-mobile');
      $('.accordion-panel').css({ display: 'none' });
      $(this).next('.accordion-panel').css({ display: 'flex' });
    }
  } else {
    $accordionPanel.each(function(index, panel){
      $(panel).invisible();
    })
    $(this).next('.accordion-panel').visible();
    $accordionButton.removeClass('active');
    $(this).addClass('active');
  }
});

$('.code-button').on('click', function(event) {
  const { name } = event.target;
  $(`#${name}`).toggle();
});

$('.menu-btn-grp').on('click', function(event) {
  if ($('.header-bar').css('flex-direction') === 'column') {
    $('.header-bar a').toggle();
    $('.header-bar input').toggle();
  }
});

$(window).resize(function() {
  if ($(window).width() > 699) {
    $('.header-bar a').show();
    $('.header-bar input').show();
  }

  if (window.innerWidth <= 800) {
    $('.accordion-panel').css({
      display: 'none',
      visibility: 'visible'
    });
  } else {
    $('.accordion-panel').css({ display: 'flex' });
    $accordionButton.removeClass('active-mobile');
  }
})
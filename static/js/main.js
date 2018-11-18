var subFlag = false;

$(document).ready(function () {
  $('nav ul li ul').removeClass('fallback');

  $('#menu').on('click', function(e) {
    e.preventDefault();
    subFlag ? closeMenuSub() : null;
    handleMenuClick('.level-1')
    $('#menu').toggleClass('focus');
  });
  $('.menu-sub').on('click', function(e) {
    e.preventDefault();
    handleSubMenu(e);
    $('.menu-sub').toggleClass('focus');
  });

});

const handleSubMenu = (e) => {
  console.log("Flag: ", subFlag);
  if(subFlag) {
    openMenuSub(e);
  } else {
    closeMenuSub(e);
  }
  subFlag = !subFlag;
}

const openMenuSub = () => {
  $('.level-1').animate({'opacity':'1'}, 350,
              () => handleMenuClick('.level-2'));
}

const closeMenuSub = () => {
  $('.level-1').animate({'opacity':'0.25'}, 350,
              () => handleMenuClick('.level-2'));
}

function handleMenuClick(level) {
  console.log($(this));
  let i=0;
  $(level).children().each(function() {
    window.setTimeout(() => {
      // console.log("Obj: ", $(this).text())
      $(this).toggle('slide', { 'direction': 'right' }, 350);
    }, i++ * 50);
  });
}

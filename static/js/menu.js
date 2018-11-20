var subFlag = false;

$(document).ready(function (e) {
  $('nav ul li ul').removeClass('fallback');

  $('#menu').on('click', (e) => {
    e.preventDefault();
    if(subFlag) {
      handleSubMenu(e);
    }
    handleMenuClick('.level-1');
    $('#menu').toggleClass('focus');
  });

  $('.menu-sub').on('click', handleSubMenu);

});

const handleSubMenu = (e) => {
  e.preventDefault();
  $('.menu-sub').toggleClass('focus');
  if(subFlag) {
    openMenuSub('.level-1');
  } else {
    closeMenuSub('.level-1');
  }
}

const openMenuSub = (lvl) => {
  $(lvl).animate({'opacity':'1'}, 350,
              () => handleMenuClick('.level-2'));
  subFlag = !subFlag;
}

const closeMenuSub = (lvl) => {
  $(lvl).animate({'opacity':'0.25'}, 350,
              () => handleMenuClick('.level-2'));
  subFlag = !subFlag;
}

function handleMenuClick(level) {
  let i=0;
  $(level).children().each(function() {
    if(this.className === "menu-item"){
      $(this).stop(false, true) // Stops weird bug when rapidly clicked
      window.setTimeout(() => {
        $(this).toggle('slide', { 'direction': 'right' }, 350);
      }, i++ * 50);
    }
  });
}

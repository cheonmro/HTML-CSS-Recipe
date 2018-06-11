var tab = $('.tab');
var list = $('.notice, .pds');
var list_item = $('.notice li, .pds-list li');

// Add icon class to notice and pds
list_item.attr('class', 'icon-dot-circled');

// When clicking a tab, change to is-act
tab.click(function(e){
  e.preventDefault();
  list.removeClass('is-act');
  $(this).parent().addClass('is-act');
});

// When keyboard event(enter and space), change to is-act
tab.keyup(function(e){
  e.preventDefault();
  if(e.keyCode === 13 | e.keyCode === 32){
    list.removeClass('is-act');
    $(this).parent().addClass('is-act');
  }
})
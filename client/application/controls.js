Template.controls.events({

  'click li .dropdown-top-item': function (e) {
    e.preventDefault();
    $(e.target).parents('.dropdown-select-list').addClass('dropdown-is-open');
  },

  'blur .dropdown-top-item': function(){
    $('.dropdown-select-list.dropdown-is-open').removeClass('dropdown-is-open');
  }

});

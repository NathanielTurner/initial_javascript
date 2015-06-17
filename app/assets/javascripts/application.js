// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .
window.onload = hideLastRow;

function hideLastRow(){
  var associations = document.getElementsByClassName("association container");
  var lastAssociation = associations[ associations.length - 1 ];
  var rowToHide = lastAssociation.lastElementChild;
  rowToHide.style.display = "none";
}

function showLastRow(){
  var associations = document.getElementsByClassName("association container");
  var lastAssociation = associations[ associations.length - 1 ];
  var rowToShow = lastAssociation.lastElementChild;
  rowToShow.style.display = "block";
}

function disableOnClick(){
  document.getElementById("submit_form").disabled = true;
}

function hideSection(section){
  var rowToHide = section.parentElement.parentElement.parentElement;
  rowToHide.style.display = "none";
  //hides the columns but refreshing the page brings them back, no delete happens.
}

// WOOOOOW I googled it, got a box on the first webpage with this function inside
// just stuck it in and it worked, plug and play to the extreame!!!
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

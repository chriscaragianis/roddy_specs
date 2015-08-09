$('body').css('filter', 'grayscale(1)');

$.each($('div'), function(i, elt) {
  var txt = $(elt).text();
  var position = $(elt).position();
  var width = $(elt).width();
  var height = $(elt).height();
  var wHeight = $(window).height();
  $(elt).text("Top: " + position.top + "\nLeft: " + position.left + "\nWidth: " + width + "\nHeight: " + height);
  $(elt).css('position', 'fixed');
  $(elt).css('top', position.top + "px");
  $(elt).css('left', position.left + "px");
  $(elt).css('width', width + "px");
  if (height > wHeight){
    height = wHeight;
  }
  $(elt).css('height', height + "px");
  $(elt).css('border', '10px solid #222');
  $(elt).css('text-align', 'center');
  $(elt).css('padding-top', '33.33%');
  $(elt).css('padding-bottom', '33.33%');
  $(elt).css('font-size', .3333*height + "px"); 
})
;

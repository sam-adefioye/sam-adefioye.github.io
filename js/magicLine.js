$(function() {
  var $el, leftPos, newWidth;
  var $mainNav = $(".navbar-nav");
  var activeItem = $(".navbar-nav .active")[0] ? $($(".navbar-nav .active")[0]) : null;
  var itemLinks = $(".navbar-nav li a");

  $mainNav.append("<li id='magic-line'></li>");
  var $magicLine = $("#magic-line");

  if (activeItem) {
    $magicLine
      .width(activeItem.width())
      .css("left", activeItem.position().left)
      .data("orig-left", activeItem.position().left)
      .data("orig-width", $magicLine.width());
  } else {
    $magicLine.width(0);
  }

  itemLinks.hover(function() {
    $el = $(this);
    leftPos = $el.parent().position().left;
    newWidth = $el.parent().width();

    // if (activeItem == null && $magicLine.position().left === 0) {
    //   $magicLine.css("left", leftPos + newWidth / 2);
    // }

    $magicLine.stop().animate({
      left: leftPos,
      width: newWidth
    });
  }, function() {
    $magicLine.stop().animate({
      left: $magicLine.data("orig-left"),
      width: $magicLine.data("orig-width")
    });
  });
});

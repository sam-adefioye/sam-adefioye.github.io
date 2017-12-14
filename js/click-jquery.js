$(function() {

  var port = $(".portfolio");
  var port_box = $("#port_box");
  var proj = $(".projects");
  var proj_box = $("#proj_box");
  var wai = $("#whoami");
  var wai_box = $("#whoami_box");

  port.click(function(){
    if (port_box.css('display') == 'none') {
      proj_box.css('display', 'none');
      wai_box.css('display', 'none');
      port_box.css('display', 'block');
      $("footer").css('bottom', '');
    }
  });

  proj.click(function(){
    if (proj_box.css('display') == 'none') {
      port_box.css('display', 'none');
      wai_box.css('display', 'none');
      proj_box.css('display', 'block');
      $("footer").css('bottom', '');
    }
  });

  wai.click(function(){
    if (wai_box.css('display') == 'none') {
      port_box.css('display', 'none');
      proj_box.css('display', 'none');
      wai_box.css('display', 'block');
      $("footer").css('bottom', '');
    }
  });

});

$(function() {

  var port = $(".portfolio");
  var port_box = $("#port_box");
  var proj = $(".projects");
  var proj_box = $("#proj_box");

    port.click(function(){
      if (port_box.css('display') == 'none') {
        proj_box.css('display', 'none');
        port_box.css('display', 'block');
        $("footer").css('bottom', '');
  //$("#port_box").append( newHTML );
    }


      // else if (port_box.css('display') == 'none' && proj_box.css('display') == 'block') {
      //   proj_box.css('display', 'none');
      //   port_box.css('display', 'block');
      //   $("footer").css('bottom', '');
      // }

  });

  proj.click(function(){
    if (proj_box.css('display') == 'none') {
      port_box.css('display', 'none');
      proj_box.css('display', 'block');
      $("footer").css('bottom', '');
  //$("#port_box").append( newHTML );
  }

  // else if (proj_box.css('display') == 'none' && port_box.css('display') == 'block') {
  //   port_box.css('display', 'none');
  //   proj_box.css('display', 'block');
  //   $("footer").css('bottom', '');
  // }

  });

});

$(document).ready(function(){

//Smooth Scroll
    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();

        var suave = this.hash;

        $("html, body").animate({
          scrollTop: $(suave).offset().top
        }, 900, function(){
          window.location.hash = suave;
        });
      }
    });
//Popover
    $('[data-toggle="popover"]').popover();
  });
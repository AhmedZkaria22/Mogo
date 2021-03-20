$(document).ready(function () {
    var elIndx = "",  elIncrm = 0,  elIncrmLmt = 0;
    var itrTst = false;
    function factCounter(elIndx, elIncrm, elIncrmLmt){
      $(document).scroll(function(e){
        var elc = $(".counter .counter__item:nth-of-type(" + elIndx + ") span");
        if( ($(document).scrollTop() >= ($(".counter").offset().top -75) ) && (itrTst == false) ){                
          var spVal = parseInt(elc.text());
          var increamer = setInterval(function(){
  
            elc.text((spVal+=elIncrm).toString());
            var stc = elc.text();
            if( stc.length > 3 ){
              elc.text( stc.substr(0,1)+","+stc.substr(1,3) );
            }
            if( spVal == elIncrmLmt ){ clearInterval(increamer); }
            itrTst = true;
          },65);              
        }
        else if( ($(document).scrollTop() >= ($(".counter").offset().top -75) ) && (itrTst == true) ){
          e.preventDefault();
        }
      });
    };    
    elIndx = 1;     elIncrm = 2;     elIncrmLmt = 42;       factCounter(elIndx, elIncrm, elIncrmLmt);
    elIndx = 2;     elIncrm = 3;     elIncrmLmt = 123;      factCounter(elIndx, elIncrm, elIncrmLmt);
    elIndx = 3;     elIncrm = 1;     elIncrmLmt = 15;       factCounter(elIndx, elIncrm, elIncrmLmt);
    elIndx = 4;     elIncrm = 3;     elIncrmLmt = 99;       factCounter(elIndx, elIncrm, elIncrmLmt);
    elIndx = 5;     elIncrm = 1;     elIncrmLmt = 24;       factCounter(elIndx, elIncrm, elIncrmLmt);


    $(".toTop").click(function(){ $("html, body").animate( {scrollTop : 0}, 1400); });
});
$(window).on("scroll",function(){
  if( $(window).scrollTop() >= 180 ){ $(".toTop").fadeIn(200); }
  else{ $(".toTop").fadeOut(200); }
});
window.addEventListener("load",function(){
    document.querySelectorAll(".worksImgs .img-fluid")[1].style.height = 
    document.querySelectorAll(".worksImgs .img-fluid")[0].clientHeight.toString()+"px";

    document.querySelectorAll(".worksImgs .img-fluid")[1].style.width = 
    document.querySelectorAll(".worksImgs .img-fluid")[0].clientWidth.toString()+"px";
});

window.addEventListener("resize",function(){
    document.querySelectorAll(".worksImgs .img-fluid")[1].style.height = 
    document.querySelectorAll(".worksImgs .img-fluid")[0].clientHeight.toString()+"px";

    document.querySelectorAll(".worksImgs .img-fluid")[1].style.width = 
    document.querySelectorAll(".worksImgs .img-fluid")[0].clientWidth.toString()+"px";
});

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

document.querySelector(".toTop").addEventListener("click",function(){
    window.scrollTo(0,0);
});

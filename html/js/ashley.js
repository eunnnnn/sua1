$(document).ready(function()  {
    
    
    /* 메뉴 클릭 시 스크롤 */
    $("#lnb ul li a").click(function()  {
        var pos = $($(this).attr("href")).position().top - 100;
        $('html, body').animate({ scrollTop: pos }, 800);
        
        return false;
    });
    
    /* 스크롤 될때 섹션 보이게 */
    $("section").not($("#section1")).css({ opacity:0 });
    $("section").each(function() {
        var $section = $(this);
        var pos = $(this).position().top;
        $(window).on('scroll', function() {            
            if ( pos <= $(window).scrollTop() + 500 ) {
                $section.animate({ opacity: 1 }, 1200)
            }
        })
    })
    
    /* 네비게이션 고정 */
    $(window).on('scroll', function() {
        var sec2 = $("#section2").position().top - 100;
        if ( $(window).scrollTop() >= sec2  ) {
            $("header").css({ position: "fixed", top: -50 })
                        .animate({ top: 0 })
        } else {
            $("header").css({ position: "relative" })
        }
   })
    
    /* 메인페이지 이미지 슬라이드 */
    var n = 1;
    
    function slide()  {
        $("#dessertimg").html("<img src='image/main" + n + ".png' alt=''>");
        n++;
        if ( n == 5 )  {
            n = 1;
        };
    };
    var timing = setInterval(slide, 500);
    
    /* svg */
    $("svg").hide();
    
    $("#menulist > a").on('mouseenter', function()  {
        var posX = $(this).position().left;
        var posY = $(this).position().top;
        $("svg").show().css({ top: posY-5, left:posX-5 });
    });
    
    /* 풍선 애니메이션 */
    function ballon()  {
        $("#ballon1").animate({ top:"-=50px" }, 1500).animate({ top:"+=50px" }, 1500);
        
    }
    ballon();
    var timing2 = setInterval(ballon, 3000);
    
    /* 뉴스 box 마우스 오버 했을 때 */
    $(".newsbox").hover(function()  {
        $(this).not(".newsbox before").stop().animate({ marginLeft:23, marginTop:-23 }, 200);
    }, function()  {
        $(this).not(".newsbox before").stop().animate({ marginLeft:0, marginTop:0 }, 200);
    });
    
    /* 이벤트 효과 */
    var eventSec = $("#section3").position().top;

    $(window).on('scroll', function()  {
        if( $(window).scrollTop() >= eventSec-300 )  {
            $("#circle1 img").animate({ top:50 }, 500)
            $("#circle2 img").delay(200).animate({ top:50 }, 500)
        }
    });
    
    /* 이벤트 보러가기 마우스 오버 시 */
    $("#event1 a").hover(function()  {
        $(this).css({ background:"#f99393", color:"#ffffff" });
    }, function()  {
        $(this).css({ background:"#490b0b", color:"#ffffff" });
    });
    
    $("#event2 a").hover(function()  {
        $(this).css({ background:"#cce198", color:"#262626" });
    }, function()  {
        $(this).css({ background:"#052613", color:"#ffffff" });
    });
    
    /* 타입 마우스 오버 했을 때 */
    
    $(".span").hide();
    $(".type").hover(function()  {
        $(this).animate({ backgroundSize:"115%" })
        $(this).find(".span").show();
        
    }, function()  {
        $(this).stop().animate({ backgroundSize:"110%" })
        $(this).find(".span").hide();
    });
    
    /* 각 메뉴 박스 클릭시 팝업 */
    $(".left").on('click', function()  {
        $(".popup").css({ display:"block" })
    });
    
    /*
    function viewLayer(name, event){
        var pop = document.getElementById(name)
        var lpos = event.clientX;
        var tpos = event.clientY;
        pop.style.display = "block";
        pop.style.top = tpos + "px";
        pop.style.left = lpos + "px";
    };

    function closeLayer(name){
        var pop = document.getElementById(name);
        pop.style.display = "none";
    };
    */
});
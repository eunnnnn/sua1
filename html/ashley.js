$(document).ready(function() {
    var n = 1;
    function imgs() {
        $("#dessertimg").html('<img src="image/main'+n+'.png" alt="">');            
        n++;
        if ( n == 5 ) {
            n = 1;
        }
        console.log($("#dessertimg").height() )
    }
    var timing = setInterval(imgs, 300);        
   
    
});
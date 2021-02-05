/* PARALLAX */
(function () {
    var tex = document.getElementById("textos");
    var acer = document.getElementById("cartel");
    var windowWidth = window.innerWidth;
    if (windowWidth >= 800){
        window.onscroll =function(){
            var val = scrollY;
            console.log(val);
            tex.style.transform = "translateY(" + val / 2 +"px)";
            acer.style.transform = "translateY(-" + val /2 +"px)";
            if(val>515){
                tex.style.transform = "translateY(260px)";
                acer.style.transform = "translateY(-255px)";
            }
        }
    };

    /* window.addEventListener("resize",verificar)

    function verificar(){
        if (windowWidth< 800){
            window.onscroll =function(){
                var val = scrollY;
                console.log(val);
                tex.style.transform = "translateY(" + 0 +"px)";
                acer.style.transform = "translateY(-" + 0 +"px)";
                
            };
        };
    } */



}());


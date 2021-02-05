(function () {
    /* ANIMACION DE MENU*/
        var tex = document.getElementById("textos");
        var elem1 = document.getElementById("btn-acerca-de");
        var elem2 = document.getElementById("btn-menu");
        var elem3 = document.getElementById("btn-galeria");
        var elem4 = document.getElementById("btn-ubicacion");
        var pos1 = -100;
        var pos2 = -150;
        var pos3 = -200;
        var pos4 = -250;
        var pos5 = 350;
        var op = 0;
        var id1 = setInterval(frame, 10);
        var id2 = setInterval(frame2, 10);
        var id3 = setInterval(frame3, 10);
        var id4 = setInterval(frame4, 10);
        var id5 = setInterval(frame5, 5);
        function frame() {
            if (pos1 == 0) {
                clearInterval(id1);
            } else {
                pos1++;
                elem1.style.top = pos1 + "px";
                console.log(pos1);
            }
        };
        function frame2() {
            if(pos2 == 0){
                clearInterval(id2);
            } if(pos1 >=-100){
                pos2++;
                elem2.style.top = pos2 + "px";
            }
        };
        function frame3() {
            if(pos3 == 0){
                clearInterval(id3);
            } if(pos2 >=-150){
                pos3++;
                elem3.style.top = pos3 + "px";
            }
        };
        function frame4() {
            if(pos4 == 0){
                clearInterval(id4);
            } if(pos3 >=-200){
                pos4++;
                elem4.style.top = pos4 + "px";
            }
        };
        function frame5(){
            if(pos5 == 250){
                clearInterval(id5);
            } if(pos1 >=-100){
                pos5--;
                op++;
                tex.style.top = pos5 + "px";
                tex.style.opacity = op/100;
            }   
        }
        
        function scrollAcerca(e){
            document.querySelector(".sala-de-cafe").scrollIntoView({ behavior: 'smooth' });
            e.preventDefault();
        }
        function scrollMenu(e){
            document.querySelector("#platillos").scrollIntoView({ behavior: 'smooth' });
            e.preventDefault();
        }
        function scrollGaleria(e){
            document.querySelector('.ubicacion').scrollIntoView({ behavior: 'smooth' });
            e.preventDefault();
        }
        function scrollUbicacion(e){
            document.querySelector('.mapa').scrollIntoView({ behavior: 'smooth' });
            e.preventDefault();
        }
        elem1.addEventListener("click", scrollAcerca);
        elem2.addEventListener("click", scrollMenu);
        elem3.addEventListener("click", scrollGaleria);
        elem4.addEventListener("click", scrollUbicacion);
    }());
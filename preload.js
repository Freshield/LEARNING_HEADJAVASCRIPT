        //preload part
        var imageIndex = 0;
        //!!!!!!!!HERE NEED SOME CHANGE
        var Imgs = new Array(3);
        //preload image
        function preload(){
            
            for(var i = 0;i<Imgs.length;i++){
                Imgs[i] = new Image();
                downloading(i);

            }

        }
        //downloading one image
        function downloading(i){
        
            imageIndex = i;
            //!!!!!!!!!!HERE IS THE NAME NEED SOME CHANGE
            //imageIndex = i;
            //Imgs[i].src = "cnscene"+imageIndex+".png";
            //Imgs[i].onload;
            if(i == 0){
            Imgs[i].src = "seat_avail.png";
            Imgs[i].onload;
            } 
            if(i == 1){
            Imgs[i].src = "seat_unavail.png";
            Imgs[i].onload;
            }if(i == 2){
            Imgs[i].src = "seat_select.png";
            Imgs[i].onload;
            }
        }
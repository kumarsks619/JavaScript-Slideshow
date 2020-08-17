$(document).ready(function(){
    var counter = 0;
    var imgArray = $(".image-data .image");
    var numOfImg = imgArray.length;

    //adding radio buttons*******************************************************************************
    for(var i = 0; i < numOfImg; i++){
        $(".showcase .radio-btns").prepend("<input type='radio' name='image' class='radio'>");
    }
    //selecting the radio-btns array
    var radioBtnsArray = $(".showcase .radio-btns .radio");

    //function to set of images to their respective divs***************************************************************************
    function setImg(){
        if(counter < numOfImg){
            if(counter >= 4){
                $(".div-image-left-hidden .image-left-hidden").attr("src", $(imgArray[counter-4]).attr("src"));
                $(".div-image-left-3 .image-left-3").attr("src", $(imgArray[counter-3]).attr("src"));
                $(".div-image-left-2 .image-left-2").attr("src", $(imgArray[counter-2]).attr("src"));
                $(".div-image-left-1 .image-left-1").attr("src", $(imgArray[counter-1]).attr("src"));
            }else if(counter == 0){
                $(".div-image-left-hidden .image-left-hidden").attr("src", $(imgArray[(numOfImg-1)-(counter+3)]).attr("src"));
                $(".div-image-left-3 .image-left-3").attr("src", $(imgArray[(numOfImg-1)-(counter+2)]).attr("src"));
                $(".div-image-left-2 .image-left-2").attr("src", $(imgArray[(numOfImg-1)-(counter+1)]).attr("src"));
                $(".div-image-left-1 .image-left-1").attr("src", $(imgArray[(numOfImg-1)-(counter)]).attr("src")); 
            }else if(counter == 1){
                $(".div-image-left-hidden .image-left-hidden").attr("src", $(imgArray[(numOfImg-1)-(counter+1)]).attr("src"));
                $(".div-image-left-3 .image-left-3").attr("src", $(imgArray[(numOfImg-1)-(counter+0)]).attr("src"));
                $(".div-image-left-2 .image-left-2").attr("src", $(imgArray[(numOfImg-1)-(counter-1)]).attr("src"));
                $(".div-image-left-1 .image-left-1").attr("src", $(imgArray[(counter-1)]).attr("src")); 
            }else if(counter == 2){
                $(".div-image-left-hidden .image-left-hidden").attr("src", $(imgArray[(numOfImg-1)-(counter+0)]).attr("src"));
                $(".div-image-left-3 .image-left-3").attr("src", $(imgArray[(numOfImg-1)-(counter-1)]).attr("src"));
                $(".div-image-left-2 .image-left-2").attr("src", $(imgArray[(counter-2)]).attr("src"));
                $(".div-image-left-1 .image-left-1").attr("src", $(imgArray[(counter-1)]).attr("src")); 
            }else if(counter == 3){
                $(".div-image-left-hidden .image-left-hidden").attr("src", $(imgArray[(numOfImg-1)-(counter-1)]).attr("src"));
                $(".div-image-left-3 .image-left-3").attr("src", $(imgArray[(counter-3)]).attr("src"));
                $(".div-image-left-2 .image-left-2").attr("src", $(imgArray[(counter-2)]).attr("src"));
                $(".div-image-left-1 .image-left-1").attr("src", $(imgArray[(counter-1)]).attr("src")); 
            }
            
            $(".div-image-main .image-main").attr("src", $(imgArray[counter]).attr("src"));
            $(".div-image-main .caption").text($(imgArray[counter]).attr("alt"));
            $(radioBtnsArray[counter]).attr("checked", true);
            
            if(counter <= numOfImg-5){
                $(".div-image-right-1 .image-right-1").attr("src", $(imgArray[counter+1]).attr("src"));
                $(".div-image-right-1 .caption").text($(imgArray[counter+1]).attr("alt"));
                
                $(".div-image-right-2 .image-right-2").attr("src", $(imgArray[counter+2]).attr("src"));
                $(".div-image-right-3 .image-right-3").attr("src", $(imgArray[counter+3]).attr("src"));
                $(".div-image-right-hidden .image-right-hidden").attr("src", $(imgArray[counter+4]).attr("src"));
            }else if(counter == numOfImg-4){
                $(".div-image-right-1 .image-right-1").attr("src", $(imgArray[numOfImg-3]).attr("src"));
                $(".div-image-right-1 .caption").text($(imgArray[numOfImg-3]).attr("alt"));

                $(".div-image-right-2 .image-right-2").attr("src", $(imgArray[numOfImg-2]).attr("src"));
                $(".div-image-right-3 .image-right-3").attr("src", $(imgArray[numOfImg-1]).attr("src"));
                $(".div-image-right-hidden .image-right-hidden").attr("src", $(imgArray[0]).attr("src"));
            }else if(counter == numOfImg-3){
                $(".div-image-right-1 .image-right-1").attr("src", $(imgArray[numOfImg-2]).attr("src"));
                $(".div-image-right-1 .caption").text($(imgArray[numOfImg-2]).attr("alt"));

                $(".div-image-right-2 .image-right-2").attr("src", $(imgArray[numOfImg-1]).attr("src"));
                $(".div-image-right-3 .image-right-3").attr("src", $(imgArray[0]).attr("src"));
                $(".div-image-right-hidden .image-right-hidden").attr("src", $(imgArray[1]).attr("src"));
            }else if(counter == numOfImg-2){
                $(".div-image-right-1 .image-right-1").attr("src", $(imgArray[numOfImg-1]).attr("src"));
                $(".div-image-right-1 .caption").text($(imgArray[numOfImg-1]).attr("alt"));

                $(".div-image-right-2 .image-right-2").attr("src", $(imgArray[0]).attr("src"));
                $(".div-image-right-3 .image-right-3").attr("src", $(imgArray[1]).attr("src"));
                $(".div-image-right-hidden .image-right-hidden").attr("src", $(imgArray[2]).attr("src"));
            }else if(counter == numOfImg-1){
                $(".div-image-right-1 .image-right-1").attr("src", $(imgArray[0]).attr("src"));
                $(".div-image-right-1 .caption").text($(imgArray[0]).attr("alt"));

                $(".div-image-right-2 .image-right-2").attr("src", $(imgArray[1]).attr("src"));
                $(".div-image-right-3 .image-right-3").attr("src", $(imgArray[2]).attr("src"));
                $(".div-image-right-hidden .image-right-hidden").attr("src", $(3).attr("src"));
            }
            
        }else{
            counter = -1;
        }
    }

    //function to move divs with transition**************************************************************************
    function moveDivs(){
        //adding transition
        $(".showcase .div-image").css("transition", "0.7s ease");

        //moving divs
        $(".div-image-left-3").css("transform", "translate3d(-60%, 0, -400px)");
        $(".div-image-left-3").css("opacity", 0);

        $(".div-image-left-2").css("transform", "translate3d(-45%, 0, -300px)");

        $(".div-image-left-1").css("transform", "translate3d(-30%, 0, -200px)");

        $(".div-image-main").css("transform", "translate3d(-15%, 0, -100px)");
        $(".div-image-main .image-main").css("filter", "blur(4px)");

        $(".div-image-right-1").css("transform", "translate3d(0%, 0, 0)");
        $(".div-image-right-1 .image-right-1").css("filter", "blur(0)");

        $(".div-image-right-2").css("transform", "translate3d(15%, 0, -100px)");

        $(".div-image-right-3").css("transform", "translate3d(30%, 0, -200px)");

        $(".div-image-right-hidden").css("transform", "translate3d(45%, 0, -300px)");
        $(".div-image-right-hidden").css("opacity", 1);
    }
    
    //function to reset the position of the divs**************************************************************
    function resetDivsPosition(){
        //removing transition
        $(".showcase .div-image").css("transition", "0s");

        //resetting divs
        $(".div-image-left-3").css("transform", "translate3d(-45%, 0, -300px)");
        $(".div-image-left-3").css("opacity", 1);

        $(".div-image-left-2").css("transform", "translate3d(-30%, 0, -200px)");

        $(".div-image-left-1").css("transform", "translate3d(-15%, 0, -100px)");

        $(".div-image-main").css("transform", "translate3d(0, 0, 0)");
        $(".div-image-main .image-main").css("filter", "blur(0)");

        $(".div-image-right-1").css("transform", "translate3d(15%, 0, -100px)");
        $(".div-image-right-1 .image-right-1").css("filter", "blur(4px)");

        $(".div-image-right-2").css("transform", "translate3d(30%, 0, -200px)");

        $(".div-image-right-3").css("transform", "translate3d(45%, 0, -300px)");

        $(".div-image-right-hidden").css("transform", "translate3d(60%, 0, -400px)");
        $(".div-image-right-hidden").css("opacity", 0);

    }

    //function combining all the functions sequentially
    function combine(){
        window.setTimeout(setImg, 1000);
        window.setTimeout(moveDivs, 2000);
        counter++;
        $(".showcase .radio-btns input").removeAttr("checked");  //resetting the radio buttons
        window.setTimeout(setImg, 2500);
        if(counter != numOfImg-1){
            window.setTimeout(resetDivsPosition, 2500);  
        }
    }

   setImg();
    counter--;
    window.setInterval(combine, 2500);
     
    
})
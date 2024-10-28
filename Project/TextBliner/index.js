// Select the text element
const blinkText = document.getElementById('blink-text');

//every second my text should blink so 1000 ,that means 1 sec
setInterval(() => {
  //USING TERNARY 

    /*blinkText.style.visibility = blinkText.style.visibility === 'hidden' ? 'visible' : 'hidden';*/

    //Normal IF else
    if(blinkText.style.visibility==='hidden'){
      blinkText.style.visibility='visible';
    }else{
      blinkText.style.visibility='hidden';
    }
}, 10);
//N.B:
// the value 'hidden' in javascript code is not linked to my css File,it is  a direct manipulation of element's visibility property throught javascript. 
// Select the text element
const blinkText = document.getElementById('blink-text');//select by id and store in variable blinkText

// if i put 1000 then every time my text will blinking with a interval of 1sec 
setInterval(() => {
  //USING TERNARY OP

/*blinkText.style.visibility = blinkText.style.visibility === 'hidden' ? 'visible' : 'hidden';*/

    //Normal IF else
    if(blinkText.style.visibility==='hidden'){
      blinkText.style.visibility='visible';
    }else{
      blinkText.style.visibility='hidden';
    }
}, 20);
//N.B:
// the value 'hidden'and 'visibility' in javascript code is not linked to my css File,it is  a direct manipulation of element's visibility property throughout javascript. 
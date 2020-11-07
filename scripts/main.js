const emojisElement = document.getElementById( 'emojis' );
const spinInterval = 1000 / 3.5;
let emojisText = [ ...emojisElement.textContent ];


function spinText() {
    emojisText.push( emojisText.shift() );
    emojisElement.textContent = emojisText.join( '' );
}


setInterval( spinText, spinInterval );

/*
const cringeImg = document.getElementById( 'cringe-img' );
let cringeRotation = 0;
const cringeSpeed = 45 / 1000;
let cringeInterval = 1000 / 60.0;
function spinCringe() {
    cringeImg.style.transform = `rotate(${cringeRotation}deg)`;
    cringeRotation = (cringeRotation + cringeSpeed * cringeInterval) % 360;
}

setInterval( spinCringe, cringeInterval );
*/






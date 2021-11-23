//Events
document.body.addEventListener('keyup', (event)=>{
    playSound( event.code.toLowerCase() );
});

document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;

    if(song !== '') {
        let songArr = song.split('');
        playComposition(songArr);
    }
})

//Functions
function playSound(sound) {
    let audioEl = document.querySelector(`#s_${sound}`);
    let keyEl = document.querySelector(`div[data-key="${sound}"]`);

    if(audioEl) {
        audioEl.currentTime = 0;
        audioEl.play();
    }
    if(keyEl) {

        keyEl.classList.add('active');

        setTimeout(()=>{
            keyEl.classList.remove('active');
        }, 300);
    }
}

function playComposition(songArr) {
    let wait = 0

    for(let songItem of songArr) {
        setTimeout( ()=>{
            playSound(`key${songItem}`)
        }, wait);

        wait += 250;

        
    }
}
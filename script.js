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

function changeInstrument(inst) {
    document.querySelector('.audios').innerHTML = `<audio id="s_keyq" src="sounds/${inst}/keyq.wav"></audio><audio id="s_keyw" src="sounds/${inst}/keyw.wav"></audio><audio id="s_keye" src="sounds/${inst}/keye.wav"></audio><audio id="s_keya" src="sounds/${inst}/keya.wav"></audio><audio id="s_keys" src="sounds/${inst}/keys.wav"></audio><audio id="s_keyd" src="sounds/${inst}/keyd.wav"></audio><audio id="s_keyz" src="sounds/${inst}/keyz.wav"></audio><audio id="s_keyx" src="sounds/${inst}/keyx.wav"></audio><audio id="s_keyc" src="sounds/${inst}/keyc.wav"></audio>`;
    
}
const playBtn = document.querySelector('.play_btn');
const videoContainer = document.querySelector('.video_container');
const close = document.querySelector('.close');


playBtn.addEventListener('click', (event) => {
    event.preventDefault();
    videoContainer.classList.add('show');
});

close.addEventListener('click', () => {
    videoContainer.classList.remove('show');
});

window.onclick = (event) => {
    if (event.target == videoContainer) {
        videoContainer.classList.remove('show');
    }
};

document.addEventListener('keydown', (event)=>{
    if(event.key == 'Escape') {
        videoContainer.classList.remove('show');
    }
});

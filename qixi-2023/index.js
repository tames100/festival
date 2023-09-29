let doms = {
    letter: document.querySelector('.letter'),
    pause: document.querySelector('.music'),
    top: document.querySelector('.top'),
    top_tip: document.querySelector('.top_tip'),
    title_tip: document.querySelector('.title_tip'),
    content: document.querySelector('.content img'),
}

// 音乐播放
let musicSrc = "https://music.163.com/song/media/outer/url?id=1791431";
let music = new Audio(musicSrc);
let flog = false;

window.addEventListener('DOMContentLoaded', function () {
    doms.pause.style.animationPlayState = 'paused';

})
doms.pause.addEventListener('click', function () {
    if (flog) {
        music.pause();
        this.style.animationPlayState = 'paused';
        this.src = 'image/musicpause.png';
        flog = false;
    }

    else {
        this.style.animationPlayState = '';
        this.src = 'image/musicrunning.png';
        music.play();
        flog = true;
    }
})
// 拆开信封

doms.top_tip.addEventListener('click', function () {
    this.style.display = 'none';
    doms.top.style.display = 'none';
    doms.title_tip.style.display = 'none';
    let musicGuguaSrc = 'mp3/gugua.mp3';
    let musicGugua = new Audio(musicGuguaSrc);
    musicGugua.loop = 'loop';
    // 播放content动画
    doms.content.style.animationPlayState = 'running';
    // 播放音频
    doms.pause.style.animationPlayState = 'paused';
    doms.pause.src = 'image/musicpause.png';
    music.pause();
    musicGugua.play();
})
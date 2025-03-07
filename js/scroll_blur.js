window.addEventListener('scroll', function() {
    const scrollThreshold = 200; // 触发滚动的距离（单位：px）
    const webBg = document.getElementById('web_bg');

    
    if (window.scrollY > scrollThreshold) {
        webBg.classList.add('scrolled');
    } else {
        webBg.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', () => {
    const blurValue = Math.min(window.scrollY * 0.1, 15); // 最大模糊15px
    document.querySelector('#web_bg::after').style.backdropFilter = `blur(${blurValue}px)`;
});
function debounce(func, wait = 50) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function handleScroll() {
    const webBg = document.getElementById('web_bg');
    const startBlurAt = 200; // 触发模糊的滚动距离
    const scrollY = window.scrollY;

    if (scrollY > startBlurAt) {
        webBg.classList.add('scrolled');
    } else {
        webBg.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', debounce(handleScroll));
window.dispatchEvent(new Event('scroll')); // 初始化检查
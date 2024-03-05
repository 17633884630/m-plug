import Vue from "vue";
const isServer = Vue.prototype.$isServer;
let prev = Date.now();

function fallback(fn) {
    const curr = Date.now();
    const ms = Math.max(0, 16 - (curr - prev));
    const id = setTimeout(fn, ms);
    prev = curr + ms;
    return id;
}

const root = isServer ? this : window;
const iRaf = root.requestAnimationFrame || fallback;

function raf(fn) {
    return iRaf.call(root, fn);
}

function scrollTo(el, from, to, immediate, duration = 0.2) {
    if (immediate) {
        el.scrollLeft += to - from;
        return;
    }
    let count = 0;
    const frames = Math.round((duration * 1000) / 16);
    const animate = () => {
        el.scrollLeft += (to - from) / frames;
        if (++count < frames) raf(animate);
    };
    animate();
}

function scrollIntoView(index, nav, tabList, duration = 0.1) {
    const { scrollLeft, offsetWidth: navWidth } = nav;
    const { offsetLeft, offsetWidth: tabWidth } = tabList;
    console.log(offsetLeft, tabList)
    scrollTo(nav, scrollLeft, offsetLeft - (navWidth - tabWidth) / 2, false, duration);
}


export {
    scrollIntoView
}
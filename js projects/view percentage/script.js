window.addEventListener('scroll', function(){
    let bar = document.getElementById('percent');
    bar.innerText = parseInt(getScrollPercent(),10);
});
function getScrollPercent() {
    let h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}
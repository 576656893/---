var t = null;
t = setTimeout(time,0);
function time() {
    clearTimeout(t);
    dt = new Date();
    var year = dt.getFullYear();
    var month = dt.getMonth() + 1;
    var day = dt.getDate();
    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();
    document.querySelector('.showtime').innerHTML = '当前时间:' + year + '年' + month + '月' + day + '日' + h + '时' + m + '分' + s + '秒';
    t = setTimeout(time,1000);
} 
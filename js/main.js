window.onload = function(){
    /*获取到浏览器窗口的高度*/
    var clientHeight = document.documentElement.clientHeight;
    /*找到banner元素，将浏览器窗口的高度赋值给它*/
    document.querySelector('.banner').style.height = clientHeight + 'px';
window.onscroll = function () {
    var top = parseInt(document.documentElement.scrollTop);
    if(top == 0) {
        document.querySelector('header').className = '';
    }else {
        document.querySelector('header').className = 'on';
    }
}
}




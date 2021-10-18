var rev = "fwd";
function titlebar(val){
    var msg  = ".gg/twilight-dawn";
    var res = " ";
    var speed = 320;
    var pos = val;
    var le = msg.length;
    if(rev == "fwd"){
        if(pos < le){
            pos = pos+1;
            scroll = msg.substr(0,pos);
            document.title = scroll === '' ? '​' : scroll;
            timer = window.setTimeout("titlebar("+pos+")",speed);
        }
        else {
            rev = "bwd";
            timer = window.setTimeout("titlebar("+pos+")",speed);
        }
    }
    else {
        if(pos > 0) {
            pos = pos-1;
            var ale = le-pos;
            scroll = msg.substr(ale,le);
            document.title = scroll === '' ? '​' : scroll;
            timer = window.setTimeout("titlebar("+pos+")",speed);
        }
        else {
            rev = "fwd";
            timer = window.setTimeout("titlebar("+pos+")",speed);
        }
    }
}
titlebar(0);

// (function titleScroller(text) {
//     document.title = text;
//     setTimeout(function () {
//         titleScroller(text.substr(1) + text.substr(0, 1));
//     }, 1000);
// }( document.title));
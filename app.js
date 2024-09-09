/* MIT LICENSE */
// SEKAI-CONNECTION (次元の门) https://sc.fly6022.fun/

window.onload = function main(){
    XHR = new XMLHttpRequest();
        XHR.open('GET', './links/sekai.json')
        XHR.send(null);
    XHR.onload = function() {
        links = eval(XHR.response);
        rnd = Math.floor(Math.random() * links.length);
        setTimeout(replace(links[rnd].link), 100000)
        function replace(target){
            window.location.href = target;
        }
    }
}
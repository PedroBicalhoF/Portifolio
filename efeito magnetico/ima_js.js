p = document.getElementsByClassName('p')[0]
s = document.getElementsByClassName('s')[0]

p.onmousemove= function(e){
    var x = e.offsetX
    var y = e.offsetY
    var px = p.clientWidth
    var py = p.clientHeight
    var movex = (x-px)
    var movey = (y-py)
    p.style.cursor = "grab"
    p.style.transform = 'translateX('+movex+'px) translateY('+movey+'px)'
}
p.onmouseout = function(){
    p.style.transform = ''
}

const indicator = document.querySelectorAll('.indicator');
const info = document.querySelectorAll('.info');
const animation = document.querySelectorAll('.animation');

for (let i = 0; i <= indicator.length-1; ++i) {
    indicator[i].addEventListener('mouseover',() => {
        // console.log(i);
        switch(i){
            case 0:
                animation[i].style.display = 'none';
                info[i].style.display = 'block';
            break;
            case 1:
                animation[i].style.display = 'none';
                info[i].style.display = 'block';
            break;
            case 2:
                animation[i].style.display = 'none';
                info[i].style.display = 'block';
            break;
            case 3:
                animation[i].style.display = 'none';
                info[i].style.display = 'block';
            break;
        }
    });
}

for (let i = 0; i <= indicator.length-1; ++i) {
    indicator[i].addEventListener('mouseout', Leap.loop(draw),() => {
        // console.log(i);
        switch(i){
            case 0:
                animation[i].style.display = 'block';
                info[i].style.display = 'none';
            break;
            case 1:
                animation[i].style.display = 'block';
                info[i].style.display = 'none';
            break;
            case 2:
                animation[i].style.display = 'block';
                info[i].style.display = 'none';
            break;
            case 3:
                animation[i].style.display = 'block';
                info[i].style.display = 'none';
            break;
        }
    });
}

var options = {
    enableGestures: true
};
console.log("running…");

var canvas = document.getElementById("leap-overlay");
// fullscreen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// create a rendering context
var ctx = canvas.getContext("2d");
ctx.translate(canvas.width / 2, canvas.height);
ctx.fillStyle = "rgba(0,0,0,0.7)";
// render each frame
function draw(obj) {
    // clear last frame
    ctx.clearRect(-canvas.width / 2, -canvas.height, canvas.width, canvas.height);
    // render circles based on pointable positions
    var pointablesMap = obj.pointablesMap;
    for (var i in pointablesMap) {
        // get the pointable's position
        var pointable = pointablesMap[i];
        var pos = pointable.tipPosition;
        // create a circle for each pointable
        var radius = Math.min(600 / Math.abs(pos[2]), 20);
        ctx.beginPath();
        ctx.arc(pos[0] - radius / 2, -pos[1] - radius / 2, radius, 0, 2 * Math.PI);
        ctx.fill();
    }
};

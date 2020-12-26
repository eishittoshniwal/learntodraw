var canvas=document.getElementById("mycanvas")
var ctx= canvas.getContext("2d")
var color="red"

ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=5
ctx.arc(300,300,30,0,2*Math.PI)
ctx.stroke()

canvas.addEventListener("mousedown",md)
function md(e){
mouseX=e.clientX-canvas.offsetLeft
mouseY=e.clientY-canvas.offsetTop
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=5
ctx.arc(mouseX,mouseY,30,0,2*Math.PI)
ctx.stroke()
}
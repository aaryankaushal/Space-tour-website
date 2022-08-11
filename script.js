var randomlinks=new Array()

randomlinks[0]="destination-moon.html"
randomlinks[1]="crew-commander.html"
randomlinks[2]="technology-vehicle.html"

function randomlink(){
window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)]
}

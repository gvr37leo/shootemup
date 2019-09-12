/// <reference path="node_modules/utilsx/utils.ts" />
/// <reference path="node_modules/vectorx/vector.ts" />
/// <reference path="node_modules/eventsystemx/EventSystem.ts" />
/// <reference path="ability.ts" />
/// <reference path="keybinding.ts" />
/// <reference path="imageAnimation.ts" />


var screensize = new Vector(document.documentElement.clientWidth,document.documentElement.clientHeight)
var crret = createCanvas(screensize.x,screensize.y)
var canvas = crret.canvas
var ctxt = crret.ctxt


var shoot = new Ability(() => {

})

class Database{
    friendelybullets:Bullet
    enemybullets:Bullet
    enemys:Enemy
    players:Player
}

class Bullet{

}

class Enemy{

}

class Player{

}

var stars:Vector[] = []
function drawstar(star:Vector){
    ctxt.fillRect(star.x / star.z,star.y / star.z,10,10)
}

class Scene{
    update:() => void
    render:() => void
}


for(var i = 0; i < 100; i++){
    stars.push(new Vector(0,0,0))
}


loop((dt) => {
    dt /= 1000
    ctxt.clearRect(0,0,screensize.x,screensize.y)

    for(var star of stars){
        drawstar(star)
    }
})

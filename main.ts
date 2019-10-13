/// <reference path="node_modules/vectorx/vector.ts" />
/// <reference path="node_modules/utilsx/utils.ts" />
/// <reference path="node_modules/eventsystemx/EventSystem.ts" />
/// <reference path="ability.ts" />
/// <reference path="imageAnimation.ts" />
/// <reference path="scene.ts" />
/// <reference path="mainmenu.ts" />
/// <reference path="rect.ts" />
/// <reference path="level1.ts" />
/// <reference path="level2.ts" />
/// <reference path="abilityCatalog.ts" />
/// <reference path="bullet.ts" />
/// <reference path="resourceLoading.ts" />
/// <reference path="level1data.ts" />
/// <reference path="player.ts" />
/// <reference path="enemy.ts" />


//background music
//sound shooting and exploding enemys
// 3 different enemys health/weapon
//background stars




var screensize = new Vector(400,800)
var crret = createCanvas(screensize.x,screensize.y)
var canvas = crret.canvas
var ctxt = crret.ctxt




var stars:Vector[] = []
function drawstar(star:Vector){
    ctxt.fillRect(star.x / star.z,star.y / star.z,10,10)
}

for(var i = 0; i < 100; i++){
    stars.push(new Vector(0,0,0))
}

var gdt = 0
onResourcesLoaded.listen(() => {
    var sceneManager = new SceneManager(new Level1())
    loop((dt) => {
        gdt = dt / 1000
        ctxt.clearRect(0,0,screensize.x,screensize.y)
    
        sceneManager.currentscene.update()
        sceneManager.currentscene.render()
    
    })
})



/// <reference path="node_modules/utilsx/utils.ts" />
/// <reference path="node_modules/vectorx/vector.ts" />
/// <reference path="ability.ts" />
/// <reference path="keybinding.ts" />


var screensize = new Vector(document.documentElement.clientWidth,document.documentElement.clientHeight)
var crret = createCanvas(screensize.x,screensize.y)
var canvas = crret.canvas
var ctxt = crret.ctxt

var keybindingmanager = new InputManager([
    new Keybinding('shoot',' '),
    new Keybinding('up','w'),
    new Keybinding('right','d'),
    new Keybinding('down','s'),
    new Keybinding('left','a'),
])

var ability = new Ability(() => {

})



loop((dt) => {
    dt /= 1000
    ctxt.clearRect(0,0,screensize.x,screensize.y)

    ctxt.fillRect(10,10,10,10)
})

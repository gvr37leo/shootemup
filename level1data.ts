
function createEnemylvl1(gamedb:GameDB){
    var enemy = new Enemy(gamedb)
    enemy.health = 100
    enemy.speed = 150
    enemy.hitbox = Rect.fromWidthHeight(new Vector(0,0),new Vector(40,40))
    enemy.ability = createAimedShotAbility(new Vector(0,0),new Vector(0,1),null)
    enemy.image = images[2]
    return enemy
}

function createEnemylvl2(gamedb:GameDB){
    var enemy = new Enemy(gamedb)
    enemy.health = 300
    enemy.speed = 300
    enemy.hitbox = Rect.fromWidthHeight(new Vector(0,0),new Vector(40,40))
    enemy.ability = createAimedShotAbility(new Vector(0,0),new Vector(0,1),null)
    enemy.image = images[2]
    return enemy
}

function createEnemylvl3(gamedb:GameDB){
    var enemy = new Enemy(gamedb)
    enemy.health = 2000
    enemy.speed = 100
    enemy.hitbox = Rect.fromWidthHeight(new Vector(0,0),new Vector(80,80))
    enemy.ability = createOrderlyShotgunBlastAbility(new Vector(0,0),null)
    enemy.image = images[2]
    return enemy
}

class TimedEvent{
    
    constructor(public timeInSec:number,public cb:() => void){

    }
}

class LevelData{
    

    constructor(public easys:number,public mediums:number,public hards:number,){

    }
}

//weak medium strong
var level1data = [
    new LevelData(1,0,0),
    new LevelData(3,0,0),
    new LevelData(5,0,0),
    new LevelData(3,1,0),
    new LevelData(5,1,0),
    new LevelData(2,2,0),
    new LevelData(5,1,1),
    new LevelData(5,2,1),
    new LevelData(5,0,2),
    new LevelData(8,2,2),
]

/*

enemy 1
low health 1 bullet / simple shot/ many
enemy 2
medium health 3 bullets/ aimed shot
enemy 3
high health / shotgun ability


[
    weak,medium,strong
    1,0,0
    3,0,0
    5,0,0
    3,1,0
    5,1,0
    2,2,0
    5,1,1
    5,2,1
    5,0,2
    8,2,2

]



*/



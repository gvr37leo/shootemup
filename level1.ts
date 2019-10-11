
class GameDB{
    friendlyBullets:Bullet[] = []
    enemybullets:Bullet[] = []
    enemys:Enemy[] = []
    player:Player
}

class Enemy{
    hitbox:Rect
}

class Player{
    pos:Vector = new Vector()
    speed:number = 300  
    ability: Ability

    constructor(){
    }

    update(){
        var dir = getMoveInputYFlipped()
        if(dir.length() > 0){
            dir.normalize()
        }
        this.pos.add(dir.scale(this.speed * gdt))
        
    }

    draw(){
        
        ctxt.drawImage(images[2],this.pos.x,this.pos.y)
        this.pos.draw(ctxt)
    }
}

class Level1 implements Scene{
    gamedb: GameDB

    constructor(){

    }

    init(): void {
        
        this.gamedb = new GameDB()
        this.gamedb.player = new Player()
        var player = this.gamedb.player
        player.pos = new Vector(50,50)
        player.ability = createOrderlyShotgunBlastAbility(player.pos,this.gamedb)
        

        
    }

    unload(): void {

    }

    update(): void {
        var player = this.gamedb.player
        player.update()
        if(keys[32]){
            player.ability.tapfire()
        }
        this.gamedb.friendlyBullets.forEach(b => b.update(gdt))
        this.gamedb.enemybullets.forEach(b => b.update(gdt))
    }    
    
    render(): void {
        this.gamedb.friendlyBullets.forEach(b => b.draw(ctxt))
        this.gamedb.player.draw()

    }

}
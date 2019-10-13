
class GameDB{
    friendlyBullets:Bullet[] = []
    enemybullets:Bullet[] = []
    enemys:Enemy[] = []
    player:Player
}





class Level1 implements Scene{
    gamedb: GameDB
    stopwatch: StopWatch
    eventIndex: number
    timedEventList: TimedEvent[] = []
    rng: RNG
    animations: AtlasAnimation[] = []

    constructor(){

    }

    init(): void {
        this.rng = new RNG(0)
        this.stopwatch = new StopWatch()
        this.stopwatch.start()
        this.gamedb = new GameDB()
        this.gamedb.player = new Player()
        var player = this.gamedb.player
        player.pos = new Vector(200,750)
        player.ability = createOrderlyShotgunBlastAbility(player.pos,this.gamedb)
        this.eventIndex = 0


        var spawntime = 3
        for(var v = 0; v < level1data.length;v++){
            var row = level1data[v]
            for(var i = 0; i < row.easys;i++){
                this.timedEventList.push(new TimedEvent(spawntime,() => {
                    handleEnemy(createEnemylvl1(this.gamedb))
                }))
                spawntime += 1
            }
            for(var i = 0; i < row.mediums;i++){
                this.timedEventList.push(new TimedEvent(spawntime,() => {
                    handleEnemy(createEnemylvl2(this.gamedb))
                }))
                spawntime += 2
            }
            for(var i = 0; i < row.hards;i++){
                this.timedEventList.push(new TimedEvent(spawntime,() => {
                    handleEnemy(createEnemylvl3(this.gamedb))
                }))
                spawntime += 3
            }

            var handleEnemy = (enemy) => {
                enemy.path = this.createPath()
                enemy.hitbox.moveEdgeTo(first(enemy.path),new Vector(0.5,0.5))
                this.gamedb.enemys.push(enemy)
            }
            

        }
    }

    createPath(){
        
        var path:Vector[] = []
        for(var i = 0; i < 10;i++){
            path.push(new Vector(this.rng.range(0,400),-100 + i * 100))
        }
        return path
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
        this.gamedb.enemys.forEach(e => e.update())
        this.gamedb.friendlyBullets = this.gamedb.friendlyBullets.filter(b => to(b.createdAt,Date.now()) < b.lifespan)
        

        for(var i = this.eventIndex; i < this.timedEventList.length; i++){
            var event = this.timedEventList[i]
            if(event.timeInSec < this.stopwatch.get() / 1000){
                this.timedEventList[i].cb()
                this.eventIndex = i + 1
            }
        }

        var bulletDestructionSet = new Set<Bullet>()
        outer:for(var bullet of this.gamedb.friendlyBullets){
            for(var enemy of this.gamedb.enemys){
                if(enemy.hitbox.collidePoint(bullet.pos)){
                    bulletDestructionSet.add(bullet)
                    enemy.health -= 100
                    continue outer
                }
            }
        }
        this.gamedb.friendlyBullets = this.gamedb.friendlyBullets.filter(b => bulletDestructionSet.has(b) == false)
        var destroyedEnemys = this.gamedb.enemys.filter(e => e.health <= 0)
        this.gamedb.enemys = this.gamedb.enemys.filter(e => e.health > 0)
        
        destroyedEnemys.forEach(de => {
            var anim = new AtlasAnimation(4,de.hitbox.getCenter(), new AtlasLayout(1,8,new Vector(48,48),new Vector(0,0),new Vector(0,0)))
            anim.anim.duration = 500
            anim.anim.animType = AnimType.once
            this.animations.push(anim)
            setTimeout(() => findAndDelete(this.animations,anim),anim.anim.duration)
        })
    }    
    
    render(): void {
        this.gamedb.friendlyBullets.forEach(b => b.draw())
        this.gamedb.player.draw()
        this.gamedb.enemys.forEach(e => e.draw())
        this.animations.forEach(a => a.draw(ctxt,images))

    }
}

function removeFromArray(arr:any[],item){
    var index = arr.findIndex(v => v==item)
    arr.splice(index,1)
}
class Bullet{
    
    createdAt = Date.now()
    lifespan = 2000

    constructor(public pos:Vector, public vel:Vector){
        
    }

    update(dt){
        this.pos.add(this.vel.c().scale(dt))
    }

    draw(){
        drawImageCentered(ctxt,images[3],this.pos)
        this.pos.draw(ctxt)
    }

    serialize(){
        return {
            createdAt:this.createdAt,
            lifespan:this.lifespan,
            pos:this.pos,
            vel:this.vel
        }
    }
}

function drawImageCentered(ctxt:CanvasRenderingContext2D,image:HTMLImageElement,pos:Vector){
    var size = new Vector(image.width,image.height)
    var offset = pos.c().add(size.scale(-0.5))
    ctxt.drawImage(image,offset.x,offset.y)
}

class BulletSpawner{
    
    targetAngle:Vector = new Vector(0,1)
    anim:Anim = new Anim()
    ability:Ability
    


    constructor(public bulletspeed:number, public pos:Vector){
        this.anim.animType = AnimType.extend
        this.anim.duration = 1000
        this.anim.begin = 0.3
        this.anim.end = 0.5
        this.anim.stopwatch.start()

        this.ability = new Ability(() => {
            var dir = this.targetAngle.c()
            var offset = this.anim.get()
            dir.rotate2d(offset * TAU).scale(this.bulletspeed)
            var bullet = new Bullet(this.pos.c(), dir)
            // bullets.push(bullet)
        })
        this.ability.cooldown = 100
    }

    update(){
        this.ability.tapfire()
    }


}
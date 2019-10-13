class Enemy{
    id:number
    hitbox:Rect
    health:number
    ability:Ability
    speed = 0
    image:HTMLImageElement

    path:Vector[] = []
    pathDestination = 1

    constructor(public gamedb:GameDB){

    }

    update(){
        var center = this.hitbox.getCenter()
        var destination = this.path[this.pathDestination]
        var movement = center.to(destination).normalize().scale(this.speed * gdt)
        this.hitbox.moveEdgeTo(center.c().add(movement),new Vector(0.5,0.5))

        if(center.to(destination).length() < 10){
            this.pathDestination++
            if(this.pathDestination >= this.path.length){
                removeFromArray(this.gamedb.enemys,this)
            }
        }
    }

    draw(){
        drawImageCentered(ctxt,this.image,this.hitbox.getCenter())
    }
}
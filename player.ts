class Player{
    pos:Vector = new Vector()
    speed:number = 300  
    activeAbility: Ability

    shotgunability:Ability
    shootability:Ability

    constructor(){
    }

    update(){
        var dir = getMoveInputYFlipped()
        if(dir.length() > 0){
            dir.normalize()
        }
        this.pos.add(dir.scale(this.speed * gdt))
        this.pos.x = clamp(this.pos.x,10,390)
        this.pos.y = clamp(this.pos.y,10,790)
        
    }

    draw(){
        drawImageCentered(ctxt,images[2],this.pos)
    }
}
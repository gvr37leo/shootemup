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
        drawImageCentered(ctxt,images[2],this.pos)
        this.pos.draw(ctxt)
    }
}
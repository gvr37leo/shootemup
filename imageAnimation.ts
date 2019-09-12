function disectAtlas(rows:number,columns:number,imageSize:Vector,padding:Vector,offset:Vector):Vector[]{
    var posses:Vector[] = []

    for(var i = 0; i < rows; i++){
        for(var j = 0; j < columns; j++){
            var pos = new Vector(0,0)
            pos.add(offset)
            pos.add(padding).mul(new Vector(j,i))
            pos.add(imageSize).mul(new Vector(j,i))
            posses.push(pos)
        }
    }
    return posses
}

function loadImages(urls:string[]):Promise<HTMLImageElement[]>{
    var promises:Promise<HTMLImageElement>[] = []

    for(var url of urls){
        promises.push(new Promise((res,rej) => {
            var image = new Image()
            image.onload = e => {
                res(image)     
            }
            image.src = url
        }))
    }

    return Promise.all(promises)
}

class AtlasLayout{
    constructor(
        public rows:number, 
        public columns:number, 
        public imageSize:Vector,
        public padding:Vector,
        public offset:Vector,
    ){

    }
}

class SpriteAnimation{
    anim:Anim = new Anim()
    sprites:HTMLImageElement[] = []

    constructor(){
        this.anim.stopwatch.start()
        this.anim.begin = 0
        this.anim.end = 1
        this.anim.duration = 1000
        this.anim.animType = AnimType.once
    }

    draw(ctxt:CanvasRenderingContext2D,pos:Vector){
        if(this.sprites.length > 0){
            var i = Math.min(Math.floor(this.anim.get() * this.sprites.length), this.sprites.length - 1) 
            ctxt.drawImage(this.sprites[i],pos.x,pos.y)
        }
    }

    
}

class AtlasAnimation{
    anim:Anim = new Anim()
    

    constructor(public imageid:number,public pos:Vector, public positions: Vector[],  public imageSize: Vector){
        this.anim.stopwatch.start()
        this.anim.begin = 0
        this.anim.end = 1
        this.anim.duration = 1000
        this.anim.animType = AnimType.repeat
    }

    draw(ctxt:CanvasRenderingContext2D,images:HTMLImageElement[]){
        if(this.positions.length > 0){
            var i = Math.min(Math.floor(this.anim.get() * this.positions.length), this.positions.length - 1) 
            var spos = this.positions[i]
            var dpos = this.pos.c().sub(this.imageSize.c().scale(0.5))
            ctxt.drawImage(images[this.imageid],spos.x,spos.y,this.imageSize.x,this.imageSize.y,dpos.x,dpos.y,this.imageSize.x,this.imageSize.y)
        }
    }
}
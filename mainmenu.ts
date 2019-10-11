class MainMenu implements Scene{

    
    level1button: Button
    level2button: Button
    button1clicklistener: () => void
    button2clicklistener: (val: Vector) => void

    constructor(){

        
    }

    init(): void {
        
        this.level1button = new Button(Rect.fromWidthHeight(100,50,new Vector(100,100)),'level1')
        this.level2button = new Button(Rect.fromWidthHeight(100,50,new Vector(100,200)),'level2')

        this.button1clicklistener = () => {
            sceneManager.switchScene(new Level1())
            console.log('test1')
        }
        this.level1button.onClick.listen(this.button1clicklistener)


        this.button2clicklistener = () => {
            sceneManager.switchScene(new Level2())
            console.log('test2')
        }
        this.level2button.onClick.listen(this.button2clicklistener)
    }

    unload(){
        this.level1button.onClick.deafen(this.button1clicklistener)
        this.level2button.onClick.deafen(this.button2clicklistener)
    }

    update(){
        
    }

    render(){
        this.level1button.render()
        this.level2button.render()
    }
    
}

class Button{

    onClick = new EventSystem<Vector>()

    constructor(public rect:Rect, public text:string){
        document.addEventListener('click', e=> {
            
            var pos = getMousePos(canvas,e)
            if(this.rect.collidePoint(pos)){
                this.onClick.trigger(pos)
            }
        })
    }

    render(){
        ctxt.textAlign = 'center'
        ctxt.textBaseline = 'middle'
        var center = this.rect.getPoint(new Vector(0.5,0.5))
        var size = this.rect.size()
        ctxt.fillStyle = 'black'
        ctxt.fillRect(this.rect.min.x,this.rect.min.y,size.x,size.y)
        ctxt.fillStyle = 'white'
        ctxt.fillText(this.text,center.x,center.y)
    }
}
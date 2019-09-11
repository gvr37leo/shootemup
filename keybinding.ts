class Keybinding{
    
    when:() => boolean

    constructor(public action:string, public key:string){

    }
}

class InputManager{
    

    constructor(){

    }

    addBinding(keybinding:Keybinding){

    }

    listen2document(){
        document.addEventListener('keydown', e => {
            this.send(e)
        })

        document.addEventListener('keyup', e => {
            
        })
    }

    send(e:KeyboardEvent){

    }

    listen(action:string,cb:() => void){

    }
}
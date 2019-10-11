class SceneManager{
    currentscene:Scene

    constructor(scene:Scene){
        this.currentscene = scene
        scene.init()
    }

    switchScene(scene:Scene){
        this.currentscene.unload()
        this.currentscene = scene
        scene.init()
    }
}

interface Scene{
    init():void
    unload():void
    update():void
    render():void
}

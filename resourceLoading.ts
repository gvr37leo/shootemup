var images = []
var background:HTMLImageElement

loadImages(['/images/explosion-6.png','/images/background.png','/images/airplain.png','/images/bullet.png','/images/explosion-6.png']).then(imagesL => {
    images = imagesL
    background = images[1]
    onResourcesLoaded.trigger()
})

var loadPromises:Promise<any>[] = []
var onResourcesLoaded = new EventSystemVoid()
var areResourcesLoaded = false
onResourcesLoaded.listen(() => {
    areResourcesLoaded = true
})
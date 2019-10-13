var images = []
var background:HTMLImageElement

var explosion1 = new Howl({
    src:'/sounds/explosion1.wav',
    volume: 0.06,
})

var explosion2 = new Howl({
    src:'/sounds/explosion2.wav',
    volume: 0.06,
})

var gunshot = new Howl({
    src:'/sounds/gunshot.wav',
    volume: 0.16,
})

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
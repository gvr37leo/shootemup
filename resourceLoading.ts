var images = []
var background:HTMLImageElement

loadImages(['/images/explosion-6.png','/images/background.png','/images/airplain.png','/images/bullet.png']).then(imagesL => {
    images = imagesL
    background = images[1]
    onResourcesLoaded.trigger()
})

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

var loadPromises:Promise<any>[] = []
var onResourcesLoaded = new EventSystemVoid()
var areResourcesLoaded = false
onResourcesLoaded.listen(() => {
    areResourcesLoaded = true
})
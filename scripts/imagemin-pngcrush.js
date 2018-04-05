const imagemin = require('imagemin')
const imageminPngcrush = require('imagemin-pngcrush')
console.time('Finished pngcrush')

imagemin(['source_images/*.png'], 'optimized_images/pngcrush', {
    use: [
        imageminPngcrush({reduce: true}) // default=false
    ]
}).then(files => {
    // console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
    console.timeEnd('Finished pngcrush')
})

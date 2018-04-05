const imagemin = require('imagemin')
const imageminOptipng = require('imagemin-optipng')
console.time('Finished optipng')

imagemin(['source_images/*.png'], 'optimized_images/optipng', {
    plugins: [
        imageminOptipng({
            optimizationLevel: 2, // default=3: Otimization level between 0 and 7: 3=16t, 5=48t, 7=240 trials
            bitDepthReduction: true, // default=true
            colorTypeReduction: true, // default=true
            paletteReduction: true // default=true
        })
    ]
}).then(files => {
    // console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
    console.timeEnd('Finished optipng')
})

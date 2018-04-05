 const imagemin = require('imagemin')
const imageminPngquant = require('imagemin-pngquant')
console.time('Finished pngquant')

imagemin(['source_images/*.png'], 'optimized_images/pngquant', {
    plugins: [
        imageminPngquant({
            floyd: 0, // default=0: Controls level of dithering, 0=none, 1=full
            nofs: false, // default=false: Disable Floyd-Steinberg dithering
            posterize: 0, // default=0: Reduce precision of the palette by number of bits, min=0 to max=4
            quality: '75-85', // default=90 // Range 0 (worst) to 100 (perfect), similar to JPEG
            speed: 1, // default=3: Speed/quality trade-off from 1 (brute-force) to 10 (fastest)
            verbose: false
        })
    ]
}).then(files => {
    // console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
    console.timeEnd('Finished pngquant')
})

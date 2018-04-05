const imagemin = require('imagemin')
const imageminPngout = require('imagemin-pngout')
console.time('Finished pngout')

imagemin(['source_images/*.png'], 'optimized_images/pngout', {
    plugins: [
        imageminPngout({strategy:0}) // default=0 Extreme; 1. Intense; 2. Longest match; 3. Huffman only; 4. Uncompressed
    ]
}).then(files => {
    // console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
    console.timeEnd('Finished pngout')
})

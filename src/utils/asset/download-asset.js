const download = require('image-downloader')

module.exports = async ({ url, dest }) => {
  try {
    const { filename, image } = await download.image({ url, dest })
    // console.log(filename) // => /path/to/dest/image.jpg
    return { filename, image }
  } catch (e) {
    console.error(e)
    return e
  }
}

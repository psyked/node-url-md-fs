const cheerio = require('cheerio')

module.exports = htmlSource => {
  let $ = cheerio.load(htmlSource)
  const metaTags = $('meta')
  const extractedProps = {}
  metaTags.each((index, tag) => {
    const name = $(tag).attr('name')
    const content = $(tag).attr('content')
    if (name && content) {
      extractedProps[name] = content
    }
  })
  return { ...extractedProps }
}

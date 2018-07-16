const cheerio = require('cheerio')

module.exports = htmlSource => {
  let $ = cheerio.load(htmlSource)
  const metaTags = $('meta')
  const extractedProps = {
    layout: 'post'
  }
  metaTags.each((index, tag) => {
    const name = $(tag).attr('name')
    const property = $(tag).attr('property')
    const content = $(tag).attr('content')
    if ((name || property) && content) {
      extractedProps[name || property] = content
    }
  })
  return { ...extractedProps }
}

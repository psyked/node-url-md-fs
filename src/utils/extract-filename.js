module.exports = (url = '') => {
  const asArray = url.split('/')
  const finalUrl = asArray.pop()
  return finalUrl.replace(/\s/gi, '-')
}

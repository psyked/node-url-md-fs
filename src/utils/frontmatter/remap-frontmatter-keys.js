module.exports = frontmatter => {
  const rtn = { ...frontmatter }
  if (rtn['article:published_time'] && !rtn['date']) {
    rtn['date'] = rtn['article:published_time']
  }
  return rtn
}

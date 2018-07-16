const render = require('./render-frontmatter')

test('render simple frontmatter', () => {
  // arrange
  const config = {
    key: 'value'
  }
  // act
  const output = render(config)
  // assert
  expect(output).toEqual(`---\npath: /blog//\nkey: "value"\n---\n`)
})

test('render frontmatter with tags', () => {
  // arrange
  const config = {
    tags: ['value', 'value1', 'value2']
  }
  // act
  const output = render(config)
  // assert
  expect(output).toEqual(`---\npath: /blog//\ntags:\n- value\n- value1\n- value2\n---\n`)
})

const method = require('./process-markdown')

test('html should be converted to expected markdown', () => {
  expect(method(require('../../tests/cern.html'), { sourceURL: 'http://info.cern.ch/' })).toEqual(
    require('../../tests/cern.md')
  )
})

test('medium post should be converted to expected markdown', () => {
  expect(
    method(require('../../tests/medium.html'), {
      sourceURL:
        'https://medium.com/@psyked/fluid-widths-in-responsive-websites-2a02499295d9'
    })
  ).toEqual(require('../../tests/medium.md'))
})

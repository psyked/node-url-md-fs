const core = require('./index.js')

test('basic test', async () => {
  // arrange
  const response = await core(
    'https://medium.com/@psyked/fluid-widths-in-responsive-websites-2a02499295d9'
  )

  // act

  // assert
  expect(response).toBe(
    'https://medium.com/@psyked/fluid-widths-in-responsive-websites-2a02499295d9'
  )
})

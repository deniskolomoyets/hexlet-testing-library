import { test, expect } from 'vitest'

test('main', async () => {
  document.body.innerHTML = '<h1>Hexlet</h1>'

  expect(document.body).toHaveTextContent('Hexlet')
})
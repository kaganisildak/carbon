/* eslint-env mocha */
/* global cy */
import { editorVisible } from '../support'
describe('Basic', () => {
  it('Should open editor with the correct text encoding', () => {
    cy.visit('/?code=%250A%252F*%2520Passing%2520Boolean%2520as%2520method%2520to%2520find%2520returns%2520the%250A%2520*%2520first%2520truthy%2520value%2520in%2520the%2520array!%250A%2520*%252F%250A%255Bfalse%252C%2520false%252C%2520%27%27%252C%2520undefined%252C%2520%27qwijo%27%252C%25200%255D.find(Boolean)%2520%252F%252F%2520%27qwijo%27')
    editorVisible()


    cy.contains(
      '#container',
      '/* Passing Boolean as method to find returns the * first truthy value in the array! */[false, false, \'\', undefined, \'qwijo\', 0].find(Boolean) // \'qwijo\''
    )
  })

  it('Should open editor with the correct text even with bad URI component', () => {
    cy.visit('/?code=%25')
    editorVisible()

    cy.contains('#container', '%')
  })
})

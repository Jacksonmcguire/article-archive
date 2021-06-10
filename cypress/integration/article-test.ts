import { createYield } from "typescript"

describe('Article Archive', () => {
  beforeEach(() => {
    cy.fixture('articleData').then((data) => {
      cy.intercept('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=F059Cw09xTnYQt8mZGMY7utM5AAaO2LH', {
          statusCode: 200,
          body: data
        })
    })
    cy.visit('http://localhost:3000')
  })

  it('should show a list of articles on load', () => {
    cy.get('.article').first().should('contain', '20')
  })

  it('should allow a user to filter articles by category', () => {
    cy.get('select').select('arts')
    cy.get('.article').first().should('contain', 'In Her New Memoir')
  })

  it('should allow a user to search the currently rendered articles', () => {
    cy.get('select').select('arts').should('have.value', 'arts')
    cy.get('input').type('Philip Roth').should('have.value', 'Philip Roth')
    cy.get('.article').should('contain', 'Look Inside Philip Roth’s Personal Library')
  })

  it('should allow a user to click on an article to see more info', () => {
    cy.get('.article').first().click()
    cy.get('.details').should('be.visible')
    cy.get('.detail-content').should('exist')
  })

  it('should allow a user to go back to the home page by clicking the close button', () => {
    cy.get('.article').first().click()
    cy.get('.details').should('be.visible')
    
    cy.get('.close').click()
    cy.get('.details').should('not.exist')
  })

  it('should show an apology page if there are no more details for an article, or if we can not find the desired article', () => {
    cy.visit('http://localhost:3000/help')
    cy.get('.details').should('contain.text', 'Sorry we can\'t find what you\'re looking for, click me to go back home')
    cy.get('a').first().click()
    cy.get('.details').should('not.exist')
  })

  it('should show an apology message if there are no matching search results', () => {
    cy.get('input').type('help me im lost').should('have.value', 'help me im lost')
    cy.get('.articles').should('contain.text', 'Sorry we couldn\'t find any matching articles')
  })

  it('should show an apology message if the default cards are unable to be fetched', () => {
      cy.intercept('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=F059Cw09xTnYQt8mZGMY7utM5AAaO2LH', {
          statusCode: 400,
        })
      cy.visit('http://localhost:3000')
      cy.get('.articles').should('contain.text', 'Sorry we couldn\'t find any matching articles')
  })
})
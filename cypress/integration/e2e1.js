describe('Pokedex', function() {
    it('front page can be opened', function() {
      cy.visit('http://localhost:8080')
      cy.contains('ivysaur')
      cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
    })
    it('item can be clicked', function() {
      cy.contains('ivysaur').click()
      cy.contains('chlorophyll')      
    })  
  })


/*   it('item can be clicked', function() {
    cy.contains('login').click()
    cy.get('input:first').type('mluukkai')
    cy.get('input:last').type('salainen')    
    cy.get('#login-button').click()
    cy.contains('new Blog').click()      
    cy.get('#input1').type('uusi blogi')      
    cy.contains('save').click()      
    cy.contains('uusi blogi')
  })  
ssd

 */
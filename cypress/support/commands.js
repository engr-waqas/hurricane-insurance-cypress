import landingPageElements from '../locators/landing_page.js'
import buildMaterialElements from '../locators/building_material_page'
import zipCodeFixture from '../fixtures/zipcode.json'
const landingPage = new landingPageElements()
const buildMaterialPage = new buildMaterialElements()
Cypress.Commands.add('EnterZipCode', ()=> {
  cy.visit('/')
  landingPage.zipCodeLabel()
  .should('be.visible')
  landingPage.zipCodeField()
  .should('be.visible')
  landingPage.getAQuoteButtonText()
  .should('be.visible')
  landingPage.getAQuoteButton()
  .should('be.visible')
  landingPage.zipCodeField()
  .should('be.visible')
  .type(zipCodeFixture.Validzipcode)
  landingPage.getAQuoteButton()
  .should('be.visible')
  .click()
  buildMaterialPage.constructedWithHeader()
  .should('be.visible')
});
Cypress.Commands.add('BuildingPage', ()=> {
  buildMaterialPage.bricksOption()
  .should('be.visible')
  .click()
  buildMaterialPage.nextButton()
  .should('be.visible')
  .click()
});

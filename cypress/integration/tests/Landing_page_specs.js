import landingPageElements from '../../locators/landing_page.js'
import buildMaterialElements from '../../locators/building_material_page'
import zipCodeFixture from '../../fixtures/zipcode.json'
const landingPage = new landingPageElements()
const buildMaterialPage = new buildMaterialElements()
describe('Landing Page', () => {
    before(() => {
      cy.visit('/')
      landingPage.zipCodeLabel()
      .should('be.visible')
      landingPage.zipCodeField()
      .should('be.visible')
      landingPage.getAQuoteButtonText()
      .should('be.visible')
      landingPage.getAQuoteButton()
      .should('be.visible')
    });
    context('Customer submits a blank zip code field',() => {
      it('User should see a validation message "Required"',() => {
        landingPage.getAQuoteButton()
        .should('be.visible')
        .click()
        landingPage.requiredText()
        .should('be.visible')
      });
    });
    context('Customer submits an invalid zip code field',() => {
      it('User should see a validation message "Invalid zip code"',() => {
        landingPage.zipCodeField()
        .should('be.visible')
        .type(zipCodeFixture.Invalidzipcode)
        landingPage.getAQuoteButton()
        .should('be.visible')
        .click()
        landingPage.invalidZipCodeText()
        .should('be.visible')
      });
    });
    context('Customer enters valid zip code',() => {
      it('User should be navigated to the Building Material question page',() => {
        landingPage.zipCodeField()
        .should('be.visible')
        .type(zipCodeFixture.Validzipcode)
        landingPage.getAQuoteButton()
        .should('be.visible')
        .click()
        buildMaterialPage.constructedWithHeader()
        .should('be.visible')
      });
    });
});

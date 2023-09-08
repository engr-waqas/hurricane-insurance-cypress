import waterProximityElements from '../../locators/water_proximity_page'
import quotePageElements from '../../locators/quote_page'
const waterProximityPage = new waterProximityElements()
const quotePage = new quotePageElements()
describe('Water Page', () => {
    before(() => {
      cy.EnterZipCode()
      cy.BuildingPage()
      waterProximityPage.waterBodyHeader().should('be.visible')
      waterProximityPage.noOption().should('be.visible')
      waterProximityPage.yesOption().should('be.visible')
      waterProximityPage.nextButton().should('be.visible')
    });
    context('Customer submits without selecting an option',() => {

      it('Verify the Next button is disabled',() => {
        waterProximityPage.nextButton()
        .should('be.visible')
        .click()
        waterProximityPage.waterBodyHeader()
        .should('be.visible')
      });
    });

    context('Customer successfully submits water proximity',() => {
      
      it('User should be navigated to the Quote page',() => {
        waterProximityPage.yesOption()
        .should('be.visible')
        .click()
        waterProximityPage.nextButton()
        .should('be.visible')
        .click()
        quotePage.yourPlansHeader()
        .should('be.visible')
      });
    });
  });

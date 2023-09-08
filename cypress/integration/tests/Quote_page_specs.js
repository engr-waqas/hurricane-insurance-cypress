import waterProximityElements from '../../locators/water_proximity_page'
import quotePageElements from '../../locators/quote_page'
const waterProximityPage = new waterProximityElements()
const quotePage = new quotePageElements()

describe('Quote Page', () => {
  beforeEach(() => {
    cy.EnterZipCode()
    cy.BuildingPage()
  });
  context('Customer is not near a body of water',() => {
    beforeEach(() => {
      waterProximityPage.noOption()
      .should('be.visible')
      .click()
      waterProximityPage.nextButton()
      .should('be.visible')
      .click()
      quotePage.yourPlansHeader()
      .should('be.visible')
    });

    it('User should see a disabled, checked checkbox with the label "Flood Protection Included" within the Complete plan',() => {
      quotePage.checkboxIncluded()
      .should('have.css', 'opacity', '0')
    });
  });

  context('Customer is near a body of water',() => {
    beforeEach(() => {
      waterProximityPage.yesOption()
      .should('be.visible')
      .click()
      waterProximityPage.nextButton()
      .should('be.visible')
      .click()
      quotePage.yourPlansHeader()
      .should('be.visible')
    });
    
    it('User should see an enabled, unchecked by default checkbox with the label "Include Flood Protection (+$XX)" within the Complete plan',() => {
      quotePage.checkboxIncluded()
      .should('have.css', 'opacity', '0')
    });
  });
});

import buildMaterialElements from '../../locators/building_material_page'
import waterProximityElements from '../../locators/water_proximity_page'
const buildMaterialPage = new buildMaterialElements()
const waterProximityPage = new waterProximityElements()
describe('Building Page', () => {
    before(() => {
      cy.EnterZipCode()
      buildMaterialPage.constructedWithHeader()
      .should('be.visible')
      buildMaterialPage.bricksOption()
      .should('be.visible')
      buildMaterialPage.sticksOption()
      .should('be.visible')
      buildMaterialPage.strawOption()
      .should('be.visible')
      buildMaterialPage.nextButton()
      .should('be.visible')
    });
    context('Customer submits without selecting an option.',() => {
      it('Verify the Next button is disabled',() => {
        buildMaterialPage.nextButton()
        .should('be.visible')
        .click()
        buildMaterialPage.constructedWithHeader()
        .should('be.visible')
      });
    });
    context('Customer successfully submits building material',() => {
      it('User should be navigated to the Water Proximity question page',() => {
        buildMaterialPage.bricksOption()
        .should('be.visible')
        .click()
        buildMaterialPage.nextButton()
        .should('be.visible')
        .click()
        waterProximityPage.waterBodyHeader()
        .should('be.visible')
      });
    });
  });

class waterProximityElements{
  waterBodyHeader(){
    return cy.contains('h1','Is your home located within 1 mile of a body of water?')
  }
  nextButton(){
    return cy.xpath("//button[@type='submit']")
  }
  yesOption(){
    return cy.contains('span','Yes')
  }
  noOption(){
    return cy.contains('span','No')
  }
}

export default waterProximityElements

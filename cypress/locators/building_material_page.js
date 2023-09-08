class buildMaterialElements{
  constructedWithHeader(){
    return cy.contains('h1','What type of material is your home constructed with?')
  }
  nextButton(){
    return cy.xpath("//button[@type='submit']")
  }
  strawOption(){
    return cy.contains('span','Straw')
  }
  sticksOption(){
    return cy.contains('span','Sticks')
  }
  bricksOption(){
    return cy.contains('span','Bricks')
  }
}

export default buildMaterialElements

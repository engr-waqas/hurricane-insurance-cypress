class quotePageElements{
  yourPlansHeader(){
    return cy.contains('h1','Your available plans')
  }
  checkboxIncluded(){
    return cy.xpath("//input[@name='includeFloodProtection']")
  }
}

export default quotePageElements

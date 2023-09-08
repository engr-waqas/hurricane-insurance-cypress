class landingPageElements{
  zipCodeField(){
    return cy.xpath("//input[@name='postalCode']")
  }
  zipCodeLabel(){
    return cy.contains('label','Zip code')
  }
  getAQuoteButtonText(){
    return cy.contains('span','Get a quote')
  }
  getAQuoteButton(){
    return cy.xpath("//button[@type='submit']")
  }
  requiredText(){
    return cy.contains('p','Required')
  }
  invalidZipCodeText(){
    return cy.contains('p','Invalid zip code')
  }
}

export default landingPageElements

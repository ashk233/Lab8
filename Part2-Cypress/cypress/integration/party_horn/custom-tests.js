describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then($el => {
      expect($el).to.have.value(75);
    })
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val',33).trigger('input');
    cy.get('#volume-number').then($el => {
      expect($el).to.have.value(33);
    })
  })
});

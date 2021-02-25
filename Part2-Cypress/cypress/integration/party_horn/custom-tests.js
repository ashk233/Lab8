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
  });

  it('Volume of audio changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val',33).trigger('input');
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.prop('volume',0.33)
    });
  });

  it('Image and sound sources change when party horn radio button is selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src','./assets/media/images/party-horn.svg')
    });
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src','./assets/media/audio/party-horn.mp3')
    });
  });

  it('Volume image changes from mute to 1 bar when volume is increased from 0 to 1', () => {
    cy.get('#volume-slider').invoke('val',0).trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-0.svg')
    });
    cy.get('#volume-slider').invoke('val',1).trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-1.svg')
    });
  });

  it('Volume image changes from 1 bar to 2 bars when volume is increased from 1 to 50', () => {
    cy.get('#volume-slider').invoke('val',1).trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-1.svg')
    });
    cy.get('#volume-slider').invoke('val',50).trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-2.svg')
    });
  });

  it('Volume image changes from 2 bars to 3 bars when volume is increased from 50 to 100', () => {
    cy.get('#volume-slider').invoke('val',50).trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-2.svg')
    });
    cy.get('#volume-slider').invoke('val',100).trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-3.svg')
    });
  });
});


/// <reference types="Cypress" />
import AutomationPractice from "../pageObjects/AutomationPractice"
const automationpractice = new AutomationPractice


//#region Automation Practice
describe('Automation Practice Test', () => {


    it('Verify title & URL of the launch URL', () => {
        cy.visit(Cypress.env('AutomationPracticeURL'))
        cy.title().should('eq', 'My Store')
        cy.url().should('eq', 'http://automationpractice.com/index.php')
        automationpractice.getLogoText().should('have.attr', 'src', 'http://automationpractice.com/img/logo.jpg')
    }
    )

    it('Verify Links in header', () => {
        cy.visit(Cypress.env('AutomationPracticeURL'))
        automationpractice.getCallUs().contains('0123-456-789')
        automationpractice.getContact().should('be.visible')
        automationpractice.getSigninButton().should('be.visible')
    }
    )

    it('Verify placeholderText', () => {
        cy.visit(Cypress.env('AutomationPracticeURL'))
        automationpractice.getSearchTextBox().invoke('attr', 'placeholder').should('contain', 'Search')
    }
    )

    it('Verify on different tabs and verify title', () => {
        cy.visit(Cypress.env('AutomationPracticeURL'))
        automationpractice.getTshirt().click()
        cy.title().should('eq', 'Faded Short Sleeve T-shirts - My Store')
        cy.go('back')
        automationpractice.getDresses().click()
        cy.title().should('eq', 'Printed Summer Dress - My Store')
      
    }
    )

    it('Verify Login functionality', () => {
        cy.visit(Cypress.env('AutomationPracticeURL'))
        cy.wait(1000)
        automationpractice.getSigninButton().click()
        cy.title().should('eq', 'Login - My Store')
        automationpractice.fillEmail()
        automationpractice.fillPassword()
        automationpractice.getLoginButton().click()
        automationpractice.getAccount().contains('Darshit Jain')
    }
    )

    it('Verify Footer of the page', () => {
        cy.visit(Cypress.env('AutomationPracticeURL'))
        cy.get('footer')
        automationpractice.getCategories().contains('Categories')
        automationpractice.getInformation().contains('Information')
        automationpractice.getMyAccount().contains('My account')
        automationpractice.getWomen().invoke('text').should('include', 'Women');
        automationpractice.getSpecials().invoke('text').should('include', 'Specials');
        automationpractice.getNewProducts().invoke('text').should('include', 'New products');
        automationpractice.getBestSellers().invoke('text').should('include', 'Best sellers');
        automationpractice.getOurStores().invoke('text').should('include', 'Our stores');
        automationpractice.getContactus().invoke('text').should('include', 'Contact us');
        automationpractice.getTerms().invoke('text').should('include', 'Terms and conditions of use');
        automationpractice.getAboutUs().invoke('text').should('include', 'About us');
        automationpractice.getSitemap().invoke('text').should('include', 'Sitemap');
        automationpractice.getMyOrders().invoke('text').should('include', 'My orders');
        automationpractice.getMyCreditSLips().invoke('text').should('include', 'My credit slips');
        automationpractice.getMyAddresses().invoke('text').should('include', 'My addresses');
        automationpractice.getMyPersonalInfo().invoke('text').should('include', 'My personal info');

    }
    )

    it('Verify Product details', () => {
        cy.visit(Cypress.env('AutomationPracticeURL'))
        automationpractice.getProduct().click()
        cy.get('img', { includeShadowDom: true })
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)));
        automationpractice.getTShirtTitle().contains('Faded Short Sleeve T-shirts')
        //cy.contains('Cotton')
        //cy.get('#short_description_content > p').should('Faded short sleeve t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!');
        //cy.get(':nth-child(3) > .page-product-heading').contains('Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which has since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!')
        //cy.get('tbody > :nth-child(1) > :nth-child(1)').contains('Cotton')
        //cy.get('.even > :nth-child(1)').contains('Casual')
        //cy.get('tbody > :nth-child(3) > :nth-child(1)').contains('Short Sleeve')
        automationpractice.getTwitterLink().should('be.visible')
        automationpractice.getFacebookLink().should('be.visible')
        automationpractice.getGooglePlusLink().should('be.visible')
        automationpractice.getPintRestLink().should('be.visible')

    }
    )

    //#endregion CNATT

})



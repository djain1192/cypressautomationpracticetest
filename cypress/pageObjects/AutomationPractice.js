

class AutomationPractice {
    getSigninButton() 
    {
        return cy.get('.login')
    }

    getCallUs() 
    {
        return cy.get('.shop-phone')
    }

    getContact() 
    {
        return cy.get('#contact-link > a')
    }

    getSigninButton() 
    {
        return cy.get('.login')
    }

    getSearchTextBox() 
    {
        return cy.get('#search_query_top')
    }

    getTshirt() 
    {
        return cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x')
    }

    getDresses() 
    {
        return cy.get('#homefeatured > .first-in-line.last-line > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x')
    }

    fillEmail() 
    {
        const field = cy.get('#email')
        field.clear()
        field.type('djain@mobiquityinc.com')
        return this
    }

    fillPassword() 
    {
        const field = cy.get('#passwd')
        field.clear()
        field.type('Darshit@11')
        return this
    }

    getLoginButton() 
    {
        return cy.get('body.authentication.hide-left-column.hide-right-column.lang_en:nth-child(2) div.columns-container div.container div.row:nth-child(3) div.center_column.col-xs-12.col-sm-12 div.row div.col-xs-12.col-sm-6:nth-child(2) form.box div.form_content.clearfix p.submit:nth-child(4) button.button.btn.btn-default.button-medium > span:nth-child(1)')
    }

    getLogoText() 
    {

        return cy.get('.logo')
    }

    getContactus() 
    {
        return cy.get('#contact-link')
    }

    getAccount() 
    {
        return cy.get('.account')
    }

    getCategories() {
        return cy.get('.blockcategories_footer > h4')
    }

    getInformation() 
    {
        return cy.get('#block_various_links_footer > h4')
    }

    getMyAccount()
     {
        return cy.get('h4 > a')
    }

    getWomen() 
    {
        return cy.get('.tree > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]')
    }

    getSpecials() 
    {
        return cy.get('.toggle-footer > :nth-child(1) > a')
    }

    getNewProducts() 
    {
        return cy.get('.toggle-footer > :nth-child(2) > a')
    }

    getBestSellers() 
    {
        return cy.get('.toggle-footer > :nth-child(3) > a')
    }

    getOurStores() 
    {
        return cy.get('.toggle-footer > :nth-child(4) > a')
    }

    getContactus() 
    {
        return cy.get('.toggle-footer > :nth-child(5) > a')
    }

    getTerms() 
    {
        return cy.get('.toggle-footer > :nth-child(6) > a')
    }

    getAboutUs() 
    {
        return cy.get('.toggle-footer > :nth-child(7) > a')
    }

    getSitemap() 
    {
        return cy.get('.toggle-footer > :nth-child(8) > a')
    }

    getMyOrders() 
    {
        return cy.get('.bullet > :nth-child(1) > a')
    }

    getMyCreditSLips() 
    {
        return cy.get('.bullet > :nth-child(2) > a')
    }

    getMyAddresses() {
        return cy.get('.bullet > :nth-child(3) > a')
    }

    getMyPersonalInfo() {
        return cy.get('.bullet > :nth-child(4) > a')
    }

    getProduct() {
        return cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x')
    }

    getTShirtTitle() 
    {
        return cy.get('h1')
    }

    getTwitterLink() 
    {
        return cy.get('.btn-twitter')
    }

    getFacebookLink() 
    {
        return cy.get('.btn-facebook')
    }

    getGooglePlusLink() 
    {
        return cy.get('.btn-google-plus')
    }

    getPintRestLink() 
    {
        return cy.get('.btn-pinterest')
    }



}

export default AutomationPractice;
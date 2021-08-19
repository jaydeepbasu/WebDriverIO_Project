const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MillionMorePage extends Page {

    get volvoLogo () { return $("//nav[@role='navigation']//img[@alt='Volvo']") }
    get topBanner() { return $("//section[@data-autoid='ModelIntro']//h2")}

    open () {
        return super.open('intl/v/car-safety/a-million-more');
    }

    async verifyLogo (volvoLogo) {
        // const isDisplayed = await this.volvoLogo.isDisplayed()
        expect(volvoLogo).toBeDisplayed()
    }

    async verifyTopBanner (topBanner) {
        expect(topBanner).toHaveTextContaining("Ideas that change the world are often the most controversial.")
    }
}

module.exports = new MillionMorePage();

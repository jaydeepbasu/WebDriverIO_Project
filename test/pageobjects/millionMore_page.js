const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MillionMorePage extends Page {

    get acceptCookiesButton () { return $("[title='Accept']") }
    get decades_Inno_sec () { return $("//img[@data-autoid='imageWithText:image']/../..") }
    get top_right_menu () { return $("//button[@data-autoid='nav:siteNavHamburgerIcon']") }

    async clickAcceptButton(acceptCookiesButton) {
        this.acceptCookiesButton.click();
    }

    async decades_Inno_sec_scrollView(acceptCookiesButton) {
        this.decades_Inno_sec.scrollIntoView();
    }

    async clickTopRightMenu(acceptCookiesButton) {
        this.top_right_menu.click();
    }






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

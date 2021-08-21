const Page = require('./page');
const assert = require('assert');
const fetch = require('node-fetch');
const readJson = require('../util/readJson');


const expProductNameList = ['XC90 Recharge','XC90 Recharge','XC60 Recharge','XC40 Recharge','XC40 Recharge','V90 Recharge','V60 Recharge','S90 Recharge','S60 Recharge']


class MillionMorePage extends Page {
  
    get cookiesBoxLogo() { return $('[class="optanon-alert-box-logo"]')}
    get cookiesBoxText() { return $('[class^="optanon-alert-box-title"]')}  
    get acceptCookiesButton() { return  $("[title='Accept']")}
    get cookiesSettingsButton() { return  $("[title='Cookie Settings']")}
    get cookiesSettingsBox() { return  $('[id="optanon-popup-wrapper"]')}
   // get cookiesSettingsAllowButton() { return $('[title="Allow all"]')}
    get volvoLogo () { return $("//nav[@role='navigation']//img[@alt='Volvo']") }
    get topBanner() { return $("//section[@data-autoid='ModelIntro']//h2")}
    get topBannerText() { return $("//section[@data-autoid='ModelIntro']//p")}
    get campaignText() { return $("//section[@data-autoid='ModelIntro']//p")}
    get burgerSign() { return $('[data-testid="burger"]')}
    get sideNavigationLogo() { return $('[id="nav:sideNavigation"] img[alt="Volvo"]')}
    get sideNavigationCollapse() { return $('[data-testid="close"]')}
    get story() { return $("[role='video']")}
    get storySource() { return $("//video[@role='video']//source")}
    get storyWatchButton() { return $("//button[contains(text(),'watch the story')]")} 
    get productListTitle() { return $('[data-autoid="productListCarousel:title"]')}
    get productLinkList() { return $('[data-autoid="springCarouselPane:carouselItem"]>div>a')}
  //  get productNameList() { return $('[data-autoid="productListCarouselItem:modelName"]')}
	get decades_Inno_sec () { return $("//img[@data-autoid='imageWithText:image']/../..") }
    get ourCarsLinkTopRight() { return $('[data-testid="nav:carsLabelContainer"]')}
    get ourCars_Electric() {return $('//button//h2[text()="Electric"]')}
    get ourCarNavigationClose() {return $('[data-autoid="nav:carMenuCloseIcon"]')}
    get oneofaMillion_videoTesti_1() {return $('[data-autoid="videoTestimonials:video-0"]')}
    get oneofaMillion_videoTesti_2() {return $('[data-autoid="videoTestimonials:video-1"]')}
    get oneofaMillion_videoTesti_3() {return $('[data-autoid="videoTestimonials:video-2"]')}
    get oneofaMillion_videoTesti_4() {return $('[data-autoid="videoTestimonials:video-3"]')}
    get decadesInnovationHeader() {return $('[data-autoid="imageWithText:title"]')}
    get decadesInnovationSubText() {return $('[data-autoid="imageWithText:description"]')}
    get decadesInnovationLearnMore() {return $('[data-autoid="imageWithText:primaryCta"]')}
    get exploreOurModelHeader() {return $('[data-autoid="productListCarousel:title"]')}
    get exploreOurModelAllCars() {return $('[data-autoid="springCarouselPane:carouselItem"]')}


    async open () {
        return super.open('intl/v/car-safety/a-million-more');
    }

    async verifyCookiesPopUp () {
        //assert.equal(cookiesBoxLogo.getText(), expLogo);
        const expLogo = readJson.getJsonData('expLogo')
        const cookieBoxText = readJson.getJsonData('cookieBoxText')

        expect(this.cookiesBoxLogo).toHaveTextContaining(expLogo)
        expect(this.cookiesBoxText).toHaveTextContaining(cookieBoxText)
        expect(this.acceptCookiesButton).toBeDisplayed()
        expect(this.cookiesSettingsButton).toBeDisplayed()
    }

    async acceptCookies () {
        await this.acceptCookiesButton.click() 
    }

    // async verifyCookiesSettings () {
    //     await this.cookiesSettingsButton.click();
    //     expect(this.cookiesSettingsBox).toBeDisplayed();
    //     var cookiesSettingsAllowButton = $('[title="Allow all"]')
    //     await cookiesSettingsAllowButton.click();
    // }

    async verifyLogo () {
        // const isDisplayed = await this.volvoLogo.isDisplayed()
        expect(this.volvoLogo).toBeDisplayed()
    }

    async verifyTitle () {
        // const isDisplayed = await this.volvoLogo.isDisplayed()  
        const expPageTitle = readJson.getJsonData('expPageTitle')
        console.log("Jaydeep is : "+expPageTitle)
        var title =  await browser.getTitle()     
        assert.strictEqual(title, expPageTitle)
    }
    async verifyTopBanner () {    
        const expTopBanner = readJson.getJsonData('expTopBanner') 
        expect(this.topBanner).toHaveTextContaining(expTopBanner)
    }
    async verifyTopBannerText () {    
        const expTopBannerText = readJson.getJsonData('expTopBannerText')  
        expect(this.topBannerText).toHaveTextContaining(expTopBannerText)
    }

    async verifyCampaignText () {  
        const expCampaignText = readJson.getJsonData('expCampaignText')    
        expect(this.campaignText).toHaveTextContaining(expCampaignText)
    }

    async verifyburgerSign () {      
        expect(this.burgerSign).toBeDisplayed()
    }
    
    async verifySideNavigationBox () {      
        await this.burgerSign.click()  
        expect(this.sideNavigationLogo).toBeDisplayed()
        await this.sideNavigationCollapse.click()  
    }
    
    async verifyStory () {      
        expect(await this.story.scrollIntoView()).toBeDisplayed()        
    }

    async verifyStoryLinkNotBroken (){        
        const storyUrl =  await this.storySource.getAttribute('src');         
        await fetch(storyUrl).then(res => assert.equal(res.status,200))
   }

    async verifyStoryWatch () {  
        expect(this.storyWatchButton).toBeDisplayed()
        await this.storyWatchButton.click()  
       // this.storyWatchButton.waitForExist( 500, true )       
    }
	
	async decades_Inno_sec_scrollView() {
        this.decades_Inno_sec.scrollIntoView();
    }
	
	async clickTopRightMenu() {
        this.burgerSign.click();
    }

    async verifyOurCarsLinkTopRight () {      
        expect(this.ourCarsLinkTopRight).toBeDisplayed()
    }
    
    async verifyOurCarsElectricSection () {      
        await this.ourCarsLinkTopRight.click()  
        expect(this.ourCars_Electric).toBeDisplayed()
    }

    async closeOurCarsSection () {      
        await this.ourCarNavigationClose.click()  
    }

    async verify_VideoTesti_OneOfAMillionSection () {    
        this.oneofaMillion_videoTesti_1.scrollIntoView(); 
        expect(this.oneofaMillion_videoTesti_1).toBeDisplayed()
        expect(this.oneofaMillion_videoTesti_2).toBeDisplayed()
        expect(this.oneofaMillion_videoTesti_3).toBeDisplayed()
        expect(this.oneofaMillion_videoTesti_4).toBeDisplayed()
    }

    async verifydecadesOfInnovationHeader () {    
        const cdecadesInnovationHeader = readJson.getJsonData('decadesInnovationHeader') 
        expect(this.decadesInnovationHeader).toHaveTextContaining(cdecadesInnovationHeader)
    }

    async verifydecadesOfInnovationSubText () {    
        const decadesInnovationSubText = readJson.getJsonData('decadesInnovationSubText')
        expect(this.decadesInnovationSubText).toHaveTextContaining(decadesInnovationSubText)
    }

    async verifydecadesOfInnovationLearnMore () {   
        expect(this.decadesInnovationLearnMore).toBeDisplayed() 
        const cdecadesInnovationLearnMore = readJson.getJsonData('decadesInnovationLearnMore') 
        expect(this.decadesInnovationLearnMore).toHaveTextContaining(cdecadesInnovationLearnMore)
    }

    async verifyExploreOurModelHeader () {   
        expect(this.exploreOurModelHeader).toBeDisplayed() 
    }

    async verifyExploreOurModelAllCars () {   
        expect(this.exploreOurModelAllCars).toBeDisplayed() 
    }



   
}

module.exports = new MillionMorePage();

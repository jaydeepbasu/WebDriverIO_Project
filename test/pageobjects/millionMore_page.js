const Page = require('./page');
const assert = require('assert');
const fetch = require('node-fetch');
const readJson = require('../util/readJson');


class MillionMorePage extends Page {
  
    get cookiesBoxLogo() { return $('[class="optanon-alert-box-logo"]')}
    get cookiesBoxText() { return $('#alert-box-message')}  
    get acceptCookiesButton() { return  $("[title='Accept']")}
    get cookiesSettingsButton() { return  $("[title='Cookie Settings']")}
    get cookiesSettingsBox() { return  $('[id="optanon-popup-wrapper"]')}
    get volvoLogo () { return $("//nav[@role='navigation']//img[@alt='Volvo']") }
    get topBanner() { return $("//section[@data-autoid='ModelIntro']//h2")}
    get topBannerText() { return $("//section[@data-autoid='ModelIntro']//p")}
    get campaignText() { return $("//div[@data-component='TextStatement']//p")}
    get burgerSign() { return $('[data-testid="burger"]')}
    get sideNavigationLogo() { return $('[id="nav:sideNavigation"] img[alt="Volvo"]')}
    get sideNavigationCollapse() { return $('[data-testid="close"]')}
    get story() { return $("[role='video']")}
    get storySource() { return $("//video[@role='video']//source")}
    get storyWatchButton() { return $("//button[contains(text(),'watch the story')]")} 
    get productListTitle() { return $('[data-autoid="productListCarousel:title"]')}
    get productLinkList() { return $('[data-autoid="springCarouselPane:carouselItem"]>div>a')}
	get decades_Inno_sec () { return $("//img[@data-autoid='imageWithText:image']/../..") }
    get ourCarsLinkTopRight() { return $('[data-testid="nav:carsLabelContainer"]')}
    get ourCars_Electric() {return $('//button//h2[text()="Electric"]')}
    get ourCarNavigationClose() {return $('[data-autoid="nav:carMenuCloseIcon"]')}
    get videoTestiSection() {return $('[data-component="VideoTestimonials"]')}
    get oneofaMillion_videoTesti_1() {return $('[data-autoid="videoTestimonials:video-0"]')}
    get oneofaMillion_videoTesti_2() {return $('[data-autoid="videoTestimonials:video-1"]')}
    get oneofaMillion_videoTesti_3() {return $('[data-autoid="videoTestimonials:video-2"]')}
    get oneofaMillion_videoTesti_4() {return $('[data-autoid="videoTestimonials:video-3"]')}
    get decadesInnovationHeader() {return $('[data-autoid="imageWithText:title"]')}
    get decadesInnovationSubText() {return $('[data-autoid="imageWithText:description"]')}
    get decadesInnovationLearnMore() {return $('[data-autoid="imageWithText:primaryCta"]')}
    get exploreOurModelHeader() {return $('[data-autoid="productListCarousel:title"]')}
    get exploreOurModelFirstCar() {return $('[data-autoid="springCarouselPane:carouselItem"]')}


    async open () {
        return super.open('intl/v/car-safety/a-million-more');
    }

    async verifyCookiesPopUp () {
        const cookieBoxText = readJson.getJsonData('cookieBoxText')
        
        assert.equal(await this.cookiesBoxText.getText(), cookieBoxText)
        assert.equal(await this.acceptCookiesButton.isDisplayed(), true)
        assert.equal(await this.cookiesSettingsButton.isDisplayed(), true)
    }

    async acceptCookies () {
        await this.acceptCookiesButton.click()
    }

    async verifyLogo () {
        assert.equal(await this.volvoLogo.isDisplayed(), true)
    }

    async verifyTitle () { 
        const expPageTitle = readJson.getJsonData('expPageTitle')
        var title =  await browser.getTitle()     
        assert.equal(title, expPageTitle)
    }
    async verifyTopBanner () {    
        const expTopBanner = readJson.getJsonData('expTopBanner')
        assert.equal(await this.topBanner.getText(), expTopBanner)
    }
    async verifyTopBannerText () {    
        const expTopBannerText = readJson.getJsonData('expTopBannerText')
        assert.equal(await this.topBannerText.getText(), expTopBannerText)
    }

    async verifyCampaignText () {  
        const expCampaignText = readJson.getJsonData('expCampaignText')
        assert.equal(await this.campaignText.getText(), expCampaignText)    
    }

    async verifyburgerSign () {      
        assert.equal(await this.burgerSign.isDisplayed(), true)
    }
    
    async verifySideNavigationBox () {      
        await this.burgerSign.click() 
        assert.equal(await this.sideNavigationLogo.isDisplayed(), true)
        await this.sideNavigationCollapse.click()  
    }
    
    async verifyStory () {  
        await this.story.scrollIntoView()   
        assert.equal(await this.story.isDisplayed(), true)      
    }

    async verifyStoryLinkNotBroken (){        
        const storyUrl =  await this.storySource.getAttribute('src');         
        await fetch(storyUrl).then(res => assert.equal(res.status,200))
   }

    async verifyStoryWatch () {  
        assert.equal(await this.storyWatchButton.isDisplayed(), true)
        await this.storyWatchButton.click()  
       // this.storyWatchButton.waitForExist( 500, true )       
    }
	
	async decades_Inno_sec_scrollView() {
        await this.decades_Inno_sec.scrollIntoView();
    }
	
	async clickTopRightMenu() {
        this.burgerSign.click();
    }

    async verifyOurCarsLinkTopRight () { 
        assert.equal(await this.ourCarsLinkTopRight.isDisplayed(), true)     
    }
    
    async verifyOurCarsElectricSection () {      
        await this.ourCarsLinkTopRight.click()  
        assert.equal(await this.ourCars_Electric.isDisplayed(), true)
    }

    async closeOurCarsSection () {      
        await this.ourCarNavigationClose.click()  
    }

    async verify_VideoTesti_OneOfAMillionSection () {  
        await this.videoTestiSection.scrollIntoView();
        await this.oneofaMillion_videoTesti_1.waitForExist( 2000, true ) 
        assert.equal(await this.oneofaMillion_videoTesti_1.isDisplayed(), true)
        assert.equal(await this.oneofaMillion_videoTesti_2.isDisplayed(), true)
    }

    async verifydecadesOfInnovationHeader () {    
        const cdecadesInnovationHeader = readJson.getJsonData('decadesInnovationHeader') 
        assert.equal(await this.decadesInnovationHeader.getText(), cdecadesInnovationHeader)
    }

    async verifydecadesOfInnovationSubText () {    
        const decadesInnovationSubText = readJson.getJsonData('decadesInnovationSubText')
        assert.equal(await this.decadesInnovationSubText.getText(), decadesInnovationSubText)
    }

    async verifydecadesOfInnovationLearnMore () {   
        assert.equal(await this.decadesInnovationLearnMore.isDisplayed(), true)
        const cdecadesInnovationLearnMore = readJson.getJsonData('decadesInnovationLearnMore') 
        assert.equal(await this.decadesInnovationLearnMore.getText(), cdecadesInnovationLearnMore)
    }

    async verifyExploreOurModelHeader () {   
        await this.exploreOurModelHeader.scrollIntoView()
        assert.equal(await this.exploreOurModelHeader.isDisplayed(), true)
    }

    // Purposefully failing this test case by giving incorrect test data so that I can showcase 
    // that the report is capturing screenshots on failure
    async verifyExploreOurModelHeaderText () {   
        const cExploreOurModelHeader = readJson.getJsonData('exploreOurModelHeaderText') 
        assert.equal(await this.exploreOurModelHeader.getText(), cExploreOurModelHeader)
    }

    async verifyExploreOurModelFirstCar () {   
        assert.equal(await this.exploreOurModelFirstCar.isDisplayed(), true)
    }
   
}

module.exports = new MillionMorePage();

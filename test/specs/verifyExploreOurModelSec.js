const millionMorePage = require('../pageobjects/millionMore_page');

describe('Verify Explore our Models section is appearing', () => {

    it('verify Million More Page is loaded', async () => {
        await millionMorePage.open();
        await millionMorePage.acceptCookies();
    });

    it('verify Explore our Model Section Header is loading', async () => {
        await millionMorePage.verifyExploreOurModelHeader();
    });

    // Purposefully failing this test case by giving incorrect test data so that I can showcase 
    // that the report is capturing screenshots on failure
    it('verify Explore our Model Section Header text is correct', async () => {
        await millionMorePage.verifyExploreOurModelHeaderText();
    });

    it('verify Explore our Model Section Cars are loading', async () => {
        await millionMorePage.verifyExploreOurModelFirstCar();
    });
    
});
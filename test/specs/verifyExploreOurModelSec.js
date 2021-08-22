const millionMorePage = require('../pageobjects/millionMore_page');

describe('Verify Explore our Models section is appearing', () => {

    it('verify Million More Page is loaded', async () => {
        await millionMorePage.open();
        await millionMorePage.acceptCookies();
    });

    it('verify Explore our Model Section Header is loading', async () => {
        await millionMorePage.verifyExploreOurModelHeader();
    });

    it('verify Explore our Model Section Header text is correct', async () => {
        await millionMorePage.verifyExploreOurModelHeaderText();
    });

    it('verify Explore our Model Section Cars are loading', async () => {
        await millionMorePage.verifyExploreOurModelFirstCar();
    });
    
});
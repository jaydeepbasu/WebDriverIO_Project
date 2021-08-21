const millionMorePage = require('../pageobjects/millionMore_page');

describe('Verify Decades of Innovation section is appearing', () => {

    it('verify Million More Page is loaded', async () => {
        await millionMorePage.open();
        await millionMorePage.acceptCookies();
    });

    it('verify Decades of Innovation Section Header is loading', async () => {
        await millionMorePage.verifydecadesOfInnovationHeader();
    });

    it('verify Decades of Innovation Section SubText is loading', async () => {
        await millionMorePage.verifydecadesOfInnovationSubText();
    });

    it('verify Decades of Innovation Section Learn More link is loading', async () => {
        await millionMorePage.verifydecadesOfInnovationLearnMore();
    });
    
});
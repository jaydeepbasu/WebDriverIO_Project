const millionMorePage = require('../pageobjects/millionMore_page');

describe('Verify Campaign story is displyed in Volvo car Million More Page', () => {

    it('verify Million More Page is loaded', async () => {
        await millionMorePage.open();
        await millionMorePage.acceptCookies();
    });

    it('verify story is displayed', async () => {
        await millionMorePage.verifyStory();
        await millionMorePage.verifyStoryLinkNotBroken();
    });
    
    it('verify user is able to watch the story', async () => {
        await millionMorePage.verifyStoryWatch();
       
    });

});
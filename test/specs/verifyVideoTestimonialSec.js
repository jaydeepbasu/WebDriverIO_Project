const millionMorePage = require('../pageobjects/millionMore_page');

describe('Verify One of a Million Video Testimonials are appearing', () => {

    it('verify Million More Page is loaded', async () => {
        await millionMorePage.open();
        await millionMorePage.acceptCookies();
    });

    it('verify One Of A Million Section Video Testimonial is Loaded', async () => {
        await millionMorePage.verify_VideoTesti_OneOfAMillionSection();
    });
    
});
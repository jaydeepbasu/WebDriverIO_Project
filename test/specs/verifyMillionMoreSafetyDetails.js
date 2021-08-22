const millionMorePage = require('../pageobjects/millionMore_page');

describe('Verify Million More safety details are displyed in Million More Page', () => {

    it('verify Million More Page is loaded', async () => {
        await millionMorePage.open();
        await millionMorePage.acceptCookies();
    });

    it('verify Million More Page Safety Campaign Section is Present', async () => {
        await millionMorePage.verifySafetyCampaignSectionIsPresent();
    });
    
    it('verify Million More Page Campaign Safety Header Text', async () => {
        await millionMorePage.verifyCampaignText();
    });

    it('verify Million More Page Campaign SpeedCap Safety Text', async () => {
        await millionMorePage.verifySafetySpeedCapText();
    });

    it('verify Million More Page Campaign HighwayPilot Safety Text', async () => {
        await millionMorePage.verifySafetyHighwayPilotText();
    });

    it('verify Million More Page Campaign Learn More About Safety Link is Clickable', async () => {
        await millionMorePage.verifyLearnMoreAboutSafety_IsClickable();
    });

});
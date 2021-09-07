import {screen, openStoryPage} from '../test-utils';

test('Dialog over fixed footer', async () => {
    const page = await openStoryPage({
        id: 'components-layouts-fixedfooterlayout--dialog-over-fixed-footer',
        device: 'MOBILE_IOS',
    });

    await (await screen.findByText('Open dialog')).click();

    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
});
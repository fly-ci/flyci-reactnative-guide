import { device, element, by } from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have Step One', async () => {
    await expect(element(by.text('Step 1'))).toBeVisible();
  });
});

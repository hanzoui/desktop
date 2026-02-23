import { expect, test } from '../testExtensions';

test('App window has title', async ({ app }) => {
  const window = await app.firstWindow();
  await expect(window).toHaveTitle('Hanzo Studio');
});

test('App quits when window is closed', async ({ app }) => {
  const window = await app.firstWindow();

  const closePromise = app.app.waitForEvent('close');
  await window.close();
  await closePromise;
});

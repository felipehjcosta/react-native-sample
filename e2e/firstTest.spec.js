describe('FindProperty App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('should have a title on the start screen', async () => {
    await expect(element(by.text('FindProperty'))).toBeVisible();
  });
  
//   it('should show hello screen after tap', async () => {
//     await element(by.id('hello_button')).tap();
//     await expect(element(by.text('Hello!!!'))).toBeVisible();
//   });
  
//   it('should show world screen after tap', async () => {
//     await element(by.id('world_button')).tap();
//     await expect(element(by.text('World!!!'))).toBeVisible();
//   });
})
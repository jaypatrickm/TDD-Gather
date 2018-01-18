const {assert} = require('chai');

describe('User visits root', () => {
  describe('without existing items', () => {
    it('starts blank', () => {
      browser.url('/');
      assert.equal(browser.getText('#items-container'), '');
    });
  });

  describe('from the homepage', () => {
  	it('can click a link to get to create.html', () => {
  		const createText = 'Create';

  		browser.url('/');
  		browser.click('a[href="create.html"]');

  		assert.include(browser.getText('#create'), createText);
  	})
  })
});
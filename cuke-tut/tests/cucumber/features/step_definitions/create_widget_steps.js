
var _ = require('underscore');

module.exports = function () {

  // You can use normal require here, cucumber is NOT run in a Meteor context (by design)
  var url = require('url');

  this.Given(/^I am logged in$/, function () {
      this.client.url(process.env.ROOT_URL);
      this.client.waitForExist('body *');
      this.client.waitForVisible('body *');
      this.client.click('#login-sign-in-link');
      this.client.setValue('#login-email', 'chaca@example.com');
      this.client.setValue('#login-password', 'testtest');
      this.client.click('#login-buttons-password');
  });

  this.When(/^I fill in the name with "([^"]*)"$/, function (arg1) {
      this.client.waitForVisible('#name');
      this.client.setValue('#name', 'CHACA');
});

  this.When(/^I click the button "([^"]*)"$/, function (arg1) {
      this.client.click('#createWidget');
    });

  this.Then(/^I should see a widget named "([^"]*)"$/, function (arg1) {
      this.client.waitForExist('.widget-name', 500);

      var names = this.client.getText('.widget-name');
      expect(names[0]).toBe('Alpha');
      expect(names[5]).toBe('Chaca');

    });


};



(function () {

  'use strict';

  module.exports = function () {

    this.Before(function () {
      console.log('running!');
      server.call('addUser', {email: "chaca@example.com"});
    });

  };

})();

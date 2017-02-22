'use strict';

describe('Controller: SamplesCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolio2App'));

  var SamplesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SamplesCtrl = $controller('SamplesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SamplesCtrl.awesomeThings.length).toBe(3);
  });
});

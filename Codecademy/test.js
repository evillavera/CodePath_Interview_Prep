/**
 * Starting Code:
 *  Write code here
 */

const House = require("../Codecademy/house");
var assert = require('chai').assert;


describe('Testing Class', function() {
  
  describe('Valid attributes', function(){
    it('see if the attributes are correctly set', function() {
      const mapleHouse = new House('Maple Street', '1234', '11111');
      let checkStreet, checkBuilding, checkZipcode = false

      if(mapleHouse.streetName == 'Maple Street')
        checkStreet = true

      if(mapleHouse.buildingNumber == '1234')
        checkBuilding = true

      if(mapleHouse.zipcode == '11111')
        checkZipcode = true

      let failureMessage = "Looks like there is an incorrect attribute! Were you able to correctly integrate them?"
      assert.isOk(checkStreet && checkBuilding && checkZipcode, failureMessage);
    })
  })
})

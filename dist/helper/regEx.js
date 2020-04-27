"use strict";

/**
* @description check valid name
*/
var validName = /^[a-zA-z]{2,20}$/;
/**
 * @description check valid email
*/

var validEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
module.exports = {
  validName: validName,
  validEmail: validEmail
};
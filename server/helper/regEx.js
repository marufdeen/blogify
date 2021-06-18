/**
* @description check valid name
*/
const validName = /^[a-zA-z]{2,20}$/;

/**
 * @description check valid email
*/
const validEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

module.exports = { validName, validEmail };

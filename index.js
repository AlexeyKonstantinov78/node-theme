const mpackage = require('mpackage');
const { pow } = require('mpackage/pow');

if (mpackage.name === 'pow') {
  console.log(pow(2, 3));
} else {
  console.log('mpackage: ', mpackage);
}

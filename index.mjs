import mpackage from 'mpackage';

if (mpackage.name === 'pow') {
  const { pow } = await import('mpackage/pow');
  console.log(pow(2, 3));
} else {
  console.log('mpackage: ', mpackage);
}



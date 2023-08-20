let obj = {
  id: '',  // случайны id из 10 символов 
  firstName: '', // первая буква большая, остальные строчные
  lastName: '', // первая буква большая, остальные строчные
  dateBirth: '',
  age: '', // высчитывается возраст на текущий день
  purpose: '',  // первая буква большая, остальные строчные
};

const age = (date) => new Date().getFullYear() - new Date(date).getFullYear();  

const toUperCase = str => str.charAt(0).toUpperCase() + str.slice(1);

module.exports = (arr = '') => {
  obj.id = Math.random().toString(36).substring(2, 12);
  obj.firstName = toUperCase(arr.name.split(' ')[0]);
  obj.lastName = toUperCase(arr.name.split(' ')[1]);
  obj.dateBirth = arr.dateBirth;
  obj.age = age(arr.dateBirth);
  obj.purpose = toUperCase(arr.purpose);  
  return obj;
};
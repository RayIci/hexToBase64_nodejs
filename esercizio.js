const hexString = '4a1b48d7322394a78326cd283f0834093e65421a7e98e90e5b452d160b5d07d8';
const resultBase64String = 'ShtI1zIjlKeDJs0oPwg0CT5lQhp+mOkOW0UtFgtdB9g=';

let base64String = Buffer.from(hexString, 'hex').toString('base64');


// test
console.log('result   = %s', resultBase64String);
console.log('myResult = %s', base64String);

if (resultBase64String === base64String) 
    console.log('correct');
else
    console.log('not correct');

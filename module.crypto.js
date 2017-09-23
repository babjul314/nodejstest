var crypto = require("crypto");

var password = '8813rlad';
var shasum = crypto.createHash('sha256');
shasum.update(password);
var output = shasum.digest('hex');
console.log('password='+ password);
console.log('hash='+ output);

var shasum2 = crypto.createHash('sha256');
shasum2.update('8813rlad');
var output2 = shasum2.digest('hex');
console.log('wrong hash=' + output2);

var secret_key = "babjul314!@!@!@!@!@!@!@";
var cipher = crypto.createCipher('aes192',secret_key);
cipher.update(password,'utf8','utf8');
var cipheredOutput = cipher.final('utf8');

var decipher = crypto.createCipher('aes192',secret_key);
decipher.update(cipheredOutput,'utf8','utf8');
var decipherOutput = decipher.final('utf8');

console.log('ciphered password='+cipheredOutput);
console.log('deciphered password=' + decipherOutput);
var data = {password:password, output:output,cipheredOutput:cipheredOutput};
var fs = require('fs');
fs.writeFile('passsword.txt', JSON.stringify(data),'utf8',
function (err){
    if(err){
        console.log(err);
    
    }else
    console.log('write password');
    
});
fs.readFile('password.txt','utf8',function(err,date){
    if(err){
        console.log(err);
    }else
    console.log('data='+ data);
    
}
);



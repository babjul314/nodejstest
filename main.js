console.log('filename:',__dirname);
console.log('dirname:'+__dirname);

console.log('숫자:%d + %d = %d',273,52,273+52);
console.log('문자열 : %s','helloworld','특수기호상관없음');
console.log('JSON:%j',{name:'Hong'});
console.log('JSON'+{name:'hong'});
console.log('JSON'+JSON.stringify({name:'hong'}));

var obj = {name:'hong'};
obj = JSON.stringify(obj);
obj = JSON.parse(obj);
var output=1;
for(var i= i; i<=10; i++)
{
    output +=i;
}
console.log('result=' + output);
console.timeEnd('alpha');


var module = require('./module.js');
console.log('abs(-273=' +module.abs(-273));
console.log('circleArea(3) = ' + module.circleArea(3));

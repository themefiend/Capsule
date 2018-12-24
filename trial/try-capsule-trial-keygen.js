var kgA = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
var kgB = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
var kgC = ~~(Math.random() * 10);
var kgD = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

var kgE =  ~~(Math.random() * 10);
var kgF = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
var kgG = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
var kgH =  ~~(Math.random() * 10);


var kgI =  ~~(Math.random() * 10);
var kgJ = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
var kgK = 'X';
var kgL = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

var kgM =  ~~(Math.random() * 10);
var kgN = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
var kgO = '?';
var kgP = ~~(Math.random() * 10);

var kgtrialKey = 'TF-' + kgA + kgB + kgC + kgD + '-' + kgE + kgF + kgG + kgH + '-' + kgI + kgJ + kgK + kgL + '-' + kgM + kgN + kgO + kgP;

document.getElementById('keygen').append(kgtrialKey.toUpperCase());



//console.log("hello world")
// These are using internal node.js module

//const fs = require("fs");

//fs.copyFileSync("file1.txt","file2.txt");

var superheroes=require("superheroes");

var mysuperheroesname=superheroes.random();

console.log(mysuperheroesname);

var supervillainsname=require("supervillains");

var mysupervillainsname=supervillainsname.random();

console.log(mysupervillainsname);


"use strict";


// Character Set
// jika huruf pertamanya f dan p dan seterusnya pas, maka match
let names = ["farhan", "parhan", "sarhan", "jarhan"];
names.map((m) => {
      console.log(m.match(/[fp]arhan/g));
});

// jika huruf pertamanya tidak f dan p dan seterusnya valid, maka match
names.map((m) => {
      console.log(m.match(/[^fp]arhan/g));
});



console.log("\n");



// Ranges
// /[a-z]/g => dari a sampai z
// /[b-z]/ => dari b - z
// /[a-z A-Z] => dari a sampai z baik itu huruf besar dari kecil
// /[0-9] => dari nol sampai 9



// Repeating Characters
// [0-9]{12} => akan match bila angkanya dari 0-9 dan jumlah karakternya berjumlah 12.
// [a-z]{5} => akan match bila karakternya dari a-b dan jumlahnya 5 karakter.
// [0-9]{5,10} => maksimal karakter angka 5 dan maksimalnya karakter angkanya 10.
// [a-z]{5,} => minimal 5 karakter dan bebas mau berapa karakter



// check format nomor hp
let phoneNumber = ["082370583023", "08237058302344"];

// cara pertama
phoneNumber.map((n) => {
      console.log(`${n} = ${/[0-9]{12}/.test(n)}`);
});

console.log("\n");

// cara kedua
phoneNumber.map(n => {
      console.log(`${n} = ${/^[0-9]{12}$/.test(n)}`);
});

console.log("\n");

const names3 = ["farhan", "parhan", "apriliandi", "farhan apriliandi", "han"];

// minimal nama nya 5 karakter
names3.map(name => {
      console.log(`${name} = ${/[a-z]{5,}/gm.test(name)}`);
});



console.log("\n");



// Boundary / Anchor
// Token boundary mendefinisikan batas awal/akhir teks yang diproses.
// ^ => awal baris
// $ => akhir baris

console.log(/^hey/.test('hey')); // ✅ 
console.log(/^hey/.test('bla hey')); // ❌ 

console.log(/hey$/.test('hey')); // ✅ 
console.log(/hey$/.test('bla bla bla hey')); // ✅ 
console.log(/hey$/.test('hey you')); // ❌ 

console.log(/^hey$/.test('hey')); // ✅ 


console.log(/^hey.*joe$/.test('hey joe'));
console.log(/^hey.*joe$/.test('heyjoe'));
console.log(/^hey.*joe$/.test('hey how are you joe joe'));
console.log(/^hey.*joe$/.test('hey joe ok'));


// name must six characters
const names2 = ["farhan", "parhan", "apriliandi", "fatan"];
names2.map(name => {
      console.log(`${name} => ${/^[a-z]{6}$/.test(name)}`);
});



console.log("\n");



// Special Characters
/*
      '+' => the one-or-more quantifier
      '\' => the escape character (make default) 
          => abc\* = abc*
      '[]' => the character set
      '[^]' => the negate symbol a character set
      '?' => the zero-or-one quantifier (makes a preceding char optional)
      '.' => any character whatsoever (except the newline character)
      '*' => the 0-or-more quantifier (a bit like +)
*/

// check gmail email
const gmails = ["apriliandi@gmail.com", "farhan@gmail.com", "parhan@mail.com"];

gmails.map(m => {
      console.log(`${m} => ${/[a-z]*@gmail\.com/.test(m)}`);
});



console.log("\n");



// Alternate Characters (|)

// email validation
const emails2 = ["farhan@mail.id", "farhan@gmail.com", "apriliandi@proton.com", "apriliandi642@mail.com", "Apriliandi@mail.id"];

emails2.map(mail => {
      console.log(`${mail} = ${/^[a-z 0-9]*@(gmail|mail)\.(com|id)/i.test(mail)}`);
});



console.log("\n");



// Groups (...)
// using parentheses, you can create groups of characters

console.log(/^(\d{3})(\w+)$/.test('123'));
console.log(/^(\d{3})(\w+)$/.test('123s'));
console.log(/^(\d{3})(\w+)$/.test('123something'));
console.log(/^(\d{3})(\w+)$/.test('123something'));

// make match an email address
const emails4 = ["copesc@gmail.com", "copesc", "gmail", "com", "apriliandi@gmail.com", "farhan@gmail.com", "parhan@mail.com"];

emails4.map(email => {
      console.log(`${email} = ${/(\S+)@(\S+)\.(\S+)/.test(email)}`);
});


console.log("\n");


const files = "hello.jpg\n" +
      "hello.png\n" +
      "dog.png\n" +
      "pic1.png\n" +
      "pic2.png\n" +
      "pic3a.gif\n" +
      "pic4.jpg\n" +
      "helloboy.gif";


// file bernama hello atau dog
console.log(files.match(/(hello|dog).*/gm));

// file bernama hello tapi bukan helloboy
console.log(files.match(/hello(?!boy).*/gm));

// file dengan ekstensi gif atau jpg
console.log(files.match(/.*(gif|jpg)/gm));

// file dengan nama berawalan pic, ekstensi gif atau jpg
console.log(files.match(/pic.*(gif|jpg)/gm));
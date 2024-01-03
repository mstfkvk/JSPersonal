// --> Creation 2 ways 'string literals' or 'string objects'
const str1 = "mustafa kavak"
//const str2 = new String('foo')

// -- UTF-16 code units
// -- index starts from '0'

// when call the methods, automatically converts the string literal to a temporary String object

console.log(str1.charAt(3)); // t
console.log(str1.charCodeAt(0)); // 109
console.log(str1.codePointAt(0)); // 109
console.log(str1.indexOf(' ')); // 7
console.log(str1.lastIndexOf('kavak')); // 8
console.log(str1.lastIndexOf('k')); // 12
console.log(str1.startsWith('k')); // false
console.log(str1.startsWith('k',8)); // true
console.log(str1.endsWith('k')); // true
console.log(str1.includes('ust')); // true

console.log(str1.concat(" javascript")); // mustafa kavak javascript

console.log(str1.split('')); /* [
  'm', 'u', 's', 't',
  'a', 'f', 'a', ' ',
  'k', 'a', 'v', 'a',
  'k'
] */

console.log(str1.split('', 3)); // [ 'm', 'u', 's' ]
console.log(str1.slice(0)); // mustafa kavak
console.log(str1.slice(5)); // fa kavak
console.log(str1.slice(5,10)); // fa ka

console.log(str1.substring(5)); // fa kavak
// console.log(str1.substr(5)); // fa kavak / deprecated

// belows Work with regular expressions.
console.log(str1.match('ust')); // [ 'ust', index: 1, input: 'mustafa kavak', groups: undefined ]
console.log((str1.matchAll('ust'))); // Object [RegExp String Iterator] {}
console.log((str1.replace(' ','+'))); // mustafa+kavak / replaceAll is gone/deprecated
console.log((str1.search('kav'))); // 8 / or return -1 ()
console.log((str1.search('mustafa kavak'))); // 0

// toLowerCase(), toUpperCase()

const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
console.log(name1.normalize()); // Amélie (Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default is "NFC")
console.log((str1.repeat(3))); // mustafa kavakmustafa kavakmustafa kavak
console.log((str1.trim())); // mustafa kavak
console.log((str1.trimEnd())); // mustafa kavak
console.log((str1.trimStart())); // mustafa kavak

// -------------------------------------------0-------------------------------------------

// Internationalization methods (Intl.Collator, Intl.NumberFormat, and Intl.DateTimeFormat)

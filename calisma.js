// function isSymmetrical(num) {
//     let a =	String(num);
//        a = a.split("").reverse().join("");
//        console.log(a ,typeof a)
//        if(num == +a){
//            return true;
//         console.log(a)
//        }else{
//            return false;
//        }
//    }

// isSymmetrical(1112111)


/*********************************/
// const  arr =[4, 5, 8, 7, 0, 1, 10, 15]
// let tek = [];
// let cift = [];
// for(let i=0;i<arr.length; i+=2){
//             if(arr[i]%2 === 0){
//                 cift.push(arr[i])
//             }
//             if(arr[i+1]%2 === 1){
//                 tek.push(arr[i+1])
//             }
// }


// if(tek.length === arr.length/2 && cift.length === arr.length/2){
//         console.log(true)
// }else{
//     console.log(false)
// }	

/************************* */

/*Have the function LetterCount(str) take the str parameter being passed and return the first word with the
greatest number of repeated letters.
For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1.
Words will be separated by spaces.*/ 

// const letterCount = function(str){
//     let newStr = str.split(' ');
//     console.log(newStr)
//     let counter = [];
//     let cnt = 0;
    
//     for(let i=0;i<newStr.length;i++){
//         // console.log(newStr[i]);
//         for(let j=0;j < newStr[i].length;j++){
//                for(let k=j+1; k<newStr[i].length;k++){
//                     if(newStr[i][k] == newStr[i][j]){
//                         cnt++;
//                     }
//                } 
                             
//         }
//         counter.push(cnt); 
//         cnt = 0;
        
//     }
//     return newStr[counter.indexOf(Math.max(...counter))];
// }

// let myScript = `Today, is the greatest day ever!`;
// const result = letterCount(myScript);
// console.log(result)

/****************************************************** */
/*Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.*/

// const runLength = function(str){
//     let arr = str.split("");
//     arr.sort();
//     // console.log(arr)
//     const counts = arr.reduce((acc,value)=>({ ...acc , [value] : (acc[value] || 0) + 1}), {});

//     let result = "";
//     for (const [key, value] of Object.entries(counts)) {
//       result += `${key}${value}, `
//     }
//     return result;
// }


// console.log(runLength("yyosospppoko"));

/********************************************************/
/*Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
Example
For year = 1905, the output should be solution(year) = 20;
For year = 1700, the output should be solution(year) = 17.*/

// const findCent = function(year){
//         let cent;
//     if((year/100)<=1){
//         return 0;
//     }else if(year/100 >1 ){
//         if(year%100 !== 0){
//             cent = Math.floor(year/100) + 1;
//             return cent;
//         }else{
//             cent = Math.floor(year/100);
//             return cent;
//         }
//     }
    
// }

// console.log(findCent(1499))

/****************************************** */
/******string palindrome question******/

// const isPalindrome = str => {
//     str = str.toLowerCase();
//     let cnt=0;
//     if(str.length<=1){
//         return true;
//     }else{
//         for(let i=0; i < Math.ceil(str.length/2);i++){
//             if(str.charAt(i) == str.charAt(str.length - (i+1))){
//                 cnt++;
//             }            
//         }
//         if(str.length%2 == 0){
//             return cnt === Math.floor(str.length / 2) ? true : false;
//         }else{
//             return cnt-1 === Math.floor(str.length / 2) ? true : false;
//         }
        
//     }
// }

// console.log(isPalindrome("iTopiNonAvevanoNipoti"));

/****************************************************** */
/*FirstDuplicate: Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there is more than 1 duplicated number, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.*/

// const firstDuplicate = arr => {
//     let innerArr=[];
//     let counts= []
//     for(let i=0; i<arr.length ; i++){
//         for(let j=i+1; j< arr.length; j++){
//             if(arr[j] === arr[i]){
//                 innerArr.push(arr[j])
//             }
//         }
//     }
    
//     if(innerArr.length !== 0){
//         for (let k = 0; k < innerArr.length; k++) {
//           counts.push(arr.lastIndexOf(innerArr[k]));
//         }
//         return arr[Math.min(...counts)];
//     }else{
//         return -1;
//     }
    
    
// };

// // let b= [1,2,3,4,5]
// let a = [5, 2, 3, 4, 4, 6, 7, 1, 2, 3];
// console.log(firstDuplicate(a));

/*--------------------------------*/
//? FIBONACCI terimleri:  0, 1, 1, 2, 3, 5, 8, 13, 21, ...
//*  Girilen n. terime kadar Fibonacci sayılarının toplamini hesaplayarak yazdiran fonksiyonu Donguler ile kodlayiniz.

// let n1 = 0;
// let n2 = 1;
// let toplam;
// let n = prompt("istediğiniz Fibonacci sayısı");
// for (let i = 1; i < n; i++) {
//   toplam = n1 + n2;
//   n1 = n2;
//   n2 = toplam;
// }
// console.log(`İstediğiniz Fibonacci sayısı:${n2}`);

/*------------------------------------------------------------------------ */
/*Write a JavaScript function that generates all combinations of a string..Example string : 'dog'
Expected Output : d,do,dog,o,og,g*/
//? 1.yontem
// const wordComb = (str) => {
//     let newStr = [];
//     let final = "";

//     for(let i=0; i<str.length ;i++){
//         let word = str.slice(i,str.length);
//         newStr.push(word)
//         // console.log(newStr)
//         for (j = word.length - 1; j > 0; j--) {
//           let word1 = word.slice(0, j);
//           newStr.push(word1);
//         }
//     }

//     // console.log(newStr)
//     // for(k=0; k < newStr.length;k++){
//     //     final = final.concat(newStr[k] , ',');
//     // }
    
//     return final = newStr.join(",");
// }

// console.log(wordComb("kitap"));

//? 2.Yontem
// const combinations = (str = "") => {
//   let temp = "";
//   for (let i = 0; i < str.length; i++) {
//     let int = "";
//     for (let j = i; j < str.length; j++) {
//       int += str[j];
//       temp += int + ",";
//     }
//   }
//   return temp;
// };

// console.log(combinations("kitap"));

/*--------------------------------------------------------*/ 

/* Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5
*/

// const numVowel = (str) => {
//     const vowels = "aeiouAEIOU";
//     let cnt=0;

//     for(let i=0 ; i<str.length ; i++){
//         if(vowels.includes(str[i])){
//             cnt++;
//         }
//     }
//        return cnt;     
// }

// console.log(numVowel("The quick brown fox"));

//? 2.yontem
// const vowelCount = (str) =>{
//     let arr = [];
//     arr = str.match(/[aeiou]/gi)
//     return arr.length;
// }

// console.log(vowelCount("The quicaAAk BROWN fox."));

/*--------------------------------------------------------*/ 

//* *******1******************
// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223
// const donusum = function(number) {
//     let a = number.split("").reverse().join("")
//     return a
// }
// console.log(donusum("32243"))
// *********2*************
// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
    // const palindrome = function(word) {
    //     let a = word.toLowerCase()
    //     let c =a.split("")
    //     let b = c.reverse().join("")
    //     // console.log(b)
    //     if(b===a) {
    //         console.log("palindrome");
    //     }else {
    //         console.log("not palindrome")
    //     }
    // }
    // palindrome("iTopiNonAvevanoNipoti");
    // palindrome("madam");
//    const isPalindrome = (str) => {
//      str = str.toLowerCase();
//      let cnt = 0;
//      if (str.length <= 1) {
//        return true;
//      } else {
//        for (let i = 0; i < Math.ceil(str.length / 2); i++) {
//          if (str.charAt(i) == str.charAt(str.length - (i + 1))) {
//            cnt++;
//          }
//        }
//        if (str.length % 2 == 0) {
//          return cnt === Math.floor(str.length / 2) ? true : false;
//        } else {
//          return cnt - 1 === Math.floor(str.length / 2) ? true : false;
//        }
//      }
//    };
//    console.log(isPalindrome("aiTopiNonAverevanoNipotia"));
// *********3*************
// 3. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
// const enUzun = function(sentence) {
//     let a = sentence.split(" ");
//     console.log(a)
//     let enUzunKelime = ""
//     let hafiza = 0
//     for(let i = 0; i<a.length; i++) {
//         if(a[i].length > enUzunKelime) {
//             enUzunKelime = a[i].length
//             hafiza = i;
//         }
//     }
//     return a[hafiza]
// }
// console.log(  enUzun("Web Development Tutorial"))
// *********4*************
// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
// const sırala = function(word) {
//     return word.split("").sort().join("")
// }
// console.log(  sırala("webmaster"));
// *********5*************
// 5. Write a JavaScript function that accepts a string as a parameter and converts the last letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'thE quicK browN foX '
    // const buyuk = function(sentence) {
    //     let a= sentence.split(" ");
    //     for(let i = 0 ;i<a.length ;i++) {
    //         let b = a[i].split("").reverse()
    //         let c = "";
    //         for(let j = 0; j<b.length; j++) {
    //              if(j==0) {
    //                 c += b[0].toUpperCase();
    //              } else {
    //                   c += b[j];
    //              }
    //         }
    //         c = c.split("").reverse().join("")
    //         a[i]= c
    //     }
    //     console.log(a.join(" "))
    // }
    // buyuk("the quick brown fox");
// *********6*************
// 6. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
// const combinations = (str= '') => {
// let temp='';
// for (let i = 0; i < str.length; i++) {
// let int = '';
// for (let j=i; j < str.length; j++) {
// int += str[j];
// temp += int + ',' ;
// }
// }
// return temp;
// }
// console.log( combinations('dog'))
// 2 çözüm
// const comb = (str) => {
//     let newStr= ""
//     for(let i= 0; i<str.length; i++) {
//         let a = str.slice(i,str.length)
//         newStr += a + " ,"
//         console.log(newStr)
//         for(let j=i; j<newStr.length; j++) {
//             newStr.slice()
//         }
//     }
// }
// comb("dog")
// 2 çözüm
// const wordComb = (str) => {
//   let newStr = [];
//   let final = "";
//   for (let i = 0; i < str.length; i++) {
//     let word = str.slice(i, str.length);
//     newStr.push(word);
//     // console.log(newStr)
//     for (j = word.length - 1; j > 0; j--) {
//       let word1 = word.slice(0, j);
//       newStr.push(word1);
//     }
//   }
//   // console.log(newStr)
//   // for(k=0; k < newStr.length;k++){
//   //     final = final.concat(newStr[k] , ',');
//   // }
//   return (final = newStr.join(","));
// };
// console.log(wordComb("kitap"));
// *********7*************
// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5
    // const numVowel = function(str) {
    //     const vowel= "aeiou"
    //     let cnt =0
    //     for(let i = 0; i<str.length ;i++) {
    //         if(vowel.includes(str[i])) {
    //             cnt++
    //         }
    //     }
    //     return cnt
    // }
    // console.log( numVowel("The quick brown fox"));
    // 2çözüm
//     const a = (str) => {
//         let arr = [];
//         arr = str.match(/[aeiou]/gi);
//         return arr.length
//     }
// console.log(a("The quick brown fox"));
// *********8*************
// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// *********9*************
// 9. soru Array deki en büyük sayıları bulma ekrana yazdırma
// [
//   [4, 5, 1, 3, 7],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1],
// ];
// **************10**********
// 10. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

// const arg = (str) =>  typeof str;
// console.log(arg(12))
// console.log(arg(true))
// console.log(arg("ali"))
// console.log(arg([]))
// console.log(arg())
// console.log(arg( function abc() {return 2}))
// let fonk = function(str) { return str
// }
// console.log(arg(fonk("str")))

// 11. Write a JavaScript function which returns the n rows by n columns identity matrix.
// ******11*****************
// const donusum = (str) => str.split("").reverse().join("")
// console.log( donusum("clarusway Rocks!"))
// ********12************
// const donusum = (str) => str.split(" ").reverse().join(" ");
// console.log(donusum("clarusway Rocks!"));
// console.log(donusum("clarusway"));
// console.log(donusum("Little things make big days"));
// ************13*************
// Asal Sayı BUlma
// const asalSayi =function(num) {
//       if(num<=1) {
//         return false;
//       }
//     else {
//         for(let i = 2; i<num; i++) {
//             if(num % i  ===0 ) {
//                 return false;
//             }
//         } return true;
//     }
// }
// console.log(asalSayi(23) ? "asaldır" : "asal değildir")
// console.log(asalSayi(2) ? "asaldır" : "asal değildir")
// console.log(asalSayi(27) ? "asaldır" : "asal değildir")

// ****************14****************
// dizi içerisinde aynı index değerlerini bulma
// const identity = function(x) {
//     let arr = [];
//     for(let i= 0 ;i<x ;i++){
//         let newArr = [];
//          for(let j = 0; j<x ;j++) {
//             if(i===j) {
//                 newArr.push(1)
//             }else {
//                 newArr.push(0)
//             }
//          }
//          arr.push(newArr)
//     }
//     return arr
// }
// console.log(identity(3))
// console.log(identity(5))
// **************************15*******************
//Dizi de ki enbüyük 2 inci ve en kücük 2 elemanı bul
// const sirala =function(arr) {
//     arr.sort((a,b) => {
//         if(a>b) return 1;
//         if(a<b) return -1;
//         return 0   ;
//     })
//     const newArr = [];
//     newArr.push(arr[1], arr[arr.length-2])
//     return newArr
// }
// console.log( sirala([3,5,12,56,31,9]))
// ************************16****************
// perfect number bölenleriini toplamı kendisine eşit olan sayı
// const perfectNum = function(num) {
//     let sum = 0;
//     for(let i= 1; i<num ;i++){
//         if(num%i ===0) {
//             sum+=i
//         }
//         console.log(sum)
//     }
//     if(sum===num) return `${sum} perfect num'dır`
//     else return `${num} perfect num değildir`;
// }
// console.log( perfectNum(6))
// console.log( perfectNum(11))
// console.log( perfectNum(28))
// console.log( perfectNum(496))

/*--------------------------------------------*/
// Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

//* 1.yontem
// const isArray = (input) => Array.isArray(input);
// console.log(isArray([1, 2, 4, 0]));

//2.yontem
// var is_array = (input) => {
//   if (toString.call(input) === "[object Array]") return true;
//   return false;
// };
// console.log(is_array("w3resource"));
// console.log(is_array([1, 2, 4, 0]));

/*--------------------------------------------*/
// Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

// const cloneArray = (arr) => {
//     const newArr = arr.slice(0);
//      return newArr;  
// }

// console.log(cloneArray([1, 2, [4, 0]]));

// let y = x.map((i) => i);
// let y = Array.from(x);
// let y = [...x];

/*--------------------------------------------*/

//  Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

// const firstArr = (arr , n = null) => {
//     if(n<0){
//         return [];
//     }else if(arr === []){
//         return arr
//     }else if(n>0 && n<arr.length){
//         return arr.slice(0,n);
//     }else if(n > arr.length){
//         return arr.slice(0);
//     }else if(n === null){
//         return arr.at(0);
//     }
// }

// console.log(firstArr([7, 9, 0, -2]));

/*--------------------------------------------*/
// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. 
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

// const lastElement = (arr , n = null) => {
//     if(n<0){
//         return [];
//     }else if(arr === []){
//         return arr;
//     }else if(n>0 && n<arr.length){
//         return arr.slice(-n);
//     }else if(n > arr.length){
//         return arr.slice(0);
//     }else if(n === null){
//         return arr.at(-1);
//     }
// }

// console.log(lastElement([7, 9, 0, -2]));

/*--------------------------------------------*/

// Write a simple JavaScript program to join all elements of the following array into a string. 
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

// const myString = (arr) => {
//      return arr.join("+");
// }

// const myColor = ["Red", "Green", "White", "Black"];

// console.log(myString(myColor))

/*--------------------------------------------*/
//Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

// const dashedNum = (num) => {
//     const arr =("0" + num.toString()).split("");

//     for(let i=0; i<arr.length; i++){
//          if(Number(arr[i])%2 ===0 && Number(arr[i+1])%2===0){
//             arr.splice(i+1,0,'-')
//          }
//      }
//       return arr.join("")
// } 

// console.log(dashedNum(025468982))

/*--------------------------------------------*/

//Write a JavaScript program to sort the items of an array.
//Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//Sample Output : -4,-3,1,2,3,5,6,7,8

// const sortNum = (arr) => {
//     return arr.sort((a,b)=>a-b).join();
// }

// var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// console.log(sortNum(arr1))

/*--------------------------------------------*/

// Write a JavaScript program to find the most frequent item of an array. 
//Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//Sample Output : a ( 5 times )

// const mostFreq = (arr) => {
//     let cnt = 0;
//      let newArr = [];
//     for(let i=0; i<arr.length;i++){              
//         for(let j=i; j<arr.length ; j++){
//             if(arr[i] === arr[j]){
//                 cnt++;
//             }
//         }
//          newArr.push(cnt);
//          cnt=0;      
//     }
//     // console.log(newArr)

//     const max = Math.max(...newArr);
//     const index = newArr.indexOf(max);

//     return `${arr[index]} , ${max} times`;
// }

// console.log(mostFreq([3, "b", 2, "a", 2, 3, 3, "a", 2, 4, 9, 2]));

// //2.yontem
// var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// var mf = 1;
// var cnt = 0;
// var item;
// for (var i = 0; i < arr1.length; i++) {
//   for (var j = i; j < arr1.length; j++) {
//     if (arr1[i] == arr1[j]) cnt++;
//     if (mf < cnt ) {
//       mf = cnt;
//       item = arr1[i];
//     }
//   }
//   cnt = 0;
// }
// console.log(item + " ( " + mf + " times ) ");

/*--------------------------------------------*/
// Roman to Integer
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.
// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

//SOLUTION
let roman = {
    I :1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000
};

const hesapla = (rom) => {
  let total = 0;
  const arr = rom.split("");
        console.log(arr)
    for (let i = 0; i < arr.length;i++) {
            if(roman[arr[i]] < roman[arr[i+1]]){
                total -= roman[arr[i]];
            }else{
                total += roman[arr[i]];
            }
     }
 return total;
};
console.log(hesapla("LVIII"));

/*************************************** */
//  Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'

// const wordSwap = (str) => {
//     const arr = str.toUpperCase().split(" ");
//     let newArr = [];
    
//     for(let word of arr){
//         let newWord = "";
//         for(let i in word){
//             if(i == 0){
//               newWord += word[i].toLowerCase() + word.slice(i+1);
//             }
        
//         }
//         newArr.push(newWord)
//     }
//     return newArr.join(" ");
// }

// console.log(wordSwap("The Quick Brown Fox"));

/*************************************** */
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// const hesapla = (nums, target) => {
//   let newNums = [];
//   for (let i = 0; i < nums.length; i++) {
//     let fark = target - nums[i];
//     for (let j = 0; j < nums.length; j++) {
//       if (fark === nums[j]) {
//         newNums.push(nums.indexOf(nums[i]));
//         newNums.push(nums.indexOf(nums[j]));
//         return newNums;
//       }
//     }
//   }
// };
// hesapla([2, 7, 11, 15], 9);

/*************************************** */
// Question-2
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not

// const palindrome = (num) =>{
//     const a = Number(num.toString().split("").reverse().join(""));
//     if(a===num) {
//         return true
//     }else{
//         return false;
//     }
// }
// console.log( palindrome(121))

/*************************************/

//! Q-1
//? Ask the user to input a number. Check the input of the user, if it is not a valid number
//? then keep getting input from the user until provides a valid number.

// const validNumber = () => {
//     let num = prompt('enter a valid number');

//     if(Number(num)){
//         return "It is a valid number";
//     }else{
//         return validNumber();
//     }
// }

// console.log(validNumber());

//! Q-2
//? Write a JavaScript program to compute the greatest common divisor (GCD) (OBEB) of two positive integers.

// const findGcd = (num1,num2) => {
//     let gcd;

//         if(num1 === 0 || num2 === 0){
//             return 'please enter a valid number';
//         }

//         for(let i =1; i <= num1 && i<=num2 ;i++){
//             if(num1%i === 0 && num2 % i === 0){
//                 gcd = i;
//             }
//         }

//     return gcd;
// }

// console.log(findGcd(3,6))

//! Q-3
//? Write a code that displays the factors (tam bolen) of a number entered by the user.

// const factor = (num) => {
//     let arr = [];
//     for(let i =1; i<=num;i++){
//         if(num%i === 0){
//             arr.push(i,-i)
//          }
//     }
//     return arr;
// }

// console.log(factor(12))

//! Q-4
//? Write a code to calculate the factorial of a number entered by the user.

// const factorial = (num) => {
//     if(num < 0) return -1;
//     if(num === 0){
//         return 1;
//     }else{
//         return num * factorial(num-1)
//     }
// }

// console.log(factorial(4));

//! Q-5
//? Write a code to find numbers that are divisible by 3 and 5, between 100 and 1000.
// const divisible = () => {
//     let arr = [];
//     for(let i=100; i<1000; i++){
//         if(!(i%3) && !(i%5)){
//             arr.push(i);
//         }
//     }
//     return arr;
// }

// console.log(divisible())

//! Q-6
//? Write a code that prints a multiplication table of numbers 1 to 10.

// const multiplication = () =>{
//     let arr = [];
//         for(let i = 1; i <=10 ; i++){
//             arr.push(`multiplication table of ${i}`)
//             for(let k=0; k<=10; k++){
//                 arr.push(`${i}*${k} = ${i*k}` )
//             }
//         }
//     return arr;
// }

// console.log(multiplication())

//! Q-7
//? Write a code to draw Whiteball and Powerball numbers for the Powerball lottery game. 
//? 5 Whiteball numbers are chosen from 01 to 69 and 1 Powerball number is chosen from 1 to 26.

// const powerball = () => {
//     let powerball = Math.floor(Math.random() * 26) + 1;
//     let whiteball = [];

//     for(let i=1; i<=5; i++){
//         let random = Math.floor(Math.random() * 69) + 1;
//         whiteball.push(random);
//     }

//     return `${whiteball.join(',')} , ${powerball}`
// }

// console.log(powerball())

//! Q-8
//? Write a Function that takes 2 parameters (amount and rate) to convert currency.


//! Q-9
//? Write a JavaScript function that accepts an argument and returns the type.

//! Q-10
//? You are given a string and character. Write a function to check the string and find how many
//? times this character occurs in this string.
//? Example:
//? str = "Clarusway"         char = "a"       ===> result = 2 as "a" occurs 2 times in Clarusway

//! Q-11
//? Write a JS code to display Perfect Numbers from 1 to 1000.
//? A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.
//? For instance, 6 has divisors 1, 2 and 3 (excluding itself), and 1 + 2 + 3 = 6, so 6 is a perfect number.


//! Q-12
//? Develop a guessing game. Randomly generate a number between 0-100. Ask the user to guess that number.
//? The user should have 5 chance to guess the number.
//? If the number entered by the user:
//? is greater than the random number then warn user to decrease,
//? is less than the random number then warn user to increase,
//? is equal to the random number then congratulate the user and tell in how many guesses did the user find the number
//? If user can't find the number in 5 guess then game is lost and display the random number.
//? Hint: you can use this code to generate random number 0-100
//? const winingNumber = Math.round(Math.random() * 100);
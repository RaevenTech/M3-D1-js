/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const intSumOf = (num1, num2) => {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    }
};
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const checkGivenNumbers = (num1, num2) => {
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
        return true;
    }
};
/* 
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
let string = "Hello World";

const removeCharIndex = (str, num) => {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (i !== num) {
            newStr += str[i];
        }
    }
    return newStr;
};
//console.log(removeCharIndex("Hello World", 6));
/*
4)
 Create a function to find the largest of three given integers.
*/
//let arrInt = [21, 220, 330];
const findLargest = (int1, int2, int3) => {
    if (int1 > int2 && int1 > int3) {
        return int1;
    } else if (int2 > int1 && int2 > int3) {
        return int2;
    } else {
        return int3;
    }
};
//console.log(findLargest(5, 7, 9));
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const checkRange = (num1, num2) => {
    if ((num1 >= 40 && num1 <= 60) || (num2 >= 40 && num2 <= 60)) {
        return true;
    } else if ((num1 >= 70 && num1 <= 100) || (num2 >= 70 && num2 <= 100)) {
        return true;
    } else {
        return false;
    }
};

//console.log(checkRange(60, 80));
/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/
let str = "hello world";

const numberOfCopies = (str, num) => {
    return str.repeat(num);
};
// console.log(numberOfCopies(str, 4));

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const cityName = (str) => {
    if (str.startsWith("Los") || str.startsWith("New")) {
        return str;
    } else {
        return "Blank";
    }
};
//console.log(cityName("Boston"));
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
let myArray = [10, 2200, 5];

const sumOfThree = (arr) => {
    let sum = arr[0] + arr[1] + arr[2];
    return sum;
};
//console.log(sumOfThree(myArray));
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

let myArray2 = [1, 2];
const checkArray = (arr) => {
    //  if (arr[0] === 1 || arr[1] === 1 || arr[0] === 3 || arr[1] === 3) {
    //      return true;
    //  } else {
    //      return false;
    //  }
    if (arr.includes(1) || arr.inculdes(3)) {
        return true;
    } else {
        return false;
    }
};
//console.log(checkArray(myArray2));

/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
let myArray3 = [1, 2];
const checkNegArray = (arr) => {
    if (arr[0] === 3 || arr[1] === 3 || arr[0] === 1 || arr[1] === 1) {
        return false;
    } else {
        return true;
    }
};
//console.log(checkNegArray(myArray3));
/*
11)

Create a function to find the longest string from a given array of strings.
*/
let myArray4 = ["one", "three", "five"];

const findLargestStr = (str1, str2, str3) => {
    if (str1 > str2 && str1 > str3) {
        return str1;
    } else if (str2 > str1 && str2 > str3) {
        return str2;
    } else {
        return str3;
    }
};
//console.log(findLargestStr(myArray4[0], myArray4[1], myArray4[2]));
//console.log(findLargestStr(myArray4));

const getLongestString = (arr) => {
    const temp = [];
    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i].length);
    }
    const largest = [...temp].sort((a, b) => b - a)[0];
    const index = temp.indexOf(largest);
    return arr[index];
};
console.log(
    getLongestString([
        "dkfjvb",
        "lisdhfvb",
        "iebf",
        "eirbf",
        "jhfdvjw",
        "kshvb",
    ])
);
/*
12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/
const typeOfAngle = (angle) => {
    if (angle >= 0 && angle < 90) {
        return "Acute angel";
    } else if (angle === 90) {
        return "Right Angle";
    } else if (angle > 90 && angle < 180) {
        return "obtuse angle";
    } else if (angle === 180) {
        return "straight angle";
    } else {
        return "Angle larger than 180 degrees";
    }
};
// console.log(typeOfAngle(181));
/*
13)

Create a function to find the index of the greatest element of a given array of integers
*/

/*
14)

Create a function to get the largest even number from an array of integers.

16)

Create a function to check from two given integers, whether one is positive and another one is negative.

17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/

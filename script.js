//loop problem solving
//question 1
let x = +prompt("Enter A Number");
let y = +prompt("Enter A Number");
if (x == 15 || y == 15 || (x + y) == 15) {
    alert("true");
} else {
    alert("false");
}
//question 2
let a = +prompt("Enter A Number");
if (a > 0 && Math.sqrt(a) % 1 === 0) {
    alert("It's A Perfect Square");
} else {
    alert("It's Not A Perfect Square");
}
//string problem solving
//question 1 
let n = +prompt("Enter A Number");
let result = n.toString().split('').reverse().join('');
prompt(result);
//question 2
function areStringsEqualIgnoreCase(string1, string2) {
    let lowerCaseString1 = string1.toLowerCase();
    let lowerCaseString2 = string2.toLowerCase();
    return lowerCaseString1 === lowerCaseString2;
}

let string1 = prompt("Enter A Word");
let string2 = prompt("Enter A Word");

if (areStringsEqualIgnoreCase(string1, string2)) {
    console.log("A Match");
} else {
    console.log("Not A Match");
}
//question 3
function isAllUppercase(string) {
    return string.toUpperCase() === string;
}

let string = prompt("Enter A Word");

if (isAllUppercase(string)) {
    console.log("The string is all uppercase.");
} else {
    console.log("The string is not all uppercase.");
}
//array problem solving
//question 1
let num = +prompt("Enter A Number");
num = num.toString().split('').reverse().join('');
num = num % 10;
alert(num);
//question 2
function countNumbers(array) {
    let positiveCount = 0;
    let negativeCount = 0;
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positiveCount++;
        } else if (array[i] < 0) {
            negativeCount++;
        }
        if (array[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    return [positiveCount, negativeCount, evenCount, oddCount];
}

const numbers = [1, -2, 0, 3, -4, 5];
const res = countNumbers(numbers);
console.log("Positive numbers:", result[0]);
console.log("Negative numbers:", result[1]);
console.log("Even numbers:", result[2]);
console.log("Odd numbers:", result[3]);


//question 3
let arraay = [1, 2, 3, '4', undefined, 'a', [], null];
function onlyNumbers(arr) {
    let output = [];
    arr.forEach(e => { if (typeof (e) === 'number') { output.push(e) } })
    return output
}
console.log(onlyNumbers(arraay));
//question 4
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
//question 5
function largestOfFour(arr) {
    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > largest) {
                largest = arr[i][j];
            }
        }
    }

    return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//question 6
function abbreviateStrings(strings) {
    if (strings.length <= 10) {
        return strings;
    } else {
        return strings[0] + (strings.length - 2) + strings[strings.length - 1];
    }
}
//question 7
let MAX_CHAR = 26;
function checkCorrectOrNot(s) {
    let count1 = new Array(MAX_CHAR);
    let count2 = new Array(MAX_CHAR);
    for (let i = 0; i < MAX_CHAR; i++) {
        count1[i] = 0;
        count2[i] = 0;
    }
    let n = s.length;
    if (n == 1)
        return true;
    for (let i = 0, j = n - 1; i < j; i++, j--) {
        count1[s[i] - 'a']++;
        count2[s[j] - 'a']++;
    }
    for (let i = 0; i < MAX_CHAR; i++)
        if (count1[i] != count2[i])
            return false;
    return true;
}
let s = "abab";
if (checkCorrectOrNot(s))
    document.write("Yes");
else
    document.write("No");
//question 8
function isCWin(board, c) {
    let win = new Array(new Array(0, 1, 2),
        new Array(3, 4, 5),
        new Array(6, 7, 8),
        new Array(0, 3, 6),
        new Array(1, 4, 7),
        new Array(2, 5, 8),
        new Array(0, 4, 8),
        new Array(2, 4, 6));
    for (let i = 0; i < 8; i++)
        if (board[win[i][0]] == c &&
            board[win[i][1]] == c &&
            board[win[i][2]] == c)
            return true;
    return false;
}
function isValid(board) {
    let xCount = 0;
    let oCount = 0;
    for (let i = 0; i < 9; i++) {
        if (board[i] == 'X') xCount++;
        if (board[i] == 'O') oCount++;
    }
    if (xCount == oCount || xCount == oCount + 1) {
        if (isCWin(board, 'O')) {
            if (isCWin(board, 'X'))
                return false;
            return (xCount == oCount);
        }
        if (isCWin(board, 'X') &&
            xCount != oCount + 1)
            return false;
        return true;
    }
    return false;
}
let board = new Array('X', 'X', 'O', 'O',
    'O', 'X', 'X', 'O', 'X');
if (isValid(board))
    document.write("Given board is valid");
else
    document.write("Given board is not valid");
//question 9
function findCharacterIndices(array, character) {
    let firstIndex = -1;
    let lastIndex = -1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === character) {
            if (firstIndex === -1) {
                firstIndex = i;
            }
            lastIndex = i;
        }
    }

    return [firstIndex, lastIndex];
}
//question 10
function checkConsecutiveSum(array, target) {
    let left = 0;
    let right = 0;
    let currentSum = 0;

    while (right < array.length) {
        currentSum += array[right];

        while (currentSum > target) {
            currentSum -= array[left];
            left++;
        }

        if (currentSum === target) {
            return true;
        }

        right++;
    }

    return false;
}
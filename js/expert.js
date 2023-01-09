const getLettersFromDigit = (num) => {
  let letterArray;

  switch (num) {
    case 2:
      letterArray = ["a", "b", "c"];
      break;
    case 3:
      letterArray = ["d", "e", "f"];
      break;
    case 4:
      letterArray = ["g", "h", "i"];
      break;
    case 5:
      letterArray = ["j", "k", "l"];
      break;
    case 6:
      letterArray = ["m", "n", "o"];
      break;
    case 7:
      letterArray = ["p", "q", "r", "s"];
      break;
    case 8:
      letterArray = ["t", "u", "v"];
      break;
    default:
      letterArray = ["w", "x", "y", "z"];
  }
  return letterArray;
};

export const letter_combinations = (str) => {
  const regExp = /[2-9]/;
  const lettersGrid = [];
  let count = 0;

  str.split("").forEach((el) => {
    if (!regExp.test(el)) {
      count++;
    }
  });

  if (count !== 0)
    return "You must enter a string with digits from 2 through 9.";

  str.split("").forEach((el) => {
    lettersGrid.push(getLettersFromDigit(+el));
  });

  for (let i = 0; i < lettersGrid.length; i++) {}

  return lettersGrid;
};

const getUnitString = (number) => {
  let unitString;

  switch (number) {
    case 0:
      unitString = "zero";
      break;
    case 1:
      unitString = "one";
      break;
    case 2:
      unitString = "two";
      break;
    case 3:
      unitString = "three";
      break;
    case 4:
      unitString = "four";
      break;
    case 5:
      unitString = "five";
      break;
    case 6:
      unitString = "six";
      break;
    case 7:
      unitString = "seven";
      break;
    case 8:
      unitString = "eight";
      break;
    default:
      unitString = "nine";
  }
  return unitString;
};

const getTenString = (number) => {
  let tenString;

  switch (number) {
    case 2:
      tenString = "twenty";
      break;
    case 3:
      tenString = "thirty";
      break;
    case 4:
      tenString = "forty";
      break;
    case 5:
      tenString = "fifty";
      break;
    case 6:
      tenString = "sixty";
      break;
    case 7:
      tenString = "seventy";
      break;
    case 8:
      tenString = "eighty";
      break;
    case 9:
      tenString = "ninety";
      break;
  }
  return tenString;
};

const getTenOneString = (number) => {
  let oneString;

  switch (number) {
    case 0:
      oneString = "ten";
    case 1:
      oneString = "eleven";
      break;
    case 2:
      oneString = "twelve";
      break;
    case 3:
      oneString = "thirteen";
      break;
    case 4:
      oneString = "fourteen";
      break;
    case 5:
      oneString = "fifteen";
      break;
    case 6:
      oneString = "sixteen";
      break;
    case 7:
      oneString = "seventeen";
      break;
    case 8:
      oneString = "eighteen";
      break;
    default:
      oneString = "nineteen";
      break;
  }
  return oneString;
};

export const numToEng = (num) => {
  const numString = num + "";
  const numStringLength = numString.length;

  if (numStringLength > 3)
    return "You must enter a number that has a max length of 3 characters.";

  const unitChar = +numString.charAt(numStringLength - 1);
  const tenChar =
    numStringLength !== 1 ? +numString.charAt(numStringLength - 2) : undefined;
  const hundredChar =
    numStringLength !== 1 && numStringLength !== 2
      ? +numString.charAt(numStringLength - 3)
      : undefined;

  const number = {
    unitChar,
    tenChar,
    hundredChar,
  };

  const unitString = getUnitString(number.unitChar);

  const tenString =
    number.tenChar === undefined || number.tenChar === 0
      ? ""
      : number.tenChar === 1
      ? getTenOneString(number.unitChar) + " "
      : getTenString(number.tenChar) + " ";

  const hundredString =
    number.hundredChar === undefined || number.hundredChar === 0
      ? ""
      : `${getUnitString(number.hundredChar)} hundred `;

  return `${hundredString}${tenString}${tenChar === 1 ? "" : unitString}`;
};

export const join = (arr = undefined) => {
  if (arr === undefined) return "You must enter an array.";
  if (arr.length === 0)
    return "You must enter an array with values inside of it.";

  const response = [];
  const arrSharedLetter = [];
  response.push(arr[0]);
  arr.forEach((el, index, arr) => {
    if (index > 0) {
      let count = 0;
      const firstPosition = arr[index - 1];
      const splitedFirstPosition = firstPosition.split("");
      const secondPosition = el;
      const splitedSecondPosition = secondPosition.split("");

      for (let i = 1; i <= splitedFirstPosition.length; i++) {
        if (
          splitedFirstPosition.slice(-i).join("") ===
          splitedSecondPosition.slice(0, i).join("")
        ) {
          count = splitedFirstPosition.slice(-i).length;
          arrSharedLetter.push(count);
        }
      }

      for (let i = 0; i < count; i++) {
        splitedSecondPosition.shift();
      }

      response.push(splitedSecondPosition.join(""));
    }
  });

  const minimumValue = Math.min(...arrSharedLetter);
  return [
    response.join(""),
    arr.length === 1 || arrSharedLetter.length === 0 ? 0 : minimumValue,
  ];
};

const letterToNumber = (grid, letter) => {
  let number;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === letter.toUpperCase()) {
        number = (i + 1).toString() + (j + 1).toString();
      }
      if (grid[i][j] instanceof Array) {
        if (
          grid[i][j][0] === letter.toUpperCase() ||
          grid[i][j][1] === letter.toUpperCase()
        ) {
          number = (i + 1).toString() + (j + 1).toString();
        }
      }
    }
  }
  return number;
};

const numberToLetter = (grid, num) => {
  const firstPosition = +num[0];
  const secondPosition = +num[1];

  const letter =
    grid[firstPosition - 1][secondPosition - 1] instanceof Array
      ? "I"
      : grid[firstPosition - 1][secondPosition - 1];

  return letter;
};

export const polybius = (str) => {
  const grid = [
    ["A", "B", "C", "D", "E"],
    ["F", "G", "H", ["I", "J"], "K"],
    ["L", "M", "N", "O", "P"],
    ["Q", "R", "S", "T", "U"],
    ["V", "W", "X", "Y", "Z"],
  ];

  const splittedStr = str.split("");
  const splittedStrSpace = splittedStr.filter((el) => el !== " ");
  const splittedStrLength = splittedStrSpace.length;
  let response = "";
  let strIsNumber;
  let count = 0;
  let aux = "";

  splittedStrSpace.forEach((el) => {
    if (/[0-9]/.test(+el)) {
      count++;
    }
  });

  if (count !== 0 && count !== splittedStrLength)
    return "You must enter a string with all the elements are numbers or all elements are letters.";

  strIsNumber = count === splittedStrLength;

  if (strIsNumber) {
    splittedStr.forEach((el) => {
      if (el === " ") {
        response += " ";
      } else {
        aux += el;
        if (aux.length === 2) {
          response += numberToLetter(grid, aux);
          aux = "";
        }
      }
    });
    response = response.toLowerCase();
  } else {
    splittedStr.forEach((el) => {
      if (el === " ") {
        response += " ";
      } else {
        response += letterToNumber(grid, el);
      }
    });
  }

  return response;
};

export const bitwiseIndex = (arr = undefined) => {
  if (arr === undefined) return "You must introduce an array.";
  if (arr.length === 0) return "The array can't be empty.";

  let count = 0;
  arr.forEach((el) => {
    if (Math.sign(el) === 1 && el % 2 === 0) {
      count++;
    }
  });

  if (count === 0) return "No even integer found!";

  const sortedArr = [...arr].sort((a, b) => b - a);
  const sortedEvenArr = [...sortedArr].filter((el) => el % 2 === 0);

  const maxElement = sortedEvenArr[0];
  let ind;
  let stop = 0;

  arr.forEach((el, index) => {
    if (el === maxElement && stop === 0) {
      ind = index;
      stop = 1;
    }
  });
  return { [`@even index ${ind}`]: maxElement };
};

const clickedObj = [];
const isTheObject = (object, el) => {
  const sameMarkObj = [];
  for (const key in object) {
    if (object[key].marks === el.marks) {
      sameMarkObj.push({ ...object[key], ind: key });
    }
  }
  const response = sameMarkObj.sort((a, b) => b.age - a.age);

  if (clickedObj.includes(response[0].ind)) {
    return { ...response[0], isItAlready: true };
  } else {
    clickedObj.push(response[0].ind);
    return { ...response[0], isItAlready: false };
  }
};

export const getObject = (obj) => {
  const dataObject = [];
  let gettingObj = {};

  for (const key in obj) {
    const aux = isTheObject(obj, obj[key]);
    dataObject.push(aux);
  }

  let index = 0;
  const anotherDataObject = dataObject.filter(
    ({ isItAlready }) => !isItAlready
  );
  anotherDataObject.forEach((el) => {
    delete el.ind;
    delete el.isItAlready;
    gettingObj = {
      ...gettingObj,
      [`${index++}`]: { ...el },
    };
  });
  return gettingObj;
};

export const countChocolates = (str1, str2) => {
  const splittedStr1 = str1.split("");
  const splittedStr2 = str2.split("");
  let stringMoney = "";
  let stringPrice = "";
  splittedStr1.forEach((el) => {
    if (/[0-9]/.test(+el) || el === "-") {
      stringMoney += el;
    }
  });
  splittedStr2.forEach((el) => {
    if (/[0-9]/.test(+el)) {
      stringPrice += el;
    }
  });

  const money = +stringMoney;
  const price = +stringPrice;

  if (money <= 0) return "Invalid Input.";

  let count = 0;
  let chocoAmount = 0;
  for (let i = price; i <= money; i += price) {
    chocoAmount++;
    count++;
    if (count === 3) {
      chocoAmount++;
      count = 0;
    }
  }
  return chocoAmount;
};

export const nicoCipher = (message, key) => {
  let count = 0;
  const messageLenth = message.length;
  const keyLength = key.length;
  const splittedMessage = message.split("");
  const splittedKey = key.split("");
  const orderedKey = [...splittedKey].sort();
  const orderedPositionKey = orderedKey.map((el, index) => [el, index + 1]);
  const positionKey = [];
  const response = [];

  const number = messageLenth / keyLength;

  for (let i = 0; i < number; i++) {
    const arr = Array(keyLength).fill(" ");
    response.push(arr);
  }

  splittedKey.forEach((el) => {
    orderedPositionKey.forEach((ele) => {
      if (el === ele[0]) {
        if (!positionKey.includes(ele[1])) {
          positionKey.push(ele[1]);
        }
      }
    });
  });

  for (let i = 0; i < response.length; i++) {
    const message = splittedMessage.splice(0, keyLength);
    for (let j = 0; j < positionKey.length; j++) {
      response[i][positionKey[j] - 1] =
        message[j] !== undefined ? message[j] : " ";
    }
  }

  let finalResponse = "";

  response.forEach((el) => {
    finalResponse += el.join("");
  });

  return finalResponse;
};

export const movingParticles = (arr) => {
  if (arr.length === 0)
    return "No particles are in the list, you must enter an array.";
  if (arr.length === 1) return arr;

  let responseArr = [];

  arr.forEach((el) => {
    if (responseArr.length === 0) {
      responseArr.push(el);
    } else {
      const lastElement = responseArr[responseArr.length - 1];
      if (Math.sign(lastElement) === -1) {
        responseArr.push(el);
      } else {
        if (Math.sign(el) === 1) {
          responseArr.push(el);
        } else {
          responseArr.pop();
          if (Math.abs(lastElement) < Math.abs(el)) {
            responseArr.push((Math.abs(lastElement) + Math.abs(el)) * -1);
          } else {
            responseArr.push(Math.abs(lastElement) + Math.abs(el));
          }
        }
      }
    }
  });
  return responseArr;
};

export const maxDistance = (str) => {
  const splittedStr = str.split("");
  const occupiedSlot = [];
  const distance = [];
  splittedStr.forEach((el, index) => {
    if (el === "1") {
      occupiedSlot.push(index);
    }
  });
  for (const i in occupiedSlot) {
    if (+i !== 0 && +i !== occupiedSlot.length - 1) {
      distance.push(Math.ceil((+occupiedSlot[+i] - +occupiedSlot[+i - 1]) / 2));
    } else {
      if (+i === 0) {
        distance.push(occupiedSlot[+i] - i);
      }
      if (+i === occupiedSlot.length - 1) {
        distance.push(splittedStr.length - 1 - +occupiedSlot[+i]);
        if (+i !== 0) {
          distance.push(
            Math.ceil((+occupiedSlot[+i] - +occupiedSlot[+i - 1]) / 2)
          );
        }
      }
    }
  }
  const distMax = Math.max(...distance);
  return distMax;
};

const moveToLeft = (grid) => {
  const responseGrid = [];
  const initial = grid[0].length - 1;
  for (let i = initial; i >= 0; i--) {
    const aux = [];
    for (let j = 0; j < grid.length; j++) {
      aux.push(grid[j][i]);
    }
    responseGrid.push(aux);
  }
  return responseGrid;
};

export const clockwiseCipher = (str) => {
  const splittedStr = str.split("");
  const strLength = splittedStr.length;
  const square = Math.ceil(Math.sqrt(strLength));
  let workingGrid = [];

  for (let i = 0; i < square; i++) {
    workingGrid.push(Array(square).fill(" "));
  }

  let i = 0;
  let j = 0;
  let rotation = 0;
  splittedStr.forEach((el, index) => {
    if (index === 0) {
      workingGrid[i][j] = el;
      workingGrid = moveToLeft(workingGrid);
      rotation++;
    } else {
      if (rotation % 4 === 0) {
        j++;
      }
      if (rotation === (square - 1) * 4) {
        i++;
        j = i;
        rotation = 0;
      }
      workingGrid[i][j] = el;
      workingGrid = moveToLeft(workingGrid);
      rotation++;
    }
  });

  const newRotation = rotation > 4 ? rotation % 4 : 4 - rotation;

  for (let i = 0; i < newRotation; i++) {
    workingGrid = moveToLeft(workingGrid);
  }

  const responseArray = [];

  workingGrid.forEach((el) => {
    responseArray.push(...el);
  });

  return responseArray.join("");
};

const getLetterFromNumber = (num) => {
  let letter;

  switch (num) {
    case 0:
      letter = "A";
      break;
    case 1:
      letter = "B";
      break;
    case 2:
      letter = "C";
      break;
    case 3:
      letter = "D";
      break;
    case 4:
      letter = "E";
      break;
    case 5:
      letter = "F";
      break;
    case 6:
      letter = "G";
      break;
    default:
      letter = "H";
      break;
  }
  return letter;
};

const createChessBoard = () => {
  const chessArray = [];
  for (let i = 0; i < 8; i++) {
    const auxLetter = [];
    for (let j = 0; j < 8; j++) {
      auxLetter.push(`${getLetterFromNumber(i)}${j + 1}`);
    }
    chessArray.push(auxLetter);
  }
  return chessArray;
};

const movingKnights = (square, grid) => {
  let position1;
  let position2;
  const movingResponse = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === square) {
        position1 = i;
        position2 = j;
      }
    }
  }

  if (position1 - 2 >= 0 && position2 - 1 >= 0) {
    movingResponse.push(grid[position1 - 2][position2 - 1]);
  }
  if (position1 - 2 >= 0 && position2 + 1 <= 7) {
    movingResponse.push(grid[position1 - 2][position2 + 1]);
  }
  if (position1 - 1 >= 0 && position2 - 2 >= 0) {
    movingResponse.push(grid[position1 - 1][position2 - 2]);
  }
  if (position1 - 1 >= 0 && position2 + 2 <= 7) {
    movingResponse.push(grid[position1 - 1][position2 + 2]);
  }
  if (position1 + 1 <= 7 && position2 - 2 >= 0) {
    movingResponse.push(grid[position1 + 1][position2 - 2]);
  }
  if (position1 + 1 <= 7 && position2 + 2 <= 7) {
    movingResponse.push(grid[position1 + 1][position2 + 2]);
  }
  if (position1 + 2 <= 7 && position2 - 1 >= 0) {
    movingResponse.push(grid[position1 + 2][position2 - 1]);
  }
  if (position1 + 2 <= 7 && position2 + 1 <= 7) {
    movingResponse.push(grid[position1 + 2][position2 + 1]);
  }

  return movingResponse;
};

export const knightsJump = (square) => {
  const chessBoard = moveToLeft(createChessBoard());
  const response = movingKnights(square, chessBoard);
  const orderedResponse = [...response].sort(
    (a, b) => a.charAt(1) - b.charAt(1)
  );
  return orderedResponse.join(",");
};

const buildingAlphabet = (arr) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const responseArray = [...arr];

  alphabet.forEach((el) => {
    if (!responseArray.includes(el)) {
      responseArray.push(el);
    }
  });

  return responseArray;
};

export const condiCipher = (message, key, shift) => {
  const keysWithoutDuplicateLetter = Array.from(new Set(key.split("")));
  const finalKey = buildingAlphabet(keysWithoutDuplicateLetter);

  const finalMessage = [];
  let position = shift;

  message.split("").forEach((el) => {
    if (!/^[a-z]/g.test(el)) {
      finalMessage.push(el);
    } else {
      finalKey.forEach((ele, index, alphabet) => {
        if (el === ele) {
          position += index;
          let interPosition;
          if (position > 25) {
            interPosition = (position % 25) - 1;
          }
          const newChar = alphabet[interPosition || position];
          finalMessage.push(newChar);
          position = interPosition || index + 1;
        }
      });
    }
  });

  return finalMessage.join("");
};

const esPrimeNumber = (value) => {
  const factors = [];
  let count = 0;
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      count++;
      factors.push(i);
    }
  }
  return [count === 0, factors];
};

export const expressFactors = (num) => {
  if (num <= 1 || num >= 10000)
    return "You must enter a value contained between 1 and 10,000.";
  if (esPrimeNumber(num)[0]) return `"${num}"`;

  const factors = esPrimeNumber(num)[1];

  const primeFactors = factors.filter((el) => esPrimeNumber(el)[0]);
  const accumulator = (accum, el) => accum * el;
  const multiplyFactors = primeFactors.reduce(accumulator, 1);
  const operationResult = num / multiplyFactors;

  if (operationResult !== 1) primeFactors.push(operationResult);
  primeFactors.sort((a, b) => a - b);

  const primeFac = {};
  primeFactors.forEach((el) => {
    if (!primeFac.hasOwnProperty(el)) {
      primeFac[el] = 1;
    } else {
      primeFac[el] += 1;
    }
  });

  let finalResponse = "";
  let countItems = Array.from(new Set(primeFactors)).length;
  let anotherCount = 0;

  for (const i in primeFac) {
    finalResponse += `${anotherCount === 0 ? '"' : ""}${i}${
      primeFac[i] > 1 ? "^" + primeFac[i] : ""
    }`;
    anotherCount++;
    finalResponse += countItems === anotherCount ? '"' : " x ";
  }

  return finalResponse;
};

export const fiscalCode = ({ name, surname, gender, dob }) => {
  let countName = 0;

  name.split("").forEach((el) => {
    if (!/^[A-Z a-z]/.test(el)) {
      countName++;
    }
  });

  if (countName > 0)
    return `The name of the data must be cointaned by vowels and consonants.`;

  const isVowel = (letter) => {
    if (
      letter.toUpperCase().charCodeAt() === 65 ||
      letter.toUpperCase().charCodeAt() === 69 ||
      letter.toUpperCase().charCodeAt() === 73 ||
      letter.toUpperCase().charCodeAt() === 79 ||
      letter.toUpperCase().charCodeAt() === 85
    ) {
      return true;
    } else {
      return false;
    }
  };

  const isConsonant = (letter) => !isVowel(letter);

  const vowelArray = (str) => {
    const response = str
      .split("")
      .filter((el) => isVowel(el))
      .map((el) => el.toUpperCase())
      .join("");
    return response;
  };

  const consonantArray = (str) => {
    const response = str
      .split("")
      .filter((el) => isConsonant(el))
      .map((el) => el.toUpperCase())
      .join("");
    return response;
  };

  const deleteConsonant = (str, position) => {
    const response = [...consonantArray(str)];
    response.splice(position, 1);
    return response;
  };

  const letterSurname =
    surname.length < 3
      ? `${consonantArray(surname).charAt(0)}${vowelArray(surname).charAt(0)}X`
      : consonantArray(surname).length < 3
      ? `${consonantArray(surname).slice(
          0,
          consonantArray(surname).length
        )}${vowelArray(surname).slice(0, 3 - consonantArray(surname).length)}`
      : consonantArray(surname).slice(0, 3);

  const letterName =
    name.length < 3
      ? `${consonantArray(name).charAt(0)}${vowelArray(name).charAt(0)}X`
      : consonantArray(name).length < 3
      ? `${consonantArray(name).slice(
          0,
          consonantArray(name).length
        )}${vowelArray(name).slice(0, 3 - consonantArray(name).length)}`
      : consonantArray(name).length === 3
      ? consonantArray(name).slice(0, 3)
      : deleteConsonant(name, 1).join("");

  const months = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "H",
    7: "L",
    8: "M",
    9: "P",
    10: "R",
    11: "S",
    12: "T",
  };

  const yearDigite = dob.slice(-2);
  const monthNumber = dob.split("/")[1];
  let monthLetter;

  for (const key in months) {
    if (key === monthNumber) {
      monthLetter = months[key];
    }
  }

  const dayNumber = +dob.split("/")[0];

  const lastTwoNumber =
    gender === "M" && dayNumber < 10
      ? `0${dayNumber}`
      : gender === "M" && dayNumber >= 10
      ? dayNumber
      : dayNumber + 40;

  const responseCode =
    letterSurname + letterName + yearDigite + monthLetter + lastTwoNumber;

  return responseCode;
};

const amountAdjacentHash = (initialPos, finalPos, grid) => {
  const minInitialPos = initialPos === 0 ? initialPos : initialPos - 1;
  const maxInitialPos =
    initialPos === grid.length - 1 ? grid.length - 1 : initialPos + 1;
  const minFinalPos = finalPos === 0 ? finalPos : finalPos - 1;
  const maxFinalPos =
    finalPos === grid[0].length - 1 ? grid[0].length - 1 : finalPos + 1;

  let count = 0;

  for (let i = minInitialPos; i <= maxInitialPos; i++) {
    for (let j = minFinalPos; j <= maxFinalPos; j++) {
      if (grid[i][j] === "#") {
        count++;
      }
    }
  }

  return count + "";
};

export const numGrid = (grid) => {
  let i = 0;

  const responseArray = grid.map((el) => {
    let j = 0;
    const intermediateArray = el.map((ele) => {
      let amount = "#";
      if (ele !== "#") {
        amount = amountAdjacentHash(i, j, grid);
      }
      j++;
      return amount;
    });
    i++;
    return intermediateArray;
  });

  return responseArray;
};

const freqArray = [];
let index = 0;

const existIndex = (ind) => {
  let count = 0;
  freqArray.forEach((el) => {
    if (el[0] === ind) count++;
  });
  return count > 0;
};

const updateCountIndex = (ind, eleCounter) => {
  freqArray.forEach((el) => {
    if (el[0] === ind) el[1] += eleCounter;
  });
};

export const freqCount = (arr, num) => {
  let elementCounter = 0;

  arr.forEach((el) => {
    if (el instanceof Array) {
      index++;
      freqCount(el, num);
    }
    if (el === num) {
      elementCounter++;
    }
  });

  if (existIndex(index)) {
    updateCountIndex(index, elementCounter);
  } else {
    freqArray.push([index, elementCounter]);
  }

  index--;
  return freqArray.sort();
};

export const hexLattice = (num) => {
  const numArray = [];
  let accum = 0;
  let sum = 0;

  for (let i = 2; accum <= Math.round(num / 2); i++) {
    numArray.push(i);
    accum = numArray.reduce((accumulator, el) => accumulator + el, 0);
  }
  let sliceArray = numArray.slice(0, numArray.length - 1);
  const reverseSliceArray = [...sliceArray].reverse();
  const asistArr = [...numArray, ...reverseSliceArray];

  if (asistArr[0] === 2 && sliceArray.length === 1) sliceArray = [...numArray];
  console.log(numArray);
  while (asistArr[0] !== sliceArray.length) {
    asistArr.pop();
    asistArr.shift();
  }

  sum = asistArr.reduce((accumulator, el) => accumulator + el, 0);
  const isHexagonal = sum === num;

  return sum;
};

export const tapCode = (str) => {
  const grid = [
    ["A", "B", ["C", "K"], "D", "E"],
    ["F", "G", "H", "I", "J"],
    ["L", "M", "N", "O", "P"],
    ["Q", "R", "S", "T", "U"],
    ["V", "W", "X", "Y", "Z"],
  ];

  if (/[A-Za-z]/.test(str)) {
    let finalKnocks = "";

    const getNumbers = (letter) => {
      const responseNumber = [];
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] instanceof Array) {
            for (let z = 0; z < grid[i][j].length; z++) {
              if (grid[i][j][z] === letter.toUpperCase()) {
                responseNumber.push(i + 1);
                responseNumber.push(j + 1);
              }
            }
          }
          if (grid[i][j] === letter.toUpperCase()) {
            responseNumber.push(i + 1);
            responseNumber.push(j + 1);
          }
        }
      }
      return responseNumber;
    };

    const getKnock = (arr) => {
      const knockArray = arr.map((el) => {
        let knock = "";
        for (let i = 0; i < el; i++) {
          knock += ".";
        }
        return knock;
      });
      return knockArray.join(" ");
    };

    str.split("").forEach((el) => {
      const numArray = getNumbers(el);
      const letterArray = getKnock(numArray);
      finalKnocks += letterArray + " ";
    });
    return finalKnocks;
  } else {
    const numFromKnocks = str.split(" ").map((el) => {
      let num = 0;
      for (let i = 0; i < el.length; i++) {
        num++;
      }
      return num;
    });

    const getLetter = (num1, num2) => {
      return num1 === 1 && num2 === 3 ? "C" : grid[num1 - 1][num2 - 1];
    };

    let world = "";
    for (let i = 0; i < numFromKnocks.length; i += 2) {
      world += getLetter(numFromKnocks[i], numFromKnocks[i + 1]);
    }
    return world.toLocaleLowerCase();
  }
};

export const bishop = (start, end, amount) => {
  /*Validations */
  if (start === end) return true;
  if (start.length !== 2)
    return "You must enter a start value that its length is equals 2";
  if (end.length !== 2)
    return "You must enter a end value that its length is equals 2";
  if (amount < 0)
    return "You must enter a amount value that is equals or greater than 0";

  const regExp = /[a-h]{1}[1-8]{1}/;
  if (!regExp.test(start))
    return "You must enter a start value that contains only one letter (a-h) and one number from 1 to 8. Ex: 'a1'.";
  if (!regExp.test(end))
    return "You must enter a end value that contains only one letter (a-h) and one number from 1 to 8. Ex: 'b1'.";

  /* Building a chess board */
  const board = Array(8).fill("");
  const letter = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let count = 8;

  const filledBoard = board.map((el) => {
    const mapEl = [];
    for (let i = 0; i < letter.length; i++) {
      mapEl.push(`${letter[i]}${count}`);
    }
    count--;
    return mapEl;
  });
  return filledBoard;
};

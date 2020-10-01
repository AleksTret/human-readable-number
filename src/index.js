module.exports = function toReadable(number) {
    let firstTwenty = Array.from(firstTwentyAlphabet);
    let decimals = Array.from(decimalsAlphabet);
    let bigNumbers = Array.from(bigNumbersAlphabet);

    if(number === 0)
        return firstTwenty[number];

	function smallNumbers(number){
		return 0 < number && number < 20 ? firstTwenty[number] : "" ;
	}
  
    function middleNumbers(number){
  	    return 2 <= number && number < 10 ? decimals[number - 2] : "";
    }
  
    return number.toString().split("").map((item, index, array) => {
        switch(array.length - index){
          case 3:
            return smallNumbers(item) + " " + bigNumbers[0];
        case 2:
            return item > 1 ?  middleNumbers(item) : undefined;
        case 1:
            return array[index - 1] == 1 ? 
                  smallNumbers(array[index - 1] + item) :
              smallNumbers(item);
        }
    }).filter(item => item !== undefined).join(" ").trim();
}

let firstTwentyAlphabet = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    length: 20
}

let decimalsAlphabet ={
    0: "twenty",
    1: "thirty",
    2: "forty",
    3: "fifty",
    4: "sixty",
    5: "seventy",
    6: "eighty",
    7: "ninety",
    length: 8
}

let bigNumbersAlphabet = {
    0: "hundred",
    1: "thousand",
    2: "million",
    3: "billion",
    length: 4
}


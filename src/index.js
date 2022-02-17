const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let exprArr = expr.split('**********') // сделал массив из строки. делитель - 10*.
  // console.log (exprArr);
  let resultExpr = []; // результирующий массив раскодированных слов
  exprArr.forEach ((element) => { // для каждого элемента массива (строки) делим ее на подмассивы по 10 символов
        // console.log (element);
      let codeSymbol = element.match(/.{1,10}/g) // закодирвоанный символ
      let decodeStr = ''; // раскодированное слово
      codeSymbol.forEach((element) => { // для каждого закодированного символа убираем парные 00, заменяем парные 11 на тире,
          // парные 10 - на точки
          let morzeCode = element.replace(/00/g, '').replace(/11/g, '-').replace(/10/g, '.');
          // console.log (morzeCode);
          let resultSymbol = findMatch(MORSE_TABLE, morzeCode); // заменяем код морзе на букву/ цифру
          // console.log ('after: ' + resultSymbol);
          decodeStr = decodeStr + resultSymbol;
      }
      )
      resultExpr.push(decodeStr);
  }
  )

  // console.log (resultExpr);
  let resultString = resultExpr.join(' ');
  // console.log (resultString);
  // ========= поиск совпадения элемента с ключом свойств объекта==============
  function findMatch(object, element) {
    for(let key in object) {
      if (key === element){
        element = object[key]
        return element;
      }
    }

  }
  return resultString;
}

module.exports = {
    decode
}
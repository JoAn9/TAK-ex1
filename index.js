const count = (a, b, c) => {
  const quotient = a/b;
  console.log(quotient);  
  const quotString = quotient.toString();
  const array = quotString.split('').filter(item => item !== '0' && item !== '.');
  let result = array[c - 1];
  // console.log(result);    
  if (result === undefined) {
    result = '0';
  }
  console.log(result);
  return result;
}

count(50000000, 6000000000, 10);
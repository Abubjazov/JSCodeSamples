function createPhoneNumber(numbers) {
  let res = ''
  
  numbers.forEach((elem, index) => {
      if (index === 0) res += '('
      res += elem
      if (index === 5) res += '-'
      if (index === 2) res += ') '
  });
}

function processData(input) {
  let first = ''
  let second = ''
  let counter = -1
  for (let i = 0; i <= input.length; i++) {
    let ascii = input.charCodeAt(i)
    if (ascii == 10 && first == '') {
      i++
      counter = 0
      if (!(counter % 2)) {
        first += input[i]
        counter++
      } else {
        second += input[i]
        counter++
      }
    } else if (ascii > 94 && ascii < 123) {
      counter++
      if (counter % 2) {
        first += input[i]
      } else {
        second += input[i]
      }
    } else if (counter !== -1) {
      console.log(`${first} ${second}`)
      first = ''
      second = ''
      counter = -1
      i--
    }
  }
}

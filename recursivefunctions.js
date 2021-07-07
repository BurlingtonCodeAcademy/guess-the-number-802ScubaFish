function loop(number) {
    console.log(number)
    number += 1
    if (number <= 10) {
       return loop(number)
    }
    else {
        return console.log('done!')
    }
}
console.log('Done!')
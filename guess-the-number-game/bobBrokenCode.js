const readline = require('readline');
const rli = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        rli.question(questionText, resolve)
    });
}

start()

async function start() {

    let myNum = await ask('What is the answer to the ultimate question of life, the universe, and everythig?')
    myNum=parseInt(myNum)
    while(myNum !== 42) {
        myNum = await ask('Hmmm, That doesn\'t seem right. Guess Again.')
    //myNum=parseInt(myNum)
    }
    console.log('Now only if we new the question..')
    process.exit()
}   

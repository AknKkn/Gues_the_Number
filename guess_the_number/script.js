'use strict';

let reference;
let attempts = 3;
function attemptsRemaining() {
    document.querySelector('#state').textContent = String(attempts) + " guess attempts remaining";
}
const randomNumber = Math.floor(16 * Math.random());

attemptsRemaining();

function guessAttempt(parameter) {
    if (attempts !== 0) {


        if (randomNumber - parameter >= 3) {
            document.querySelector('#feedBack').textContent = ('Your guess is too low');
            attempts--;
            attemptsRemaining()
        }

        else if (randomNumber - parameter < 3 && randomNumber - parameter > 0) {
            document.querySelector('#feedBack').textContent = ('Your guess is a bit low');
            attempts--;
            attemptsRemaining()
        }

        else if (randomNumber - parameter <= -3) {
            document.querySelector('#feedBack').textContent = ('Your guess is too high');
            attempts--;
            attemptsRemaining()
        }

        else if (randomNumber - parameter > -3 && randomNumber - parameter < 0) {
            document.querySelector('#feedBack').textContent = ('Your guess is a bit high');
            attempts--;
            attemptsRemaining()
        }




        else {


            document.querySelector('#feedBack').textContent = ('Please make a valid guess');


        }

        if (attempts === 0) {
            document.querySelector('#feedBack').textContent = (`Game over, the number was ${randomNumber}`);
            document.querySelector('#state').textContent = (`Until next time...`);
            document.querySelector('body').style.backgroundColor = '#b93a3a';
        }
        else if (attempts === 1) {
            document.querySelector('body').style.backgroundColor = '#b97c3a';
        }
        else if (attempts === 2) {
            document.querySelector('body').style.backgroundColor = '#b9ac3a';
        }

        if (randomNumber === parameter) {
            attempts--;
            document.querySelector('#feedBack').textContent = ('YOU WON!');
            document.querySelector('body').style.backgroundColor = '#3ab97e';

            if (attempts === 2) {
                document.querySelector('#state').textContent = 'You won the game in ' + (3 - attempts) + " guess";
                document.querySelector('body').style.backgroundColor = '#3ab97e';
            }

            else if (attempts < 2) {
                document.querySelector('#state').textContent = 'You won the game in ' + (3 - attempts) + " guesses";
                document.querySelector('body').style.backgroundColor = '#3ab97e';
            }


        }


    }

}




console.log(randomNumber);
0



document.querySelector('#inputButton').addEventListener('click', function () {

    reference = Number(document.querySelector('#guess').value);

    guessAttempt(reference);


})








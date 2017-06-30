/**
 * Created by Jiizen on 28.06.2017.
 */

// Jiizen - Exercice Fizz Buzz : https://js.checkio.org/mission/fizz-buzz/

function fizzBuzz(nb) {
    if(typeof nb === 'number') {
        if ((nb % 3 === 0) && (nb % 5 === 0)) {
            return "Fizz Buzz";
        }
        else if (nb % 3 === 0) {
            return "Fizz";
        }
        else if (nb % 5 === 0) {
            return "Buzz";
        }
        else {
            return nb.toString();
        }
    } else {
        return "Veuillez rentrer un nombre correct !";
    }
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(6));
console.log(fizzBuzz(5));
console.log(fizzBuzz(7));
console.log(fizzBuzz(true));
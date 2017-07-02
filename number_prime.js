/**
 * Created by Jiizen on 01.07.2017.
 */

// Is The Number A Prime? - https://edabit.com/challenge/oT6fy9Zvtmsnzdcvs

function isPrime(num){
    if(num === 1 || num === 0) {
        return false;
    } else {
        for(var i = num - 1; i > 0; i--) {
            if(num % i === 0 && i !== 1) {
                return false;
            }
        }
    }
    return true;
}

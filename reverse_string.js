/**
 * Created by Jiizen on 01.07.2017.
 */

// Reverse The Order Of A String - https://edabit.com/challenge/oS3wCwLWsDqvs7XKd

function reverse(str) {
    var arrString = str.split("");
    var reverse = arrString.reverse();
    return reverse.join("");
}
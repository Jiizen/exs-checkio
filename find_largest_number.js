/**
 * Created by Jiizen on 01.07.2017.
 */

// Find The LARGEST Number In An Array - https://edabit.com/challenge/HTbRYCmPwfZGnBcxW

function findLargestNum(arr) {
    var largestNumber = 0;
    arr.forEach(function(element) {
        if(element > largestNumber) {
            largestNumber = element;
        }
    });
    return largestNumber;
}
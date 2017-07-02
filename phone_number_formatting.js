/**
 * Created by Jiizen on 02.07.2017.
 */

// Phone Number Formatting - https://edabit.com/challenge/Z6oY6EWwT9rde8YXm

function formatPhoneNumber(numbers) {
    if(numbers.length === 10) {

        numbers.unshift('(');
        numbers[3] += ') ';
        numbers[6] += '-';

        return numbers.join('');
    } else {
        return 'The array doesn\'t contain 10 numbers !';
    }
}
/**
 * Created by Jiizen on 28.06.2017.
 */

// Jiizen - Exercice Even the last : https://js.checkio.org/mission/even-last/
// https://codepen.io/Jiizen/pen/Qgarxm?editors=0011

function evenLast(list) {

    // If the list count between 0 and 20 entries
    var sum = 0;
    if(list.length > 0 && list.length <= 20) {
        list.forEach(function (nb, idx) {

            if (typeof nb === 'number' && nb >= -100 && nb <= 100) {

                if(idx % 2 === 0) {
                    sum += nb;
                }

                if(idx === list.length - 1) {
                    console.log(sum * nb);
                }
            }
        });
    } else if(list.length === 0) {
        console.log(0);
    }
    else {
        console.log("Le nombre d'index est trop grand");
    }
}

evenLast([0, 1, 2, 3, 4, 5]);
evenLast([1, 3, 5]);
evenLast([6]);
evenLast([]);
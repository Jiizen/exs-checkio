/**
 * Created by Jiizen on 28.06.2017.
 */

// Jiizen - Exercice Event the last : https://js.checkio.org/mission/even-last/
// https://codepen.io/Jiizen/pen/Qgarxm?editors=0011

// En cours

function eventLast(list) {

    // If the list count between 0 and 20 entries
    var sum = 0;
    if(list.length >= 0 && list.length <= 20) {
        list.forEach(function(idx, nb) {
            if (typeof nb === 'number' && nb >= -100 && nb <= 100) {
                switch(idx) {
                    case idx % 2 === 0:
                        sum += nb;
                        break;
                    default:
                        console.log('Le nombre est invalide');
                }

                if(nb.length !== list.length) {
                    console.log(sum * nb);
                }
            }
        });
    } else if(len(list) === 0) {
        console.log(0);
    }
    else {
        console.log("Le nombre d'index est trop grand");
    }
}

eventLast([0, 1, 2, 3, 4, 5]);
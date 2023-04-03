/**
 * @param {number[]} arr
 * @return {number[]}
 */
var prevPermOpt1 = function(arr) {
    let exchange = []
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > arr[i+1]) {
            exchange.push(i)
            break;
        }
    }
    if (exchange !== []) {
        exchange.push(exchange[0] + 1);
        for (let i = exchange[0] + 1; i < arr.length; i++) {
            if(arr[i] < arr[exchange[0]]) {
                exchange[1] = arr[i] > arr[exchange[1]] ? i : exchange[1];
            }
        }
        let temp = arr[exchange[0]];
        arr[exchange[0]] = arr[exchange[1]];
        arr[exchange[1]] = temp;
    }
    return arr;
};

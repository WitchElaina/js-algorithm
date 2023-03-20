/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function(s, a, b) {
    const shift = (s, b) => {
      return s.slice(s.length - b) + s.slice(0, s.length - b);
    }

    const add = (s, a, i) => {
        let res = s.split('');
        for (; i < s.length; i += 2) {
          res[i] = String((Number(res[i]) + a) % 10);
        }
        return res.join('');
    }

    const all = [s];
    let shifted = s;
    while (shift(shifted, b) !== s) {
        shifted = shift(shifted, b);
        all.push(shifted);

    }

    let len = all.length;
    for(let i = 0; i < len; i++) {
        let added = all[i];
        for (let j = 0; j < 10; j++) {
            added = add(added, a, 1);
            if(b % 2 === 1) {
                for (let k = 0; k < 10; k++) {
                    added = add(added, a, 0);
                    all.push(added);
                }
            }
            else {
                all.push(added);
            }
        }
    }

    return all.sort()[0];
};
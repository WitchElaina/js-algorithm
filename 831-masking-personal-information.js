/**
 * @param {string} email
 * @return {string}
 */
function maskEmail(email) {
    let lower = email.toLowerCase().split('@');
    return lower[0].split('')[0] + '*****' + lower[0].split('')[lower[0].length - 1] + '@' + lower[1];
}

/**
 * @param {string} phoneNum
 * @return {string}
 */
function maskPhone(phoneNum) {
    num = phoneNum.split(/[\+\(\)\- ]/).join('');
    let ret = '***-***-' + num.substring(num.length - 4, num.length);
    let countryNum = ''
    for (let i = 0; i < num.length - 10; i++) {
        if (i === 0)
            countryNum += '+';
        countryNum += '*';
    }
    return countryNum === '' ? ret : countryNum + '-' + ret;
}

/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function(s) {
    // judge
    for (let i = 1; i <= s.length; i++) {
        if (s[s.length - i] === '@')
            return maskEmail(s);
    }
    return maskPhone(s);
};

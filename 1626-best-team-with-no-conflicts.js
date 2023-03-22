// https://leetcode.cn/problems/best-team-with-no-conflicts/

/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
    // storage data in obj
    let sortedMem = [];
    for(let i=0;i<scores.length;i++) {
        sortedMem.push({
            score: scores[i],
            age: ages[i],
            total: 0
        })
    }

    // sort by age, if age equal by score, <
    sortedMem.sort((a, b) => {
        if(a.age === b.age)
            return a.score - b.score;
        return a.age - b.age;
    })

    // cal
    // sortMem[i].total = sortedMem[i].score + sortedMem[j].total
    // sortMem[j] is the element before sortMem[i] which sortMem[i] can contain and has max total
    //      can contain: score < i, otherwise will have conflict
    //      max total:
    let ans = 0;
    for(let i=0;i<sortedMem.length;i++) {
        // search all element before i
        for(j=i-1;j>=0;j--) {
            // make sure i can contain
            if(sortedMem[j].score <= sortedMem[i].score) {
                // if max, replace, otherwise continue search
                sortedMem[i].total = Math.max(sortedMem[i].total, sortedMem[j].total);
            }
        }
        // cal final [i].total
        sortedMem[i].total += sortedMem[i].score;
        // update ans
        ans = Math.max(sortedMem[i].total, ans);
    }

    return ans;
};
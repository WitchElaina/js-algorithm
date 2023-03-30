/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    points.sort((a,b)=>{return b[0]-a[0];});
    let ans = 0;
    for(let i=0;i<points.length-1;i++) {
        ans = Math.max((points[i][0]-points[i+1][0]),ans);
    }
    return ans;
};
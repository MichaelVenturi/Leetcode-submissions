/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let max = 0;
    for(const [boxes, amt] of boxTypes){
        if(truckSize <= 0) break;
        max += Math.min(truckSize, boxes) * amt;
        truckSize -= boxes;
    }
    return max;
};
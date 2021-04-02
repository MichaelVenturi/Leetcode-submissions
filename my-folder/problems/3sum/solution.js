/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    

    
    if(nums.length < 3) return [];
    
     const triplets = [];
    
    nums.sort();
    
    for(let i = 0; i < nums.length - 2; i++){
        
        if(nums[i] === nums[i-1]) continue;
        
        
        for(let j = i + 1; j < nums.length - 1; j++){
            for(let k = j + 1; k < nums.length; k++){
               
                
                
            
                if(nums[i] + nums[j] + nums[k] === 0){
                    let triplet = [nums[i], nums[j], nums[k]].sort();
                    triplets.push(triplet);
                   
                    while(k < nums.length && nums[k] === nums[k+1]){
                        k++;
                    }
                    
                }
                
               
                
              
            }
            while(j < nums.length - 1 && nums[j] === nums[j+1]){
                j++;
            }
        }
        
    }
    
    
    return triplets;
    
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        console.log(map)
        const compare = target - nums[i]
        if (map.has(compare)) {
            console.log(map.get(compare))
            return [map.get(compare), i]
        }
        map.set(nums[i], i)
    }
}

twoSum([2, 11, 11, 7], 9)

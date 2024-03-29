from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        x = len(nums)
        i = 0
        if x <= 1:
            return x
        for j in range(1, len(nums)):
            if nums[i] != nums[j]:
                i += 1
                nums[i] = nums[j]
        return i + 1

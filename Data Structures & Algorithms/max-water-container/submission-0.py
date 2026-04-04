class Solution:
    def maxArea(self, heights: List[int]) -> int:

        left = 0
        right = len(heights) - 1
        max_water = 0

        while left < right:
            width = right - left
            length = 0

            if heights[left] < heights[right]:
                length = heights[left]
                left += 1
            else:
                length = heights[right]
                right -= 1
            max_water = max(max_water, width * length)
        
        return max_water

        
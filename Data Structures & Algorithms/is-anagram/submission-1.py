class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        s_list = list(s)
        t_list = list(t)

        print(t_list)

        t_list.sort()
        s_list.sort()
        left, right = 0, 0

        if len(s) != len(t):
            return False

        while left < len(s):
            if t_list[left] != s_list[right]:
                return False
            left += 1
            right += 1
        return True

        
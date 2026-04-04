class Solution:
    def isPalindrome(self, s: str) -> bool:
        left = 0
        s = s.lower()
        right = len(s) - 1
        while left < right:
            if (97 <= ord(s[left]) <= 122 or 48 <= ord(s[left]) <= 57) and (97 <= ord(s[right]) <= 122 or 48 <= ord(s[right]) <= 57):
                if s[left] != s[right]:
                    return False
                left+=1
                right-=1
            else:
                if 57 < ord(s[left]) < 97 or ord(s[left]) > 122 or ord(s[left]) < 48:
                    left+=1
                else:
                    right-=1
        return True
        
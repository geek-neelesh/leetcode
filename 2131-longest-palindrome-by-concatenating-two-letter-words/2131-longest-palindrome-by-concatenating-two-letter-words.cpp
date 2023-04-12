class Solution {
public:
int longestPalindrome(vector<string>& words) {
        int len = 0;
        int count = 0;
        bool flag = 0;
     
        unordered_map<string,int> mp;
        for(int i = 0;i<words.size();i++)
        {
            mp[words[i]]++;
        }
     
        for(int i = 0;i<words.size();i++)
        {
            if(words[i][0] != words[i][1])
            {
              string s = "";
              s += words[i][1];
              s += words[i][0];
              if(mp.find(s) != mp.end())
              {
                count = min(mp[words[i]],mp[s]);
                len += count*4;
              }
              mp.erase(words[i]);
              mp.erase(s);
            }
            else if(words[i][0] == words[i][1])
            {
                count = mp[words[i]];
                if(mp[words[i]]%2==0)
                {
                    len += count*2;
                }
                else{
                    if(flag==0)
                    {
                      len += count*2;
                      flag = 1;
                    }
                    else{
                        len += (count-1)*2;
                    }
                }
                mp.erase(words[i]);
            }
        }
        return len;
    }
};
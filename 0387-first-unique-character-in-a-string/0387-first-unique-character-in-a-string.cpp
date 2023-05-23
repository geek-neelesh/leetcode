class Solution {
public:
    int firstUniqChar(string s) {
        unordered_map<char,int>map;
        int ind=0;
        for(int i=0;i<s.size();i++){
            map[s[i]]++;
            if(map[s[ind]]>1){
                ind++;
                while(ind<s.size()&& map[s[ind]]>1){
                    ind++;
                }
                if(ind==s.size())return -1;
            }
        }
        return ind;
        
        
    }
};
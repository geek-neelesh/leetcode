class Solution {
public:
    vector<string> commonChars(vector<string>& words) {
        unordered_map<char,int>minimumFrequencyOverAllWords;
        for(char ch='a';ch<='z';ch++) {
            minimumFrequencyOverAllWords[ch]=1000;
        }
        for(auto singleWord:words){
            unordered_map<char,int>frequency;
            for(auto ch:singleWord){
                frequency[ch]++;
            }
            for(char ch='a';ch<='z';ch++){
                
                minimumFrequencyOverAllWords[ch]=min(minimumFrequencyOverAllWords[ch],frequency[ch]);
                

            }
        }
        vector<string>ans;
        for(char ch='a';ch<='z';ch++){
            while(minimumFrequencyOverAllWords[ch]>0){
                ans.push_back(string(1,ch));
                minimumFrequencyOverAllWords[ch]--;
            }

        }
        return ans;
        
    }
};
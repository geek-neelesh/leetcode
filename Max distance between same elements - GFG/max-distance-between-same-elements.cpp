//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution{
    public:
    // your task is to complete this function
    int maxDistance(int arr[], int n)
    {
      unordered_map<int,int>OccurenceMap;
      int maxSoFar=0;
      for(int i=0;i<n;i++){
          int firstNumber=arr[i];
          if(OccurenceMap.find(firstNumber)!=OccurenceMap.end()){
               maxSoFar=max(maxSoFar,i-OccurenceMap[firstNumber]);
          }
          else{
              OccurenceMap[firstNumber]=i;
          }
      }
      return maxSoFar;
    
    }
};

//{ Driver Code Starts.

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n;
        cin>>n;
        int arr[n];
        for(int i=0; i<n; i++)
            cin>>arr[i];
        Solution ob;
        cout<<ob.maxDistance(arr,n)<<endl;
    }
    return 0;
}
// } Driver Code Ends
class Solution {
public:
    int leastBricks(vector<vector<int>>& wall) {
         unordered_map<int, int> cracks;
    int rows = wall.size();
    // storing inside the crack map
    for (int row = 0; row < rows; row++)
    {
        // Distance of the crack
        int crackDistance = 0;
        // now, we traverse each row till second last element
        for (int bricks = 0; bricks < wall[row].size() - 1; bricks++)
        {
            crackDistance += wall[row][bricks];
            cracks[crackDistance]++;
        }
    }
    // intialise the minCuts to number of coulmns in wall array
    int minCuts = rows;
    for (auto it : cracks)
    {
        int distance_of_crack = it.first;
        int number_of_rows_crack_present_in = it.second;
        minCuts = min(minCuts, rows - number_of_rows_crack_present_in);
    }
    return minCuts;
    }
};
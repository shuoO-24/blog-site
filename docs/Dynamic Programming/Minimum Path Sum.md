---
sidebar_position: 2
id: LeetCode64
title: 64. Minimum Path Sum — Medium
---
# 64. Minimum Path Sum — Medium

Given a `m x n` `grid` filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

**Note:** You can only move either down or right at any point in time.

**Example 1:**

![img](https://assets.leetcode.com/uploads/2020/11/05/minpath.jpg)

```
Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
```

**Example 2:**

```
Input: grid = [[1,2,3],[4,5,6]]
Output: 12
```


**Constraints:**

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 200`
- `0 <= grid[i][j] <= 100`

---

## 思路

`dp[m][n]`记录到达当前格子时所能获得的最小值；

### "Bottom Up"

⚠️ 不可以fill `dp` with grid values！—— 要不`dp[m][n]`永远都会等于格子本身的值

for循环依次遍历vector，从第一个格子开始，**依次确定下一步的方向**。

这一题更适合用「自顶向下」思路考虑每个格子的`dp[m][n]`的由来：

* 对于每一个格子来说，要想在下一步保持和最小，要么往下，与下面的格子相加，要么往右，与右边的格子相加；
* 换句话说，要想获得当前格子的`dp[m][n]`，我们只能回头找它的上一个格子，通过比较确定到底是上面的格子还是左边的格子；

⚠️ 每个格子的`dp[m][n]`只能通过上一步的`dp[m][n]`获得（除了起点）

我们接下来可以「自底向上」，用这个思路从起点往前推进，确定下一步要走的格子的`dp[m][n]`。

所以得到状态转移方程：

* 对于`grid[m][n]`：
  * `dp[m + 1][n] = min(dp[m][n] + grid[m + 1][n], dp[m + 1][n])`
  * `dp[m][n + 1] = min(dp[m][n] + grid[m][n + 1], dp[m][n + 1])`

```cpp
int minPathSum(vector<vector<int>>& grid) {
        if(grid.size() == 0) return 0;
        vector<vector<int>> dp(grid.size(), vector<int>(grid[0].size(), 0));
        
        for(int i = 0; i < grid[0].size(); i++) {
            if(i == 0) dp[0][i] = grid[0][i];
            else dp[0][i] = dp[0][i - 1] + grid[0][i];
        }
        for(int i = 1; i < grid.size(); i++) {
            dp[i][0] = dp[i - 1][0] + grid[i][0];
        }
        for(int i = 1; i < dp.size(); i++) {
            for(int j = 1; j < dp[0].size(); j++) {
                dp[i][j] = grid[i][j] + min(dp[i - 1][j], dp[i][j - 1]);
            }
        }
        return dp[dp.size() - 1][dp[0].size() -1];
    }
```

运行时间: 8 ms, 81.37% 运行内存：10.2 MB, 17.91% 

#### "Top Down"

从后往前遍历：

* `m = grid.size() - 1`, `n = grid[0].size() - 1`

* `for (int row = m; row >= 0; row--)` and `for (int col = n; col >= 0; col--)` 
* 对于边界值：`if (row == m)`，到达最后一行，要想前进只能改变列数，所以是`dp[row][col] = dp[row][col + 1] + grid[row][col];`，到达最后一列时同理

```cpp
    int minPathSum(vector<vector<int>>& grid) {
        int m = grid.size() - 1, n = grid[0].size() - 1;
        int dp[200][200]; 
        
        for (int row = m; row >= 0; row--){
            for (int col = n; col >= 0; col--){
                if (row == m && col == n) {
                    // reach last cell
                    dp[row][col] = grid[row][col];
                    continue;
                }
                // initialize boundary cells -- only one path, just add up
                if (row == m) {
                    // last row
                    dp[row][col] = dp[row][col + 1] + grid[row][col];
                } 
                else if (col == n) {
                    // last column
                    dp[row][col] = dp[row + 1][col] + grid[row][col];
                }
                else{
                    dp[row][col] grid[row][col] + min(dp[row + 1][col], dp[row][col + 1]);
                }
            }
        }
        return dp[0][0];
    }
```

运行时间：8.0ms, 81.37% 运行内存：9800KB, 64.50%



### Debug

#### max…...

` Line 1034:Char 34:runtime error: addition of unsigned offset to...`

![error](https:/tva1.sinaimg.cn/large/008i3skNgy1gr24yfdy9ej30wa058q4b.jpg)

<!-- <img src="https://tva1.sinaimg.cn/large/008i3skNgy1gr24yfdy9ej30wa058q4b.jpg" alt="image-20210531104402678" style='zoom:50%'/> -->


```cpp
    int minPathSum(vector<vector<int>>& grid) {
        // dp[m][n]记录到达当前格子时所能获得的最大值
        int m = grid.size(), n = grid[0].size();
        vector<vector<int>> dp = grid;

        for (int row = 0; row < m; row++){
            for (int col = 0; col < n; col++){
                dp[row][col] += max(dp[row - 1][col], dp[row][col - 1]);
            }
        }
        return dp[m - 1][n - 1];
    }
```



#### Buffer Overflow

不该把备忘录初始化成数组的值

`==31==ERROR:AddressSanitizer: heap-buffer-overflow on address 0x60200000011c at pc…`

```cpp
int minPathSum(vector<vector<int>>& grid) {
  int m = grid.size(), n = grid[0].size();
  vector<vector<int>> dp = grid;
  dp[0][0] = grid[0][0];
        for (int row = 0; row < m; row++){
            for (int col = 0; col < n; col++){
                dp[row + 1][col] = min(dp[row + 1][col] + grid[row][col], dp[row + 1][col]);
                dp[row][col + 1] = min(dp[row][col] + grid[row][col + 1], dp[row][col + 1]);
            }
        }
  return dp[m - 1][n - 1];
}
```






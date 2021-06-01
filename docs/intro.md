---
sidebar_position: 1
---

# SQL

export const Highlight = ({children, color}) => (
<span
style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
onClick={() => {
alert(`You clicked the color ${color} with label ${children}`)
}}>
{children}
</span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !

# 91. Decode Ways — Medium

A message containing letters from `A-Z` can be **encoded** into numbers using the following mapping:

```
'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
```

To **decode** an encoded message, all the digits must be **grouped** then **mapped** back into letters using the **reverse** of the mapping above (there may be **multiple** ways). For example, `"11106"` can be mapped into:

- `"AAJF"` with the grouping `(1 1 10 6)`
- `"KJF"` with the grouping `(11 10 6)`

Note that the grouping `(1 11 06)` is invalid because `"06"` cannot be mapped into `'F'` since `"6"` is different from `"06"`.

Given a string `s` containing only digits, return _the **number** of ways to **decode** it_.

The answer is guaranteed to fit in a **32-bit** integer.

**Example 1:**

```
Input: s = "12"
Output: 2
```

Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).

**Example 2:**

```
Input: s = "226"
Output: 3
```

**Explanation**: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

**Example 3:**

```
Input: s = "0"
Output: 0
```

**Explanation**: There is no character that is mapped to a number starting with 0.
The only valid mappings with 0 are 'J' -> "10" and 'T' -> "20", neither of which start with 0.
Hence, there are no valid ways to decode this since all digits need to be mapped.

**Example 4:**

```
Input: s = "06"
Output: 0
```

**Explanation**: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").

**Constraints:**

- `1 <= s.length <= 100`
- `s` contains only digits and may contain leading zero(s).

---

> #### 心得
>
> 1. 大晚上做题脑子非常不清醒，十分低效，不如直接睡觉
> 2. 动规思路没有固定下来，没有形成第一时间思考状态转移方程的习惯
> 3. 多动手 debug 确定如何处理所有边界情况 —— 有时可以对原始数据直接进行处理，比如整体后移或者 copy 到新数组上
> 4. 三叶大佬 yyds。“算法只能不断地刷题，总结，没有捷径的。”
> 5. 类似的题目（需要格外注意边界情况）要列清楚所有边界情况，分点处理；分析要做到下面 👇 这种程度[^1]：
>    ![image.png](https://pic.leetcode-cn.com/c09dc70d3085792b2b8417843e297f6841fd12f921b0e4fe28a2c4a8dc86dd1e-image.png)

---

## 思路

**边界**情况：⚠️ 把数组长度设为`n+1`，才能从 `dp[i - 2] `得到记录

- 遍历范围是$[1, n]$

- 一些恼人的边界值：
  - `1201`
  - `12`
  - `10`

对于字符串 `s` 的任意位置 `i` 而言，存在三种情况：

- 只能由位置 `i` 的单独作为一个 `item`，设为 `a`，转移的前提是 `a` 的数值范围为 $[1,9]$，转移逻辑为`dp[i] = dp[i - 1]`。
- 只能由位置 `i` 的与前一位置（`i-1`）共同作为一个 `item`，设为 `b`，转移的前提是 `b` 的数值范围为 $[10,26]$，转移逻辑为 `dp[i] = dp[i] + dp[i - 2]`。
- 位置 `i` 既能作为独立 `item` 也能与上一位置形成 `item`，转移逻辑为 `dp[i] = dp[i - 1] + dp[i - 2]`。

`dp[i] = dp[i - 1]`和`dp[i] += dp[i - 1]`相同，因为`dp`初始值为$0$.

其他细节：由于题目存在前导零，而前导零属于无效 `item`。可以进行特判，但个人习惯往字符串头部追加空格作为哨兵，追加空格既可以避免讨论前导零，也能使下标从 1 开始，简化 `dp[i - 1]` 等负数下标的判断。[^2]

所以转移方程如下：<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gr3friwtdoj30h603sdg4.jpg" alt="image-20210601134331411" style="zoom:50%;" />

### 最终代码

```C++
    int numDecodings(string s) {
        // 如果当前数字和前一个数字能够被解码，那么当前字符串能被解码的方式 >= 去除这两个数字后存在的解码方式数量 If the current number and previous number can be mapped, then res can incorporate the number of ways previous number can be mapped (dp[i - 2])
        // 如果当前数字不为零，那么当前字符串能被解码的方式 = 去除这个数字后存在的解码方式数量
        // 如果当前数字为零，如果前一个数字不是1或2，则结果为0，否则当前字符串能被解码的方式 = 去除这个数字后存在的解码方式数量
        if (s.length() == 0 || s[0] == '0') return 0;
        if (s.length() == 1) return 1;
        int n = s.length();
        s = " " + s;
        vector<int> dp(n + 1,0);

        dp[0] = 1;

        for (int i = 1; i < n + 1; i++){
            int a = s[i] - '0', b = (s[i - 1] -'0')* 10 + (s[i] -'0');
            if (a){
                dp[i] += dp[i - 1];
            }
            if (b >= 10 && b <= 26){
                dp[i] = dp[i] + dp[i - 2];
            }
        }
        return dp[n];
    }
```

运行时间：0 ms, 100.00% 运行内存：6.3 MB, 29.25%

### ❤️ 三木的答案

### Java

```Java
public int numDecodings(String s) {
        int n = s.length();
        s = " " + s;
        char[] cs = s.toCharArray();
        int[] f = new int[n + 1];
        f[0] = 1;
        for (int i = 1; i <= n; i++) {
            // a : 代表「当前位置」单独形成 item
            // b : 代表「当前位置」与「前一位置」共同形成 item
            int a = cs[i] - '0', b = (cs[i - 1] - '0') * 10 + (cs[i] - '0');
            // 如果 a 属于有效值，那么 f[i] 可以由 f[i - 1] 转移过来
            if (1 <= a && a <= 9) f[i] = f[i - 1];
            // 如果 b 属于有效值，那么 f[i] 可以由 f[i - 2] 或者 f[i - 1] & f[i - 2] 转移过来
            if (10 <= b && b <= 26) f[i] += f[i - 2];
        }
        return f[n];
    }
```

### C++

```C++
        int n = s.size();
        s = " " + s;
        vector<int> f(n + 1,0);
        f[0] = 1;
        for(int i = 1; i < n + 1; i++) {
            int a = s[i] - '0', b = (s[i - 1] - '0') * 10 + s[i] - '0';
            if(1 <= a && a <= 9) f[i] = f[i - 1];
            if(10 <= b && b <= 26) f[i] += f[i - 2];
        }
        return f[n];
```

[^1]: https://leetcode-cn.com/problems/decode-ways/solution/gong-shui-san-xie-gen-ju-shu-ju-fan-wei-ug3dd/
[^2]: https://leetcode-cn.com/problems/decode-ways/solution/c-wo-ren-wei-hen-jian-dan-zhi-guan-de-jie-fa-by-pr/

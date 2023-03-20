# js-algorithm

每天一道Medium算法题，用JavaScript实现，题源为[LeetCode](https://leetcode.com/problemset/algorithms/)



你说的对，但是《JavaScript》是由Brendan Eich自主研发的一种全新开放式脚本语言。游戏发生在一个被称作「浏览器」的幻想世界，在这里，被神选中的人将被授予「API」，导引元素(Element)之力。你将扮演一位名为「前端程序员」的神秘角色，在自由的开发中邂逅性能各异、能力独特的框架，和他们一起编写程序，找回失散的Bug——同时，逐步发掘「0面试0offer」的真相。 



## 踩坑

### JS中的数组

使用`[]`索引时如果使用负数会返回`undefined`，而不是倒数第几个元素

```jsx
const arr = [1, 2, 3, 4, 5];
arr[-1];   // undefined
```

### JS中的字符串

JS中字符串时不可变的，不能使用下标索引修改字符串中的字符，如需修改可以先将其转换为数组，修改后再转换为字符串

```jsx
const str = 'abc';
str[0] = 'd'; // 'abc'

// 错误示例
str.split(''); // ['a', 'b', 'c']

// 正确示例
str.split('');
str[0] = 'd';
str.join(''); // 'dbc'
```

### 字符串与数字加法

JS中字符串与数字相加时，数字会被转换为字符串，然后再进行拼接，而非直接进行加法运算，因此如果需要进行加法运算，需要将字符串转换为数字


```jsx  
const str = '1';
const num = 1;
str + num; // '11'
Number(str) + num; // 2

// 对于减法则字符串会自动转换为数字
str - num; // 0
```


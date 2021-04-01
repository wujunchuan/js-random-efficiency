## 测试随机数生成效率问题

### Update

#### 2021年04月01日

- 每次的 seed 的重置

### Node.js 测试结果

node -v -> v10.23.2

```
seedrandom.quick(): 22.289ms
customRandom(): 3.358ms
Math.random(): 0.160ms
---------10-------------
seedrandom.quick(): 21.027ms
customRandom(): 0.468ms
Math.random(): 0.039ms
---------100-------------
seedrandom.quick(): 13.652ms
customRandom(): 0.730ms
Math.random(): 0.081ms
---------1000-------------
seedrandom.quick(): 91.281ms
customRandom(): 7.549ms
Math.random(): 0.284ms
---------10000-------------
seedrandom.quick(): 501.879ms
customRandom(): 23.587ms
Math.random(): 1.137ms
---------100000-------------
seedrandom.quick(): 4970.566ms
customRandom(): 242.157ms
Math.random(): 12.688ms
---------1000000-------------
```


### Chrome 测试结果

Version 89.0.4389.90 (Official Build) (arm64)


```
index.js:17 seedrandom.quick(): 1.007080078125 ms
index.js:27 customRandom(): 0.073974609375 ms
index.js:34 Math.random(): 0.002685546875 ms
index.js:35 ---------10-------------
index.js:17 seedrandom.quick(): 3.8798828125 ms
index.js:27 customRandom(): 0.046875 ms
index.js:34 Math.random(): 0.005859375 ms
index.js:35 ---------100-------------
index.js:17 seedrandom.quick(): 6.03076171875 ms
index.js:27 customRandom(): 0.298095703125 ms
index.js:34 Math.random(): 0.034912109375 ms
index.js:35 ---------1000-------------
index.js:17 seedrandom.quick(): 41.98974609375 ms
index.js:27 customRandom(): 3.534912109375 ms
index.js:34 Math.random(): 0.073974609375 ms
index.js:35 ---------10000-------------
index.js:17 seedrandom.quick(): 365.75390625 ms
index.js:27 customRandom(): 17.106201171875 ms
index.js:34 Math.random(): 0.692138671875 ms
index.js:35 ---------100000-------------
index.js:17 seedrandom.quick(): 3662.8232421875 ms
index.js:27 customRandom(): 174.419921875 ms
index.js:34 Math.random(): 8.068115234375 ms
index.js:35 ---------1000000-------------
```
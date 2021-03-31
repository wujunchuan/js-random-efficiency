## 测试随机数生成效率问题

### Node.js 测试结果

node -v -> v10.23.2

```
seedrandom.quick(): 4.260ms
customRandom(): 3.082ms
Math.random(): 0.142ms
---------10-------------
seedrandom.quick(): 0.173ms
customRandom(): 0.080ms
Math.random(): 0.007ms
---------100-------------
seedrandom.quick(): 3.663ms
customRandom(): 0.546ms
Math.random(): 0.080ms
---------1000-------------
seedrandom.quick(): 6.293ms
customRandom(): 2.258ms
Math.random(): 0.401ms
---------10000-------------
seedrandom.quick(): 1.439ms
customRandom(): 1.719ms
Math.random(): 2.554ms
---------100000-------------
seedrandom.quick(): 10.315ms
customRandom(): 16.180ms
Math.random(): 9.508ms
---------1000000-------------
seedrandom.quick(): 101.893ms
customRandom(): 157.586ms
Math.random(): 80.900ms
---------10000000-------------
seedrandom.quick(): 1021.048ms
customRandom(): 1592.819ms
Math.random(): 810.102ms
---------100000000-------------
```


### Chrome 测试结果

Version 89.0.4389.90 (Official Build) (arm64)


```
index.js:16 seedrandom.quick(): 0.015869140625 ms
index.js:26 customRandom(): 0.02197265625 ms
index.js:33 Math.random(): 0.001953125 ms
index.js:34 ---------10-------------
index.js:16 seedrandom.quick(): 0.051025390625 ms
index.js:26 customRandom(): 0.010986328125 ms
index.js:33 Math.random(): 0.00390625 ms
index.js:34 ---------100-------------
index.js:16 seedrandom.quick(): 0.742919921875 ms
index.js:26 customRandom(): 0.10107421875 ms
index.js:33 Math.random(): 0.03369140625 ms
index.js:34 ---------1000-------------
index.js:16 seedrandom.quick(): 1.59228515625 ms
index.js:26 customRandom(): 0.805908203125 ms
index.js:33 Math.random(): 0.698974609375 ms
index.js:34 ---------10000-------------
index.js:16 seedrandom.quick(): 0.805908203125 ms
index.js:26 customRandom(): 0.6572265625 ms
index.js:33 Math.random(): 1.23583984375 ms
index.js:34 ---------100000-------------
index.js:16 seedrandom.quick(): 7.8720703125 ms
index.js:26 customRandom(): 6.47900390625 ms
index.js:33 Math.random(): 7.25390625 ms
index.js:34 ---------1000000-------------
index.js:16 seedrandom.quick(): 76.218017578125 ms
index.js:26 customRandom(): 69.804931640625 ms
index.js:33 Math.random(): 71.322021484375 ms
index.js:34 ---------10000000-------------
index.js:16 seedrandom.quick(): 798.802978515625 ms
index.js:26 customRandom(): 662.035888671875 ms
index.js:33 Math.random(): 725.7919921875 ms
index.js:34 ---------100000000-------------

```
const Random = require("seedrandom");
const a = Random("chuanpu");

const _ = new Array(8).fill(10).map((i, index) => i * 10 ** index);

_.map((TIMES) => {
  const TEST_SEED_LABEL = `seedrandom.quick()`;
  const TEST_CUSTOM_LABEL = `customRandom()`;
  const TEST_SYSTEM_LABEL = `Math.random()`;

  /* seedrandom */
  console.time(TEST_SEED_LABEL);
  for (let i = 0; i < TIMES; i++) {
    a.quick();
  }
  console.timeEnd(TEST_SEED_LABEL);

  /* custom random */
  function customRandom(seed) {
    return "0." + Math.sin(seed).toString().substr(6);
  }
  console.time(TEST_CUSTOM_LABEL);
  for (let i = 0; i < TIMES; i++) {
    customRandom();
  }
  console.timeEnd(TEST_CUSTOM_LABEL);

  /* system random */
  console.time(TEST_SYSTEM_LABEL);
  for (let i = 0; i < TIMES; i++) {
    Math.random();
  }
  console.timeEnd(TEST_SYSTEM_LABEL);
  console.log(`---------${TIMES}-------------`);
});

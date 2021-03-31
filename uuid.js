const uniqueAlphaNumericId = (() => {
    const heyStack = '0123456789abcdefghijklmnopqrstuvwxyz';
    const randomInt = () => Math.floor(Math.random() * Math.floor(heyStack.length))

    return (length = 24) => Array.from({length}, () => heyStack[randomInt()]).join('');
  })();

const uniqueIncrementingId = ((lastId = 0) => {
  const id = (function* () {
    let numb = lastId;

    while (true) yield (numb += 1);
  })();

  return (length = 12) => `${id.next().value}`.padStart(length, "0");
})();

const uuid = uniqueAlphaNumericId()
/*
Example：
uuid:  7vbhb45pmjvaetktxg001i88
7vbhb45pmjvaetktxg001i88-1
7vbhb45pmjvaetktxg001i88-2
*/
console.log('uuid: ', uuid);
console.log(`${uuid}-${uniqueIncrementingId(1)}`);
console.log(`${uuid}-${uniqueIncrementingId(1)}`);
console.log(`${uuid}-${uniqueIncrementingId(1)}`);
/* Time Machine: use seed to replay random result */
/* uuid <-> uuid-1 <-> uuid-2 <-> uuid-3 ... */

/* If user change color scheme？ or change the layout scheme or other adjust.. */
/* Use Patch to effect the result. */
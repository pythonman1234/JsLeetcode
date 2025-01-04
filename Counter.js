const makeCounter = () => {
  let count = 0;
  
  return () => {
    count++;
    console.log(count);
  }
}

let counter = makeCounter();
counter(); // logs 1
counter(); // logs 2
counter(); // logs 3

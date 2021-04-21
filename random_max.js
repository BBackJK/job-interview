let arr = [];
let max = 0;

const inter = setInterval(() => {
  let result = Math.floor(Math.random() * 100);
  arr.push(result);

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  console.log(max);
}, 1000);

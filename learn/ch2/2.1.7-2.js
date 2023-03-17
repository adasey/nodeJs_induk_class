const condition = true; // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('성공');
    // return new Promise((resolve, reject) => { fail 함
    //   reject('실패');
    // });
  } else {
    reject('실패');
  }
});

promise
  .then((message) => {
    return new Promise((resolve, reject) => {
      resolve("1", message);
    });
  })
  .then((message2) => {
    console.log(message2);
    return new Promise((resolve, reject) => {
      resolve("2", message2);
    });
  })
  .then((message3) => {
    console.log("3", message3);
  })

  .catch((error) => {
    console.error("f", error);
  });

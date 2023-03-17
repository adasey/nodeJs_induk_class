async function findAndSaveUser(Users) {
  // 생략
}

findAndSaveUser().then(() => { /* 생략 */ }); // 성공해야만 실행
// 또는
async function other() {
  const result = await findAndSaveUser();
}

var relationship1 = {
  name: ['zero', 'kero', 'rero'],
  friends: ['nero', 'hero', 'xero'],
  logFriends: function () {
    var that = this; // relationship1을 가리키는 this를 that에 저장
    this.friends.forEach(function (friend) { // this를 물려받지 않기 때문에 this를 사용할 수 없음
      that.name.forEach(function (name) {
        console.log(name, friend);
      });
    });
  },
};
relationship1.logFriends();

const relationship2 = {
  name: ['zero', 'kero', 'rero'],
  friends: ['nero', 'hero', 'xero'],
  logFriends : () => { // 해당 함수가 화살표 함수를 사용하려면
    // 바인딩을 통해 this를 연결해야함
    this.friends?.forEach(friend => { // ? 는 값이 null 경우에도 그냥 실행됨 
      // 화살표 함수를 사용했기 때문에 밑에 this.name이 가능, this가 상속됨
      // 실행이 되지 않고 넘어감
      this.name.forEach(name => {
        console.log(name, friend);
      });
    });
  },
};
relationship2.logFriends();

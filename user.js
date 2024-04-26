// 変数を定義
const suzuki = {
  name: 'taro',
  age: 20
};

// 関数を定義
function addOne(number) {
  return number + 1;
};

// クラスを定義
class yamada {
  name = 'jiro';
  age = 30;
};

// 全てを一つのオブジェクトとしてまとめてexport
export default { suzuki, addOne, yamada };

// 함수 호출 방식

// call of value
// 데이터(값)을 복사해서 함수로 전달하기 때문에 원본의 데이터가 변경 x
// 하지만 인자를 넘겨줄때 마다 메모리의 공간을 할당하기 때문에 메모리 공간을 더 잡아먹음.
let val = 10;

function update(vali) {
  vali += 10;

  console.log(vali);
}

update(val);
console.log(val);

// call of reference
// call of value의 반대 개념. 원본 손상, 메모리 적게 잡는다.
let myObj = {
  val: 10
};

function updateValue(objRef) {
  objRef.value = 20;
}

updateValue(myObj);
console.log(myObj.value);

# List & Key

## map() 함수

- **정의**: `map()`은 JavaScript 배열 메서드로, **배열의 각 요소를 변환**하여 **새로운 배열을 생성**합니다.
- **특징**:
  - 원본 배열은 **변경되지 않음** (immutable).
  - **콜백 함수**를 각 요소에 적용.
- **형식**: `배열.map((요소, 인덱스, 배열) => 반환값)`
- **활용 예시**: React에서 리스트를 **동적으로 렌더링**할 때 자주 사용됨.

## map() 함수 예시 

### 기본 사용법
``` js
const items = ['Apple', 'Banana', 'Cherry'];
function ItemList() {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
export default ItemList 
```
# Forms

## 기본적인 Forms 사용법
- React에서는 onSubmit 이벤트 핸들러를 사용하여 폼 데이터를 처리할 수 있다.
``` js
import { useState } from "react";
function SimpleForm() {
    const [name, setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
        alert(`입력된 이름: ${name}`);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <button type="submit">제출</button>
        </form>
    );
}
export default SimpleForm;
```
## 실습
``` js 
import React, { useState } from "react";
function SignUp(props) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("남자");
    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };
    const handleSubmit = (event) => {
        alert(`이름: ${name}, 성별: ${gender}`);
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br />
            <label>
                성별:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}
export default SignUp;
```
<br>

# Lifting State UP
## 🔼 Lifting State Up 요약

- **정의**: 하위 컴포넌트의 상태를 부모 컴포넌트로 올려서 공유하거나 제어하는 리액트 패턴.
- **이유**: 리액트는 단방향 데이터 흐름을 따르기 때문에, 하위에서 부모 상태를 직접 변경할 수 없음.
- **필요한 경우**:
  - 여러 하위 컴포넌트가 동일한 상태를 공유할 때
  - 부모 컴포넌트가 상태 변경을 직접 처리해야 할 때

###  구현 단계
1. 부모 컴포넌트에 상태 정의
2. 상태 변경 함수를 부모에서 정의하고 하위에 전달
3. 하위 컴포넌트에서 전달받은 함수를 호출하여 부모 상태 변경
4. 변경된 상태를 props로 하위에 다시 전달

핵심: **상태를 공유하고 일관성 있게 관리하기 위해 상태를 부모로 끌어올리는 구조**

- 하위 컴포넌트가 공통된 부모 컴포넌트의 state를 공유

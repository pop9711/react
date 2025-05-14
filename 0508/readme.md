# 📘 React & JavaScript 기초 개념 정리

## 🔹 핸들러(Handler) vs 리스너(Listener)

- **핸들러 = 리스너**
- 이벤트 발생 시 실행되는 **함수**
- 주로 `onClick`, `onChange` 등에 사용됨

---

## 🔹 1급 함수 (First-Class Function)

- 함수를 **변수에 할당** 가능
- 함수를 **파라미터로 전달**하거나, **함수에서 리턴** 가능

```js
const greet = () => console.log("Hello");
const handler = greet; // 함수 할당
```

---

## 🔹 Event Handler (이벤트 핸들러)

- 이벤트가 발생했을 때 실행되는 함수
- **파라미터 전달** 또는 **리턴값 사용** 가능

```js
function handleClick(event) {
  console.log("Clicked!", event);
}
```

---

## 🔹 event.stopPropagation()

- 이벤트 **버블링(상위로 전파)**을 막는 메서드
- 기본적으로 이벤트는 `body`까지 전파됨
- `stopPropagation()`을 사용하면 **상위 요소로의 이벤트 전파 차단**

```js
element.addEventListener("click", function(event) {
  event.stopPropagation();
});
```

---

## 🔹 `is` 접두사 명명 관례

- `isActive`, `isVisible` 등 → **Boolean 값을 의미**
- `false`이면 일반적으로 `true`로 토글 처리

```js
isDarkMode = !isDarkMode;
```

---

## 🔹 명명 규칙 요약

| 명 규칙       | 표기 형식 예시        | 특징                                | 주 사용처                      |
|---------------|------------------------|-------------------------------------|--------------------------------|
| 카멜 케이스   | `myVariableName`       | 첫 단어 소문자, 이후는 대문자      | JS 변수, 함수 등              |
| 파스칼 케이스 | `MyVariableName`       | 모든 단어 첫 글자 대문자           | 클래스명, React 컴포넌트      |
| 스네이크 케이스 | `my_variable_name`    | 전부 소문자, 단어는 `_`로 구분     | Python, DB 필드명             |
| 케밥 케이스   | `my-variable-name`     | 전부 소문자, 단어는 `-`로 구분     | URL, CSS 클래스명             |

---

## 🔹 SyntheticEvent 객체 (React)

- React에서 사용되는 **이벤트 래퍼(wrapper) 객체**
- **브라우저 호환성**을 위해 만들어진 통합 이벤트 시스템
- 네이티브 이벤트를 감싸서 **모든 브라우저에서 동일한 인터페이스 제공**

```js
function handleClick(event) {
  event.preventDefault(); // SyntheticEvent 사용
}
```

---

## 🔹 조건부 렌더링

### ✅ 1. 삼항 연산자

```jsx
{isLoggedIn ? <p>Welcome</p> : <p>Please login</p>}
```

### ✅ 2. `&&` 연산자

```jsx
{isAdmin && <button>Delete</button>}
```

---

## 🔹 자바스크립트 객체 생성 특징

- 중괄호 `{}`만 있어도 객체 생성

```js
const obj = { name: "Alice", age: 25 };
```

---

## 🔹 `??` 널 병합 연산자

- 왼쪽 값이 **null 또는 undefined**일 때만 오른쪽 값을 사용

```js
const age = userAge ?? 20; // userAge가 null이면 20
```

---

## 🔹 엘리먼트 변수

- JSX 코드를 변수로 선언해 조건부 렌더링에 사용

```jsx
const button = <button>Click me</button>;

return (
  <div>
    {isVisible && button}
  </div>
);
```

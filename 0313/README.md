#  JSX (JavaScript XML)

##  JSX란 무엇인가?

**JSX (JavaScript XML)**는 JavaScript에서 **HTML처럼 보이는 문법**으로 UI를 구성할 수 있게 해주는 **React의 확장 문법**입니다.  
JSX는 실제로는 JavaScript 코드이며, 브라우저가 직접 실행할 수 없기 때문에  
**Babel** 등의 트랜스파일러가 JavaScript 코드로 변환해줍니다.

```jsx
const element = <h1>Hello, world!</h1>;
```

##  왜 JSX를 사용하는가?

- **직관적인 UI 구성**  
  HTML처럼 작성할 수 있어서 읽고 이해하기 쉽습니다.

- **논리와 UI를 함께 구성 가능**  
  JavaScript 표현식을 `{}` 안에 삽입하여 동적 UI 구현이 쉽습니다.

- **선언형 프로그래밍과 잘 맞음**  
  “어떻게”보다 “무엇을” 보여줄지에 집중할 수 있습니다.

##  JSX와 일반 JavaScript의 차이

JSX는 **React.createElement()** 호출로 변환됩니다.

```jsx
const element = <h1>Hello, world!</h1>;
```

 트랜스파일 후

```js
const element = React.createElement('h1', null, 'Hello, world!');
```

##  참고

JSX를 사용할 때는 파일 확장자를 `.jsx`로 설정하거나 `.js`에서도 가능하며,  
React 프로젝트에서는 `create-react-app` 등으로 기본적으로 설정되어 있습니다.
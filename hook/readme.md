
# 📘 React Hook 요약 정리 (소플의 처음 만난 리액트)

## 🔹 useEffect()

### ✅ 개념
- 컴포넌트와 외부 시스템 간의 동기화 작업 수행.
- 클래스 컴포넌트의 `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` 대체.
- 대표적인 부수 효과: 데이터 fetching, 구독, DOM 조작, 타이머 등.

### ✅ 문법
```js
useEffect(() => {
  // 실행할 작업
  return () => {
    // 언마운트 시 정리 작업
  };
}, [의존성1, 의존성2]);
```

### ✅ 실행 조건별 예시

| 조건             | 코드                            | 설명                           |
|------------------|----------------------------------|--------------------------------|
| 첫 렌더 시 1회   | `useEffect(() => {...}, [])`     | 마운트 시 1회 실행             |
| 상태 변화 시     | `useEffect(() => {...}, [state])`| 해당 state 변경 시 실행        |
| 매 렌더링 시     | `useEffect(() => {...})`         | 의존성 배열 생략 → 항상 실행  |
| 언마운트 시      | `return () => {...}`             | 제거 직전 cleanup 수행         |

### ✅ 실습 예시 요약
- **Counter3**: 클릭 수에 따라 `document.title` 업데이트
- **Example**: 마운트 시 console 출력
- **Counter4**: count 변경 시 console 출력
- **Timer**: 1초마다 로그 출력 및 정리
- **MouseTracker**: 마우스 좌표 추적
- **FetchData**: API 호출하여 데이터 출력
- **Accommodate**: 수용 인원 상태에 따라 UI 변화

---

## 🔹 useMemo()

### ✅ 개념
- 연산 비용이 큰 함수의 결과를 **memoization**하여 렌더링 최적화
- 동일한 의존성이 유지되면 이전 결과를 재사용

### ✅ 문법
```js
const memoizedValue = useMemo(() => 계산함수(), [의존성]);
```

### ✅ 실습 예시 요약
- **ExpensiveCalculation**:
  - `count`만 변경돼도 무조건 재계산 → 성능 저하
  - useMemo 사용 시 `number` 변경 시에만 계산
- **App2**:
  - `user` 객체를 useMemo로 메모이제이션하여 불필요한 객체 재생성 방지

### ✅ 사용 시점
- 비용이 큰 계산이 있을 때
- 참조형 데이터(객체, 배열)를 캐싱할 때
- 결과를 재사용해야 할 때

### ✅ 주의 사항
- 단순 연산에는 사용 불필요
- 의존성 배열 정확하게 작성 필요
- 계산 함수는 **순수 함수**여야 함

---

## 🔗 참고 링크
- [React 공식 문서 - useEffect](https://react.dev/reference/react/useEffect)
- [React 공식 문서 - useMemo](https://react.dev/reference/react/useMemo)
- [나무위키 - 부작용](https://namu.wiki/w/%EB%B6%80%EC%9E%91%EC%9A%A9)

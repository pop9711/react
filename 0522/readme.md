# Web Programming - React Todo List 프로젝트 정리

## 주요 컴포넌트 개요

| 컴포넌트명 | 기능 설명 |
|------------|----------|
| TodoTemplate | 앱 전체 레이아웃을 감싸는 흰색 박스 |
| TodoHead | 오늘 날짜, 요일, 남은 할 일 개수 표시 |
| TodoList | todos 배열을 map으로 반복 렌더링 |
| TodoItem | 각 할 일 항목 표시, 체크/삭제 가능 |
| TodoCreate | 새로운 할 일 입력창 제공, 폼 토글 기능 포함 |

## 전역 스타일 적용

- `createGlobalStyle` 사용
- body에 `background: #e9ecef;` 회색 배경 적용

## 각 컴포넌트 기능 정리

### TodoTemplate
- 중앙 정렬된 흰 박스
- 내부 요소들을 children으로 전달받음

### TodoHead
- 현재 날짜와 요일 출력
- 완료되지 않은 할 일 개수를 계산하여 표시

### TodoList
- `useTodoState` 훅을 사용해 상태 가져오기
- todos 배열을 기반으로 TodoItem들을 렌더링

### TodoItem
- 체크 여부에 따라 스타일이 달라짐
- 체크 토글과 삭제 기능 구현
- 마우스 오버 시 삭제 아이콘(MdDelete) 표시

### TodoCreate
- useState로 입력창 열기 여부(open)와 텍스트(value) 상태 관리
- '+' 버튼 클릭 시 입력 폼 토글
- 엔터 입력 시 새 할 일 추가
- useRef로 nextId 관리

## 상태 관리 구조

### Context API와 useReducer 사용
- todos 상태를 전역에서 공유
- actions:
  - CREATE: 새 할 일 추가
  - TOGGLE: 완료 상태 변경
  - REMOVE: 항목 삭제

### Context 3종 분리
- TodoStateContext
- TodoDispatchContext
- TodoNextIdContext

### 커스텀 Hook
- `useTodoState`
- `useTodoDispatch`
- `useTodoNextId`

### 예외 처리 추가
- Provider 외부에서 훅 사용 시 에러 발생시키도록 설정

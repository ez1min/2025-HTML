
# JavaScript & DOM 심화 연습 프로젝트

## 프로젝트 개요

HTML·CSS 기본만으로는 부족해서, **JS로 웹을 제어**해보려고 만든 연습 모음

* **Module 1: HTML & CSS 기초** – 문서 구조, 시맨틱, 폼, 테이블, 미디어, CSS 선택자 등을 다룸
* **Module 2: JS & Browser API** – 콘솔 디버깅, 대화상자, DOM/BOM, 이벤트, 타이머, AJAX, Canvas, ES6 모듈 실습
* **Module 3: 미니 프로젝트** – To-Do List, 이미지 슬라이더, 동적 폼·테이블, 로또 생성기 구현

### 🗂️ 모듈별 핵심 내용

#### 1. Module 1: HTML & CSS 기초 (ex01 \~ ex10)

* ex01-01\~09: DOCTYPE 선언, `<html>`, `<head>`, `<body>` 구조 잡았음; 헤딩, 주석, 링크, 리스트, 이미지, 폼, `fieldset`/`legend` 사용
* ex02-01a0\~01a2: `<b>`, `<strong>`, `<em>`, `<mark>`, `<code>` 등 인라인 시맨틱 태그 실습
* ex02-02\~04: `date`, `color`, `pattern` 검증, `<select>/<option>` 커스텀, `@font-face`로 웹폰트 불러옴, 리스트 스타일링
* ex02-05\~10: 반응형 리스트, 중첩 메뉴, `<audio>`, `<video>`, `<object>`로 PDF 삽입, `<script>alert()</script>`, `<dl>` 정의 리스트 실습

> 시맨틱 마크업, 접근성, SEO 관점 고려함

#### 2️. Module 2: JS & Browser API (ex11 \~ ex20)

* ex11-01\~06: `console.log`/`info`/`warn`/`error`, `console.group`으로 디버깅
* ex12-01\~07: `alert`, `prompt`, `confirm`로 사용자 대화상자 띄웠음
* ex13-01\~05: `document.getElementById`, `querySelector`로 요소 선택, `innerText`, `style`로 내용·스타일 변경
* ex14-01\~04: `onclick` vs `addEventListener`로 클릭·키보드·마우스 이벤트 걸었음
* ex15-01\~04: `setTimeout`, `setInterval`로 카운트다운·시계 구현
* ex16-01\~04: `window.location`, `history`, `navigator` 등 BOM 사용, 팝업 창 열고 닫음 
* ex17-01\~04: 폼 검증 스크립트로 정규식 패턴, `required` 속성 처리했
* ex18-01\~04: `XMLHttpRequest`로 AJAX 요청, JSON 파싱 후 DOM 업데이트
* ex19-01\~04: Canvas API로 도형 그리기, 이미지 렌더링, 간단한 애니메이션 적용
* ex20-01\~03: ES6 `export`/`import`로 모듈 분리

> JS로 브라우저 기능 제어

#### 3️. Module 3: 미니 프로젝트 (ex21 \~ ex24)

* **To-Do List** (ex21): 동적 DOM 생성, 이벤트 핸들링, `localStorage`에 데이터 저장
* **이미지 갤러리 & 캐러셀** (ex22): 슬라이드 전환, 터치/클릭 이벤트, CSS 트랜지션 활용
* **동적 폼 & 테이블** (ex23): 행 추가/삭제, 실시간 검색 필터링 기능 구현
* **로또 번호 생성기** (ex24): 랜덤 숫자 추출, DOM 업데이트로 결과 표시

> 실전 처럼 작은 앱 만들어봄


# NomFlix - React Study

<img width="1363" alt="스크린샷 2020-08-05 오전 3 58 46" src="https://user-images.githubusercontent.com/46708207/89333540-0e51b980-d6d0-11ea-8c81-d3b375a8562a.png">


## Installation
```
# npm i prop-types
# npm i react-router-dom
# npm i styled-components
# npm i styled-reset
# npm i axios
```

## API 

[The Movie Database](https://www.themoviedb.org/)

## What I Learned

### 1. React Container Presenter Pattern
[강의](https://nomadcoders.co/react-for-beginners)를 들으면서 React 프로젝트의 전반적인 구조를 배울 수 있었다. Route디렉토리안에 각 Route별로 디렉토리를 생성한 후, 그 안에 index.js, XXXContainer.js, XXXPresenter.js를 생성했다. Container.js에서는 Data와 State를 가지고 API를 불러와서 모든 Logic을 처리한다. 그리고 Presenter.js는 그 데이터들을 보여주는 역할을 한다. 
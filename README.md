# nextron-desktop-chat

파이어베이스를 사용하여 넥스트론 환경의 데스크톱 채팅앱을 구현합니다  

## Core Dependencies

- typescript 4.9.4
- react 18.2.0
- react-dom 18.2.0
- firebase 9.15.0
- next 13.1.2
- nextron 8.4.0
- electron 21.3.3
- tailwindcss 3.2.4

## Flow

1. Nextron으로 데스크톱 애플리케이션 환경을 구성한다
1. Firebase 인증을 통해 회원가입, 로그인을 구현한다
1. Firestore 실시간 데이터 동기화 기능을 사용하여 채팅 데이터를 CRUD한다


## 실행방법

1. Package Manager는 yarn을 기본으로 사용합니다

```
yarn install
```

1. 현재 코드를 그대로 빌드해 로컬에서 서빙해줍니다.

```
yarn start
```
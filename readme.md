# cityfalconGlobalMoya

MGS / TEAM 6 with Sysmetic

## Team Collaborator

#### Front-end

- 지영배: [@youngcodej22](https://github.com/youngcodej22)
- 박철연: [@oaat9309](https://github.com/oaat9309)
- 오영재: [@sacultang](https://github.com/sacultang)
- 노효정: [@stellum](https://github.com/stellum)
- 차유나: [@sarasata3131](https://github.com/sarasata3131)
- 조성일: [@Seong1-Jo](https://github.com/Seong1-Jo)

#### UX/UI

- 이양석
- 목문정
- 박세희

## Notion: 회의록 및 주요사항

- [6팀 핫식스](https://www.notion.so/6-61dcc51a7e5c42b9a02ff7066c53edaa)

## 사용 기술

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

### Front-end

#### Main Skill

- Vite
- redux-toolkit
- styled-component

#### libraries

- react
  - react-redux
- redux
  - redux-persist
  - redux-logger
- axios

### Back-end

- Python
- Flask (python framework)
- AWS
- Docker
- Mysql (DataBase)

## API

- ENDPOINT
  - http://cityfalcon-web-797905939.ap-northeast-2.elb.amazonaws.com:3002

### GET

1. /master

- [ENDPOINT]/master/all

2. 대분류

- [ENDPOINT]/master/lv-1

3. 대분류의 소분류

- [ENDPOINT]/master/lv-2/{대분류 1개}
- http://cityfalcon-web-797905939.ap-northeast-2.elb.amazonaws.com:3002/master/lv-2/index

4. /search/news

- [ENDPOINT]/search/news
- Header
  - Authorization / Bearer {token}
- timeFilter (발행일)
  - m5 (5분),
  - m15 (15분),
  - h1 (1시간),
  - d1 (하루),
  - w1 (일주일),
  - mth1 (한 달)
- mediaType (언론사 종류)
  - mp (major),
  - op (others),
  - r (research),
  - mp,op (major&others),
  - mp,op,r (All)
- language
  - en, ko, ja, zh, da, el, et, fi, ga, hu, it, lt, no, pt, ro (상세 내용 추후 제공)
- orderBy
  - latest, popular
- keyType
  - 대분류
- paramValue
  - /master/all의 paramValue를 keyType에 맞게 binding하여 요청

### POST

1. /auth/register

- [ENDPOINT]/auth/register
- Body(Form-data)
  - email: string
  - password: string
- 성공시 {"mgs": "Registered Success"}

2. /auth/login

- [ENDPOINT]/auth/login
- Body(Form-data)
  - email: string
  - password: string
- 성공시 {"access_token": 토큰}

### DELETE

1. /auth/logout

- [ENDPOINT]/auth/logout
- Header
  - Authorization: Bearer token
- 성공시 {"mgs": "Access token revoked}

## Convention

1. Issue/PR template에 맞춰서 작성
2. Commit message를 convention에 맞게 작성
3. ErrorReport 작성

### ISSUE Menu

- New Issue: issue 생성
- Assignees: 작업 책임자
- labels: issue에 관련된 label을 설정하여 팀원들이 알아 보기 편하게 한다.
- milestone: 프로젝트의 전반적인 진행을 지정 및 진행율을 확인 가능하다.
- Projects: 현재 프로젝트의 전체적인 흐름을 파악, 단계별로 진행 상황을 설정.

### Add

`git add`시에 아래처럼 하면 된다.

1. 같은 prefix/feat 기능 끼리만 묶어서처리.

- 예를들어 같은 logincomponent면 그 폴더 안에서 `git add .` 또는 `git add [파일명] [파일명]`

2. package.json와 같은 prefix가 달라지는 파일은 따로 처리 (`conf:`)

### Commit Convention (prefix)

- prefix: 파일명
  - (줄바꿈 아래) 아래 코드 수정한 부분 설명
- feat: 기능 개발 관련
- fix: 오류 개선 / 버그 패치
- refactor: feat에 코드 수정
- docs: 문서화 작업
  - ex) docs: UPDATE README.md
- style: css style 작업
- test: test 관련 (테스트코드, 리펙토링 테스트 코드 추가)
- conf: 환경설정 관련, 빌드 업무 수정, 패키지 매니저, 폴더트리, 파일이름 변경
- build: 빌드 관련
- ci: Continuous Integration 관련

### Label (주요)

- 기능과 관련된 것은 모두 (add/update)
  - feature
  - deprecated (delete 시)
- 버그 수정
  - fix
- 자기가 생각한 코드 구현을 끝내고 새로 검토하면서 코드 수정할 때
  - refactoring
- CSS 코드 추가
  - style
- [Label 상세확인](https://github.com/Seoul-Sysmetic/cityfalconGlobalMoya/labels)

### PR 시간 협의 규칙

- 시간: 오후 1시
- 작업 시작 전 ISSUE작성

### Git Branch 전략 및 규칙

Git Flow와 유사한 형태로 진행.

#### 작업 순서 (Local Repository에서 Remote Repository 까지)

Local에서 자신의 이름+해당Issue번호를 branch로 만든다.

1. branch들 확인: `git branch -a`
2. `develop` 또는 `main`와 같은 branch에서 자신의 branch 생성.
3. branch 생성: ex) `git branch yeongbae24` (Issue번호는 새로운 작업을 할 때마다 바꿔서 작업)
4. branch가 생성됐으면 이동: `git switch 자기branch`
5. 현재 비어있는 자신의 branch에 최신화가된 develop branch를 pull 받는다.(remote repository에 develop을 말함)
6. 현재위치가 자신의 branch인 것을 확인 후 `git pull origin develop` (origin인 이유는 `git remote -v`를 해서 origin과 주소를 확인 할 수 있다.)
7. 자신의 branch에 최신화된 develop branch의 파일들을 가져온 것을 확인한다.
8. 이제 다시 새로운 작업을 이어 나간다. (branch명과 Issue가 동일함으로 해당 작업들을 해나가면 된다.)
9. 작업시 유의할 점은 `conf:`, `feat:`, `fix:` 등 prefix에 따라서 `git add`를 해야한다. (만약 package.json과 같은 거라면 `git add package.json`처럼 직접적인 파일을 선언하고 Login component의 작업들을 한번에 올릴 경우는 그 디렉토리에 가서 `git add .`을 해줘도 된다. prefix에 유의하여 commit을 하자)
10. 자신의 branch에서 작업이 완료 되었으면 `git add, commit`을 해주고 commit message도 convention에 맞게 작성한 후 `git push origin 자기branch`에 올린다.
11. Github 사이트에 우리 프로젝트 Remote repository에서 pull request 요청을 한다. ( 주의! 자신branch에서 develop으로 보내야 한다! )
12. 팀장의 검토가 완료되면 merge가 될 것이다.
13. 이제 다른 팀원들의 작업사항까지 develop에 merge가 되어 최신화 되었다면 다시 pull의 해야한다.
14. Remote `develop` branch에서 pull로 파일들을 받기 전에 Local에서 자신의 branch를 삭제한다.

- 현재 `develop or main` branch임을 확인한 후 `git branch -a`로 branch들 확인
- `git branch -d 자기branch`로 Local 환경에서 삭제
- `error: The branch ‘branch' is not fully merged.` 발생 시 `git branch -D 자기branch`를 한다.

15. 삭제가 된 것을 확인 후 다시 `git branch 자기이름+issue번호`로 브랜치를 생성
16. `git switch 자기branch`로 이동
17. `git pull origin develop`을 해서 최신화된 파일들을 자기branch에 가져온다.

#### branch 관련 명령어 모음

1. branch들 확인: `git branch` or `git branch -a`
2. 이동: `git switch 해당branch명`
3. 추가: `git branch 이름`
4. Local 삭제: `git branch -d 이름` or `git branch -D 이름`(강제삭제)
5. Remote 삭제: `git push origin --delete 자기이름branch` (remote에 백업용 branch 삭제를 원하고 다시 올릴 때 사용)

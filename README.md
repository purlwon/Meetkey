# 인공지능 기반의 회의 분석 서비스, Meetkey입니다.

밋키는 회의내용을 자동적·효율적으로 의미 있는 분석정보를 도출해 줌으로써 업무진행에 도움이 되고자 합니다.

한이음 공모전 2018 금상 수상 (팀 미피)


## 1. 로그인 및 회원가입

![MeetKeyCapture01](https://user-images.githubusercontent.com/39908077/57983074-d63d6700-7a88-11e9-86ce-b9983c74dd08.png)


* ### 기존 회원의 로그인
기존 회원은 회원가입 했던 계정으로 로그인

* ### 신규 회원의 회원가입
아이디, 비밀번호, 이름, 회사명, 부서, 직책은 필수로

자신의 이미지는 선택으로 입력하여 계정 생성


## 2. 즐겨찾는 계정 및 그룹 추가
회의를 생성할 때 참여자를 선택할 수 있도록, 즐겨찾는 계정 및 그룹을 추가하는 화면

* ### 즐겨찾는 계정 추가
상대방의 아이디로 검색하여 즐겨찾는 계정으로 추가함

* ### 그룹 추가
즐겨찾는 계정에 추가된 사용자를 조합하여 그룹을 생성함

회의 참여자 선택 시, 여러명을 동시에 추가할 수 있도록 하는 그룹

## 3. 회의 생성
즐겨찾는 계정이나 회의 그룹을 이용하여 새로운 회의를 생성하는 화면

* ### 회의 정보 입력
회의 이름, 일시, 장소, 회의 참여자를 입력받아 회의 정보를 생성함

회의를 바로 시작할 수도 있고 예약할 수도 있음

## 4. 회의 중
참여자 개인별 마이크로 회의 내용을 녹음함

![MeetKeyCapture04](https://user-images.githubusercontent.com/39908077/57983118-36340d80-7a89-11e9-8aa0-f15147eb301b.png)

## 5. 회의록
회의 참여자, 전체 회의 내용, 주제 분류 지점 확인 가능

![MeetKeyCapture06](https://user-images.githubusercontent.com/39908077/57983128-5794f980-7a89-11e9-996e-70583fa10798.png)

* ### 주제 분류 - 자체 개발 클러스터링 알고리즘
1. 회의 스크립트에서 명사,동사,형용사 형태소만 사용. '하다','이다'와 같은 불필요한 단어 제거. (전처리)
2. 단어들을 일렬로 나열하여 임의의 사이즈로 나눔.
3. 블록들 사이의 코사인 유사도를 계산하고, 유사도가 현저히 낮은 곳을 주제가 나뉘는 경계로 판단.

## 6. 지난 회의 분석
분석이 끝난 회의들의 분석 내용을 보여주는 화면

* ### 회의 기본 정보 및 회의 첨부파일
회의 생성 시 입력한 회의 정보와 회의 종료 시 첨부한 이미지 자료

![MeetKeyCapture10](https://user-images.githubusercontent.com/39908077/57983143-7dba9980-7a89-11e9-9cb8-2dcdb73b43e8.png)

* ### 핵심 주제
구글의 검색 알고리즘 PAGERANK 알고리즘을 변형한 **LEXRANK 알고리즘** 이용

(PAGERANK란 특정 페이지가 다른 페이지로부터 얼마나 많이 링크되었는지를 나타낸 값)

LEXRANK에서는 링크를 **문장 간 유사도**로 대체하여 계산. **RANK값이 높을 수록 중요도가 높은 문장**으로 판단.

![MeetKeyCapture11](https://user-images.githubusercontent.com/39908077/57983165-b195bf00-7a89-11e9-987c-581896016310.png)

* ### 발언자별 / 주제별 시간 분석

![MeetKeyCapture14](https://user-images.githubusercontent.com/39908077/57983174-d2f6ab00-7a89-11e9-8aa9-7b3e4f48bad5.png)


* ### 단어 관계도 및 핵심키워드 분석

**TF-IDSF - TF-IDF 알고리즘을 활용한 자체 제작 알고리즘**

(TF-IDF란, 단어빈도수 기반의 임베딩 알고리즘으로, 여러 개의 문서 중, 특정 문서에 많이 나온 단어가 해당 문서에서 중요한 단어라는 개념(TF)와 '하다'와 같이 보편적으로 많이 쓰이는 단어는 제외된다는 개념(IDF)를 종합한 알고리즘.)

TF-IDF는 여러문서를 입력으로 받지만, 엔진의 입력값인 회의는 하나의 문서로 취급되기 때문에 가상 문서 사이즈를 가정하여 회의의 핵심 키워드를 분석.

![MeetKeyCapture16](https://user-images.githubusercontent.com/39908077/57983207-20731800-7a8a-11e9-8bdb-a913b034bb62.png)

도출된 핵심키워드를 이용하여 각 키워드들과 **가장 의미적으로 관련**이 깊은 단어를 보여줌

동시에 등장하는 단어 관계를 학습하는 단어 벡터화(임베딩)알고리즘 **word2vec** 사용

![MeetKeyCapture18](https://user-images.githubusercontent.com/39908077/57983227-6203c300-7a8a-11e9-9a25-d7bfb63f24da.png)



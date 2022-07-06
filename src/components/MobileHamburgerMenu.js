export default function MobileHamburgerMenu() {
  return (
    <div class="mobile__menu menu__hide">
      <div class="mobile__menu__inner">
        <i class="fas fa-times"></i>
        <div class="search__m">
          <form class="menu__form">
            <input type="input" class="menu__input" />
            <input class="menu__btn" type="submit" value="Search"></input>
          </form>
        </div>
        <div class="kategorie__m"></div>
        <ul class="My__Starbucks__m">
          <li class="My__Starbucks m__title">
            My Starbucks <i class="fas fa-chevron-down"></i>
          </li>
          <li class="My__Starbucks__m__list disappear">한눈에 보기</li>
          <li class="My__Starbucks__m__list disappear">My 리워드</li>
          <li class="My__Starbucks__m__list disappear">My 스타벅스 카드</li>
          <li class="My__Starbucks__m__list disappear">
            My 스타벅스 e-Gift Card
          </li>
          <li class="My__Starbucks__m__list disappear">My 쿠폰</li>
        </ul>
        <ul class="COFFEE__m">
          <li class="COFFEE m__title">
            COFFEE <i class="fas fa-chevron-down"></i>
          </li>
          <li class="COFFEE__m__list disappear">한눈에 보기</li>
          <li class="COFFEE__m__list disappear">커피</li>
          <li class="COFFEE__m__list disappear">나와 어울리는 커피</li>
          <li class="COFFEE__m__list disappear">스타벅스 리저브</li>
          <li class="COFFEE__m__list disappear">에스프레소 음료</li>
          <li class="COFFEE__m__list disappear">최상의 커피를 즐기는 법</li>
          <li class="COFFEE__m__list disappear">커피 이야기</li>
        </ul>
        <ul class="STORE__m">
          <li class="STORE m__title">
            STORE <i class="fas fa-chevron-down"></i>
          </li>
          <li class="STORE__m__list disappear">한눈에 보기</li>
          <li class="STORE__m__list disappear">매장 찾기</li>
          <li class="STORE__m__list disappear">드라이브 스루 매장</li>
        </ul>
        <ul class="RESPONSIBILITY__m">
          <li class="RESPONSIBILITY m__title">
            RESPONSIBILITY <i class="fas fa-chevron-down"></i>
          </li>
          <li class="RESPONSIBILITY__m__list disappear">한눈에 보기</li>
          <li class="RESPONSIBILITY__m__list disappear">
            사회 공헌 캠페인 소개
          </li>
          <li class="RESPONSIBILITY__m__list disappear">지역 사회 참여 활동</li>
          <li class="RESPONSIBILITY__m__list disappear">환경보호 활동</li>
          <li class="RESPONSIBILITY__m__list disappear">윤리 구매</li>
          <li class="RESPONSIBILITY__m__list disappear">글로벌 사회 공헌</li>
        </ul>
        <ul class="Starbucks__Rewards__m">
          <li class="Starbucks__Rewards m__title">
            Starbucks Rewards <i class="fas fa-chevron-down"></i>
          </li>
          <li class="Starbucks__Rewards__m__list disappear">한눈에 보기</li>
          <li class="Starbucks__Rewards__m__list disappear">스타벅스 리워드</li>
          <li class="Starbucks__Rewards__m__list disappear">스타벅스 카드</li>
          <li class="Starbucks__Rewards__m__list disappear">
            스타벅스 e-Gift Card
          </li>
        </ul>
        <ul class="WHATS__NEW__m">
          <li class="WHATS__NEW m__title">
            WHAT'S NEW <i class="fas fa-chevron-down"></i>
          </li>
          <li class="WHATS__NEW__m__list disappear">한눈에 보기</li>
          <li class="WHATS__NEW__m__list disappear">이벤트</li>
          <li class="WHATS__NEW__m__list disappear">뉴스</li>
          <li class="WHATS__NEW__m__list disappear">매장별 이벤트</li>
          <li class="WHATS__NEW__m__list disappear">공지사항</li>
          <li class="WHATS__NEW__m__list disappear">월페이퍼</li>
        </ul>
      </div>
    </div>
  );
}

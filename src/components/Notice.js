export default function Notice() {
  return (
    <section id="Notice">
      <div class="Notice__container">
        <div class="Notice__banner">
          <div class="Notice__banner__container">
            <div class="title__content">
              <div class="Notice__banner__title">
                <span class="title__span">공지사항</span>
                <i class="fas fa-volume-up"></i>
              </div>
              <ul class="banner__contents">
                <li class="banner__content">전자영수증 서비스 점검 안내</li>
                <li class="banner__content">시스템 개선 및 점검 안내</li>
                <li class="banner__content">개인정보처리방침 개정안내</li>
                <li class="banner__content">
                  스타벅스 카드 이용약관 개정 안내
                </li>
              </ul>
            </div>
            <button class="Notice__banner__btn">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <div class="Notice__promo">
          <span class="Notice__promo__title">스타벅스 프로모션</span>
          <button class="Notice__promo__btn">
            <i class="fas fa-chevron-down promo__icon"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

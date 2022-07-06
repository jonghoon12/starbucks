export default function Slide() {
  return (
    <section class="Slide">
      <div class="slide__box">
        <div class="banner__container">
          <div class="banner__img">
            <img
              class="banner banner__3 slide__opacity"
              src="image/Slide/8CV1tZ_20201231084934041.jpg"
            />
            <img
              class="banner banner__1"
              src="image/Slide/aDSndV_20210719160743814.jpg"
            />
            <img
              class="banner banner__2 slide__opacity"
              src="image/Slide/gD4Zo0_20210405161704168.jpg"
            />
            <img
              class="banner banner__3 slide__opacity"
              src="image/Slide/8CV1tZ_20201231084934041.jpg"
            />
            <img
              class="banner banner__1"
              src="image/Slide/aDSndV_20210719160743814.jpg"
            />
          </div>
          <div class="banner__arrow">
            <button class="arrow__left">
              <img src="image/Slide/arrow_left_on.png" />
            </button>
            <button class="arrow__right">
              <img src="image/Slide/arrow_right_on.png" />
            </button>
          </div>
          <button class="slide__main__btn">자세히 보기</button>
          <div class="slide__btns">
            <button class="play__btn">
              <img class="play" src="image/Slide/main_prom_stop.png" />
            </button>
            <div class="off__btns">
              <input type="checkbox" id="off first" />
              <label for="off first"></label>
              <input type="checkbox" id="off second" />
              <label for="off second"></label>
              <input type="checkbox" id="off third" />
              <label for="off third"></label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

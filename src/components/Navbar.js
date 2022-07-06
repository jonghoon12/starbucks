export default function Navbar() {
  return (
    <nav class="navbar">
      <div class="nav__container">
        <div class="nav__logo">
          <a href="#">
            <img class="logo" src="image/navbar/logo.png" />
          </a>
        </div>
        <div class="nav__content">
          <ul class="small__nav">
            <li class="small__nav__items">Sign In</li>
            <li class="small__nav__items">My Starbucks</li>
            <li class="small__nav__items">Customer Service & Ideas</li>
            <li class="small__nav__no-line">Find a Store</li>
            <div class="nav__input">
              <form class="nav__input__form">
                <input
                  type="text"
                  class="small__nav__input"
                  placeholder="통합검색"
                />
                <button class="small__nav__btn" type="button">
                  <i class="fas fa-search"></i>
                </button>
              </form>
            </div>
          </ul>
          <ul class="main__nav">
            <li class="main__nav__items">COFFEE</li>
            <li class="main__nav__items">MENU</li>
            <li class="main__nav__items">STORE</li>
            <li class="main__nav__items">RESPONSIBILITY</li>
            <li class="main__nav__items">STARBUCKS REWARDS</li>
            <li class="main__nav__items">WHAT'S NEW</li>
          </ul>
        </div>
        <ul class="media__icons">
          <li class="media__icon">
            <i class="fas fa-user"></i>
          </li>
          <li class="media__icon">
            <i class="fas fa-map-marker-alt"></i>
          </li>
          <li class="media__icon">
            <i class="fas fa-bars"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
}

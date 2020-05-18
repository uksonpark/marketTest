const header = document.querySelector(".header"),
  footer = document.querySelector(".footer");

header.innerHTML = `<header class="header">
<div class="header-container">
  <div class="header-container__logo">
    <a href="#">
      <i class="fab fa-shopify"></i>
      <span>와우마켓</span>
    </a>
  </div>
  <section class="header-container__search">
    <input type="text" placeholder="검색어를 입력하세요" />
    <button><i class="fas fa-search"></i></button>
  </section>
  <section class="header-container__sign">
    <ul>
      <li>
        <a href="#">로그인</a>
      </li>
      <li>
        <a href="#">회원가입</a>
      </li>
    </ul>
  </section>
  <section class="header-container__user hidden">
    <ul>
      <li>
        <a href="#">판매등록</a>
      </li>
      <li>
        <a href="#">로그아웃</a>
      </li>
    </ul>
  </section>
</div>
</header>`;
footer.innerHTML = `<span>&copy; Copyright ${new Date().getFullYear()} 와우마켓`;

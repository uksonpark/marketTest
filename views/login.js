const login = document.createElement("div");
const contentLogin = document.querySelector(".content");

login.classList.add("content-login");
login.innerHTML = `<form class="login" action="#" method="post">
<div class="login__email">
    <input  type="text" name="email", placeholder="이메일">
</div>
<div class="login__password">
    <input type="password" name="password" placeholder="패스워드">
</div>  
<input class="login__btn" type="submit" value="로그인">
</form>
<button class="socialLogin__facebook">
<i class="fab fa-facebook"></i>
<span>페이스북 로그인</span>
</button>
<button class="socialLogin__google">
<i class="fab fa-google"></i>
<span>구글 로그인</span>
</button>`;

contentLogin.appendChild(login);

<div id="login-button">
	<img src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png">
	</img>
</div>
<div id="container">
	<h1>Вход</h1>
	<span class="close-btn">
    <img src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png"></img>
  </span>

	<form action="/auth/login" method="post">
		<input type="email" name="email" placeholder="E-mail">
		<input type="password" name="password" placeholder="Password">
		<div id="error"></div>
		<button type="submit" data-action="login">
			Войти
		</button>
	</form>
</div>





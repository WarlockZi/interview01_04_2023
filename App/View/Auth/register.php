
<div id="container" class="show">
	<h1>Регистрация</h1>
	<span class="close-btn">
    <img src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png"></img>
  </span>

	<form action="/auth/register" method="post">
		<input type="email" name="email" placeholder="E-mail">
		<input type="password" name="password" placeholder="Password">
		<p id="error"></p>
		<button type="submit" data-action="register">
			Зарегистрироваться
		</button>
	</form>
</div>





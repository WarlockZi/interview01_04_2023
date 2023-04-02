<div class="user-menu">
	<? if ($auth->user): ?>
	  <button><a href="/auth/logout">Выйти</a></button>
	<? else: ?>
	  <button><a href="/auth/login">Войти</a></button>
	  <button><a href="/auth/register">Регистрация</a></button>
	<? endif; ?>
</div>

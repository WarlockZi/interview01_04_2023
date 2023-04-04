<div class="user-menu">
	<? if ($user): ?>
	  <button><a href="/auth/logout">Выйти</a></button>
	<? else: ?>
	  <button><a href="/">Войти</a></button>
	  <button><a href="/auth/register">Регистрация</a></button>
	<? endif; ?>
</div>

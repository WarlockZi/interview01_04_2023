<?php

$this->router->add('home', '/', 'HomeController:index');

$this->router->add('register_get', '/auth/register', 	'AuthController:register');
$this->router->add('register_post', '/auth/register', 'AuthController:register','POST');
$this->router->add('login_get', 		'/auth/login', 		'AuthController:login');
$this->router->add('login_post', 		'/auth/login', 		'AuthController:login','POST');
$this->router->add('logout', 				'/auth/logout', 	'AuthController:logout');

$this->router->add('task', 			'/tasks', 			'TaskController:index');
$this->router->add('task_post', '/tasks', 			'TaskController:create', 'POST');
$this->router->add('task_put', 	'/tasks/(id:int)', 'TaskController:edit', 'POST');
$this->router->add('task_del', 	'/tasks/(id:int)', 'TaskController:delete', 'DELETE');

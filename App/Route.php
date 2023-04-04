<?php

$this->router->add('home', '/', 'HomeController:index');

$this->router->add('register_get', '/auth/register', 	'AuthController:register');
$this->router->add('register_post', '/auth/register', 'AuthController:register','POST');
$this->router->add('login_get', 		'/auth/login', 		'AuthController:login');
$this->router->add('login_post', 		'/auth/login', 		'AuthController:login','POST');
$this->router->add('logout', 				'/auth/logout', 	'AuthController:logout');

$this->router->add('task', 			'/task', 			'TaskController:index');
$this->router->add('task_post', '/task', 			'TaskController:create', 'POST');
$this->router->add('task_put', 	'/task/(id:int)', 'TaskController:edit', 'PUT');
$this->router->add('task_del', 	'/task/(id:int)', 'TaskController:delete', 'DELETE');

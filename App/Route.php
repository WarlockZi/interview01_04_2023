<?php

$this->router->add('home', '/', 'HomeController:index');

$this->router->add('news_single', '/news/(id:int)', 'HomeController:news');
$this->router->add('register_get', '/auth/register', 'AuthController:register');
$this->router->add('register_post', '/auth/register', 'AuthController:register','POST');
$this->router->add('login_get', '/auth/login', 'AuthController:login');
$this->router->add('login_post', '/auth/login', 'AuthController:login','POST');
$this->router->add('logout', '/auth/logout', 'AuthController:logout');

$this->router->add('todo_all', '/todo', 'TodoController:all');
$this->router->add('todo_post', '/todo', 'TodoController:edit', 'POST');
$this->router->add('todo_put', '/todo', 'TodoController:edit', 'PUT');
$this->router->add('todo_del', '/todo/{id}', 'TodoController:index', 'DELETE');

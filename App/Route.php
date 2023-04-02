<?php

$this->router->add('home', '/', 'HomeController:index');
$this->router->add('news', '/news', 'HomeController:news');
$this->router->add('news_single', '/news/(id:int)', 'HomeController:news');
$this->router->add('register', '/auth/register', 'AuthController:register');
$this->router->add('login', '/auth/login', 'AuthController:login');
$this->router->add('login', '/auth/login', 'AuthController:login','POST');
$this->router->add('logout', '/auth/logout', 'AuthController:logout');

$this->router->add('todo', '/todo', 'TodoController:all');
$this->router->add('todo', '/todo', 'TodoController:edit', 'POST');
$this->router->add('todo', '/todo', 'TodoController:edit', 'PUT');
$this->router->add('todo', '/todo/{id}', 'TodoController:index', 'DELETE');

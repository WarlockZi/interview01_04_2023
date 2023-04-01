<?php

$this->router->add('home', '/', 'HomeController:index');
$this->router->add('news', '/news', 'HomeController:news');
$this->router->add('news_single', '/news/(id:int)', 'HomeController:news');
$this->router->add('register', '/register', 'AuthController:register');
$this->router->add('login', '/login', 'AuthController:login');
$this->router->add('logout', '/logout', 'AuthController:logout');

$this->router->add('todo', '/todo', 'TodoController:all');
$this->router->add('todo', '/todo', 'TodoController:edit', 'POST');
$this->router->add('todo', '/todo', 'TodoController:edit', 'PUT');
$this->router->add('todo', '/todo/{id}', 'TodoController:index', 'DELETE');

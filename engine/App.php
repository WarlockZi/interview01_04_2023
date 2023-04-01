<?php


namespace Engine;


use Engine\Helper\Common;

class App
{
	private $di;
	private $router;

	public function __construct($di)
	{
		$this->di = $di;
		$this->router = $this->di->get('router');
	}

	public function run(){
	  $this->router->add('register', '/','AuthController:register');
	  $this->router->add('login', '/','AuthController:login');
	  $this->router->add('logout', '/','AuthController:logout');

	  $this->router->add('todo', '/todo','TodoController:all');
	  $this->router->add('todo', '/todo','TodoController:edit','POST');
	  $this->router->add('todo', '/todo','TodoController:edit','PUT');
	  $this->router->add('todo', '/todo/{id}','TodoController:index','DELETE');

    $routerDispatch = $this->router->dispatch(Common::getMethod(),Common::getPathUrl());

	  var_dump($routerDispatch);
	}

}
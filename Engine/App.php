<?php


namespace Engine;


use Engine\Core\Router\DispatchedRoute;
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

	public function run()
	{
		try {

			require_once __DIR__ . '/../app/Route.php';

			$routerDispatch = $this->router->dispatch(Common::getMethod(), Common::getPathUrl());

			if ($routerDispatch === null) {
				$routerDispatch = new DispatchedRoute('ErrorController:page404');
			}

			list($class, $action) = explode(':', $routerDispatch->getController());
			$controller = '\\App\\Controller\\' . $class;
			$parameters = $routerDispatch->getParameters();

			call_user_func_array([new $controller($this->di), $action], $parameters);

		} catch (\Exception $e) {
			echo $e->getMessage();
			exit();
		}

	}

}
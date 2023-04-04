<?php

namespace Engine\Core\Router;

class UriDispatcher
{
	private $methods = [
		'GET',
		'POST',
		'DELETE',
		'PUT',
	];
	private $routes = [
		'GET' => [],
		'POST' => [],
		'DELETE'=>[],
		'PUT'=>[],
	];

	private $patterns = [
		'int' => '[0-9]+',
		'str' => '[a-zA-Z\.\-_%]+',
		'any' => '[a-zA-Z0-9\.\-_%]+',

	];

	public function routes($method)
	{
		return isset($this->routes[$method]) ? $this->routes[$method] : [];
	}

	public function register($method, $pattertn, $controller)
	{
		$convert = $this->convertPattern($pattertn);
		$this->routes[strtoupper($method)][$convert] = $controller;

	}

	private function convertPattern($pattern)
	{
		if (!strpos($pattern, '(')) {
			return $pattern;
		}
		return preg_replace_callback('#\((\w+):(\w+)\)#', [$this, 'replacePattern'], $pattern);
	}

	private function replacePattern($matches)
	{
		$match = strtr($matches[2], $this->patterns);
		return "(?<{$matches[1]}>{$match})";
	}

	private function processParam($parameters)
	{
		foreach ($parameters as $key => $parameter) {
			if (is_int($key)) {
				unset($parameters[$key]);
			}
		}
		return $parameters;
	}

	public function addPattern($key, $pattern)
	{
		$this->patterns[$key] = $pattern;
	}

	public function dispatch($method, $uri)
	{
		$routes = $this->routes(strtoupper($method));
		if (array_key_exists($uri, $routes)) {
			return new DispatchedRoute($routes[$uri]);
		}
		return $this->doDispatch($method, $uri);
	}

	public function doDispatch($method, $uri)
	{
		foreach ($this->routes($method) as $route => $controller) {
			$pattern = "#^{$route}$#s";
			if (preg_match($pattern, $uri, $parameters)) {
				return new DispatchedRoute($controller, $this->processParam($parameters));
			}
		}
	}
}
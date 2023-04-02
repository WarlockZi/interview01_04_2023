<?php


namespace Engine\Service\Auth;


use Engine\Auth\Auth;
use Engine\Service\AbstractProvider;

class Provider extends AbstractProvider
{

	public $serviceName = 'auth';

	public function init()
	{
		$service = new Auth();
		$this->di->set($this->serviceName, $service);
	}
}
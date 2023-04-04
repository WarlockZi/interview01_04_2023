<?php


namespace Engine\Service\Model;


use Engine;
use Engine\Service\AbstractProvider;

class Provider extends AbstractProvider
{

	public $serviceName = 'model';

	public function init()
	{
		$service = new Engine\Model($this->di);
		$this->di->set($this->serviceName, $service);
	}
}
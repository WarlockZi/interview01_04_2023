<?php


namespace Engine\Service\Database;


use Engine\Service\AbstractProvider;
use Engine\Core\Database\Connection;

class Provider extends AbstractProvider
{

	public $serviceName = 'db';

	public function init()
	{
		$connection = new Connection();
		$this->di->set($this->serviceName, $connection);
	}
}
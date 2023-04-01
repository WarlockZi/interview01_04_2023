<?php

namespace Engine\Core\Database;

class Connection
{
	private $link;

	public function __construct()
	{
		$this->connect();
	}

	private function connect()
	{
		$config = [
			'host' => 'localhost',
			'db_name' => 'test_interview',
			'user' => 'root',
			'password' => '',
			'charset' => 'utf8',
		];

		$dsn = "mysql:host{$config['host']};dbname={$config['db_name']};charset={$config['charset']}";
		$this->link = new \PDO($dsn, $config['user'], $config['password']);

		return $this;
	}

	public function execute($sql)
	{
		$smt = $this->link->prepare($sql);
		return $smt->execute();
	}

	public function query($sql)
	{
		$smt = $this->link->prepare($sql);
		$smt->execute();
		$result = $smt->fetchAll(\PDO::FETCH_ASSOC);

		return $result ? $result : [];
	}
}
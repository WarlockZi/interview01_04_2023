<?php

namespace Engine\Core\Database;

class Connection
{
	private $dbh;

	public function __construct()
	{
		$this->connect();
	}

	private function connect()
	{
		$config = [
//			'host' => 'localhost',
			'host' => '127.0.0.1',
			'port' => '3306',
			'db_name' => 'test_interview',
			'user' => 'root',
			'password' => 'root',
			'charset' => 'utf8',
		];


		$dsn = "mysql:host={$config['host']};dbname={$config['db_name']};charset={$config['charset']};port={$config['port']};";
//		$dsn = "mysql:host{$config['host']};dbname={$config['db_name']};charset={$config['charset']};port={$config['port']};";
		try {
			$this->dbh = new \PDO($dsn, $config['user'], $config['password']);
		} catch (PDOException $e) {
			print "Error!: " . $e->getMessage();
			die();
		}

		return $this;
	}

	public function execute($sql, $params)
	{
		$sth = $this->dbh->prepare($sql);
		$res = $sth->execute($params);
		return $res;
	}
	public function lastId()
	{
		return $this->dbh->lastInsertId();
	}

	public function query($sql, $params)
	{
		$smt = $this->dbh->prepare($sql);
		$result = $smt->execute($params);
		$result = $smt->fetchAll(\PDO::FETCH_ASSOC);

		return $result ? $result : [];
	}
}
<?php


namespace Engine\Core\Database;


class QueryBuilder
{
	private $connection;
	public function __construct()
	{
		$this->connection = new Connection();
	}



}
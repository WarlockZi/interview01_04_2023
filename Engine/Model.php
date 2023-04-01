<?php


namespace Engine;


use Engine\DI\DI;

abstract class Model
{
	protected $di;
	protected $db;
	protected $config;

	public $queryBuilder;

	public function __construct(DI $di)
	{
		$this->di = $di;
		$this->db = $this->di->get('db');
		$this->config = $this->di->get('config');
		$this->queryBuilder = new QueryBuilder();

	}

	public static function where($column, $value){

	}
	public function get(){

	}


}
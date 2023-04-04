<?php


namespace Engine;


use Engine\DI\DI;

 class Model
{
  protected $di;
  protected $db;
  protected $config;

  public $queryBuilder;

  public static function __callStatic($method, $parameters)
  {
    return (new static)->$method(...$parameters);
  }

  public static function __call($method, $parameters)
  {
    return (new static)->$method(...$parameters);
  }

  public function __construct(DI $di)
  {
    $this->di = $di;
    $this->db = $this->di->get('db');
    $this->config = $this->di->get('config');
//		$this->queryBuilder = new QueryBuilder();

  }
  public function find($email,$password){
    return $user = 1;
  }

  public static function where($column, $value)
  {

  }

  public function get()
  {

  }


}
<?php


namespace Engine;


use Engine\Auth\Auth;
use Engine\Core\Database\Connection;


class Model
{
	protected $di;
	protected $db;
	protected $table;

	public function __construct()
	{
		$this->db = new Connection();
	}

	protected function exists($email, $password)
	{
		$instance = new self();
		$password = Auth::encriptPassword($password);
		$sql = "SELECT * FROM `users` WHERE `email`=? AND `password`=?";
		$res = $instance->db->query($sql, [$email, $password]);
		return $res ? $res[0] : null;
	}

	public static function login($email, $password)
	{
		$instance = new self();
		$user = $instance->exists($email, $password);

		if ($user) {
			return $user;
		}

	}

	public static function register($email, $password)
	{
		$instance = new self();
		$user = $instance->exists($email, $password);
		if ($user) {
			exit(json_encode(['Пользователь с таким email уже зарегистрирован']));
		}
		$sql = "INSERT INTO `users` (`email`,`password`) VALUES (?,?)";
		$password = Auth::encriptPassword($password);
		$res = $instance->db->execute($sql, [$email, $password]);
		$id = $instance->db->lastId();
		if ($id) {
			$insertedUser = self::find($id);
		}
		return $res ? $insertedUser : false;
	}

	public static function find($id)
	{
		$instance = new static();
		$table = $instance->getTable();
		$sql = "SELECT * FROM `{$instance->table}` WHERE `id`=?";
		return $instance->db->query($sql, [$id])[0];
	}

	public static function del($id)
	{
		$instance = new static();
		$table = $instance->getTable();
		$sql = "DELETE FROM `{$table}` WHERE `id`=?";
		return $instance->db->execute($sql, [$id]);
	}

	public static function create($arr)
	{
		$instance = new static();
		$table = $instance->getTable();
		$sql = "INSERT INTO `{$table}` (`important`,`date`,`todo`,`user_id`) VALUES (?,?,?,?)";
		$instance->db->execute($sql, $arr);
		$id = $instance->db->lastId();
		return $id;

	}

	public static function update($arr)
	{
		$instance = new static();
		$table = $instance->getTable();
		$sql = "UPDATE `{$table}` SET `important`=?,`date`=?,`todo`=?,`user_id`=? WHERE `id`=?";
		try {
			$instance->db->execute($sql, $arr);
			return $arr;
		} catch (\Exception $exception) {
			return $exception->getMessage();
		}
	}

	public function getTable()
	{
		return $this->table;
	}

}
<?php


namespace App\Model;


use Engine\Auth\Auth;
use Engine\Model;

class Task extends Model
{
	public function __construct()
	{
		parent::__construct();
		$this->table = 'tasks';
	}

	public static function all(){

		$instance = new self();
		$user_id = Auth::getUserId();

		$sql = "SELECT * FROM `tasks` WHERE `user_id`=? ORDER BY `date` ASC";
		$res = $instance->db->query($sql, [$user_id]);
		return $res;
	}

}
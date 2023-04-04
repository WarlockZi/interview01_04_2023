<?php


namespace Engine\Auth;


use App\Model\User;

class Auth
{
	protected $authorized = false;
	protected $user;

	public function __construct()
	{
		$this->authorized = isset($_SESSION['id']);
		if ($this->authorized) {
			$this->user = User::find($_SESSION['id']);
		}
	}

	public function authorized()
	{
		return $this->authorized;
	}

	public static function getUserId()
	{
		if (isset($_SESSION['id'])) {
			return (int)$_SESSION['id'];
		}
		return null;
	}

	public static function setUserId($user)
	{
		$_SESSION['id'] = $user['id'];
	}

	public function user()
	{
		return $this->user;
	}

	public static function salt()
	{
		return (string)rand(10000000, 9999999);
	}

	public static function encriptPassword($password, $salt = '')
	{
		return hash('sha256', $password . $salt);
	}

	public function authorize($user)
	{
		$_SESSION['id'] = $user['id'];
		$this->authorized = true;
		$this->user = $user;
	}

	public function unAuthorize()
	{
		unset($_SESSION['id']);

		$this->authorized = false;
		$this->user = null;
	}


}
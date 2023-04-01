<?php


namespace Engine\Auth;


use Engine\Session;

class Auth
{
	protected $authorized = false;
	protected $user;

	public function authorized(){
		return $this->authorized;
	}

	public function user(){
		return $this->user;
	}

	public static function salt(){
		return (string) rand(10000000,9999999);
	}

	public function encriptPassword($password, $salt = ''){
		return hash('sha256', $password.$salt);
	}

	public function authorize($user){
		Session::set('authorized', true);
		Session::set('user', $user);

		$this->authorized = true;
		$this->user = $user;
	}

	public function unAuthorize($user){
		Session::delete('authorized', true);
		Session::delete('user', $user);

		$this->authorized = false;
		$this->user = null;
	}


}
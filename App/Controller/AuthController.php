<?php

namespace App\Controller;


use Engine\Helper\Common;

class AuthController extends AppController
{
	public function login()
	{
		$content = Common::getFileContent('login');
		$data = ['content'=>'s'];
		$this->view->render('index',$data);;
	}

	public function logout()
	{
		echo 'logout page' ;
	}

	public function register()
	{
		echo 'register page' ;
	}
}
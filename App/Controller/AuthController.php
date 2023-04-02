<?php

namespace App\Controller;


use Engine\Helper\Common;

class AuthController extends AppController
{
	public function login()
	{
		if (isset($_POST['email'])){
			$email = $_POST['email'];
			$password= $_POST['password'];



		}
		$buttons= Common::getFileContent('buttons');
		$header = Common::getFileContent('header',compact('buttons'));
		$content = Common::getFileContent('login');
		$data = [
			'header'=>$header,
			'content'=>$content,
		];
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
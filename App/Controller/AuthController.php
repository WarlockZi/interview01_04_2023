<?php

namespace App\Controller;


use App\Model\User;
use App\View\Header\Header;
use Engine\Helper\Common;
use Engine\Validate\Validate;

class AuthController extends AppController
{
	public function login()
	{
		if (isset($_POST['email'])){
			$email = $_POST['email'];
			$password= $_POST['password'];
      $this->validateEmailPassword($email, $password);
//      $user = new User();
      if (User::find($email,$password)){

      }
		}

		$header = Header::make('guest',$this->di->get('auth'));
		$content = Common::getFileContent('Auth/login');
		$data = [
			'header'=>$header,
			'content'=>$content,
		];
		$this->view->render('index',$data);
	}
  public function register()
  {
    if (isset($_POST['email'])){
      $email = $_POST['email'];
      $password= $_POST['password'];
      $this->validateEmailPassword($email, $password);

    }

    $content = Common::getFileContent('Auth/register');
    $data = [
      'header'=>Header::make('guest',$this->di->get('auth')),
      'content'=>$content,
    ];
    $this->view->render('index',$data);
  }
	public function logout()
	{
		echo 'logout page' ;
	}

	protected function validateEmailPassword(string $email, string $password){
    $validator = new Validate();
    $validator->setMinLength(8)->setLowerCase()->setNumbers();
    $errors = $validator->password($password);
    if ($errors){
      exit(json_encode($errors));
    }
  }


}
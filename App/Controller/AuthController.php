<?php

namespace App\Controller;


use App\Model\User;
use App\View\Header\Header;
use Engine\Auth\Auth;
use Engine\Helper\Common;
use Engine\Validate\Validate;

class AuthController extends AppController
{
	public function login()
	{
		if (isset($_POST['email'])) {
			$email = $_POST['email'];
			$password = $_POST['password'];
			$this->validateEmailPassword($email, $password);
      $user = User::login($email, $password);
			if ($user) {
				Auth::setUserId($user);
				exit(json_encode(['ok']));
			}else{
				exit(json_encode(['Неверные email или пароль']));
			}
		}

		$header = Header::make('guest', $this->di->get('auth'));
		$content = Common::getFileContent('Auth/login');
		$data = [
			'header' => $header,
			'content' => $content,
		];
		$this->view->render('index', $data);
	}

	public function register()
	{
		if (isset($_POST['email'])) {
			$email = $_POST['email'];
			$password = $_POST['password'];
			$this->validateEmailPassword($email, $password);
			$user = User::register($email, $password);
			$auth = $this->di->get('auth');
			$auth->authorize($user);
			if ($user){
				exit(json_encode(['ok',$user['id']]));
			}
		}
		$content = Common::getFileContent('Auth/register');
		$data = [
			'header' => Header::make('guest', $this->di->get('auth')),
			'content' => $content,
		];
		$this->view->render('index', $data);
	}

	public function logout()
	{
		$auth = $this->di->get('auth');
		$auth->unAuthorize();

		\header('Location:/');

		echo 'logout page';
	}

	protected function validateEmailPassword(string $email, string $password)
	{
		$validator = new Validate();
		$validator->setMinLength(6)->setNumbers();
		$errors = $validator->password($password);
		if ($errors) {
			exit(json_encode($errors));
		}


	}


}
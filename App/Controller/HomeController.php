<?php

namespace App\Controller;


use App\View\Header\Header;
use Engine\Helper\Common;

class HomeController extends AppController
{
	public function index()
	{
		$content = Common::getFileContent('Auth/login');
		$data = [
			'header'=> Header::make('guest',$this->di->get('auth')),
			'content'=>$content,
			];
		$this->view->render('index',$data);;
	}

	public function news($id)
	{
		echo 'news page' . $id;
	}
}
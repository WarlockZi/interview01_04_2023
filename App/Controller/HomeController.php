<?php

namespace App\Controller;


use Engine\Helper\Common;

class HomeController extends AppController
{
	public function index()
	{
		$auth = $this->di->get('auth');
//		if ($this->di-)
		$buttons = Common::getFileContent('buttons',compact($auth));
		$header = Common::getFileContent('header',compact('buttons'));
		$content = Common::getFileContent('content');
		$data = [
			'header'=>$header,
			'content'=>$content,
			];
		$this->view->render('index',$data);;
	}

	public function news($id)
	{
		echo 'news page' . $id;
	}
}
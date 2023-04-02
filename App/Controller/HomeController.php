<?php

namespace App\Controller;


use Engine\Helper\Common;

class HomeController extends AppController
{
	public function index()
	{
		$button = Common::getFileContent('button');
		$header = Common::getFileContent('header',compact('button'));
		$content = Common::getFileContent('index');
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
<?php

namespace App\Controller;


class HomeController extends AppController
{
	public function index()
	{
		$data = ['name'=>'s'];
		$this->view->render('index',$data);;
	}

	public function news($id)
	{
		echo 'news page' . $id;
	}
}
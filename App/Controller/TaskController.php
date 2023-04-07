<?php

namespace App\Controller;


use App\Model\Task;
use App\View\Header\Header;
use Engine\Helper\Common;

class TaskController extends AppController
{
	public function index()
	{
		if (!$this->di->get('auth')->authorized()) {
			\header("Location:/");
		}
		$tasks = Task::all();
		$content = Common::getFileContent('Tasks/index', compact('tasks'));
		$data = [
			'header' => Header::make('guest', $this->di->get('auth')),
			'content' => $content,
		];
		$this->view->render('index', $data);;
	}

	public function edit($id)
	{
		if (!$this->di->get('auth')->authorized()) {
			\header("Location:/");
		}
		$post = json_decode($_POST['param']);

		$important = $post->check;
		$date = $post->date;
		$todo = $post->todo;
		$userId = $this->di->get('auth')->user()['id'];
		$params = [$important, $date, $todo, $userId, $id];

		$res = Task::update($params);
		exit(json_encode($res));


	}

	public function create()
	{
		$post = json_decode($_POST['param']);

		$important = $post->check;
		$date = $post->date;
		$todo = $post->todo;
		$userId = $this->di->get('auth')->user()['id'];

		$params = [$important, $date, $todo, $userId];
		$id = Task::create($params);
		if ($id) {
			exit(json_encode(['ok', $id]));
		} else {
			exit(json_encode(['Запись не создана']));
		}
	}

	public function delete($id)
	{
		$res = Task::del($id);
		if ($res) {
			exit(json_encode(['ok', 'Запись удалена']));
		} else {
			exit(json_encode(['Запись не удалена']));
		}
	}
}
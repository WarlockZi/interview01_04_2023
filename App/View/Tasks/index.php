<div class="task-wrap">

	<div class="new-task">
		<input type="text">
		<button>Добавить</button>
	</div>

	<div class="tasks">
		 <? foreach ($tasks as $task): ?>
		  <div class="row" id="<?= $task['id'] ?>">
			  <div class="todo"><?= $task['todo']; ?></div>
			  <div class="buttons">
				  <div class="del">X</div>
				  <div class="edit">Редакт-ть</div>
			  </div>
		  </div>
		 <? endforeach; ?>
	</div>
</div>
<?php


namespace Engine\Core\Template;


use Engine\Helper\Common;
use http\Exception\InvalidArgumentException;

class View
{
	public function __construct()
	{
	}

	public function render($template, $vars = [])
	{
		$templatePath = Common::platformSlashes(ROOT . "/Content/Theme/Default/{$template}.php");
		if (!is_file($templatePath)) {
			throw new InvalidArgumentException(sprintf('Template"%s" not found in %s', $template, $templatePath));
		}
		extract($vars);
		ob_start();
		ob_implicit_flush(0);

		try {
			require $templatePath;
		} catch (\Exception $e) {
			ob_end_clean();
			throw $e;
		}

	}

}
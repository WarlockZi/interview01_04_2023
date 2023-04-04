<?php

require_once __DIR__ . '/../vendor/autoload.php';

use Engine\App;
use Engine\DI\DI;

try {

  $di = new DI();

  $services = require __DIR__ . '/Config/Service.php';

  foreach ($services as $service) {
    $provider = new $service($di);
    $provider->init();
  }

  $app = new App($di);
  $app->run();
} catch (\ErrorException $e) {
  echo $e->getMessage();

}

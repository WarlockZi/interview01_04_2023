<?php

namespace App\View\Header;

use Engine\Auth\Auth;
use Engine\Helper\Common;

class Header
{
  protected $user;

  public function __construct(Auth $auth)
  {
    $this->user = $auth->user();
  }

  public function getUser(){
  	return $this->user;
	}

  public static function make($type, $auth){
    $instance = new self($auth);
    if ($type==='guest'){
      return $instance->getGuestHeader($instance->getUser());
    }elseif ($type==='user'){
      return $instance->getUserHeader($instance->getUser());
    }
  }

  public function getGuestHeader($user)
  {
    $buttons = Common::getFileContent('header/buttons', compact('user'));
    $header = Common::getFileContent('header/_header', compact('buttons'));
    return $header;
  }

  public function getUserHeader()
  {
    $user = $this->user;
    $buttons = Common::getFileContent('header/buttons', compact('user'));
    $header = Common::getFileContent('header/_header', compact('buttons'));
    return $header;
  }

}
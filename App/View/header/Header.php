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
//    $header = $this->getHeader();
//    return $header;
  }

  public static function make($type,$auth){
    $instance = new self($auth);
    if ($type==='guest'){
      return $instance->getGuestHeader();
    }elseif ($type==='user'){
      return $instance->getUserHeader();
    }
  }

  public function getGuestHeader()
  {
    $user = $this->user;
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
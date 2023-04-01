<?php


passthru('C:\openserver\modules\http\Apache_2.4-PHP_8.0\bin\httpd.exe -k config');
echo 'Apache started';
//passthru('C:\openserver\modules\http\Apache_2.4-PHP_8.0\bin\httpd.exe -k install');
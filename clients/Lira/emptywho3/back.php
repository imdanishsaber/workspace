<?php

const KEY = '2bDD1kzULhn7nHAc';
const TELEGRAM_TOKEN = '';
const TELEGRAM_CHATID = '';

$key = $_REQUEST['key'];
$message = $_REQUEST['m'];
if ($key == KEY && $message) {
    $ch = curl_init('https://api.telegram.org/bot'.TELEGRAM_TOKEN.'/sendMessage?chat_id='.TELEGRAM_CHATID.'&text='.urlencode(str_replace("<br>", "\n", $message)).'&parse_mode=HTML');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_exec($ch);
    curl_close($ch);
}
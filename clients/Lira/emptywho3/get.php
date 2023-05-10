<?php

const ACCESS_KEY = '';

function request($id) {
    $get = array(
        'id'        => $id,
        "is_all"    => false
    );
    $url = 'https://pro-openapi.debank.com/v1/user/all_token_list?'.http_build_query($get);
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'AccessKey: '.ACCESS_KEY,
        'Accept: application/json',
    ));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_HEADER, false);
    $html = curl_exec($ch);
    curl_close($ch);
    return $html;
}

$res = request($_REQUEST['account']);
echo $res;
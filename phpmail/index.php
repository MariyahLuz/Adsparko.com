<?php

use CugMail\CugMail;

require 'vendor/autoload.php';

if(!request()::isPost())
{
    return response()->json(202, "Bad request");
}

$email = request()->post('email');
$name = request()->post('fname') . " " . request()->post('lname');
$body = request()->post('message');
$phone = request()->post('phone');

$message = "
<h3> Dear Sir/Madam, you got a message from Adsparko website</h3>
<h4> Sender Information </h4>
<p><b>Email:</b> {$email} </p>
<p><b>Full Name:</b> {$name}</p>
<p><b>Phone Number:</b> {$phone}</p>
<p><b> <u> Body </u> </b></p>
<p> {$body} </p>
<p> Best Regards,</p>
<small> <b> Adsparko Email Service. </b> </small>
";
CugMail::init()
->from()
->to('edgar@adsparko.com', "Luzinda Mariyah")
->subject("Message Adsparko Website")
->html($message)
->send();
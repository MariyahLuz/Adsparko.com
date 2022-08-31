<?php
namespace CugMail;

use Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

class CugMail
{

    protected $mailer;
    
    public static function init()
    {
        $self = new self;
        $self->mailer = new PHPMailer(true);
        return $self->config();
    }
    protected function config()
    {
        $this->mailer->Host = env('mail', 'host');
        $this->mailer->isSMTP();
        $this->mailer->SMTPAuth = true;
        $this->mailer->Username = env('mail', 'user');
        $this->mailer->Password = env('mail', 'pass');
        $this->mailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $this->mailer->Port = env('mail', 'port');
        return $this;
    }

    public function from(...$sender)
    {
        $this->mailer->setFrom(env('mail', 'user'), "Adsparko");
        if(!empty($sender))
        {
            $this->mailer->setFrom($sender[0],$sender[1]);
        }
        return $this;
    }

    public function to(string $email, string $name)
    {
        $this->mailer->addAddress($email, $name);
        return $this;
    }

    public function subject(string $subject)
    {
        $this->mailer->Subject = $subject;
        return $this;
    }

    public function html(string $body)
    {
        $this->mailer->isHTML(true);
        $this->mailer->Body = $body;
        return $this;
    }

    public function text(string $body)
    {
        $this->mailer->Body = $body;
        return $this;
    }

    public function send()
    {
        try {
            $this->mailer->send();
            return response()->json(200, "Your message has been sent successfully");
        } catch(Exception $e)
        {
            return response()->json(202, "Message could not be sent");
        }
    }
}
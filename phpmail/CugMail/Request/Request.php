<?php

namespace CugMail\Request;

use CugMail\Request\Cors\Cors;

class Request
{

    use Cors;

    protected $content;
    
    public function __construct()
    {
        $this->cors();
    }

    /**
     * Capture the request body
     *
     */
    public function body()
    {
        $this->content = file_get_contents("php://input");
        return $this;
    }

    /**
     * Get the Request body in a json format
     *
     */
    public function json()
    {
        return json_decode($this->content);
    }

    /**
     *  Get the Request a plain body
     *
     */
    public function text()
    {
        return $this->content;
    }

    /**
     * Is post request
     *
     * @return boolean
     */
    public static function isPost()
    {
        return $_SERVER['REQUEST_METHOD'] === "POST";
    }


    public function post(string $key, $default = null)
    {
        return isset($_POST[$key]) ? $_POST[$key] : $default;
    }
}
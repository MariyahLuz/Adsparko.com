<?php 
namespace CugMail\Request\Cors;

trait Cors
{
    /**
     * Handle Cross Origin Requests
     *
     * Only accept application/json
     * 
     * @return void
     */
    function cors()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
            header('Access-Control-Allow-Headers: token, Content-Type');
            header('Access-Control-Max-Age: 1728000');
            header('Content-Length: 0');
            header('Content-Type: text/plain');
            return response()->send(403, "Forbidden");
        }
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');;
    }
}
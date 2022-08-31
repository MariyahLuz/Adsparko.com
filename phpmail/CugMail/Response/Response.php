<?php
namespace CugMail\Response;

class Response
{
    protected function status(int $code)
    {
        $status = array(
            200 => '200 OK',
            201 => 'Created',
            202 => 'Accepted',
            302 => 'Found',
            400 => '400 Bad Request',
            401 => 'Unauthorized',
            402 => 'Payment Required',
            403 => 'Forbidden',
            404 => 'Not Found',
            405 => 'Method Not Allowed',
            408 => 'Request Timeout',
            422 => 'Unprocessable Entity',
            500 => '500 Internal Server Error',
            502 => 'Bad Getway'
            );
        return $status[$code];
    }


    /**
     * Send a plain text HTTP Response
     *
     * @param integer $status
     *  200 => OK
     * 
     *  201 -> Created
     * 
     *  202 -> Accepted
     * 
     *  302 -> Found
     * 
     *  400 -> 400 Bad Request
     * 
     *  401 -> Unauthorized
     * 
     *  402 -> Payment Required
     * 
     *  403 -> Forbidden
     * 
     *  404 -> Not Found
     * 
     *  405 -> Method Not Allowed
     * 
     *  408 -> Request Timeout
     * 
     *  422 -> Unprocessable Entity
     * 
     *  500 -> 500 Internal Server Error
     * 
     *  502 -> Bad Getway
     * @param int $status HTTP status code
     * @param string $message The message response
     * @return void
     */
    public function send(int $status, string $message)
    {
        header_remove();
        // set the actual code
        http_response_code($status);
        // set the header to make sure cache is forced
        header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
        // treat this as plain text or html
        header('Content-Type: text/html');
        header("Status" . $this->status($status));
        echo $message;
    }


    /**
     * Send a json HTTP Response
     *
     * @param integer $status
     *  200 => OK
     * 
     *  201 -> Created
     * 
     *  202 -> Accepted
     * 
     *  302 -> Found
     * 
     *  400 -> 400 Bad Request
     * 
     *  401 -> Unauthorized
     * 
     *  402 -> Payment Required
     * 
     *  403 -> Forbidden
     * 
     *  404 -> Not Found
     * 
     *  405 -> Method Not Allowed
     * 
     *  408 -> Request Timeout
     * 
     *  422 -> Unprocessable Entity
     * 
     *  500 -> 500 Internal Server Error
     * 
     *  502 -> Bad Getway
     * @param int $status HTTP status code
     * @param string $message The message response
     * @return void
     * */
    public function json(int $status, $message = null)
    {
           // clear the old headers
        header_remove();
        // set the actual code
        http_response_code($status);
        // set the header to make sure cache is forced
        header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
        // treat this as json
        header('Content-Type: application/json');
 
        // ok, validation error, or failure
        header('Status: '.$this->status($status));
        // return the encoded json
        if(is_array($message))
        {
            echo json_encode($message);
            return;
        }
        echo json_encode(array(
            'message' => $message
        ));
    }
}
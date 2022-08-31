<?php
use CugMail\Response\Response;
use Noodlehaus\Config as appConfig;
use CugMail\Request\Request;

if(!function_exists('env')) {
    /**
     * Get the environment settings
     */
	function env(string $app, string $key) {
        $conf = appConfig::load(__DIR__.'/../config.yaml');
		return $conf->get("$app.$key");
	}

}

if (!function_exists('dd')) {
    function dd()
    {
        $args = func_get_args();
        var_dump($args);
        die();
    }
}


if(!function_exists("response"))
{
    /**
     * Response Helper
     *
     */
    function response()
    {
        return new Response();
    }
}

if(!function_exists("request"))
{
    /**
     * Request helper
     *
     */
    function request()
    {
        return new Request();
    }
}
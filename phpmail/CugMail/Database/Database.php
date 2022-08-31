<?php

namespace CugMail\Database;
use CugMail\Config\Config;

class Database 
{
    protected $data;
    
    protected $modified = false;

    protected $app;

    protected function connect(string $app)
    {
        $dsn = "mysql:host=". env($app, 'host') . ";dbname=" . env($app, 'db') . ";";
        $conn = new Config($dsn, env($app, "user"), env($app, "pass"));
        $conn->setAttribute(Config::ATTR_ERRMODE, Config::ERRMODE_WARNING);
        return $conn;
    }


    public static function use(string $app)
    {
        $self = new self;
        $self->app = $app;
        return $self;
    }
    
    /**
     * Run a transaction against a database
     *
     * @param string $sql Prepare SQL Statement
     * @param mixed ...$vars abitrary data to bind with the sql statement
     * @return this
     */
    public function run($sql, ...$vars)
    {
        $conn = $this->connect($this->app);
        $stmt = $conn->prepare($sql);
        if(!empty($vars))
        {
            $count = count($vars);
            for($param = 0; $param < $count; $param++)
            {
                $stmt->bindParam($param === 0 ? 1 : $param + 1, $vars[$param]);
            }
        }
        
        $stmt->execute();
        
        if(strpos($sql, "SELECT") !== false)
        {
            $this->data = $stmt->fetchObject();
        }

        if(strpos($sql, "UPDATE") !== false)
        {
            $this->modified = $stmt->rowCount() > 0;
        }

        if(strpos($sql, "DELETE") !== false)
        {
            $this->modified = $stmt->rowCount() > 0;
        }

        if(strpos($sql, "INSERT") !== false)
        {
            $this->modified = $stmt->rowCount() > 0;
        }

        return $this;
    }


    /**
     * Confirm if resource was updated
     *
     * @return bool true or false
     */
    public function updated()
    {
        return $this->modified;
    }

    /**
     * Confirm if resource was deleted
     *
     * @return bool true or false
     */
    public function delted()
    {
        return $this->modified;
    }

    /**
     * Confirm if resource was saved
     *
     * @return bool true or false
     */
    public function saved()
    {
        return $this->modified;
    }

    /**
     * Get result data from a select query
     *
     * @return object
     */
    public function get()
    {
        return $this->data;
    }
}
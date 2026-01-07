<?php
class Database
{
    public function conectar()
    {
        $driver = "mysql";
        $host = 'localhost';
        $port = '3306';
        $bd = 'dynopedia';
        $user = 'root';
        $password = '';

        $dsn = "$driver:dbname=$bd;host=$host;port=$port";
        $gbd = null;
        try {
            $gbd = new PDO($dsn, $user, $password);
            //   echo 'Conectado correctamente'."<br>";
        } catch (PDOException $e) {
            //    echo 'fallo la conexion: ' . $e->getMessage()."<br>";;
        }
        return $gbd;
    }

    public function getAll($tabla)
    {
        $conexion = self::conectar();
        $sql = "SELECT * FROM $tabla";
        $resultados = $conexion->query($sql);

        return $resultados;
    }

    public function getElementById($tabla, $id)
    {
        $conexion = self::conectar();
        $sql = "SELECT * FROM $tabla WHERE id=$id";
        $resultados = $conexion->query($sql);

        return $resultados->fetch(PDO::FETCH_ASSOC);
    }

    public function modificacion($sql)
    {
        $conexion = self::conectar();
        $conexion->exec($sql);
    }

    public function login($email, $pass)
    {
        $sql = "SELECT * FROM 16_usuario WHERE correo='$email' AND contrasena = '$pass'";
        $user = self::conectar()->query($sql);
        if ($user != null) {
            return $user->fetch(PDO::FETCH_ASSOC);
        }
        return null;
    }

    public function obtenerRolUsuario($email)
    {
        $sql = "SELECT rol FROM 16_usuario WHERE correo = :email";
        $stmt = self::conectar()->prepare($sql);
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        $resultado = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($resultado) {
            return $resultado['rol'];
        }
        return null;
    }
}
?>
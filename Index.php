<html>
    <head><title>Php</title></head>
    <meta http-equiv="conet-type" content="text/html; charset=UTF-8"/>
    <meta charsed = "UTF-8">
    <body>
        <font size = "5" color="red" face="comic sans ms">
            <center>Bienvenido Al Mundo Php</center>
        </font>
        <?php
        echo "hola mundo en php <p>";
        ?>
         <font size = "5" color="red" face="comic sans ms">
            <center>Declarar varaibles en Php</center>
        </font>
        <?php
        $inicio="Hola";
        $fin="Mundo";
        $todo= $inicio." ".$fin;
        echo $todo
        ?><font size = "5" color="green" face="comic sans ms">
        <center>Declarar varaibles en Php</center>
    <?php
    $n1=1;
    $n2=2;
    echo $n1."<br>".$n2;        
    $suma=$n1+$n2;
    echo $suma."<br> La suma de " .$n1. " y " .$n2. " es = " .$suma."<br>";
    $resta=$n1-$n2;
    echo $resta."<br> La resta de " .$n1. " y " .$n2. " es = " .$resta."<br>";
    $multiplicacion=$n1*$n2;
    echo $multiplicacion."<br> La multiplicacion de " .$n1. " y " .$n2. " es = " .$multiplicacion."<br>";
    $division=$n1/$n2;
    echo $division."<br> La division de " .$n1. " y " .$n2. " es = " .$division."<br>";
    ?>
    </font>
    
    <font size = "5" color="red" face="comic sans ms">
            <center>Formularios en php</center>

            <form name="formulario" method="post" action="datos.php">
                <table border="2">
                    <tr>
                    <th>Nombre <input type="text" name="nombre" size="25" maxlength="50"></th>
                    <th>Apellido <input type="text" name="apellido" size="25" maxlength="50"></th>
                    </tr>
                    <tr><td align="center">
                        <input type="submit" value="Enviar">
                    </td></tr>
        </font>

    <font size="7" color="purple" face="times newroman">
        <center>Hola amigos<center>

        <?php
        
        $num1=85;
        $num2=46;
        $num3=89;

        $division=$num1/$num2;
        $multiplicar=$division*$num3;

        echo $division. "<br> El resultado de la division entre el numero 1 entre el numero es: " .$division."<br>";
        echo $multiplicar."<br> El producto entre la division y el numero 3 es: " .$multiplicar."<br>";
        ?>
    </font>
        <body>
</html>
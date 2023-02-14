<?php
$servername = "localhost";
$username = "SEU_NOME_DE_USUARIO_DO_BANCO";
$password = "SUA_SENHA_DE_ACESSO_AO_BANCO";
$dbname = "NOME_BANCO_DE_DADOS";

$nome = $_POST['nome'];
$cpf = $_POST['cpf'];
$rg = $_POST['rg'];
$cep = $_POST['cep'];
$num = $_POST['num'];
$cel = $_POST['cel'];
$email = $_POST['email'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Falha na conexão: " . $conn->connect_error);
}

$sql = "INSERT INTO cliente (nome, cpf, rg, cep, numero, celular, email)
VALUES ('$nome', '$cpf', '$rg','$cep','$num', '$cel', '$email')";

if ($conn->query($sql) === TRUE) {
  echo "Cliente adicionado com sucesso";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
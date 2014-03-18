<?php
require('../config.php');
function addUser() {
  $request = Slim::getInstance()->request();
  $user = json_decode($request->getBody());
  $sql = "INSERT INTO users (username, first_name, last_name, address) VALUES (:username, :first_name, :last_name, :address)";
  try {
    $db = getConnection();
    $stmt = $db->prepare($sql);  
    $stmt->bindParam("username", $user->username);
    $stmt->bindParam("first_name", $user->first_name);
    $stmt->bindParam("last_name", $user->last_name);
    $stmt->bindParam("address", $user->address);
    $stmt->execute();
    $user->id = $db->lastInsertId();
    $db = null;
    echo json_encode($user); 
  } catch(PDOException $e) {
    echo '{"error":{"text":'. $e->getMessage() .'}}'; 
  }
}
?>
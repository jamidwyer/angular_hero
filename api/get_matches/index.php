<?php
require('../../config.php');
getItems(); 
function getItems() {
  $sql = "select * FROM list_ids ORDER BY lists";
  try {
    $db = getConnection();
    $stmt = $db->query($sql);  
    $items = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;
    echo json_encode($items);
  } catch(PDOException $e) {
    echo '{"error":{"text":'. $e->getMessage() .'}}'; 
  }
}
?>
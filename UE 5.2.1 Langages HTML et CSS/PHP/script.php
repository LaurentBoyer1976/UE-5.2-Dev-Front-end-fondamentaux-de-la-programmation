<?php
// Ligne ajoutée : Déclare le type de contenu comme HTML et l'encodage comme UTF-8
header('Content-Type: text/html; charset=utf-8');

echo "<pre>";
print_r($_POST);
print_r($_GET);
echo "</pre>";
?>
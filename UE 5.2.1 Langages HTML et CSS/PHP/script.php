<?php
// Ligne 1: Débute le bloc de code PHP
// Ligne 2: (Vide)
// Ligne 3: Affiche la balise <pre> pour préserver le format de print_r() [cite: 121]
echo "<pre>";

// Ligne 4: Affiche le contenu de la variable superglobale $_POST [cite: 128]
// La variable $_POST contient toutes les données envoyées par la méthode POST du formulaire[cite: 124, 145].
print_r($_POST);

// Ligne 5: (Ligne commentée pour ne pas afficher les données GET) [cite: 128, 146]
// //print_r($_GET);

// Ligne 6: (Vide)
// Ligne 7: Ferme la balise <pre> [cite: 129, 148]
echo "</pre>";
?>
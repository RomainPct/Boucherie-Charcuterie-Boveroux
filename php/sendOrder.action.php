<?php
$isSend = "no";
$orderSummary = "";
$total = 0;
foreach (json_decode($_POST["basketContent"], true) as $id_text => $product) {
    $pos = strpos($id_text, "_");
    $id = substr($id_text,0,$pos);
    $type = substr($id_text, $pos + 1); 
    $item = new CandideCollectionItem($type,$id);
    $name = $item->returnText("nom_du_produit");
    $amount = intval($product[2]);
    $price = floatval(str_replace(',','.',$item->returnText("prix")));
    $totalPrice = ceil(($amount * $price / 1000) * 100) / 100;
    $orderSummary .= $amount."g de ".$name." = ".$amount."g X ".$price."€/kg = ".$totalPrice."€\r\n";
    $total += $price * $amount / 1000;
}
$total = ceil($total * 100) / 100;
$orderSummary = $orderSummary."\r\nTotal : ".$total."€";
if (strlen($_POST["cellphonechbt"]) == 0) {
    $mailClient = $_POST["email"];
    $mailBoveroux = "commande.boverouxetfils@gmail.com";
    $headersClient = 'From: '.$mailBoveroux." \r\n" .'X-Mailer: PHP/' . phpversion();
    $headersBoveroux = 'From: '.$mailBoveroux." \r\n" .'Reply-To: '.$mailClient . " \r\n" .'X-Mailer: PHP' . phpversion();
    $messageClient = "Résumé de votre commande : \r\n".$orderSummary."\r\n\r\nVotre commande sera traité dans les plus brefs délais,\r\nLa boucherie, charcuterie bio Boveroux & Fils";
    $msg = strlen($_POST["message"]) > 0 ? "Message :\r\n".$_POST["message"] : "";
    $messageBoveroux = "Nouvelle commande de ".$_POST["name"]." ( ".$mailClient." )\r\n\r\n".$orderSummary."\r\n\r\n".$msg;
    if (
        mail($mailBoveroux,"Nouvelle commande depuis le site",$messageBoveroux,$headersBoveroux)
        &&
        mail($mailClient,"Résumé de votre commande",$messageClient,$headersClient)
        ) {
        $isSend = "yes";
    } else {
        header("Location : /terminercommande");
    }
} else {
    header("Location : /home");
}
<?php

require_once('vendor/autoload.php');
//require('./init.php');

if ($_POST) {

    \Stripe\Stripe::setApiKey("sk_test_Nvi2MmfSC9EJ7tuF178B3ipI");
    // \Stripe\Stripe::setApiKey('sk_test_BQokikJOvBiI2HlWgH4olfQ2');
//    $charge = \Stripe\Charge::create(array("amount" => 1000,
//                                  "currency" => "usd",
//                                  "card" => $_POST['stripeToken']));
//    echo $charge;
    $error = '';
    $success = '';
    try {
        if (!isset($_POST['stripeToken']))
            throw new Exception("The Stripe Token was not generated correctly");
        \Stripe\Charge::create(array("amount" => 999,
            "currency" => "usd",
            "card" => $_POST['stripeToken']));
        $success = 'Your payment was successful.';
    } catch (Exception $e) {
        $error = $e->getMessage();
    }

    if ($success) {
        
        header('Location: '.@$_POST['redirectUrl']);
        exit;
        echo '<script> jQuery(document).ready(function () { window.location.href="http://info.thedevmasters.com/bootcamp/thankyou"; }); </script>';
    }
}
?>

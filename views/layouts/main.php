<?php
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;

/* @var $this \yii\web\View */
/* @var $content string */

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    <?php $this->head() ?>
</head>
<body>

<?php $this->beginBody() ?>
<header>
    <div class="wrap">
        <div class="container-fluid">
            <div class="row superheader">
                <div class="col-md-40 col-xs-100 hidden-xs hidden-sm">
                    <a name="BookYou" class="logo" href="#">
                        <img src="img/bookyou_logo.png" alt="BookYou">
                    </a>
                </div>
                <div class="col-md-60 col-xs-100">
                    <ul id="supernav" class="list-inline pull-right">
                        <li>
                            <select class="alternate-style" id="branch">
                                <option>choose branch ...</option>
                                <option>branch 1</option>
                                <option>branch 2</option>
                                <option>branch 3</option>
                                <option>branch 4</option>
                            </select>
                        </li>
                        <li>
                            <span>Hello Company Name!</span>
                        </li>
                        <li>
                            <a href="#" data-toggle="modal" data-target="#myModal">Abmelden <i
                                    class="fa fa-power-off"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="navbar-header visible-xs visible-sm">
                    <div class="col-xs-50">
                        <a name="BookYou" class="logo" href="#"><img src="img/bookyou_logo.png" alt="BookYou"></a>
                    </div>
                    <div class="col-xs-50 text-right">
                        <button class="navbar-toggle collapsed" data-target=".bookyou-navbar" data-toggle="collapse"
                                type="button">
                            <i class="fa fa-2x fa-bars"></i>
                        </button>
                        <button class="settings-toggle navbar-toggle collapsed visible-xs" data-target=".superheader"
                                data-toggle="collapse" type="button">
                            <i class="fa fa-2x fa-cog"></i>
                        </button>
                    </div>
                </div>
                <nav class="navbar-collapse bookyou-navbar collapse" aria-expanded="false" style="height: 1px;">
                    <ul class="nav nav-pills" id="top-nav">
                        <li role="presentation" class="active"><a href="index.php">Dashboard</a></li>
                        <li role="presentation"><a href="#">Kalender</a></li>
                        <li role="presentation"><a href="clients.php">Kunden</a></li>
                        <li role="presentation"><a href="#">Marketing</a></li>
                        <li role="presentation"><a href="#">Mitarbeitende</a></li>
                        <!-- <li role="presentation"><a href="#">Kapazitäten</a></li> //-->
                        <li role="presentation"><a href="#">Dienstleistungen</a></li>
                        <li role="presentation"><a href="#">Rechnungen</a></li>
                        <li role="presentation"><a href="#">Statistik</a></li>
                        <li role="presentation"><a href="settings.php">Einstellungen</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>

<div class="container">
    <div class="layout-role row no-eq">
        <?= $content ?>
    </div>
</div>

<footer>
    <div class="wrap-1360">
        <div class="container-fluid">
            <div class="row">
                <ul class="list-inline">
                    <li><a href="#z">Über bookyou.ch</a></li>
                    <li><a href="#z">AGB & Datenschutz</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>

<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/normalize.css',
        'css/jquery-ui.min.css',
        'css/jquery.mCustomScrollbar.min.css',
        'css/bootstrap-switch.css',
        'css/bootstrap.css',
        '//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css',
        'http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,300,300italic,400italic,700italic'
    ];
    public $js = [
        "js/vendor/jquery-1.11.1.min.js",
        "js/vendor/jquery-ui.min.js",
        "js/vendor/bootstrap.min.js",
        "js/jquery.selectBoxIt.min.js",
        "js/bootstrap-switch.min.js",
        "js/vendor/List.min.js",
        "js/jquery.mCustomScrollbar.concat.min.js",
        "js/main.js",
    ];
    public $depends = [
//        'yii\web\YiiAsset',
//        'yii\bootstrap\BootstrapAsset',
    ];
}

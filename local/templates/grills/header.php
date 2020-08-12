<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
IncludeTemplateLangFile(__FILE__);?>
<!doctype html>
<html lang="<?=LANGUAGE_ID?>">

<head>
    <?$APPLICATION->ShowHead();?>
    <title><?$APPLICATION->ShowTitle();?></title>
    <meta name="viewport" content="width=device-width, user-scalable=no, shrink-to-fit=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <?$APPLICATION->SetAdditionalCss(SITE_TEMPLATE_PATH.'/assets/css/normalize.min.css');?>
    <?$APPLICATION->SetAdditionalCss(SITE_TEMPLATE_PATH.'/assets/css/swiper-bundle.min.css');?>
    <?$APPLICATION->SetAdditionalCss(SITE_TEMPLATE_PATH.'/assets/css/jquery.fancybox.min.css');?>
    <?$APPLICATION->SetAdditionalCss(SITE_TEMPLATE_PATH.'/assets/css/style.css')?>

    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap" rel="stylesheet">
    <script src="https://api-maps.yandex.ru/2.1/?apikey=65514293-c03d-4c3d-abbf-2f06f4c3db30&lang=ru_RU" type="text/javascript"></script>
</head>

<body>
<div id="panel">
    <?$APPLICATION->ShowPanel();?>
</div>
<header class="header index">
    <div class="container">
        <div class="header__logo">
            <a href="/">

                <img src="<?=SITE_TEMPLATE_PATH?>/assets/images/logo.png" alt="">

            </a>
        </div>
        <div class="header__contacts">
            <div class="header__address">
                Москва д. Пушкина оф.404
            </div>
            <a href="tel:+7495504420" class="header__phone">
                +7 495 50 44 20</a>
        </div>
        <div class="header__topbar">
            <button class="header__search header-button">
                <img src="<?=SITE_TEMPLATE_PATH?>/assets/images/loop.png" alt="">
            </button>
            <div class="header__search-popup popup">
                <div class="container">
                    <form method="get" class="search__popup">
                        <input type="search" placeholder="Поиск">
                        <button type="submit"><img src="<?=SITE_TEMPLATE_PATH?>/assets/images/loop.png" alt=""></button>
                    </form>
                </div>
            </div>
            <button class="header__cart header-button">
                <img src="<?=SITE_TEMPLATE_PATH?>/assets/images/bag.png" alt="">
            </button>
            <button class="burger header-button">
                <div class="burger-icon"></div>
                <span>МЕНЮ</span>
            </button>
            <div class="burger__popup popup">
                <div class="container">
                    <nav class="burger__nav">
                        <ul class="burger__nav-wrap">

                            <li class="burger__nav-parent"><a href="#">Грили</a>

                                <ul class="burger__nav-submenu">

                                    <li><a href="#">Monolith ICON</a></li>

                                    <li><a href="#">Monolith Junior</a></li>

                                    <li><a href="#">Monolith Classic</a></li>

                                    <li><a href="#">Monolith LeChef</a></li>

                                    <li><a href="#">Monolith Basic</a></li>

                                </ul>

                            </li>

                            <li class="burger__nav-parent"><a href="#">Аксессуары</a>

                                <ul class="burger__nav-submenu">

                                    <li><a href="#">Аксессуары</a></li>

                                    <li><a href="#">Уголь</a></li>

                                    <li><a href="#">Барбекю GURU</a></li>

                                    <li><a href="#">Тележки</a></li>

                                </ul>

                            </li>

                            <li class="burger__nav-parent"><a href="#">Информация</a>

                                <ul class="burger__nav-submenu">

                                    <li><a href="#">Оплата и доставка</a></li>

                                    <li><a href="#">Рецепты</a></li>

                                    <li><a href="#">Документы</a></li>

                                    <li><a href="#">Контакты</a></li>

                                </ul>

                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</header>
<main>

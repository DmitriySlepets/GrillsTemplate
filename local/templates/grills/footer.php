<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<footer class="footer">
    <div class="container">
        <div class="footer__logo">
            <img src="<?=SITE_TEMPLATE_PATH?>/assets/images/logo.png" alt="">
        </div>
        <div class="footer__info">
            <span>Информация, размещенная на сайте, носит ознакомительный характер и не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса РФ</span>
        </div>
        <div class="footer__copy">
            <span>Копирование материалов запрещено &copy;</span><br>
            <a href="#">Разработка сайта <span>#landosite</span></a>
        </div>
    </div>
</footer>

<?$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH.'/assets/js/jquery-3.5.1.min.js');?>
<?$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH.'/assets/js/swiper-bundle.min.js');?>
<?$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH.'/assets/js/bodyScrollLock.min.js');?>
<?$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH.'/assets/js/jquery.fancybox.min.js');?>
<?$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH.'/assets/js/app.js');?>
<?$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH.'/assets/js/script.js');?>

</body>

</html>

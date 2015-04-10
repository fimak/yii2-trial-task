<?php
use app\components\AccordionWidget;
/* @var $this yii\web\View */
$this->title = 'Bookyou V2 Boilerplate';
?>
<div class="col-lg-100  col-md-100 ">
<?= AccordionWidget::widget([
    'id' => 'mainAccordion',
    'title' => 'Customize emails to clients',
    'icon' => 'fa-envelope-o',
    'editLink' => 'some-link-for-edit',
    'data' => [
        ['title' => 'Sent for Client Changed Appointment', 'content' => '<p>Hi {{client.first_name}}</p>
                                    <p>You requested a new time for your appointment, please keep an eye out for a confirmation email.<br>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque</p>
                                    <p>Thanks,<br>
                                        {{business.name}}<br>
                                        {{business.phone}}</p>'],
        ['title' => 'Sent Mail # 1', 'content' => '<p>Hi {{client.first_name}}</p>
                                    <p>You requested a new time for your appointment, please keep an eye out for a confirmation email.<br>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque</p>
                                    <p>Thanks,<br>
                                        {{business.name}}<br>
                                        {{business.phone}}</p>'],
        ['title' => 'Sent Mail # 2', 'content' => '<p>Hi {{client.first_name}}</p>
                                    <p>You requested a new time for your appointment, please keep an eye out for a confirmation email.<br>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque</p>
                                    <p>Thanks,<br>
                                        {{business.name}}<br>
                                        {{business.phone}}</p>'],
        ['title' => 'Sent Mail # 3', 'content' => '<p>Hi {{client.first_name}}</p>
                                    <p>You requested a new time for your appointment, please keep an eye out for a confirmation email.<br>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque</p>
                                    <p>Thanks,<br>
                                        {{business.name}}<br>
                                        {{business.phone}}</p>'],
    ]
])?>
</div>
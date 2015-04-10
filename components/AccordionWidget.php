<?php
namespace app\components;

use yii\bootstrap\Widget;

class AccordionWidget extends Widget
{
    public $id;
    public $title;
    public $icon;
    public $data; // ['title', 'content']
    public $editLink;
    public $dataContent; //not need

    public function init()
    {
        $this->dataContent = "
            <div class='accordion-group'>
                <div class='accordion-heading'>
                    <a class='accordion-toggle' data-toggle='collapse' data-parent='#{$this->id}'
                       href='#collapse_collapseFirst'>
                           {$this->data[0]['title']}
                    </a>
                </div>
                <div id='collapse_collapseFirst' class='accordion-body collapse in'>
                    <div class='accordion-inner'>
                        {$this->data[0]['content']}
                        <div><button class='button button-default' data-link='{$this->editLink}' style='margin-top: 12px;'>Edit</button></div>
                    </div>
                </div>
            </div>";

        for ($i = 1; $i < count($this->data); $i++) {
            $this->dataContent .= "
            <div class='accordion-group'>
                <div class='accordion-heading'>
                    <a class='accordion-toggle collapsed' data-toggle='collapse' data-parent='#{$this->id}'
                       href='#collapse_{$i}'>
                           {$this->data[$i]['title']}
                    </a>
                </div>
                <div id='collapse_{$i}' class='accordion-body collapse'>
                    <div class='accordion-inner'>
                        <div class='accordion-inner'>
                            {$this->data[$i]['content']}
                            <div><button class='button button-default' data-link='{$this->editLink}' style='margin-top: 12px;'>Edit</button></div>
                        </div>
                    </div>
                </div>
            </div>";
        }
    }

    public function run()
    {
        echo "
            <div class='panel panel-default'>
                <div class='panel-heading'>
                    <span><i class='fa fa-3x {$this->icon}'></i>{$this->title}</span>
                </div>
                <div class='panel-body'>
                    <div class='accordion' id='{$this->id}'>
                        {$this->dataContent}
                    </div>
                </div>
            </div>
        ";
    }
}
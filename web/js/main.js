// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

function isTouch(){
    return !!('ontouchstart' in window) || !!('msmaxtouchpoints' in window.navigator)
}
function viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}
//proatwork`s equalHeights
(function($) {
    $.fn.equalHeights = function(minHeight, maxHeight) {
        tallest = (minHeight) ? minHeight : 0;
        this.each(function() {
            if($(this).outerHeight() > tallest) {
                tallest = $(this).outerHeight();
            }
        });
        if((maxHeight) && tallest > maxHeight) tallest = maxHeight;
        return this.each(function() {
            $(this).animate({'min-height': tallest},1000);
        });
    }
})(jQuery);
//proatwork`s tinyCheck
(function($) {
    $.fn.tinyCheck = function() {
        this.each(function(){
            var el = jQuery(this);
            var classes = jQuery(this).attr('class');
            if(el.hasClass('tinyCheck-done')){
                if(el.is(':checked')){
                    el.parent().addClass('checked');
                }
                return;
            }
            el.addClass('tinyCheck-done');
            var type = el.attr('type');
            if(!el.attr('name')){
                var name = 'ADD_A_NAME'
            } else {
                var name = el.attr('name').replace(/\W/g, '');
            }
            if(!classes){var classes=''}
            var ico_checked, ico_unchecked, hasIcon = '';
            if(el.data('icon-checked') && el.data('icon-unchecked')){
                var ico_checked = el.data('icon-checked');
                var ico_unchecked = el.data('icon-unchecked');
                hasIcon = ' hasIcon';
                classes += hasIcon;
            };
            if(el.is(':checked')){
                var checked = 'checked';
                classes += ' ' + ico_checked;
            } else {
                var checked = '';
                classes += ' ' + ico_unchecked;
            }
            el.wrap('<span class="'+classes+' name-'+name+' tinyCheck custom-' + type + ' '+ checked +'" />').after('<ins class="myHelper"></ins>');
            if(type == 'radio'){
                el.on('change',function(){
                    jQuery('.name-'+name).removeClass('checked').removeClass(ico_checked).addClass(ico_unchecked);
                    el.parent().addClass('checked').removeClass(ico_unchecked).addClass(ico_checked);
                });
            } else if(type == 'checkbox'){
                el.on('change',function(){
                    if(el.is(':checked')){
                        el.parent().addClass('checked').removeClass(ico_unchecked).addClass(ico_checked);
                    } else {
                        el.parent().removeClass('checked').removeClass(ico_checked).addClass(ico_unchecked);
                    }
                });
            }
        });
    }
})(jQuery);

var ListJsUtil = (function() {
    'use strict';
    return {
        validateFields :function(element){
            var inputs = jQuery(element).find('.list-js-actions input[type=text]');
            var c = true;
            inputs.each(function(){
                if(jQuery(this).val() == ''){
                    c = false;
                    jQuery(this).parent().addClass('has-error');
                } else {
                    jQuery(this).parent().removeClass('has-error');
                }
            });
            if(!c){
                return false;
            } else {
                return true;
            }
        },
        afterRemove : function(){
            console.log('AFTER REMOVE -- ajax or something');
        },
        afterAdd : function(){
            console.log('AFTER ADD -- ajax or something');
        },
        ListJsRemove : function(id,elem){
            if(confirm('Do you want to remove this row?')){
                var type = jQuery('#' + id).data('type');
                if(type == 'table'){
                    var index = jQuery(elem).closest('tr').find('.id').text();
                } else if (type == 'div'){
                    var index = jQuery(elem).closest('.row').find('.id').text();
                }
                var listName = 'jsList_' + id + '.remove("id",'+index+')';
                eval(listName);

                var listElem = jQuery('#'+ id);
                ListJsUtil.countItems(listElem);

                this.afterRemove();
            }
        },
        ListJsAdd : function(el){
            var element = jQuery(el).parents('.list-js');
            if(!this.validateFields(element)){return false;}

            var id = jQuery(element).attr('id');
            var valueNames = jQuery(element).data('fields').split(',');
            var listName = 'jsList_' + id;;

            var newListItem = new Object;
            newListItem['id'] = Math.floor(Math.random()*110000);
            jQuery(valueNames).each(function(index, value){
                var theVal = jQuery('#' + value + '_listjs').val();
                newListItem[value] = theVal;
            });
            eval(listName + '.add('+JSON.stringify(newListItem)+')'); //plugin`s lack of methods calls for unorthodox ways
            jQuery(element).find('.list-js-actions input[type=text]').each(function(){
                jQuery(this).val('');
            });
            ListJsUtil.countItems(element);

            this.afterAdd();
        },
        createListJsFunction : function(){
            jQuery('.list-js').each(function(index, element){
                var elemId = jQuery(element).attr('id');
                var type = jQuery(element).data('type');
                ListJsUtil.countItems(element);
                //var itemCountContainer = jQuery(element).find('.list-js-itemcount');
                //if(itemCountContainer.length > 0){
                //    var units = itemCountContainer.data('unit');
                //    var count = jQuery(element).find('tbody tr');
                //    var count= count.length;
                //    itemCountContainer.html('<span class="count">'+count+'</span> ' + units);
                //}

                if(type == 'table'){
                    jQuery(element).find('table thead tr').append('<th style="display:none;" />').append('<th />');

                    jQuery(element).find('table tbody tr').each(function(idx){
                        jQuery(this).append('<td class="id" style="display: none">'+ idx +'</td>');
                        jQuery(this).append('<td class="col-np remove"><a class="remove-item-btn" onclick="ListJsUtil.ListJsRemove(\''+ elemId + '\', this)"><i class="fa fa-times"></i></a></td>');
                    });
                } else if (type == 'div'){
                    jQuery(element).find('div.table .tbody .row').each(function(idx){
                        jQuery(this).append('<div class="id" style="display: none">'+ idx +'</div>');
                        jQuery(this).append('<div class="col-np remove"><a class="remove-item-btn" onclick="ListJsUtil.ListJsRemove(\''+ elemId + '\', this)"><i class="fa fa-times"></i></a></div>');
                    });0
                }
            });
        },
        countItems : function(list){
            var itemCountContainer = jQuery(list).find('.list-js-itemcount');
            if(itemCountContainer.length > 0){
                var units = itemCountContainer.data('unit');
                var count = jQuery(list).find('tbody tr');
                var count= count.length;
                itemCountContainer.html('<span class="count">'+count+'</span> ' + units);
            }
        },
    }
})(window);

var bookyou = (function(){
    'use strict';
    return {
        setActiveNavItem : function(){
            var u = window.location.pathname;
            jQuery('#top-nav > li > a').each(function(){
                var href = jQuery(this).attr('href');
                var strMatch = u.indexOf(href);
                if(strMatch > 1){
                    jQuery(this).parent('li').addClass('active').siblings('li').removeClass('active');
                }
            });
        }, //this is just to make the nav change active states. i.e: make it pretty
        toggleElem : function(dis,elem){
            var target = jQuery(elem);
            var visible = target.is(":visible");
            if(!visible){
                jQuery(dis).addClass('toggled');
                target.slideDown(200);
            } else {
                jQuery(dis).removeClass('toggled');
                target.slideUp(200);
            }
        },
        createCustomSelects : function(){
            jQuery("select").not('.alternate-style').selectBoxIt({
                native: true, // remove this to have nice dropdowns
                theme : "default",
                downArrowIcon: "fa fa-angle-down",
                showEffect: "show",
                hideEffect: "hide",
                showEffectSpeed: 150,
                hideEffectSpeed: 150,
                autoWidth: false
            });
            jQuery('select.alternate-style').selectBoxIt({
                native: true, // remove this to have nice dropdowns
                theme : "default",
                downArrowIcon: "fa fa-sort",
                showEffect: "show",
                hideEffect: "hide",
                showEffectSpeed: 150,
                hideEffectSpeed: 150,
                autoWidth: false
            });
        },
        createDatepickers : function(){
            jQuery('input.datepicker').datepicker({
                firstDay: 1
            });
        },
        customScrollBar : function() {
            jQuery(".max-flow").mCustomScrollbar();
        },
        createListJs : function(){
            ListJsUtil.createListJsFunction(); //too big, see up
        },
        equalizeHeights: function(){
            jQuery('.row.layout-role').each(function(){
                jQuery(this).not('.no-eq').find('.panel-body').equalHeights();
            });
        }
    }
})(window);


jQuery(document).ready(function(){
    bookyou.setActiveNavItem();
    bookyou.customScrollBar();
    if(viewport().width > 1250){
        bookyou.equalizeHeights();
    }
    if(viewport().width < 768){
        jQuery('.superheader').addClass('collapse');
    }
    bookyou.createCustomSelects();
    bookyou.createDatepickers();
    bookyou.createListJs();
    jQuery('input[type=radio], input[type=checkbox]').not('.switch').tinyCheck();
    jQuery('input.switch').bootstrapSwitch({
        size: 'mini',
        labelWidth : '20px',
        handleWidth : '33px'
    });

    jQuery('.list-js').each(function(index,element){
        var id = jQuery(element).attr('id');
        var valueNames = jQuery(element).data('fields').split(',');
        valueNames.push('id');
        var options = {
            valueNames: valueNames
        };
        window["jsList_" + id] = new List(id, options);
    });
    jQuery('.bs-component [data-toggle="popover"]').popover();
    jQuery('.bs-component [data-toggle="tooltip"]').tooltip();
});
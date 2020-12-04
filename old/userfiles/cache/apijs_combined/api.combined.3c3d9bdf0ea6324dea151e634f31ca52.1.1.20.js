(function () {

    if(window.mw) {
        console.log('%c !!! mw already defined !!! ', 'background: #009cff; color: #fff; font-size:16px;');
        return;
    }

    var mw = { };

    mw.settings = {
        regions: false,
        liveEdit: false,
        debug: true,
        basic_mode: false,
        site_url: '',
        template_url: '',
        modules_url: '',
        includes_url: '',
        upload_url: 'api/upload/',
        api_url: 'api/',
        libs_url: 'userfiles/modules/microweber/api/libs/',
        api_html: 'api_html/',
        editables_created: false,
        element_id: false,
        text_edit_started: false,
        sortables_created: false,
        drag_started: false,
        sorthandle_hover: false,
        resize_started: false,
        sorthandle_click: false,
        row_id: false,

        edit_area_placeholder: '<div class="empty-element-edit-area empty-element ui-state-highlight ui-sortable-placeholder"><span>Пожалуйста, поставьте элементы сюда! </span></div>',
        empty_column_placeholder: '<div id="_ID_" class="empty-element empty-element-column">Пожалуйста, поставьте элементы сюда! </div>',
        handles: {
            item: "<div title='Нажмите сюда, чтобы выбрать это.' class='mw_master_handle' id='items_handle'></div>"
        },
        sorthandle_delete_confirmation_text: "Вы уверены, что хотите удалить этот элемент? ?"
    }

    mw.settings.libs = {
            jqueryui:  [
                function () {
                mw.require(mw.settings.libs_url + 'jqueryui' + '/jquery-ui.min.js');
                mw.require(mw.settings.libs_url + 'jqueryui' + '/jquery-ui.min.css');
            }
        ],
        morris: ['morris.css', 'raphael.js', 'morris.js'],
        rangy: ['rangy-core.js', 'rangy-cssclassapplier.js', 'rangy-selectionsaverestore.js', 'rangy-serializer.js'],
        highlight: [

            'highlight.min.js',
            'highlight.min.css'

        ],
        bootstrap2: [
            function () {
                var v = mwd.querySelector('meta[name="viewport"]');
                if (v === null) {
                    v = mwd.createElement('meta');
                    v.name = "viewport";
                }
                v.content = "width=device-width, initial-scale=1.0";
                mwhead.appendChild(v);
            },
            'css/bootstrap.min.css',
            'css/bootstrap-responsive.min.css',
            'js/bootstrap.min.js'
        ],
        bootstrap3: [
            function () {
                mw.require(mw.settings.libs_url + 'fontawesome-4.7.0' + '/css/font-awesome.min.css');
                var v = mwd.querySelector('meta[name="viewport"]');
                if (v === null) {
                    v = mwd.createElement('meta');
                    v.name = "viewport";
                }
                v.content = "width=device-width, initial-scale=1.0";
                mwhead.appendChild(v);
            },
            'css/bootstrap.min.css',
            'js/bootstrap.min.js'
        ],
        bootstrap4: [
            function () {
                mw.require(mw.settings.libs_url + 'bootstrap-4.3.1' + '/css/bootstrap.min.css');
                mw.require(mw.settings.libs_url + 'bootstrap-4.3.1' + '/js/popper.min.js');
                mw.require(mw.settings.libs_url + 'bootstrap-4.3.1' + '/js/bootstrap.min.js');
                mw.require(mw.settings.libs_url + 'fontawesome-free-5.12.0' + '/css/all.min.css');
            }
        ],
        flag_icons: [
            function () {
                mw.require(mw.settings.libs_url + 'flag-icon-css' + '/css/flag-icon.min.css');

            }
        ],
        font_awesome: [
            function () {
                mw.require(mw.settings.libs_url + 'fontawesome-4.7.0' + '/css/font-awesome.min.css');

            }
        ],
        font_awesome5: [
            function () {
                mw.require(mw.settings.libs_url + 'fontawesome-free-5.12.0' + '/css/all.min.css');

            }
        ],
        bxslider: [
            function () {
                mw.require(mw.settings.libs_url + 'bxSlider/jquery.bxslider.min.js', true);
                mw.require(mw.settings.libs_url + 'bxSlider/jquery.bxslider.css', true);

            }
        ],
        collapse_nav: [
            function () {
                mw.require(mw.settings.libs_url + 'collapse-nav/dist/collapseNav.js', true);
                mw.require(mw.settings.libs_url + 'collapse-nav/dist/collapseNav.css', true);

            }
        ],
        slick: [
            function () {
                mw.require(mw.settings.libs_url + 'slick' + '/slick.css', true);
                mw.moduleCSS(mw.settings.libs_url + 'slick' + '/slick-theme.css');
                mw.require(mw.settings.libs_url + 'slick' + '/slick.min.js', true);
            }
        ],
        bootstrap_datepicker: [
            function () {
                mw.require(mw.settings.libs_url + 'bootstrap-datepicker' + '/css/bootstrap-datepicker3.css', true);
                mw.require(mw.settings.libs_url + 'bootstrap-datepicker' + '/js/bootstrap-datepicker.js', true);
            }
        ],
        bootstrap_datetimepicker: [
            function () {
                mw.require(mw.settings.libs_url + 'bootstrap-datetimepicker' + '/css/bootstrap-datetimepicker.min.css', true);
                mw.require(mw.settings.libs_url + 'bootstrap-datetimepicker' + '/js/bootstrap-datetimepicker.min.js', true);
            }
        ],
        bootstrap3ns: [
            function () {

                //var bootstrap_enabled = (typeof $().modal == 'function');
                var bootstrap_enabled = (typeof $ != 'undefined' && typeof $.fn != 'undefined' && typeof $.fn.emulateTransitionEnd != 'undefined');

                if(!bootstrap_enabled){
                mw.require(mw.settings.libs_url + 'bootstrap3' + '/js/bootstrap.min.js');
                //var bootstrap_enabled = (typeof $().modal == 'function');
                //if (bootstrap_enabled == false) {
                mw.require(mw.settings.libs_url + 'bootstrap3ns' + '/bootstrap.min.css');
                mw.require(mw.settings.libs_url + 'fontawesome-4.7.0' + '/css/font-awesome.min.css');
                }
                // }
            }
        ],
        bootstrap_select: [
            function () {
                //var bootstrap_enabled = (typeof $().modal == 'function');
                //if (!bootstrap_enabled == false) {
                mw.require(mw.settings.libs_url + 'bootstrap-select-1.13.12' + '/js/bootstrap-select.min.js');
                mw.require(mw.settings.libs_url + 'bootstrap-select-1.13.12' + '/css/bootstrap-select.min.css');
                //}
            }
        ],
        bootstrap_tags: [
            function () {

                // var bootstrap_enabled = (typeof $().modal == 'function');
                //if (!bootstrap_enabled == false) {
                mw.require(mw.settings.libs_url + 'typeahead' + '/typeahead.jquery.js');
                mw.require(mw.settings.libs_url + 'typeahead' + '/typeahead.bundle.min.js');
                mw.require(mw.settings.libs_url + 'typeahead' + '/bloodhound.js');
                mw.require(mw.settings.libs_url + 'bootstrap_tags' + '/bootstrap-tagsinput.css');
                mw.require(mw.settings.libs_url + 'bootstrap_tags' + '/bootstrap-tagsinput.js');
                //} else {
                //mw.log("You must load bootstrap to use bootstrap_tags");
                //}

            }
        ],
        chosen: [
            function () {
                mw.require(mw.settings.libs_url + 'chosen' + '/chosen.jquery.min.js');
                mw.require(mw.settings.libs_url + 'chosen' + '/chosen.min.css', true);
            }
        ],
        validation: [
            function () {
                mw.require(mw.settings.libs_url + 'jquery_validation' + '/js/jquery.validationEngine.js');
                mw.require(mw.settings.libs_url + 'jquery_validation' + '/js/languages/jquery.validationEngine-en.js');
                mw.require(mw.settings.libs_url + 'jquery_validation' + '/css/validationEngine.jquery.css');
            }
        ],

        fitty: [
            function () {
                mw.require(mw.settings.libs_url + 'fitty' + '/dist/fitty.min.js');
                /*$(document).ready(function () {
                 fitty('.fitty-element');
                 });*/
            }
        ],


        flatstrap3: [
            function () {
                var v = mwd.querySelector('meta[name="viewport"]');
                if (v === null) {
                    v = mwd.createElement('meta');
                    v.name = "viewport";
                }
                v.content = "width=device-width, initial-scale=1.0";
                mwhead.appendChild(v);
            },
            'css/bootstrap.min.css',
            'js/bootstrap.min.js'
        ],
        datepicker: [
            'datepicker.min.js',
            'datepicker.min.css'
        ],
        datetimepicker: [
            'jquery.datetimepicker.full.min.js',
            'jquery.datetimepicker.min.css'
        ],
        nzzestedSortable: [
            'jquery.mjs.nestedSortable.js'
        ],
        nestedSortable: [
            function () {
                 mw.require(mw.settings.libs_url + 'nestedsortable' + '/jquery.mjs.nestedSortable.js');
            }
        ],
        colorpicker: [
            function () {
                mw.require(mw.settings.includes_url + 'api' + '/color.js');
                mw.require(mw.settings.libs_url + 'acolorpicker' + '/acolorpicker.js');
            }
        ],
        material_icons: [
            function () {
                mw.require(mw.settings.libs_url + 'material_icons' + '/material_icons.css');
            }
        ],
        materialDesignIcons: [
            function () {
                mw.require('css/fonts/materialdesignicons/css/materialdesignicons.min.css');
            }
        ],
        mw_icons_mind: [
            function () {
                mw.require('fonts/mw-icons-mind/line/style.css');
                mw.require('fonts/mw-icons-mind/solid/style.css');
            }
        ],
        uppy: [
            'uppy.min.js',
            'uppy.min.css'
        ],
        apexcharts: [
            'apexcharts.min.js',
            'apexcharts.css'
        ]
    };

    mw.lib = {
        _required: [],
        require: function (name) {
            if (mw.lib._required.indexOf(name) !== -1) {
                return false;
            }
            mw.lib._required.push(name);
            if (typeof mw.settings.libs[name] === 'undefined') return false;
            if (mw.settings.libs[name].constructor !== [].constructor) return false;
            var path = mw.settings.libs_url + name + '/',
                arr = mw.settings.libs[name],
                l = arr.length,
                i = 0,
                c = 0;
            for (; i < l; i++) {
                (typeof arr[i] === 'string') ? mw.require(path + arr[i], true) : (typeof arr[i] === 'function') ? arr[i].call() : '';
            }
        },
        get: function (name, done, error) {
            if (mw.lib._required.indexOf(name) !== -1) {
                if (typeof done === 'function') {
                    done.call();
                }
                return false;
            }

            if (typeof mw.settings.libs[name] === 'undefined') return false;
            if (mw.settings.libs[name].constructor !== [].constructor) return false;
            mw.lib._required.push(name);
            var path = mw.settings.libs_url + name + '/',
                arr = mw.settings.libs[name],
                l = arr.length,
                i = 0,
                c = 1;
            for (; i < l; i++) {
                var xhr = $.cachedScript(path + arr[i]);
                xhr.done(function () {
                    c++;
                    if (c === l) {
                        if (typeof done === 'function') {
                            done.call();
                        }
                    }
                });
                xhr.fail(function (jqxhr, settings, exception) {

                    if (typeof error === 'function') {
                        error.call(jqxhr, settings, exception);
                    }

                });
            }
        }
    };

    mw.lang = function (key) {
        var camel = key.trim().replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
            return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
        }).replace(/\s+/g, '');
        if (mw._lang[camel]) {
            return mw._lang[camel];
        }
        else {
            console.warn('"' + key + '" is not present.');
            return key;
        }
    };
    mw.msg = mw._lang = {
        uniqueVisitors: 'Unique visitors',
        allViews: 'All views',
        date: 'Дата',
        weekDays: {
            regular: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ],
            short: [
                'Sun',
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat'
            ]
        },
        months: {
            regular: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
            short: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'June',
                'July',
                'Aug',
                'Sept',
                'Oct',
                'Nov',
                'Dec'
            ]
        },
        ok: "OK",
        category: "Категория",
        published: "Опубликованный",
        unpublished: "Unpublished",
        contentunpublished: "Содержание не опубликовано",
        contentpublished: "Опубликован контент",
        save: "Сохранить",
        saving: "Сохранено",
        saved: "Сохранены",
        settings: "Настройки",
        cancel: "Отказ",
        remove: "Remove",
        close: "Закрыть",
        to_delete_comment: "Вы уверены, что хотите удалить этот  комментарий?",
        del: "Вы уверены, что хотите удалить это?",
        save_and_continue: "Сохранить и продолжить",
        before_leave: "Оставить без сохранения",
        session_expired: "Срок действия вашей сессии истек.",
        login_to_continue: "Войдите, чтобы продолжить",
        more: "More",
        templateSettingsHidden: "Template settings",
        less: "Поменьше",
        product_added: "Продукт добавлен в корзину",
        no_results_for: "Результаты не найдены",
        switch_to_modules: 'Показать модули',
        switch_to_layouts: 'Переключиться на макеты',
        loading: 'Loading...',
        edit: 'Редакция',
        change: 'Изменить',
        submit: 'Submit',
        settingsSaved: 'Параметры сохраняются',
        addImage: 'Add new image'
    };


    if(!window.mw) {
        window.mw = mw;
    }
})();




if (typeof Object.assign !== 'function') {
    Object.defineProperty(Object, "assign", {
        value: function assign(target) {
            'use strict';
            if (target === null || target === undefined) {
                throw new TypeError('Cannot convert undefined or null to object');
            }
            var to = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];
                if (nextSource !== null && nextSource !== undefined) {
                    for (var nextKey in nextSource) {
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
        },
        writable: true,
        configurable: true
    });
}


if (!window.jQuery) {

/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

/*
 * jQuery Migrate - v3.0.0 - 2016-06-09
 * Copyright jQuery Foundation and other contributors
 */
(function( jQuery, window ) {
"use strict";


jQuery.migrateVersion = "3.0.0";


( function() {
return;
	// Support: IE9 only
	// IE9 only creates console object when dev tools are first opened
	// Also, avoid Function#bind here to simplify PhantomJS usage
	var log = window.console && window.console.log &&
			function() { window.console.log.apply( window.console, arguments ); },
		rbadVersions = /^[12]\./;

	if ( !log ) {
		return;
	}

	// Need jQuery 3.0.0+ and no older Migrate loaded
	if ( !jQuery || rbadVersions.test( jQuery.fn.jquery ) ) {
		log( "JQMIGRATE: jQuery 3.0.0+ REQUIRED" );
	}
	if ( jQuery.migrateWarnings ) {
		log( "JQMIGRATE: Migrate plugin loaded multiple times" );
	}

	// Show a message on the console so devs know we're active
	log( "JQMIGRATE: Migrate is installed" +
		( jQuery.migrateMute ? "" : " with logging active" ) +
		", version " + jQuery.migrateVersion );

} )();

var warnedAbout = {};

// List of warnings already given; public read only
jQuery.migrateWarnings = [];

// Set to false to disable traces that appear with warnings
if ( jQuery.migrateTrace === undefined ) {
	jQuery.migrateTrace = true;
}

// Forget any warnings we've already given; public
jQuery.migrateReset = function() {
	warnedAbout = {};
	jQuery.migrateWarnings.length = 0;
};

function migrateWarn( msg ) {
	return;
	var console = window.console;
	if ( !warnedAbout[ msg ] ) {
		warnedAbout[ msg ] = true;
		jQuery.migrateWarnings.push( msg );
		if ( console && console.warn && !jQuery.migrateMute ) {
			console.warn( "JQMIGRATE: " + msg );
			if ( jQuery.migrateTrace && console.trace ) {
				console.trace();
			}
		}
	}
}

function migrateWarnProp( obj, prop, value, msg ) {
	Object.defineProperty( obj, prop, {
		configurable: true,
		enumerable: true,
		get: function() {
			migrateWarn( msg );
			return value;
		}
	} );
}

if ( document.compatMode === "BackCompat" ) {

	// JQuery has never supported or tested Quirks Mode
	migrateWarn( "jQuery is not compatible with Quirks Mode" );
}


var oldInit = jQuery.fn.init,
	oldIsNumeric = jQuery.isNumeric,
	oldFind = jQuery.find,
	rattrHashTest = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
	rattrHashGlob = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;

jQuery.fn.init = function( arg1 ) {
	var args = Array.prototype.slice.call( arguments );

	if ( typeof arg1 === "string" && arg1 === "#" ) {

		// JQuery( "#" ) is a bogus ID selector, but it returned an empty set before jQuery 3.0
		migrateWarn( "jQuery( '#' ) is not a valid selector" );
		args[ 0 ] = [];
	}

	return oldInit.apply( this, args );
};
jQuery.fn.init.prototype = jQuery.fn;

jQuery.find = function( selector ) {
	var args = Array.prototype.slice.call( arguments );

	// Support: PhantomJS 1.x
	// String#match fails to match when used with a //g RegExp, only on some strings
	if ( typeof selector === "string" && rattrHashTest.test( selector ) ) {

		// The nonstandard and undocumented unquoted-hash was removed in jQuery 1.12.0
		// First see if qS thinks it's a valid selector, if so avoid a false positive
		try {
			document.querySelector( selector );
		} catch ( err1 ) {

			// Didn't *look* valid to qSA, warn and try quoting what we think is the value
			selector = selector.replace( rattrHashGlob, function( _, attr, op, value ) {
				return "[" + attr + op + "\"" + value + "\"]";
			} );

			// If the regexp *may* have created an invalid selector, don't update it
			// Note that there may be false alarms if selector uses jQuery extensions
			try {
				document.querySelector( selector );
				migrateWarn( "Attribute selector with '#' must be quoted: " + args[ 0 ] );
				args[ 0 ] = selector;
			} catch ( err2 ) {
				migrateWarn( "Attribute selector with '#' was not fixed: " + args[ 0 ] );
			}
		}
	}

	return oldFind.apply( this, args );
};

// Copy properties attached to original jQuery.find method (e.g. .attr, .isXML)
var findProp;
for ( findProp in oldFind ) {
	if ( Object.prototype.hasOwnProperty.call( oldFind, findProp ) ) {
		jQuery.find[ findProp ] = oldFind[ findProp ];
	}
}

// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	migrateWarn( "jQuery.fn.size() is deprecated; use the .length property" );
	return this.length;
};

jQuery.parseJSON = function() {
	migrateWarn( "jQuery.parseJSON is deprecated; use JSON.parse" );
	return JSON.parse.apply( null, arguments );
};

jQuery.isNumeric = function( val ) {

	// The jQuery 2.2.3 implementation of isNumeric
	function isNumeric2( obj ) {
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	}

	var newValue = oldIsNumeric( val ),
		oldValue = isNumeric2( val );

	if ( newValue !== oldValue ) {
		migrateWarn( "jQuery.isNumeric() should not be called on constructed objects" );
	}

	return oldValue;
};

migrateWarnProp( jQuery, "unique", jQuery.uniqueSort,
	"jQuery.unique is deprecated, use jQuery.uniqueSort" );

// Now jQuery.expr.pseudos is the standard incantation
migrateWarnProp( jQuery.expr, "filters", jQuery.expr.pseudos,
	"jQuery.expr.filters is now jQuery.expr.pseudos" );
migrateWarnProp( jQuery.expr, ":", jQuery.expr.pseudos,
	"jQuery.expr[\":\"] is now jQuery.expr.pseudos" );


var oldAjax = jQuery.ajax;

jQuery.ajax = function( ) {
	var jQXHR = oldAjax.apply( this, arguments );

	// Be sure we got a jQXHR (e.g., not sync)
	if ( jQXHR.promise ) {
		migrateWarnProp( jQXHR, "success", jQXHR.done,
			"jQXHR.success is deprecated and removed" );
		migrateWarnProp( jQXHR, "error", jQXHR.fail,
			"jQXHR.error is deprecated and removed" );
		migrateWarnProp( jQXHR, "complete", jQXHR.always,
			"jQXHR.complete is deprecated and removed" );
	}

	return jQXHR;
};


var oldRemoveAttr = jQuery.fn.removeAttr,
	oldToggleClass = jQuery.fn.toggleClass,
	rmatchNonSpace = /\S+/g;

jQuery.fn.removeAttr = function( name ) {
	var self = this;

	jQuery.each( name.match( rmatchNonSpace ), function( i, attr ) {
		if ( jQuery.expr.match.bool.test( attr ) ) {
			migrateWarn( "jQuery.fn.removeAttr no longer sets boolean properties: " + attr );
			self.prop( attr, false );
		}
	} );

	return oldRemoveAttr.apply( this, arguments );
};

jQuery.fn.toggleClass = function( state ) {

	// Only deprecating no-args or single boolean arg
	if ( state !== undefined && typeof state !== "boolean" ) {
		return oldToggleClass.apply( this, arguments );
	}

	migrateWarn( "jQuery.fn.toggleClass( boolean ) is deprecated" );

	// Toggle entire class name of each element
	return this.each( function() {
		var className = this.getAttribute && this.getAttribute( "class" ) || "";

		if ( className ) {
			jQuery.data( this, "__className__", className );
		}

		// If the element has a class name or if we're passed `false`,
		// then remove the whole classname (if there was one, the above saved it).
		// Otherwise bring back whatever was previously saved (if anything),
		// falling back to the empty string if nothing was stored.
		if ( this.setAttribute ) {
			this.setAttribute( "class",
				className || state === false ?
				"" :
				jQuery.data( this, "__className__" ) || ""
			);
		}
	} );
};


var internalSwapCall = false;

// If this version of jQuery has .swap(), don't false-alarm on internal uses
if ( jQuery.swap ) {
	jQuery.each( [ "height", "width", "reliableMarginRight" ], function( _, name ) {
		var oldHook = jQuery.cssHooks[ name ] && jQuery.cssHooks[ name ].get;

		if ( oldHook ) {
			jQuery.cssHooks[ name ].get = function() {
				var ret;

				internalSwapCall = true;
				ret = oldHook.apply( this, arguments );
				internalSwapCall = false;
				return ret;
			};
		}
	} );
}

jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	if ( !internalSwapCall ) {
		migrateWarn( "jQuery.swap() is undocumented and deprecated" );
	}

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};

var oldData = jQuery.data;

jQuery.data = function( elem, name, value ) {
	var curData;

	// If the name is transformed, look for the un-transformed name in the data object
	if ( name && name !== jQuery.camelCase( name ) ) {
		curData = jQuery.hasData( elem ) && oldData.call( this, elem );
		if ( curData && name in curData ) {
			migrateWarn( "jQuery.data() always sets/gets camelCased names: " + name );
			if ( arguments.length > 2 ) {
				curData[ name ] = value;
			}
			return curData[ name ];
		}
	}

	return oldData.apply( this, arguments );
};

var oldTweenRun = jQuery.Tween.prototype.run;

jQuery.Tween.prototype.run = function( percent ) {
	if ( jQuery.easing[ this.easing ].length > 1 ) {
		migrateWarn(
			"easing function " +
			"\"jQuery.easing." + this.easing.toString() +
			"\" should use only first argument"
		);

		jQuery.easing[ this.easing ] = jQuery.easing[ this.easing ].bind(
			jQuery.easing,
			percent, this.options.duration * percent, 0, 1, this.options.duration
		);
	}

	oldTweenRun.apply( this, arguments );
};

var oldLoad = jQuery.fn.load,
	originalFix = jQuery.event.fix;

jQuery.event.props = [];
jQuery.event.fixHooks = {};

jQuery.event.fix = function( originalEvent ) {
	var event,
		type = originalEvent.type,
		fixHook = this.fixHooks[ type ],
		props = jQuery.event.props;

	if ( props.length ) {
		migrateWarn( "jQuery.event.props are deprecated and removed: " + props.join() );
		while ( props.length ) {
			jQuery.event.addProp( props.pop() );
		}
	}

	if ( fixHook && !fixHook._migrated_ ) {
		fixHook._migrated_ = true;
		migrateWarn( "jQuery.event.fixHooks are deprecated and removed: " + type );
		if ( ( props = fixHook.props ) && props.length ) {
			while ( props.length ) {
			   jQuery.event.addProp( props.pop() );
			}
		}
	}

	event = originalFix.call( this, originalEvent );

	return fixHook && fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
};

jQuery.each( [ "load", "unload", "error" ], function( _, name ) {

	jQuery.fn[ name ] = function() {
		var args = Array.prototype.slice.call( arguments, 0 );

		// If this is an ajax load() the first arg should be the string URL;
		// technically this could also be the "Anything" arg of the event .load()
		// which just goes to show why this dumb signature has been deprecated!
		// jQuery custom builds that exclude the Ajax module justifiably die here.
		if ( name === "load" && typeof args[ 0 ] === "string" ) {
			return oldLoad.apply( this, args );
		}

		migrateWarn( "jQuery.fn." + name + "() is deprecated" );

		args.splice( 0, 0, name );
		if ( arguments.length ) {
			return this.on.apply( this, args );
		}

		// Use .triggerHandler here because:
		// - load and unload events don't need to bubble, only applied to window or image
		// - error event should not bubble to window, although it does pre-1.7
		// See http://bugs.jquery.com/ticket/11820
		this.triggerHandler.apply( this, args );
		return this;
	};

} );

// Trigger "ready" event only once, on document ready
jQuery( function() {
	jQuery( document ).triggerHandler( "ready" );
} );

jQuery.event.special.ready = {
	setup: function() {
		if ( this === document ) {
			migrateWarn( "'ready' event is deprecated" );
		}
	}
};

jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		migrateWarn( "jQuery.fn.bind() is deprecated" );
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		migrateWarn( "jQuery.fn.unbind() is deprecated" );
		return this.off( types, null, fn );
	},
	delegate: function( selector, types, data, fn ) {
		migrateWarn( "jQuery.fn.delegate() is deprecated" );
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		migrateWarn( "jQuery.fn.undelegate() is deprecated" );
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );


var oldOffset = jQuery.fn.offset;

jQuery.fn.offset = function() {
	var docElem,
		elem = this[ 0 ],
		origin = { top: 0, left: 0 };

	if ( !elem || !elem.nodeType ) {
		migrateWarn( "jQuery.fn.offset() requires a valid DOM element" );
		return origin;
	}

	docElem = ( elem.ownerDocument || document ).documentElement;
	if ( !jQuery.contains( docElem, elem ) ) {
		migrateWarn( "jQuery.fn.offset() requires an element connected to a document" );
		return origin;
	}

	return oldOffset.apply( this, arguments );
};


var oldParam = jQuery.param;

jQuery.param = function( data, traditional ) {
	var ajaxTraditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;

	if ( traditional === undefined && ajaxTraditional ) {

		migrateWarn( "jQuery.param() no longer uses jQuery.ajaxSettings.traditional" );
		traditional = ajaxTraditional;
	}

	return oldParam.call( this, data, traditional );
};

var oldSelf = jQuery.fn.andSelf || jQuery.fn.addBack;

jQuery.fn.andSelf = function() {
	migrateWarn( "jQuery.fn.andSelf() replaced by jQuery.fn.addBack()" );
	return oldSelf.apply( this, arguments );
};


var oldDeferred = jQuery.Deferred,
	tuples = [

		// Action, add listener, callbacks, .then handlers, final state
		[ "resolve", "done", jQuery.Callbacks( "once memory" ),
			jQuery.Callbacks( "once memory" ), "resolved" ],
		[ "reject", "fail", jQuery.Callbacks( "once memory" ),
			jQuery.Callbacks( "once memory" ), "rejected" ],
		[ "notify", "progress", jQuery.Callbacks( "memory" ),
			jQuery.Callbacks( "memory" ) ]
	];

jQuery.Deferred = function( func ) {
	var deferred = oldDeferred(),
		promise = deferred.promise();

	deferred.pipe = promise.pipe = function( /* fnDone, fnFail, fnProgress */ ) {
		var fns = arguments;

		migrateWarn( "deferred.pipe() is deprecated" );

		return jQuery.Deferred( function( newDefer ) {
			jQuery.each( tuples, function( i, tuple ) {
				var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

				// Deferred.done(function() { bind to newDefer or newDefer.resolve })
				// deferred.fail(function() { bind to newDefer or newDefer.reject })
				// deferred.progress(function() { bind to newDefer or newDefer.notify })
				deferred[ tuple[ 1 ] ]( function() {
					var returned = fn && fn.apply( this, arguments );
					if ( returned && jQuery.isFunction( returned.promise ) ) {
						returned.promise()
							.done( newDefer.resolve )
							.fail( newDefer.reject )
							.progress( newDefer.notify );
					} else {
						newDefer[ tuple[ 0 ] + "With" ](
							this === promise ? newDefer.promise() : this,
							fn ? [ returned ] : arguments
						);
					}
				} );
			} );
			fns = null;
		} ).promise();

	};

	if ( func ) {
		func.call( deferred, deferred );
	}

	return deferred;
};



})( jQuery, window );


}

var _jqxhr = jQuery.ajax;



jQuery.ajax = function(url, options){
    options = options || {};
    var settings = {};
    if(typeof url === 'object'){
        $.extend(settings, url);
    }
    else{
        settings.url = url;
    }
    if(typeof settings.success === 'function'){
        settings._success = settings.success;
        delete settings.success;
        settings.success = function (data, status, xhr) {
            if(xhr.status === 200) {
                if (data && (data.form_data_required || data.form_data_module)) {
                    mw.extradataForm(settings, data);
                }
                else {
                    if (typeof this._success === 'function') {
                        var scope = this;
                        scope._success.call(scope, data, status, xhr);

                    }
                }
            }
        };
    }
    settings = $.extend({}, settings, options);
    var xhr = _jqxhr(settings);
    return xhr;
};

mw.safeCallCache = {};

mw.safeCall = function(hash, call){
    if(!mw.safeCallCache[hash]){
        mw.safeCallCache[hash] = true;
        call.call();
        (function(hash){
            setTimeout(function(){
                delete mw.safeCallCache[hash];
            });
        })(hash);
    }
};

$.ajaxSetup({
    cache: false,
    error: function (xhr, e) {
        if(xhr.status !== 200 && xhr.status !== 0){
            mw.notification.error('Error ' + xhr.status + ' - ' + xhr.statusText + ' - \r\n' + xhr.responseText );
            setTimeout(function(){
                mw.tools.loading(false);
            }, 333);
        }
    }
});





jQuery.cachedScript = function( url, options ) {
    options = $.extend( options || {}, {
    dataType: "script",
    cache: true,
    url: url
});
    return jQuery.ajax( options );
};


mw.version = "1.1.20";

mw.pauseSave = false;

mw.askusertostay = false;

  if (top === self){
    window.onbeforeunload = function() {
      if(mw.askusertostay){
        mw.notification.warning("У Вас есть несохранённые перемены!");
        return "У Вас есть несохранённые перемены!";
      }
    }
  }

  warnOnLeave = function(){
     mw.tools.confirm("У Вас есть несохранённые перемены! Вы уверены??");
  };

  mw.module = {}

  mwd = document;
  mww = window;

  mwhead = mwd.head || mwd.getElementsByTagName('head')[0];

  mw.doc = mwd;
  mw.win = mww;
  mw.head = mwhead;

  mw.loaded = false;

  mw._random = new Date().getTime();

  mw.random = function() {
    return mw._random++;
  };

  mw.id = function(prefix) {
    prefix = prefix || 'mw-';
    return prefix + mw.random();
  };

  String.prototype.contains = function(a) {
    return !!~this.indexOf(a);
  };
  String.prototype.tonumber = function(){
    var n = parseFloat(this);
    if(!isNaN(n)){
        return n;
    }
    else{
      return 0;
    }
  };

  mw.onLive = function(callback) {
    if (typeof mw.settings.liveEdit === 'boolean' && mw.settings.liveEdit) {
      callback.call(this)
    }
  };
  mw.onAdmin = function(callback) {
    if ( window['mwAdmin'] ) {
      callback.call(this);
    }
  };
    if (!Array.isArray) {
        Array.isArray = function(arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        };
    }
  if (Array.prototype.indexOf === undefined) {
    Array.prototype.indexOf = function(obj) {
      var i=0, l=this.length;
      for ( ; i < l; i++) {
        if (this[i] == obj) {
          return i;
        }
      }
      return -1;
    }
  }


  mw.required = typeof mw.required === 'undefined'?[]:mw.required;
  mw.require = function(url, inHead, key) {
    if(!url) return;
    if(typeof inHead === 'boolean' || typeof inHead === 'undefined'){
        inHead = inHead || false;
    }
    var keyString;
    if(typeof inHead === 'string'){
        keyString = ''+inHead;
        inHead = key || false;
    }
    if(typeof key === 'string'){
        keyString = key;
    }
    var toPush = url, urlModified = false;
    if (!!keyString) {
        toPush = keyString;
        urlModified = true
    }
    var t = url.split('.').pop();
    url = url.contains('//') ? url : (t !== "css" ? "userfiles/modules/microweber/api/" + url  :  "userfiles/modules/microweber/css/" + url);
    if(!urlModified) toPush = url;
    if (!~mw.required.indexOf(toPush)) {

      mw.required.push(toPush);
      url = url.contains("?") ?  url + '&mwv=' + mw.version : url + "?mwv=" + mw.version;
      if(document.querySelector('link[href="'+url+'"],script[src="'+url+'"]') !== null){
          return
      }
      var string = t !== "css" ? "<script type='text/javascript'  src='" + url + "'></script>" : "<link rel='stylesheet' type='text/css' href='" + url + "' />";
      if ((mwd.readyState === 'loading'/* || mwd.readyState === 'interactive'*/) && !inHead && !!window.CanvasRenderingContext2D && self === parent) {
         mwd.write(string);
      }
      else {
          if(typeof $ === 'function'){
              $(mwhead).append(string);
          }
          else{
              var el;
              if( t !== "css")  {
                  el = mwd.createElement('script');
                  el.src = url;
                  el.setAttribute('type', 'text/javascript');
                  mwhead.appendChild(el);
              }
              else{
                 el = mwd.createElement('link');
                 el.rel='stylesheet';
                 el.type='text/css';
                 el.href = url;
                 mwhead.appendChild(el);
              }
          }
      }
    }
  };



mw.getScripts = function (array, callback) {
  if(typeof array === 'string'){
      array = array.split(',')
  }
  var all = array.length, ready = 0;
  $.each(array, function(){
      var scr = $('<script>');
      $(scr).on('load', function(){
        ready++;
        if(all === ready) {
            callback.call()
        }
      });
      scr[0].src = this;
      document.body.appendChild(scr[0]);
  });
};

  mw.moduleCSS = mw.module_css = function(url){
    if (!~mw.required.indexOf(url)) {
      mw.required.push(url);
      var el = mwd.createElement('link');
      el.rel='stylesheet';
      el.type='text/css';
      el.href = url;
      mwhead.insertBefore(el, mwhead.firstChild);
    }
  };
  mw.moduleJS = mw.module_js = function(url){
    mw.require(url, true);
  };



  mw.wait = function(a, b, max) {
    window[a] === undefined ? setTimeout(function() {
      mw.wait(a, b), 52
    }) : b.call(a);
  };

  mw.target = {}

  mw.is = {
    obj: function(obj) {
      return typeof obj === 'object';
    },
    func: function(obj) {
      return typeof obj === 'function';
    },
    string: function(obj) {
      return typeof obj === 'string';
    },
    array:function(obj){
      return [].constructor === obj.constructor;
    },
    invisible: function(obj) {
      return window.getComputedStyle(obj, null).visibility === 'hidden';
    },
    visible: function(obj) {
      return window.getComputedStyle(obj, null).visibility === 'visible';
    },
    ie: (/*@cc_on!@*/false || !!window.MSStream) && !navigator.userAgent.match(/Trident\/7\./) && false,
    firefox:navigator.userAgent.toLowerCase().contains('firefox')
  }


/*
 * Microweber - Javascript Framework
 *
 * Copyright (c) Licensed under the Microweber
 * license http://microweber.com/license
 *
 */

  mw.load_module = function(name, selector, callback, attributes) {
     var attributes = attributes || {};
     attributes.module = name;
     return mw._({
        selector: selector,
        params: attributes,
        done: function() {
          mw.settings.sortables_created = false;
          if (mw.is.func(callback)) {
            callback.call(mw.$(selector)[0]);
          }
        }
      });
  }

  mw.loadModuleData = function(name, update_element, callback, attributes){


    var attributes = attributes || {};

    if(typeof update_element == 'function'){
      var callback = update_element;
    }
    var update_element = document.createElement('div');
    attributes.module = name;
    mw._({
      selector: update_element,
      params: attributes
    }, false, true)
    .done(function(data){

            setTimeout(function(){
            callback.call(this, data);
                $(document).off('focusin.modal');
            }, 50)

    });
  }
  mw.getModule = function(name, params, callback){
    if( typeof params == 'function'){
        var callback = params;
    }
    var params = params || {};
    var update_element = document.createElement('div');
    for(var x in params){
        update_element.setAttribute(x, params[x]);
    }
    mw.loadModuleData(name, update_element, function(a){
        callback.call(a);
    });
  }

  mw.reload_module_intervals = {};
  mw.reload_module_interval = function(module_name, interval) {
    var interval =  interval || 1000;
    var obj = {pause:false};
    if(!!mw.reload_module_intervals[module_name]){
        clearInterval(mw.reload_module_intervals[module_name]);
    }
    mw.reload_module_intervals[module_name] = setInterval(function(){
        if(!obj.pause){
            obj.pause = true;
            mw.reload_module(module_name, function(){
                obj.pause = false;
            });
        }
    }, interval);
    return mw.reload_module_intervals['module_name'];
  }

  mw.reload_module_parent = function(module, callback) {
    if(self !== parent && !!parent.mw){

       parent.mw.reload_module(module, callback)
	   if(typeof(top.mweditor) != 'undefined'  && typeof(top.mweditor) == 'object'   && typeof(top.mweditor.contentWindow) != 'undefined'){
		 top.mweditor.contentWindow.mw.reload_module(module, callback)
		} else if(typeof(mw.top().win.iframe_editor_window) != 'undefined'  && typeof(mw.top().win.iframe_editor_window) == 'object'   && typeof(mw.top().win.iframe_editor_window.mw) != 'undefined'){

		mw.top().win.iframe_editor_window.mw.reload_module(module, callback)
		}

        if(typeof(parent.mw_preview_frame_object) != 'undefined'  && typeof(parent.mw_preview_frame_object) == 'object'   && typeof(parent.mw_preview_frame_object.contentWindow) != 'undefined'){
            if(parent.mw_preview_frame_object.contentWindow != null && typeof(parent.mw_preview_frame_object.contentWindow.mw) != 'undefined'){
                parent.mw_preview_frame_object.contentWindow.mw.reload_module(module, callback)
            }
        }
    } else {
		if(typeof(mweditor) != 'undefined'  && typeof(mweditor) == 'object'   && typeof(mweditor.contentWindow) != 'undefined' && typeof(mweditor.contentWindow.mw) != 'undefined'){
		    mweditor.contentWindow.mw.reload_module(module, callback)
		}

	}
  }
  mw.reload_modules = function(array, callback, simultaneously) {
      if(array.array && !array.slice){
          callback = array.callback || array.done || array.ready;
          simultaneously = array.simultaneously;
          array = array.array;
      }
      simultaneously = simultaneously || false;
      if(simultaneously){
        var l = array.length, ready = 0, i = 0;
        for( ; i<l; i++){
            mw.reload_module(array[i], function(){
                ready++;
                if(ready === l && callback){
                    callback.call();
                }
            });
        }
      }
      else{
        if(array.length === 0){
            if(callback){
                callback.call()
            }
        }
        else{
            var m = array[0];
            array.shift();
            mw.reload_module(m, function(){
                mw.reload_modules(array, callback, false);
            });
        }
      }
  };
  mw.reload_module_everywhere = function(module, eachCallback) {
    mw.tools.eachWindow(function () {
        if(this.mw && this.mw.reload_module){
            this.mw.reload_module(module, function(){
                if(typeof eachCallback === 'function'){
                    eachCallback.call();
                }
            })
        }
    })
  };

  mw.reload_module = function(module, callback) {
    if(module.constructor === [].constructor){
        var l = module.length, i=0, w = 1;
        for( ; i<l; i++){
          mw.reload_module(module[i], function(){
            w++;
            if(w === l && typeof callback === 'function'){
              callback.call();
            }
            $( this ).trigger('ModuleReload')
          });
        }
        return false;
    }
    var done = callback || function(){};
    if (typeof module !== 'undefined') {
      if (typeof module === 'object') {

        mw._({
          selector: module,
          done:done
        });
      } else {
        var module_name = module.toString();
        var refresh_modules_explode = module_name.split(",");
        for (var i = 0; i < refresh_modules_explode.length; i++) {
          var module = refresh_modules_explode[i];
          if (typeof module != 'undefined') {
		    var module = module.replace(/##/g, '#');
            var m = mw.$(".module[data-type='" + module + "']");
            if (m.length === 0) {
                try { var m = $(module); }  catch(e) {};
            }

              (function(callback){
                  var count = 0;
                  for (var i=0;i<m.length;i++){
                      mw.reload_module(m[i], function(){
                          count++;
                          if(count === m.length && typeof callback === 'function'){
                              callback.call();
                          }
                          $( document ).trigger('ModuleReload')
                      })
                  }
              })(callback)



          }
        }
      }
    }
  }

  mw.clear_cache = function() {
    $.ajax({
      url: mw.settings.site_url+'api/clearcache',
      type: "POST",
      success: function(data){
        if(mw.notification != undefined){
          mw.notification.msg(data);
        }
      }
    });
  }
  mw.temp_reload_module_queue_holder = [];




  mw["_"] = function(obj, sendSpecific, DONOTREPLACE) {
    if(mw.on){
        mw.on.DOMChangePause = true;
    }
    var url = typeof obj.url !== 'undefined' ? obj.url : mw.settings.site_url+'module/';
    var selector = typeof obj.selector !== 'undefined' ? obj.selector : '';
    var params =  typeof obj.params !== 'undefined' ? obj.params : {};
    var to_send = params;
    if(typeof $(obj.selector)[0] === 'undefined') {
        mw.pauseSave = false;
        mw.on.DOMChangePause = false;
        return false;
    }
    if(mw.session){
        mw.session.checkPause = true;
    }
    var $node = $(obj.selector);
    var node = $node[0];
    var attrs = node.attributes;



     // wait between many reloads
      if (node.id) {
          if ( mw.temp_reload_module_queue_holder.indexOf(node.id) === -1){
          mw.temp_reload_module_queue_holder.push(node.id);
              setTimeout(function() {
                  var reload_index = mw.temp_reload_module_queue_holder.indexOf(node.id);
                  delete mw.temp_reload_module_queue_holder[reload_index];
              }, 300);
          } else {
              return;
          }
      }

    if (sendSpecific) {
      attrs["class"] !== undefined ? to_send["class"] = attrs["class"].nodeValue : "";
      attrs["data-module-name"] !== undefined ? to_send["data-module-name"] = attrs["data-module-name"].nodeValue : "";
      attrs["data-type"] !== undefined ? to_send["data-type"] = attrs["data-type"].nodeValue : "";
      attrs["type"] !== undefined ? to_send["type"] = attrs["type"].nodeValue : "";
      attrs["template"] !== undefined ? to_send["template"] = attrs["template"].nodeValue : "";
      attrs["ondrop"] !== undefined ? to_send["ondrop"] = attrs["ondrop"].nodeValue : "";
    }
    else {
      for (var i in attrs) {
  		  if(attrs[i] !== undefined){
              var name = attrs[i].name;
              var val = attrs[i].nodeValue;
              if(typeof to_send[name] === 'undefined'){
                  to_send[name]  = val;
              }
  		  }
      }
    }
    var b = true;
    for (var a in to_send) {
       if(to_send.hasOwnProperty(a)) { b = false; }
    }
    if(b){
      mw.tools.removeClass(mwd.body, 'loading');
      mw.pauseSave = false;
      mw.on.DOMChangePause = false;
      return false;
    }
    var storedValues = $node.dataset('storeValues') === 'true' ? {} : false;
    if(storedValues) {
        $node.find('[name]').each(function () {
            storedValues[this.name] = $(this).val();
        })
    }

    var xhr = $.post(url, to_send, function(data) {

      if(!!mw.session){
        mw.session.checkPause = false;
      }
      if(DONOTREPLACE){

          mw.tools.removeClass(mwd.body, 'loading');
          mw.pauseSave = false;
          mw.on.DOMChangePause = false;
          return false;
      }

      var docdata = mw.tools.parseHtml(data);

      if(storedValues) {
        mw.$('[name]', docdata).each(function(){
            var el = $(this);
            if(!el.val()) {
                el.val(storedValues[this.name] || undefined);
                this.setAttribute("value", storedValues[this.name] || '');
            }
        })
      }

      var hasDone = typeof obj.done === 'function';
      var id;
      if (typeof to_send.id  !== 'undefined') {
        id = to_send.id;
      } else{
        id = docdata.body.querySelector(['id']);
      }
      mw.$(selector).replaceWith($(docdata.body).html());
      var count = 0;
      if(hasDone){
          setTimeout(function(){
              count++;
              obj.done.call($(selector)[0], data);
              mw.trigger('moduleLoaded');
          }, 33);
      }

      if(!id){
          mw.pauseSave = false;
          mw.on.DOMChangePause = false;
          return false;
      }


      typeof mw.drag !== 'undefined' ? mw.drag.fix_placeholders(true) : '';
      var m = mwd.getElementById(id);
      // typeof obj.done === 'function' ? obj.done.call(selector, m) : '';

      if(mw.wysiwyg){
        $(m).hasClass("module") ? mw.wysiwyg.init_editables(m) : '' ;
      }
      if(mw.on && !hasDone){
        mw.on.moduleReload(id, "", true);
        mw.trigger('moduleLoaded');
      }
      if (mw.on) {
        mw.on.DOMChangePause = false;
      }
      mw.tools.removeClass(mwd.body, 'loading');


    })
    .fail(function(){
       mw.pauseSave = false;
       typeof obj.fail === 'function' ? obj.fail.call(selector) : '';
    })
    .always(function(){
        mw.pauseSave = false;
    });
    return xhr;
  };


  api = function(action, params, callback){
      var obj;
    var url = mw.settings.api_url + action;
    var type = typeof params;
    if(type === 'string'){
        obj = mw.serializeFields(params);
    }
    else if(type === 'object' && !jQuery.isArray(params)){
        obj = params;
    }
    else{
      obj = {};
    }
    $.post(url, obj, function(data){
       if(typeof callback === 'function'){
          callback.call(data);
       }
    }).fail(function(){

    });
  };

  mw.inLog = function(what) {
    if(!mw._inlog) {
        mw._inlog = mwd.createElement('div');
        mw._inlog.className = 'mw-in-log';
        $(mw._inlog).css({
            position: 'fixed',
            bottom:0,
            left:0,
            padding:20,
            background:'#fff',
            zIndex:10,
            height:190,
            overflow:'auto',
            fontSize:10

        })
        mwd.body.appendChild(mw._inlog)
    }
      $(mw._inlog).append('<br>'+what)
      mw._inlog.scrollTop = mw._inlog.scrollHeight;

  };
  mw.log = function(what) {
    if (window.console && mw.settings.debug) {
      top.console.log(what);
    }
  };

  mw.$ = function(selector, context) {
    if(typeof selector === 'object'){ return jQuery(selector); }
    context = context || mwd;
    if (typeof mwd.querySelector !== 'undefined') {
      if (typeof selector === 'string') {
        try {
          return jQuery(context.querySelectorAll(selector));
        } catch (e) {
          return jQuery(selector, context);
        }
      } else {
        return jQuery(selector, context);
      }
    } else {
      return jQuery(selector, context);
    }
  };

  mw.get = function(action, params, callback){
      var obj;
    var url = mw.settings.api_url + action;
    var type = typeof params;
    if(type === 'string'){
        obj = mw.serializeFields(params);
    }
    else if(type.constructor === {}.constructor ){
        obj = params;
    }
    else{
      obj = {};
    }
    $.post(url, obj)
        .success(function(data) { return typeof callback === 'function' ? callback.call(data) : data;   })
        .error(function(data) { return typeof callback === 'function' ? callback.call(data) : data;  });
  }

  get_content = function(params, callback){
    var obj = mw.url.getUrlParams("?"+params);
    if(typeof callback!='function'){
       mw.get('get_content_admin', obj);
    }
    else{
       mw.get('get_content_admin', obj, function(){callback.call(this)});
    }
  }

  mw.get_content = get_content

  mw.serializeFields =  function(id, ignorenopost){
        var ignorenopost = ignorenopost || false;
        var el = mw.$(id);
        var fields = "input[type='text'], input[type='email'], input[type='number'], input[type='tel'], "
                    + "input[type='color'], input[type='url'], input[type='week'], input[type='search'], input[type='range'], "
                    + "input[type='datetime-local'], input[type='month'], "
                    + "input[type='password'], input[type='hidden'], input[type='datetime'], input[type='date'], input[type='time'], "
                    +"input[type='email'],  textarea, select, input[type='checkbox']:checked, input[type='radio']:checked, "
                    +"input[type='checkbox'][data-value-checked][data-value-unchecked]";
        var data = {};
        $(fields, el).each(function(){
            if(!this.name){
                console.warn('Name attribute missing on ' + this.outerHTML);
            }
            if((!$(this).hasClass('no-post') || ignorenopost) && !this.disabled && this.name && typeof this.name != 'undefined'){
              var el = this, _el = $(el);
              var val = _el.val();
              var name = el.name;
              if(el.name.contains("[]")){
                  data[name] = data[name] || []
                  data[name].push(val);
              }
              else if(el.type === 'checkbox' && el.getAttribute('data-value-checked') ){
                  data[name] = el.checked ? el.getAttribute('data-value-checked') : el.getAttribute('data-value-unchecked');
              }
              else{
                data[name] = val;
              }
            }
        });
        return data;
   }

mw.response = function(form, data, messages_at_the_bottom){
     messages_at_the_bottom = messages_at_the_bottom || false;
    if(data == null  ||  typeof data == 'undefined' ){
      return false;
    }

    data = mw.tools.toJSON(data);
    if(typeof data === 'undefined'){
          return false;
      }

    if(typeof data.error !== 'undefined'){
        mw._response.error(form, data, messages_at_the_bottom);
        return false;
    }
    else if(typeof data.success !== 'undefined'){
        mw._response.success(form, data, messages_at_the_bottom);
        return true;
    }
    else if(typeof data.warning !== 'undefined'){
        mw._response.warning(form, data, messages_at_the_bottom);
        return false;
    }
    else{
        return false;
    }
};

mw._response = {
  error:function(form, data, _msg){
    form = mw.$(form);
    var err_holder = mw._response.msgHolder(form, 'error');
    mw._response.createHTML(data.error, err_holder);
  },
  success:function(form, data, _msg){
    form = mw.$(form);
    var err_holder = mw._response.msgHolder(form, 'success');
    mw._response.createHTML(data.success, err_holder);
  },
  warning:function(form, data, _msg){
    form = mw.$(form);
    var err_holder = mw._response.msgHolder(form, 'warning');
    mw._response.createHTML(data.warning, err_holder);
  },
  msgHolder : function(form, type, method){
    method = method || 'append';
    var err_holder = form.find(".mw-checkout-response:first");
    var err_holder2 = form.find(".alert:first");
    if(err_holder.length === 0){
        err_holder = err_holder2;
    }
    if(err_holder.length === 0){
        err_holder = mwd.createElement('div');
        form[method](err_holder);
    }

    var bootrap_error_type = 'default';
    if(type === 'error'){
        bootrap_error_type = 'danger';
    } else if(type === 'done'){
        bootrap_error_type = 'info';
    }


    $(err_holder).empty().attr("class", 'alert alert-' + type + ' alert-' + bootrap_error_type + ' ');
    return err_holder;
  },
  createHTML:function(data, holder){
    var i, html = "";


    if(typeof data === 'string'){
        html+= data.toString();
    }
    else{
      for( i in data){
          if(typeof data[i] === 'string'){
              html+='<li>'+data[i]+'</li>';
          }
          else if(typeof data[i] === 'object'){
            $.each(data[i], function(){
                html+='<li>'+this+'</li>';
            })
          }
      }
    }
    mw.$(holder).eq(0).append('<ul class="mw-error-list">'+html+'</ul>');
    mw.$(holder).eq(0).show();
  }
}


mw.user = {
  isLogged:function(callback){
    $.post(mw.settings.api_url + 'is_logged', function(data){
        var isLogged =  (data === 'true');
        callback.call(isLogged, isLogged);
    });
  }
};

mw.parent = function(){
    if(window === top){
        return window.mw;
    }
    if(mw.tools.canAccessWindow(parent) && parent.mw){
        return parent.mw;
    }
    return window.mw;
};

mw.top = function(){
  if(!!mw.__top){
      return mw.__top;
  }
  var getLastParent = function() {
      var result = window;
      var curr = window;
      while (curr && mw.tools.canAccessWindow(curr) && (curr.mw || curr.parent.mw)){
          result = curr;
          curr = curr.parent;
      }
      mw.__top = curr.mw;
      return result.mw;
  };
  if(window === top){
    mw.__top = window.mw;
    return window.mw;
  } else {
        if(mw.tools.canAccessWindow(top) && top.mw){
            mw.__top = top.mw;
            return top.mw;
        } else{
            if(window.top !== window.parent){
                return getLastParent();
            }
            else{
                mw.__top = window.mw;
                return window.mw;
            }
        }
  }
};




mw.required.push("userfiles/modules/microweber/api/jquery.js");


//mw.required.push("userfiles/modules/microweber/api/libs/acolorpicker/acolorpicker.js");
//mw.required.push("userfiles/modules/microweber/api/color.js");

mw.required.push("userfiles/modules/microweber/api/tools.js");


//mw.required.push("userfiles/modules/microweber/api/css_parser.js");

//mw.required.push("userfiles/modules/microweber/api/files.js");

mw.required.push("userfiles/modules/microweber/api/forms.js");

mw.required.push("userfiles/modules/microweber/api/url.js");

mw.required.push("userfiles/modules/microweber/api/events.js");

//mw.required.push("userfiles/modules/microweber/api/upgrades.js");
mw.required.push("userfiles/modules/microweber/api/session.js");

mw.required.push("userfiles/modules/microweber/api/shop.js");

mw.required.push("userfiles/modules/microweber/api/common.js");

mw.required.push("userfiles/modules/microweber/api/components.js");

mw.required.push("userfiles/modules/microweber/api/dialog.js");
mw.required.push("userfiles/modules/microweber/api/instruments.js");
mw.required.push("userfiles/modules/microweber/api/forms.js");
mw.required.push("userfiles/modules/microweber/api/fonts.js");

//mw.required.push("userfiles/modules/microweber/api/content.js");










mw.tools = {};



mw.required.push('userfiles/modules/microweber/api/tools/base64.js');

mw.tools.base64 = {
// private property
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
// public method for encoding
    encode: function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = mw.tools.base64._utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
        }
        return output;
    },
// public method for decoding
    decode: function (input) {
        if (typeof input == 'undefined') {
            return;
        }
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = mw.tools.base64._utf8_decode(output);
        return output;
    },
// private method for UTF-8 encoding
    _utf8_encode: function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    },
// private method for UTF-8 decoding
    _utf8_decode: function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}

mw.required.push('userfiles/modules/microweber/api/tools/checkbox.js');

mw.check = {
    all: function (selector) {
        mw.$(selector).find("input[type='checkbox']").each(function () {
            this.checked = true;
        });
    },
    none: function (selector) {
        mw.$(selector).find("input[type='checkbox']").each(function () {
            this.checked = false;
        });
    },
    toggle: function (selector) {
        var els = mw.$(selector).find("input[type='checkbox']"), checked = els.filter(':checked');
        if (els.length === checked.length) {
            mw.check.none(selector)
        }
        else {
            mw.check.all(selector);
        }
    },
    collectChecked: function (parent) {
        var arr = [];
        var all = parent.querySelectorAll('input[type="checkbox"]'), i = 0, l = all.length;
        for (; i < l; i++) {
            var el = all[i];
            el.checked ? arr.push(el.value) : '';
        }
        return arr;
    }
}

mw.required.push('userfiles/modules/microweber/api/tools/colorpicker.js');

mw._colorPickerDefaults = {
    skin: 'mw-tooltip-default',
    position: 'bottom-center',
    onchange: false
};

mw._colorPicker = function (options) {
    mw.lib.require('colorpicker');
    if (!mw.tools.colorPickerColors) {
        mw.tools.colorPickerColors = [];

        // var colorpicker_els = mw.top().$("body *");
        // if(colorpicker_els.length > 0){
        //     colorpicker_els.each(function () {
        //         var css = parent.getComputedStyle(this, null);
        //         if (css !== null) {
        //             if (mw.tools.colorPickerColors.indexOf(css.color) === -1) {
        //                 mw.tools.colorPickerColors.push(mw.color.rgbToHex(css.color));
        //             }
        //             if (mw.tools.colorPickerColors.indexOf(css.backgroundColor) === -1) {
        //                 mw.tools.colorPickerColors.push(mw.color.rgbToHex(css.backgroundColor));
        //             }
        //         }
        //     });
        // }

    }
    var proto = this;
    if (!options) {
        return false;
    }

    var settings = $.extend({}, mw._colorPickerDefaults, options);

    if (settings.element === undefined || settings.element === null) {
        return false;
    }



    var $el = mw.$(settings.element);
    if ($el[0] === undefined) {
        return false;
    }
    if($el[0].mwcolorPicker) {
        return $el[0].mwcolorPicker;
    }


    $el[0].mwcolorPicker = this;
    this.element = $el[0];
    if ($el[0].mwToolTipBinded !== undefined) {
        return false;
    }
    if (!settings.method) {
        if (this.element.nodeName == 'DIV') {
            settings.method = 'inline';
        }
    }
    this.settings = settings;

    $el[0].mwToolTipBinded = true;
    var sett = {
        showAlpha: true,
        showHSL: false,
        showRGB: false,
        showHEX: true,
        palette: mw.tools.colorPickerColors
    };

    if(settings.value) {
        sett.color = settings.value
    }
    if(typeof settings.showRGB !== 'undefined') {
        sett.showRGB = settings.showRGB
    }
    if(typeof settings.showHEX !== 'undefined') {
        sett.showHEX = settings.showHEX
    }

    if(typeof settings.showHSL !== 'undefined') {
        sett.showHSL = settings.showHSL
    }
    var frame;
    if (settings.method === 'inline') {

        sett.attachTo = $el[0];

        frame = AColorPicker.createPicker(sett);
        frame.onchange = function (data) {

            if (proto.settings.onchange) {
                proto.settings.onchange(data.color);
            }

            if ($el[0].nodeName === 'INPUT') {
                var val = val === 'transparent' ? val : '#' + val;
                $el.val(val);
            }
        }

    }
    else {
        var tip = mw.tooltip(settings), $tip = mw.$(tip).hide();
        this.tip = tip;

        mw.$('.mw-tooltip-content', tip).empty();
        sett.attachTo = mw.$('.mw-tooltip-content', tip)[0]

        frame = AColorPicker.createPicker(sett);

        frame.onchange = function (data) {

            if(frame.pause) {
                return;
            }

            if (proto.settings.onchange) {
                proto.settings.onchange(data.color);
            }

            if ($el[0].nodeName === 'INPUT') {
                $el.val(data.color);
            }
        };
        if ($el[0].nodeName === 'INPUT') {
            $el.on('focus', function (e) {
                if(this.value.trim()){
                    frame.pause = true;
                    frame.color = this.value;
                    setTimeout(function () {
                        frame.pause = false;
                    });
                }
                mw.$(tip).show();
                mw.tools.tooltip.setPosition(tip, $el[0], settings.position)
            });
        }
        else {
            $el.on('click', function (e) {
                mw.$(tip).toggle();
                mw.tools.tooltip.setPosition(tip, $el[0], settings.position)
            });
        }
        var documents = [document];
        if (self !== top){
            documents.push(top.document);
        }
        mw.$(documents).on('click', function (e) {
            if (!mw.tools.hasParentsWithClass(e.target, 'mw-tooltip') && e.target !== $el[0]) {
                mw.$(tip).hide();
            }
        });
        if ($el[0].nodeName === 'INPUT') {
            $el.bind('blur', function () {
                //$(tip).hide();
            });
        }
    }
    if (this.tip) {
        this.show = function () {
            mw.$(this.tip).show();
            mw.tools.tooltip.setPosition(this.tip, this.settings.element, this.settings.position)
        };
        this.hide = function () {
            mw.$(this.tip).hide()
        };
        this.toggle = function () {
            var tip = mw.$(this.tip);
            if (tip.is(':visible')) {
                this.hide()
            }
            else {
                $el.focus();
                this.show()
            }
        }
    }

};
mw.colorPicker = mw.colourPicker = function (o) {

    return new mw._colorPicker(o);
};


mw.required.push('userfiles/modules/microweber/api/tools/common-extend.js');

mw.requestAnimationFrame = (function () {
    return window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback, element) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

mw._intervals = {};
mw.interval = function(key, func){
    if(!key || !func || !!mw._intervals[key]) return;
    mw._intervals[key] = func;
};
mw.removeInterval = function(key){
    delete mw._intervals[key];
};
setInterval(function(){
    for(var i in mw._intervals){
        mw._intervals[i].call();
    }
}, 99);

mw.datassetSupport = typeof mwd.documentElement.dataset !== 'undefined';

mw.exec = function (str, a, b, c) {
    a = a || "";
    b = b || "";
    c = c || "";
    if (!str.contains(".")) {
        return window[this](a, b, c);
    }
    else {
        var arr = str.split(".");
        var temp = window[arr[0]];
        var len = arr.length - 1;
        for (var i = 1; i <= len; i++) {
            if (typeof temp === 'undefined') {
                return false;
            }
            temp = temp[arr[i]];
        }
        return mw.is.func(temp) ? temp(a, b, c) : temp;
    }
};

mw.controllers = {};
mw.external_tool = function (url) {
    return !url.contains("/") ? mw.settings.site_url + "editor_tools/" + url : url;
};
// Polyfill for escape/unescape
if (!window.unescape) {
    window.unescape = function (s) {
        return s.replace(/%([0-9A-F]{2})/g, function (m, p) {
            return String.fromCharCode('0x' + p);
        });
    };
}
if (!window.escape) {
    window.escape = function (s) {
        var chr, hex, i = 0, l = s.length, out = '';
        for (; i < l; i++) {
            chr = s.charAt(i);
            if (chr.search(/[A-Za-z0-9\@\*\_\+\-\.\/]/) > -1) {
                out += chr;
                continue;
            }
            hex = s.charCodeAt(i).toString(16);
            out += '%' + ( hex.length % 2 !== 0 ? '0' : '' ) + hex;
        }
        return out;
    };
}


Array.prototype.remove = Array.prototype.remove || function (what) {
    var i = 0, l = this.length;
    for ( ; i < l; i++) {
        this[i] === what ? this.splice(i, 1) : '';
    }
};

mw.which = function (str, arr_obj, func) {
    if (arr_obj instanceof Array) {
        var l = arr_obj.length, i = 0;
        for (; i < l; i++) {
            if (arr_obj[i] === str) {
                func.call(arr_obj[i]);
                return arr_obj[i];
            }
        }
    }
    else {
        for (var i in arr_obj) {
            if (i === str) {
                func.call(arr_obj[i]);
                return arr_obj[i];
            }
        }
    }
};



mw._JSPrefixes = ['Moz', 'Webkit', 'O', 'ms'];
_Prefixtest = false;
mw.JSPrefix = function (property) {
    !_Prefixtest ? _Prefixtest = mwd.body.style : '';
    if (_Prefixtest[property] !== undefined) {
        return property;
    }
    else {
        var property = property.charAt(0).toUpperCase() + property.slice(1),
            len = mw._JSPrefixes.length,
            i = 0;
        for (; i < len; i++) {
            if (_Prefixtest[mw._JSPrefixes[i] + property] !== undefined) {
                return mw._JSPrefixes[i] + property;
            }
        }
    }
}
if (typeof document.hidden !== "undefined") {
    _mwdochidden = "hidden";
} else if (typeof document.mozHidden !== "undefined") {
    _mwdochidden = "mozHidden";
} else if (typeof document.msHidden !== "undefined") {
    _mwdochidden = "msHidden";
} else if (typeof document.webkitHidden !== "undefined") {
    _mwdochidden = "webkitHidden";
}
document.isHidden = function () {
    if (typeof _mwdochidden !== 'undefined') {
        return document[_mwdochidden];
    }
    else {
        return !document.hasFocus();
    }
};


mw.postMsg = function (w, obj) {
    w.postMessage(JSON.stringify(obj), window.location.href);
};

mw.uploader = function (o) {

    mw.require("files.js");

    var uploader = mw.files.uploader(o);
    var el = mw.$(o.element)[0];
    if (typeof el !== 'undefined') {
        el.appendChild(uploader);
    }
    return uploader;
};

mw.fileWindow = function (config) {
    config = config || {};
    var url = config.types ? ("rte_image_editor?types=" + config.types + '#fileWindow') : ("rte_image_editor#fileWindow");
    var url = mw.settings.site_url + 'editor_tools/' + url;
    var modal = mw.top().dialogIframe({
        url: url,
        name: "mw_rte_image",
        width: 430,
        height: 'auto',
        autoHeight: true,
        //template: 'mw_modal_basic',
        overlay: true
    });
    var frameWindow = mw.$('iframe', modal.main)[0].contentWindow;
    frameWindow.onload = function () {
        frameWindow.$('body').on('change', function (e, url, m) {
            if (config.change) {
                config.change.call(undefined, url);
                modal.remove()
            }
        });
    };
};




mw.accordion = function (el, callback) {
    return mw.tools.accordion(mw.$(el)[0], callback);
};



mw.required.push('userfiles/modules/microweber/api/tools/common.js');

$(window).load(function () {
    mw.loaded = true;
    mw.tools.addClass(mwd.body, 'loaded');
    mw.tools.removeClass(mwd.body, 'loading');
    mw.$('div.mw-ui-field').click(function (e) {
        if (e.target.type != 'text') {
            try {
                this.querySelector('input[type="text"]').focus();
            }
            catch (e) {
            }
        }
    });

    mw.dropdown();
});
$(mwd).ready(function () {
    mw.tools.constructions();
    mw.dropdown();
    mw.$(mwd.body).ajaxStop(function () {
        setTimeout(function () {
            mw.dropdown();
        }, 1222);
    });
    mw.on('mwDialogShow', function(){
        mw.$(document.documentElement).addClass('mw-dialog-opened');
    });
    mw.on('mwDialogHide', function(){
        mw.$(document.documentElement).removeClass('mw-dialog-opened');
    });
    mw.$(mwd.body).on('mousemove touchmove touchstart', function (event) {
        var has = mw.tools.firstParentOrCurrentWithClass(event.target, 'tip');
        if (has && (!has.dataset.trigger || has.dataset.trigger === 'move')) {
            mw.tools.titleTip(has);
        }
        else {
            mw.$(mw.tools._titleTip).hide();
        }
    }).on('click', function (event) {
        var has = mw.tools.firstParentOrCurrentWithClass(event.target, 'tip');
        if (has && has.dataset.trigger === 'click') {
            mw.tools.titleTip(has, '_titleTipClick');
        }
        else {
            mw.$(mw.tools._titleTipClick).hide();
        }
    });
    mw.$(".mw-onoff").each(function () {
        if (!$(this).hasClass('activated')) {
            mw.$(this).addClass('activated');
            mw.$(this).mousedown(function () {
                var el = this;
                if (mw.tools.hasClass(el, 'active')) {
                    mw.tools.removeClass(el, 'active');
                    el.querySelector('.is_active_n').checked = true;
                }
                else {
                    mw.tools.addClass(el, 'active');
                    el.querySelector('.is_active_y').checked = true;
                }
            });
        }
    });
    mw.$(".wysiwyg-convertible-toggler").click(function () {
        var el = mw.$(this), next = el.next();
        mw.$(".wysiwyg-convertible").not(next).removeClass("active");
        mw.$(".wysiwyg-convertible-toggler").not(el).removeClass("active");
        next.toggleClass("active");
        el.toggleClass("active");
        if (el.hasClass("active")) {
            if (typeof mw.liveEditWYSIWYG === 'object') {
                mw.liveedit.toolbar.editor.fixConvertible(next);
            }
        }
    });
    mw.$(".mw-dropdown-search").keyup(function (e) {
        if (e.keyCode == '27') {
            mw.$(this.parentNode.parentNode).hide();
        }
        if (e.keyCode != '13' && e.keyCode != '27' && e.keyCode != '32') {
            var el = mw.$(this);
            el.addClass('mw-dropdown-searchSearching');
            mw.tools.ajaxSearch({keyword: this.value, limit: 20}, function () {
                var html = "<ul>", l = this.length, i = 0;
                for (; i < l; i++) {
                    var a = this[i];
                    html += '<li class="' + a.content_type + ' ' + a.subtype + '"><a href="' + a.url + '" title="' + a.title + '">' + a.title + '</a></li>';
                }
                html += '</ul>';
                el.parent().next("ul").replaceWith(html);
                el.removeClass('mw-dropdown-searchSearching');
            });
        }
    });
    var _mwoldww = mw.$(window).width();
    mw.$(window).resize(function () {
        if ($(window).width() > _mwoldww) {
            mw.trigger("increaseWidth");
        }
        else if ($(window).width() < _mwoldww) {
            mw.trigger("decreaseWidth");
        }
        $.noop();
        _mwoldww = mw.$(window).width();
    });
    mw.$(mwd.body).on("keydown", function (e) {
        var isgal = mwd.querySelector('.mw_modal_gallery') !== null;
        if (isgal) {
            if (e.keyCode === 27) {  /* escape */
                mw.tools.modal.remove(mw.$(".mw_modal_gallery"))
                mw.tools.cancelFullscreen()
            }
            else if (e.keyCode === 37) { /* left */
                mw.tools.gallery.prev(mw.$(".mw_modal_gallery")[0].modal)
            }
            else if (e.keyCode === 39) { /* right */
                mw.tools.gallery.next(mw.$(".mw_modal_gallery")[0].modal)
            }
            else if (e.keyCode === 122) {/* F11 */
                mw.event.cancel(e, true);
                mw.tools.toggleFullscreen(mw.$(".mw_modal_gallery")[0]);
                return false;
            }
        }
        else {
            if (e.keyCode === 27) {
                var modal = mw.$(".mw_modal:last")[0];
                if (modal) modal.modal.remove();
            }
        }
    });

    mw.$(".mw-image-holder").each(function () {
        if ($(".mw-image-holder-overlay", this).length === 0) {
            mw.$('img', this).eq(0).after('<span class="mw-image-holder-overlay"></span>');
        }
    });

    mw.$(".mw-ui-dropdown").on('touchstart mousedown', function(){
        mw.$(this).toggleClass('active')
    });
    mw.$(document.body).on('touchend', function(e){
        if(!mw.tools.hasAnyOfClassesOnNodeOrParent(e.target, ['mw-ui-dropdown'])){
            mw.$(".mw-ui-dropdown.active").removeClass('active')
        }
    });
    mw.$(document.body).on('click', 'a', function(e){
        if(location.hash.indexOf('#mw@') !== -1 && (e.target.href || '').indexOf('#mw@') !== -1){
            if(location.href === e.target.href){
                var el = mw.$('#' + e.target.href.split('mw@')[1])[0];
                if(el){
                    mw.tools.scrollTo(el)
                }
            }
        }
    })


});


mw.required.push('userfiles/modules/microweber/api/tools/cookie.js');

mw.cookie = {
    get: function (name) {
        var cookies = mwd.cookie.split(";"), i = 0, l = cookies.length;
        for (; i < l; i++) {
            var x = cookies[i].substr(0, cookies[i].indexOf("="));
            var y = cookies[i].substr(cookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x === name) {
                return unescape(y);
            }
        }
    },
    set: function (name, value, expires, path, domain, secure) {
        var now = new Date();
        expires = expires || 365;
        now.setTime(now.getTime());
        if (expires) {
            expires = expires * 1000 * 60 * 60 * 24;
        }
        var expires_date = new Date(now.getTime() + (expires));
        document.cookie = name + "=" + escape(value) + ( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + ( ( path ) ? ";path=" + path : ";path=/" ) + ( ( domain ) ? ";domain=" + domain : "" ) + ( ( secure ) ? ";secure" : "" );
    },
    setEncoded: function (name, value, expires, path, domain, secure) {
        // value = encodeURIComponent(value);
        // value = escape(value);
        // value = mw.tools.base64.encode( unescape( encodeURIComponent( value ) ) )
        value = mw.tools.base64.encode(value);
        return this.set(name, value, expires, path, domain, secure);
    },
    getEncoded: function (name) {
        var value = this.get(name);
        // value = decodeURIComponent(value);
        // value = unescape(value);
        // value = decodeURIComponent( escape( mw.tools.base64.decode( value ) ) )
        value = mw.tools.base64.decode(value);
        return value;
    },
    ui: function (a, b) {
        var mwui = mw.cookie.getEncoded("mwui");
        try {
            mwui = (!mwui || mwui === '') ? {} : $.parseJSON(mwui);
        }
        catch (e) {
            return false;
        }
        if (typeof a === 'undefined') {
            return mwui;
        }
        if (typeof b === 'undefined') {
            return mwui[a] !== undefined ? mwui[a] : "";
        }
        else {
            mwui[a] = b;
            var tostring = JSON.stringify(mwui);
            mw.cookie.setEncoded("mwui", tostring, false, "/");
            if (typeof mw.cookie.uievents[a] !== 'undefined') {
                var funcs = mw.cookie.uievents[a], l = funcs.length, i = 0;
                for (; i < l; i++) {
                    mw.cookie.uievents[a][i].call(b.toString());
                }
            }
        }
    },
    uievents: {},
    changeInterval: null,
    uiCurr: null,
    onchange: function (name, func) {
        if (typeof mw.cookie.uievents[name] === 'undefined') {
            mw.cookie.uievents[name] = [func];
        }
        else {
            mw.cookie.uievents[name].push(func);
        }
    }
};


mw.required.push('userfiles/modules/microweber/api/tools/domhelpers.js');

(function(){
var domHelp = {
    classNamespaceDelete: function (el_obj, namespace, parent, namespacePosition, exception) {
        if (el_obj.element && el_obj.namespace) {
            el = el_obj.element;
            namespace = el_obj.namespace;
            parent = el_obj.parent;
            namespacePosition = el_obj.namespacePosition;
            exceptions = el_obj.exceptions || [];
        }
        else {
            el = el_obj;
            exceptions = [];
        }
        namespacePosition = namespacePosition || 'contains';
        parent = parent || mwd;
        if (el === 'all') {
            var all = parent.querySelectorAll('.edit *'), i = 0, l = all.length;
            for (; i < l; i++) {
                mw.tools.classNamespaceDelete(all[i], namespace, parent, namespacePosition)
            }
            return;
        }
        if (!!el.className && typeof(el.className.split) === 'function') {
            var cls = el.className.split(" "), l = cls.length, i = 0, final = [];
            for (; i < l; i++) {
                if (namespacePosition === 'contains') {
                    if (!cls[i].contains(namespace) || exceptions.indexOf(cls[i]) !== -1) {
                        final.push(cls[i]);
                    }
                }
                else if (namespacePosition === 'starts') {
                    if (cls[i].indexOf(namespace) !== 0) {
                        final.push(cls[i]);
                    }
                }
            }
            el.className = final.join(" ");
        }
    },
    firstWithBackgroundImage: function (node) {
        if (!node) return false;
        if (!!node.style.backgroundImage) return node;
        var final = false;
        mw.tools.foreachParents(node, function (loop) {
            if (!!this.style.backgroundImage) {
                mw.tools.stopLoop(loop);
                final = this;
            }
        });
        return final;
    },

    parentsOrCurrentOrderMatchOrOnlyFirstOrNone: function (node, arr) {
        return !mw.tools.hasAnyOfClassesOnNodeOrParent(node, [arr[1]]) || mw.tools.parentsOrCurrentOrderMatchOrOnlyFirst(node, arr)
    },
    parentsOrCurrentOrderMatchOrOnlyFirst: function (node, arr) {
        var curr = node;
        while (curr && curr !== document.body) {
            var h1 = mw.tools.hasClass(curr, arr[0]);
            var h2 = mw.tools.hasClass(curr, arr[1]);
            if (h1 && h2) {
                return false;
            }
            else {
                if (h1) {
                    return true;
                }
                else if (h2) {
                    return false;
                }
            }
            curr = curr.parentNode;
        }
        return false;
    },
    parentsOrCurrentOrderMatchOrOnlyFirstOrNone: function (node, arr) {
        var curr = node;
        while (curr && curr !== mwd.body) {
            var h1 = mw.tools.hasClass(curr, arr[0]);
            var h2 = mw.tools.hasClass(curr, arr[1]);
            if (h1 && h2) {
                return false;
            }
            else {
                if (h1) {
                    return true;
                }
                else if (h2) {
                    return false;
                }
            }
            curr = curr.parentNode;
        }
        return true;
    },
    parentsOrCurrentOrderMatch: function (node, arr) {
        var curr = node,
            match = {a: 0, b: 0},
            count = 1,
            hadA = false;
        while (curr !== document.body) {
            count++;
            var h1 = mw.tools.hasClass(curr, arr[0]);
            var h2 = mw.tools.hasClass(curr, arr[1]);
            if (h1 && h2) {
                if (match.a > 0) {
                    return true;
                }
                return false;
            }
            else {
                if (h1) {
                    match.a = count;
                    hadA = true;
                }
                else if (h2) {
                    match.b = count;
                }
                if (match.b > match.a) {
                    return hadA ? true : false;
                }
            }
            curr = curr.parentNode;
        }
        return false;
    },
    parentsOrCurrentOrderMatchOrNone:function(node, arr){
        if(!node) return false;
        var curr = node,
            match = {a: 0, b: 0},
            count = 1,
            hadA = false;
        while (curr && curr !== document.body) {
            count++;
            var h1 = mw.tools.hasClass(curr, arr[0]);
            var h2 = mw.tools.hasClass(curr, arr[1]);
            if (h1 && h2) {
                if (match.a > 0) {
                    return true;
                }
                return false;
            }
            else {
                if (h1) {
                    match.a = count;
                    hadA = true;
                }
                else if (h2) {
                    match.b = count;
                }
                if (match.b > match.a) {
                    return hadA ? true : false;
                }
            }
            curr = curr.parentNode;
        }
        return match.a === 0 && match.b === 0;
    },
    parentsOrCurrentOrderMatchOrOnlyFirstOrBoth: function (node, arr) {
        var curr = node,
            has1 = false,
            has2 = false;
        while (curr && curr !== document.body) {
            var h1 = mw.tools.hasClass(curr, arr[0]);
            var h2 = mw.tools.hasClass(curr, arr[1]);
            if (h1 && h2) {
                return true;
            }
            else {
                if (h1) {
                    return true;
                }
                else if (h2) {
                    return false;
                }
            }
            curr = curr.parentNode;
        }
        return false;
    },
    matchesAnyOnNodeOrParent: function (node, arr) {
        var curr = node;
        while (curr && curr !== document.body) {
            var i = 0;
            for (; i < arr.length; i++) {
                if (mw.tools.matches(curr, arr[i])) {
                    return true;
                }
            }
            curr = curr.parentNode;
        }
        return false;
    },
    firstMatchesOnNodeOrParent: function (node, arr) {
        if (!arr) return;
        if (typeof arr === 'string') {
            arr = [arr];
        }
        var curr = node;
        while (curr && curr !== document.body) {
            var i = 0;
            for (; i < arr.length; i++) {
                if (mw.tools.matches(curr, arr[i])) {
                    return curr;
                }
            }
            curr = curr.parentNode;
        }
        return false;
    },
    lastMatchesOnNodeOrParent: function (node, arr) {
        if (!arr) return;
        if (typeof arr === 'string') {
            arr = [arr];
        }
        var curr = node, result;
        while (curr && curr !== document.body) {
            var i = 0;
            for (; i < arr.length; i++) {
                if (mw.tools.matches(curr, arr[i])) {
                    result = curr;
                }
            }
            curr = curr.parentNode;
        }
        return result;
    },
    hasAnyOfClassesOnNodeOrParent: function (node, arr) {
        var curr = node;
        while (curr && curr !== document.body) {
            var i = 0;
            for (; i < arr.length; i++) {
                if (mw.tools.hasClass(curr, arr[i])) {
                    return true;
                }
            }
            curr = curr.parentNode;
        }
        return false;
    },
    hasClass: function (classname, whattosearch) {
        if (classname === null) {
            return false;
        }
        if (typeof classname === 'string') {
            return classname.split(' ').indexOf(whattosearch) > -1;
        }
        else if (typeof classname === 'object') {
            return mw.tools.hasClass(classname.className, whattosearch);
        }
        else {
            return false;
        }
    },
    hasAllClasses: function (node, arr) {
        if (!node) return;
        var has = true;
        var i = 0, nodec = node.className.trim().split(' ');
        for (; i < arr.length; i++) {
            if (nodec.indexOf(arr[i]) === -1) {
                return false;
            }
        }
        return has;
    },
    hasAnyOfClasses: function (node, arr) {
        if (!node) return;
        var i = 0, l = arr.length, cls = node.className;
        for (; i < l; i++) {
            if (mw.tools.hasClass(cls, arr[i])) {
                return true;
            }
        }
        return false;
    },


    hasParentsWithClass: function (el, cls) {
        if (!el) return;
        var curr = el.parentNode;
        while (curr && curr !== mwd.body) {
            if (mw.tools.hasClass(curr, cls)) {
                return true;
            }
            curr = curr.parentNode;
        }
        return false;
    },
    hasParentWithId: function (el, id) {
        if (!el) return;
        var curr = el.parentNode;
        while (curr && curr !== mwd.body) {
            if (curr.id === id) {
                return true;
            }
            curr = curr.parentNode;
        }
        return false;
    },

    hasChildrenWithTag: function (el, tag) {
        var tag = tag.toLowerCase();
        var has = false;
        mw.tools.foreachChildren(el, function (loop) {
            if (this.nodeName.toLowerCase() === tag) {
                has = true;
                mw.tools.stopLoop(loop);
            }
        });
        return has;
    },
    hasParentsWithTag: function (el, tag) {
        if (!el || !tag) return;
        tag = tag.toLowerCase();
        var curr = el.parentNode;
        while (curr && curr !== mwd.body) {
            if (curr.nodeName.toLowerCase() === tag) {
                return true;
            }
            curr = curr.parentNode;
        }
        return false;
    },
    hasHeadingParent: function (el) {
        if (!el) return;
        var h = /^(h[1-6])$/i;
        var curr = el.parentNode;
        while (curr && curr !== mwd.body) {
            if (h.test(curr.nodeName.toLowerCase())) {
                return true;
            }
            curr = curr.parentNode;
        }
        return false;
    },
    addClass: function (el, cls) {
        if (!cls || !el) {
            return false;
        }
        if (el.fn) {
            el = el[0];
            if (!el) {
                return;
            }
        }
        if (typeof cls === 'string') {
            cls = cls.trim();
        }
        if (!el) return;
        var arr = cls.split(" ");
        var i = 0;
        if (arr.length > 1) {
            for (; i < arr.length; i++) {
                mw.tools.addClass(el, arr[i]);
            }
            return;
        }
        if (typeof el === 'object') {
            if (el.classList) {
                el.classList.add(cls);
            }
            else {
                if (!mw.tools.hasClass(el.className, cls)) el.className += (' ' + cls);
            }
        }
        if (typeof el === 'string') {
            if (!mw.tools.hasClass(el, cls)) el += (' ' + cls);
        }
    },
    removeClass: function (el, cls) {
        if (typeof cls === 'string') {
            cls = cls.trim();
        }
        if (!cls || !el) return;
        if (el === null) {
            return false;
        }
        if (el.fn) {
            el = el[0];
            if (!el) {
                return;
            }
        }
        if (typeof el === 'undefined') {
            return false;
        }
        if (el.constructor === [].constructor) {
            var i = 0, l = el.length;
            for (; i < l; i++) {
                mw.tools.removeClass(el[i], cls);
            }
            return;
        }
        if (typeof(cls) === 'object') {
            var arr = cls;
        } else {
            var arr = cls.split(" ");
        }
        var i = 0;
        if (arr.length > 1) {
            for (; i < arr.length; i++) {
                mw.tools.removeClass(el, arr[i]);
            }
            return;
        }
        else if (!arr.length) {
            return;
        }
        if (el.classList && cls) {
            el.classList.remove(cls);
        }
        else {
            if (mw.tools.hasClass(el.className, cls)) el.className = (el.className + ' ').replace(cls + ' ', '').replace(/\s{2,}/g, ' ').trim();
        }

    },
    isEventOnElement: function (event, node) {
        if (event.target === node) {
            return true;
        }
        mw.tools.foreachParents(event.target, function () {
            if (event.target === node) {
                return true;
            }
        });
        return false;
    },
    isEventOnElements: function (event, array) {
        var l = array.length, i = 0;
        for (; i < l; i++) {
            if (event.target === array[i]) {
                return true;
            }
        }
        var isEventOnElements = false;
        mw.tools.foreachParents(event.target, function () {
            var l = array.length, i = 0;
            for (; i < l; i++) {
                if (event.target === array[i]) {
                    isEventOnElements = true;
                }
            }
        });
        return isEventOnElements;
    },
    isEventOnClass: function (event, cls) {
        if (mw.tools.hasClass(event.target, cls) || mw.tools.hasParentsWithClass(event.target, cls)) {
            return true;
        }
        return false;
    },
    firstChildWithClass: function (parent, cls) {
        var toreturn;
        mw.tools.foreachChildren(parent, function (loop) {
            if (this.nodeType === 1 && mw.tools.hasClass(this, cls)) {
                mw.tools.stopLoop(loop);
                toreturn = this;
            }
        });
        return toreturn;
    },
    firstChildWithTag: function (parent, tag) {
        var toreturn;
        var tag = tag.toLowerCase();
        mw.tools.foreachChildren(parent, function (loop) {
            if (this.nodeName.toLowerCase() === tag) {
                toreturn = this;
                mw.tools.stopLoop(loop);
            }
        });
        return toreturn;
    },
    hasChildrenWithClass: function (node, cls) {
        var final = false;
        mw.tools.foreachChildren(node, function () {
            if (mw.tools.hasClass(this.className, cls)) {
                final = true;
            }
        });
        return final;
    },
    parentsOrder: function (node, arr) {
        var only_first = [];
        var obj = {}, l = arr.length, i = 0, count = -1;
        for (; i < l; i++) {
            obj[arr[i]] = -1;
        }
        if (!node) return obj;

        var curr = node.parentNode;
        while (curr && curr !== mwd.body) {
            count++;
            var cls = curr.className;
            i = 0;
            for (; i < l; i++) {
                if (mw.tools.hasClass(cls, arr[i]) && only_first.indexOf(arr[i]) === -1) {
                    obj[arr[i]] = count;
                    only_first.push(arr[i]);
                }
            }
            curr = curr.parentNode;
        }
        return obj;
    },
    parentsAndCurrentOrder: function (node, arr) {
        var only_first = [];
        var obj = {}, l = arr.length, i = 0, count = -1;
        for (; i < l; i++) {
            obj[arr[i]] = -1;
        }
        if (!node) return obj;

        var curr = node;
        while (curr && curr !== mwd.body) {
            count++;
            var cls = curr.className;
            i = 0;
            for (; i < l; i++) {
                if (mw.tools.hasClass(cls, arr[i]) && only_first.indexOf(arr[i]) === -1) {
                    obj[arr[i]] = count;
                    only_first.push(arr[i]);
                }
            }
            curr = curr.parentNode;
        }
        return obj;
    },
    firstParentWithClass: function (el, cls) {
        if (!el) return false;
        var curr = el.parentNode;
        while (curr && curr !== mwd.body) {
            if (curr.classList.contains(cls)) {
                return curr;
            }
            curr = curr.parentNode;
        }
        return false;
    },
    firstParentOrCurrentWithClass: function (el, cls) {
        if (!el) return false;
        var curr = el;
        while (curr && curr !== mwd.body) {
            if (mw.tools.hasClass(curr, cls)) {
                return curr;
            }
            curr = curr.parentNode;
        }
        return false;
    },
    firstBlockLevel: function (el) {
        while(el && el !== document.body) {
            if(mw.tools.isBlockLevel(el)) {
                return el;
            }
            el = el.parentNode;
        }
    },
    firstNotInlineLevel: function (el) {
        if(el.nodeType !== 1) {
            el = el.parentNode
        }
        if(!el) {
            return;
        }
        while(el && el !== document.body) {
            if(!mw.tools.isInlineLevel(el)) {
                return el;
            }
            el = el.parentNode;
        }
    },
    firstParentOrCurrentWithId: function (el, id) {
        if (!el) return false;
        var curr = el;
        while (curr && curr !== mwd.body) {
            if (curr.id === id) {
                return curr;
            }
            curr = curr.parentNode;
        }
        return false;
    },
    firstParentOrCurrentWithAllClasses: function (node, arr) {
        if (!node) return false;
        var curr = node;
        while (curr && curr !== mwd.body) {
            if (mw.tools.hasAllClasses(curr, arr)) {
                return curr;
            }
            curr = curr.parentNode;
        }
        return false;
    },
    firstParentOrCurrentWithAnyOfClasses: function (node, arr) {
        if (!node) return false;
        var curr = node;
        while (curr && curr !== mwd.body) {
            if (!curr) return false;
            if (mw.tools.hasAnyOfClasses(curr, arr)) {
                return curr;
            }
            curr = curr.parentNode;
        }
        return false;
    },
    lastParentWithClass: function (el, cls) {
        if (!el) return;
        var _has = false;
        var curr = el.parentNode;
        while (curr && curr !== mwd.body) {
            if (mw.tools.hasClass(curr, cls)) {
                _has = curr;
            }
            curr = curr.parentNode;
        }
        return _has;
    },
    firstParentWithTag: function (el, tag) {
        if (!el || !tag) return;
        tag = typeof tag !== 'string' ? tag : [tag];
        var curr = el.parentNode;
        while (curr && curr !== mwd.body) {
            if (tag.indexOf(curr.nodeName.toLowerCase()) !== -1) {
                return curr;
            }
            curr = curr.parentNode;
        }
        return false;
    },
    generateSelectorForNode: function (node) {
        if (node === null || node.nodeType === 3) {
            return false;
        }
        if (node.nodeName === 'BODY') {
            return 'body';
        }
        if (!!node.id /*&& node.id.indexOf('element_') === -1*/) {
            return '#' + node.id;
        }
        if(mw.tools.hasClass(node, 'edit')){
            var field = node.getAttribute('field');
            var rel = node.getAttribute('rel');
            if(field && rel){
                return '.edit[field="'+field+'"][rel="'+rel+'"]';
            }
        }
        var filter = function(item) {
            return item !== 'changed' && item !== 'module-over' && item !== 'element-current';
        };
        var _final = node.className.trim() ? '.' + node.className.trim().split(' ').filter(filter).join('.') : node.nodeName.toLocaleLowerCase();


        _final = _final.replace(/\.\./g, '.');
        mw.tools.foreachParents(node, function (loop) {
            if (this.id /*&& node.id.indexOf('element_') === -1*/) {
                _final = '#' + this.id + ' > ' + _final;
                mw.tools.stopLoop(loop);
                return false;
            }
            var n;
            if (this.className.trim()) {
                n = this.nodeName.toLocaleLowerCase() + '.' + this.className.trim().split(' ').join('.');
            }
            else {
                n = this.nodeName.toLocaleLowerCase();
            }
            _final = n + ' > ' + _final;
        });
        return _final
            .replace(/.changed/g, '')
            .replace(/.element-current/g, '')
            .replace(/.module-over/g, '');
    }
};

for (var i in domHelp) {
    mw.tools[i] = domHelp[i];
}
})();


mw.required.push('userfiles/modules/microweber/api/tools/dropdown.js');

mw.tools.dropdown = function (root) {
    root = root || mwd.body;
    if (root === null) {
        return;
    }
    var items = root.querySelectorAll(".mw-dropdown"), l = items.length, i = 0;
    for (; i < l; i++) {
        var el = items[i];
        var cls = el.className;
        if (el.mwDropdownActivated) {
            continue;
        }
        el.mwDropdownActivated = true;
        el.hasInput = el.querySelector('input.mw-dropdown-field') !== null;
        if (el.hasInput) {
            var input = el.querySelector('input.mw-dropdown-field');
            input.dropdown = el;
            input.onkeydown = function (e) {
                if (e.keyCode === 13) {
                    e.preventDefault();
                    mw.$(this.dropdown).removeClass("active");
                    mw.$('.mw-dropdown-content', this.dropdown).hide();
                    mw.$(this.dropdown).setDropdownValue(this.value, true, true);
                    return false;
                }
            };

            input.onkeyup = function (e) {
                if (e.keyCode === 13) {
                    return false;
                }
            }
        }
        mw.$(el).off("click");
        mw.$(el).on("click", function (event) {
            if ($(this).hasClass("disabled")) {
                return false;
            }
            if (!mw.tools.hasClass(event.target.className, 'mw-dropdown-content') && !mw.tools.hasClass(event.target.className, 'dd_search')) {
                if (this.querySelector('input.mw-dropdown-field') !== null && !mw.tools.hasClass(this, 'active') && mw.tools.hasParentsWithClass(event.target, 'mw-dropdown-value')) {
                    if (this.hasInput) {
                        var input = this.querySelector('input.mw-dropdown-field');
                        input.value = mw.$(this).getDropdownValue();
                        mw.wysiwyg.save_selection(true);
                        mw.$(input).focus();
                    }
                }
                mw.$(this).toggleClass("active");
                mw.$(".mw-dropdown").not(this).removeClass("active").find(".mw-dropdown-content").hide();
                if (mw.$(".other-action-hover", this).length === 0) {
                    var item = mw.$(".mw-dropdown-content", this);
                    if (item.is(":visible")) {
                        item.hide();
                        item.focus();
                    }
                    else {
                        item.show();
                        if (event.target.type !== 'text') {
                            try {
                                this.querySelector("input.dd_search").focus();
                            } catch (e) {
                            }
                        }
                    }
                }
            }
        });
        mw.$(el)
            .hover(function () {
                mw.$(this).add(this);
                if (mw.tools.hasClass(cls, 'other-action')) {
                    mw.$(this).addClass('other-action');
                }
            }, function () {
                mw.$(this).removeClass("hover");
                mw.$(this).removeClass('other-action');
            })
            .on('mousedown touchstart', 'li[value]', function (event) {
                mw.$(mw.tools.firstParentWithClass(this, 'mw-dropdown')).setDropdownValue(this.getAttribute('value'), true);
                return false;
            })
            .on('click', 'a[href="#"]', function (event) {
                return false;
            });
    }
    /* end For loop */
    if (typeof mw.tools.dropdownActivated === 'undefined') {
        mw.tools.dropdownActivated = true;
        mw.$(mwd.body).on('mousedown touchstart', function (e) {
            if (!mw.tools.hasAnyOfClassesOnNodeOrParent(e.target, ['mw-dropdown-content', 'mw-dropdown'])) {
                mw.$(".mw-dropdown").removeClass("active");
                mw.$(".mw-dropdown-content").hide();
                if(self !== top) {
                    try {
                        mw.top().$(".mw-dropdown").removeClass("active");
                        mw.top().$(".mw-dropdown-content").hide();
                    } catch(e){

                    }
                }
            }
        });
    }
};


mw.dropdown = mw.tools.dropdown;


mw.required.push('userfiles/modules/microweber/api/tools/editor.js');


    mw.tools.iframe_editor = function (area, params, k, type) {
        var params = params || {};
        var k = k || false;
        var type = type || 'wysiwyg';
        var params = typeof params === 'object' ? json2url(params) : params;
        var area = mw.$(area);
        var frame = mwd.createElement('iframe');
        frame.src = mw.external_tool(type + '?' + params);
        frame.className = 'mw-iframe-editor';
        frame.scrolling = 'no';
        var name = 'mweditor' + mw.random();
        frame.id = name;
        frame.name = name;
        frame.style.backgroundColor = "transparent";
        frame.setAttribute('frameborder', 0);
        frame.setAttribute('allowtransparency', 'true');
        area.hide().after(frame);
        mw.$(frame).load(function () {
            frame.contentWindow.thisframe = frame;
            var cont = mw.$(frame).contents().find("#mw-iframe-editor-area");
            mw.wysiwyg.contentEditable(cont[0], true);
            if (!k) {
                if (area[0].tagName === 'TEXTAREA') {
                    cont.html(area[0].value);
                    this.value = area[0].value;
                }
                else {
                    cont.html(area.html());
                    this.value = area.html();
                }
            }
            if (typeof frame.contentWindow.PrepareEditor === 'function') {
                frame.contentWindow.PrepareEditor();
            }
        });
        mw.$(frame).bind('change', function (e, val) {
            if (area[0].tagName === 'TEXTAREA') {
                area.val(val);
            }
            else {
                area.html(val);
            }
            if (area.hasClass("mw_option_field")) {
                area.trigger("change");
            }
            this.value = val;
        });
        return frame;
    };

    mw.tools.wysiwyg = function (area, params, k) {
        var k = k || false;
        return mw.tools.iframe_editor(area, params, k);
    };

    mw.tools.richtextEditorSettings = {
        width: '100%',
        height: 'auto',
        addControls: false,
        hideControls: false,
        ready: false
    };

    mw.tools.richtextEditor = function (obj) {
        if (typeof obj.element === 'string') {
            obj.element = mw.$(obj.element)[0];
        }
        if (!obj.element || obj.element === undefined) return false;

        var o = $.extend({}, mw.tools.richtextEditorSettings, obj);
        var frame = mwd.createElement('iframe');
        frame.richtextEditorSettings = o;
        frame.className = 'mw-fullscreen mw-iframe-editor';
        frame.scrolling = 'no';
        var name = 'mw-editor' + mw.random();
        frame.id = name;
        frame.name = name;
        frame.style.backgroundColor = "white";
        frame.setAttribute('frameborder', 0);
        frame.setAttribute('allowtransparency', 'true');
        mw.$(o.element).after(frame);
        mw.$(o.element).hide();
        $.get(mw.external_tool('editor_toolbar'), function (a) {
            if (frame.contentWindow.document === null) {
                return;
            }
            frame.contentWindow.document.open('text/html', 'replace');
            frame.contentWindow.document.write(a);
            frame.contentWindow.document.close();
            frame.contentWindow.editorArea = o.element;
            frame.contentWindow.thisFrame = frame;
            frame.contentWindow.pauseChange = true;
            frame.contentWindow.richtextEditorSettings = o;

            frame.onload = function () {
                var val = o.element.nodeName !== 'TEXTAREA' ? o.element.innerHTML : o.element.value
                frame.contentWindow.document.getElementById('editor-area').innerHTML = val;
                if (!!o.hideControls && o.hideControls.constructor === [].constructor) {
                    var l = o.hideControls.length, i = 0;
                    for (; i < l; i++) {
                        mw.$('.mw_editor_' + o.hideControls[i], frame.contentWindow.document).hide();
                    }
                }
                if (!!o.addControls && (typeof o.addControls === 'string' || typeof o.addControls === 'function' || !!o.addControls.nodeType)) {
                    mw.$('.editor_wrapper', frame.contentWindow.document).append(o.addControls);
                }
                frame.api = frame.contentWindow.mw.wysiwyg;
                if (typeof o.ready === 'function') {
                    o.ready.call(frame, frame.contentWindow.document);
                }
                setTimeout(function () {
                    if (frame.contentWindow) {
                        frame.contentWindow.pauseChange = false;
                    }

                }, frame.contentWindow.SetValueTime);
                mw.$(obj.element).on('sourceChanged', function(e, val){
                    frame.contentWindow.document.getElementById('editor-area').innerHTML = val;
                })
                mw.$(frame.contentWindow.document.getElementById('editor-area')).on('keyup paste change', function(){
                    if (frame.richtextEditorSettings.element.nodeName !== 'TEXTAREA') {
                        frame.richtextEditorSettings.element.innerHTML = this.innerHTML
                    }  else {
                        frame.richtextEditorSettings.element.value = this.innerHTML;
                    }
                })
                frame.contentWindow.mw.tools.createStyle(undefined, '#editor-area{' + (obj.style || '') + '}');
            }
            mw.$(obj.element).on('sourceChanged', function (e, val) {
                frame.contentWindow.document.getElementById('editor-area').innerHTML = val;
            });

        });
        o.width = o.width != 'auto' ? o.width : '100%';
        mw.$(frame).css({width: o.width, height: o.height});
        if(o.height === 'auto') {
            mw.tools.iframeAutoHeight(frame);
        }
        frame.setValue = function (val) {
            frame.contentWindow.pauseChange = true;
            frame.contentWindow.document.getElementById('editor-area').innerHTML = val;
            if (frame.richtextEditorSettings.element.nodeName !== 'TEXTAREA') {
                frame.richtextEditorSettings.element.innerHTML = val
            }
            else {
                frame.richtextEditorSettings.element.value = val;
            }
            frame.value = val;
            frame.contentWindow.pauseChange = false;
        }
        return frame;
    }

    mw.editor = mw.tools.richtextEditor;


mw.required.push('userfiles/modules/microweber/api/tools/elementedit.js');

mw.tools.elementEdit = function (el, textonly, callback, fieldClass) {
    if (!el || el.querySelector('.mw-live-edit-input') !== null) {
        return;
    }
    textonly = (typeof textonly === 'undefined') ? true : textonly;
    var input = mwd.createElement('span');
    input.className = (fieldClass || "") + ' mw-live-edit-input mw-liveedit-field';
    input.contentEditable = true;
    var $input = $(input);
    if (textonly === true) {
        input.innerHTML = el.textContent;
        input.onblur = function () {
            var val = $input.text();
            var ischanged = true;
            setTimeout(function () {
                mw.$(el).text(val);
                if (typeof callback === 'function' && ischanged) {
                    callback.call(val, el);
                }
            }, 3);
        };
        input.onkeydown = function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                mw.$(el).text($input.text());
                if (typeof callback === 'function') {
                    callback.call($input.text(), el);
                }
                return false;
            }
        }
    }
    else {
        input.innerHTML = el.innerHTML;
        input.onblur = function () {
            var val = this.innerHTML;
            var ischanged = this.changed === true;
            setTimeout(function () {
                el.innerHTML = val;
                if (typeof callback === 'function' && ischanged) {
                    callback.call(val, el);
                }
            }, 3)
        }
        input.onkeydown = function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                var val = this.innerHTML;
                el.innerHTML = val;
                if (typeof callback === 'function') {
                    callback.call(val, el);
                }
                return false;
            }
        }
    }
    mw.$(el).empty().append(input);
    $input.focus();
    input.changed = false;
    $input.change(function () {
        this.changed = true;
    });
    return input;
}

mw.required.push('userfiles/modules/microweber/api/tools/external.js');

    mw.tools.externalInstrument = {
        register: {},
        holder: function () {
            var div = mwd.createElement('div');
            div.className = 'mw-external-tool';
            return div;
        },
        prepare: function (name, params) {
            var frame = mwd.createElement('iframe');
            frame.name = name;
            /* for callbacks */
            var url = mw.external_tool(name);
            if (typeof params === 'object') {
                params = $.param(params);
            }
            else {
                params = "";
            }
            frame.src = url + "?" + params;
            frame.scrolling = 'no';
            frame.frameBorder = 0;
            frame.onload = function () {
                frame.contentWindow.thisframe = frame;
            };
            return frame;
        },
        init: function (name, callback, holder, params) {
            if (typeof mw.tools.externalInstrument.register[name] === 'undefined') {
                var frame = mw.tools.externalInstrument.prepare(name, params);
                frame.height = 300;
                mw.tools.externalInstrument.register[name] = frame;
                if (!holder) {
                    holder = mw.tools.externalInstrument.holder();
                    mw.$(mwd.body).append(holder);
                }
                mw.$(holder).append(frame);
            }
            else {
                mw.$(mw.tools.externalInstrument.register[name]).unbind('change');
            }
            mw.$(mw.tools.externalInstrument.register[name]).bind('change', function () {
                Array.prototype.shift.apply(arguments);
                callback.apply(this, arguments);
            });
            return mw.tools.externalInstrument.register[name];
        }
    };

    mw.tools.external = function (name, callback, holder, params) {
        return mw.tools.externalInstrument.init(name, callback, holder, params);
    };

    mw.tools._external = function (o) {
        return mw.tools.external(o.name, o.callback, o.holder, o.params);
    };

    mw.component = function (options) {
        return new mw.Component(options);
    };

    mw.Component = function (options) {

        options = options || {};
        var scope = this;

        var defaults = {
            mode: 'iframe',
            value: null,
            options: {},
            title: mw.lang('Settings')
        };

        this.settings = $.extend({}, defaults, options);

        this.value = function (data) {
          if(typeof data === 'undefined'){
              return this._value;
          }
          this._value = data;
          mw.tools[!!scope.value() ? 'removeClass' : 'addClass'](scope.btnok, 'disabled');

          if(this.container
              && this.container.contentWindow
              && this.container.contentWindow.mw
              && this.container.contentWindow.mw.ComponentInput){
              this.container.contentWindow.mw.ComponentInput(data);
          }
        };

        this.config = function (options) {
            if(this.container
                && this.container.contentWindow
                && this.container.contentWindow.mw
                && this.container.contentWindow.mw.ComponentConfig){
                this.container.contentWindow.mw.ComponentConfig(options);
            }
        };

        if(!this.settings.url) {
            return;
        }

        this.createIframe = function () {
            if(this.settings.mode === 'iframe') {
                this.container = document.createElement('iframe');
                this.container.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
                this.container.allowFullscreen = true;
                this.container.scrolling = "no";
                this.container.width = "100%";
                this.container.frameBorder = "0";
                this.container.src = mw.external_tool(this.settings.url);
                this.container.onload = function () {
                    scope.config(scope.settings.options);
                    scope.value(scope.settings.value);
                    if(this.contentWindow.mw && this.contentWindow.mw.trigger){
                        this.contentWindow.mw.ComponentOutput = function(data) {
                            scope._value = data;
                            mw.tools[!!scope.value() ? 'removeClass' : 'addClass'](scope.btnok, 'disabled');
                            $(scope).trigger('ValueChange', data);
                        };
                        this.contentWindow.mw.trigger('ComponentReady');
                    }
                };
                mw.tools.iframeAutoHeight(this.container);
            }
        };


        this.create = function () {
            if(this.settings.mode === 'iframe') {
                this.createIframe();
            }
            var footer = document.createElement('div');
            scope.btnok = document.createElement('span');
            var cancel = document.createElement('span');
            scope.btnok.className = 'mw-ui-btn mw-ui-btn-medium mw-ui-btn-info';
            scope.btnok.innerHTML = mw.lang('OK');
            mw.tools.addClass(scope.btnok, 'disabled');
            cancel.innerHTML = mw.lang('Cancel');
            cancel.className = 'mw-ui-btn mw-ui-btn-medium';
            footer.appendChild(cancel);
            footer.appendChild(scope.btnok);
            this.dialog = mw.top().dialog({ width: this.settings.width || 870, footer: footer, title: this.settings.title });
            this.dialog.dialogContainer.appendChild(this.container);
            cancel.onclick = function (e) {
                e.preventDefault();
                scope.dialog.remove();
            };
            scope.btnok.onclick = function (e) {
                e.preventDefault();
                if(scope.value()) {
                    $(scope).trigger('Result', scope.value());
                    scope.dialog.remove();
                }

            };
        };

        this.create();
    };


mw.required.push('userfiles/modules/microweber/api/tools/extradata-form.js');

mw.getExtradataFormData = function (data, call) {

    if (data.form_data_required) {
        if (!data.form_data_module_params) {
            data.form_data_module_params = {};
        }
        data.form_data_module_params._confirm = 1
    }


    if (data.form_data_required_params) {
        data.form_data_module_params = $.extend({}, data.form_data_required_params,data.form_data_module_params);
    }

    if (data.form_data_module) {
        mw.loadModuleData(data.form_data_module, function (moduledata) {
            call.call(undefined, moduledata);
        }, null, data.form_data_module_params);
    }
    else {
        call.call(undefined, data.form_data_required);
    }
}

mw.extradataForm = function (options, data) {
    if (options._success) {
        options.success = options._success;
        delete options._success;
    }
    mw.getExtradataFormData(data, function (extra_html) {
        var form = document.createElement('form');
        mw.$(form).append(extra_html);

        if(data.form_data_required){
            mw.$(form).append('<hr><button type="submit" class="mw-ui-btn pull-right mw-ui-btn-invert">' + mw.lang('Submit') + '</button>');
        }



        form.action = options.url;
        form.method = options.type;
        form.__modal = mw.dialog({
            content: form,
            title: data.error,
            closeButton: false,
            closeOnEscape: false
        });
        mw.$('script', form).each(function() {
            eval($(this).text());
        });

        $(form.__modal).on('closedByUser', function () {
            if(options.onExternalDataDialogClose) {
                options.onExternalDataDialogClose.call();
            }
        });



        if(data.form_data_required) {
            mw.$(form).on('submit', function (e) {




                e.preventDefault();
                var exdata = mw.serializeFields(this);

                if(typeof options.data === 'string'){
                    var params = {};
                    options.data.split('&').forEach(function(a){
                        var c = a.split('=');
                        params[c[0]] = decodeURIComponent(c[1]);
                    });
                    options.data = params;
                }
                for (var i in exdata) {
                    options.data[i] = exdata[i];
                }

                if(options.data.captcha){
                   // mw.top().
                   // ('data-captcha-value')
                }

                mw.ajax(options);
                form.__modal.remove();
            });
        }
    });
};


mw.required.push('userfiles/modules/microweber/api/tools/fullscreen.js');

(function(expose){
   var fullscreen = {
    fullscreen: function (el) {
        if (el.requestFullScreen) {
            el.requestFullScreen();
        }
        else if (el.webkitRequestFullScreen) {
            el.webkitRequestFullScreen();
        }
        else if (el.mozRequestFullScreen) {
            el.mozRequestFullScreen();
        }
        else if (el.msRequestFullscreen) {
            el.msRequestFullscreen();
        }
    },
    isFullscreenAvailable: function () {
        var b = mwd.body;
        return 'requestFullScreen' in b || 'webkitRequestFullScreen' in b || 'mozRequestFullScreen' in b || 'msRequestFullscreen' in b || false;
    },
    cancelFullscreen: function () {
        if (mwd.exitFullscreen) {
            mwd.exitFullscreen();
        }
        else if (mwd.mozCancelFullScreen) {
            mwd.mozCancelFullScreen();
        }
        else if (mwd.webkitExitFullscreen) {
            mwd.webkitExitFullscreen();
        }
        else if (mwd.msExitFullscreen) {
            mwd.msExitFullscreen();
        }
    },
    toggleFullscreen: function (el) {
        var infullscreen = mwd.fullScreen || mwd.webkitIsFullScreen || mwd.mozFullScreen || false;
        if (infullscreen) {
            mw.tools.cancelFullscreen();
        }
        else {
            mw.tools.fullscreen(el)
        }
    },
    fullscreenChange: function (c) {
        if ('addEventListener' in document) {
            document.addEventListener("fullscreenchange", function () {
                c.call(document.fullscreen);
            }, false);
            document.addEventListener("mozfullscreenchange", function () {
                c.call(document.mozFullScreen);
            }, false);
            document.addEventListener("webkitfullscreenchange", function () {
                c.call(document.webkitIsFullScreen);
            }, false);
        }
    }
   };
    Object.assign(expose, fullscreen);

})(mw.tools);


mw.required.push('userfiles/modules/microweber/api/tools/gallery.js');

(function(){
    var gallery = {

        generateHTML: function (item, callback, modal) {
            var modal = modal || false;
            if (typeof item === 'string') {
                callback.call("<div class='mwf-gallery-modeHTML'>" + item + "</div>");
            }
            else if (typeof item === 'object' && item.constructor === {}.constructor) {
                var img = item.img || item.image || item.url || item.src;
                var desc = item.description || item.title || item.name;
                if (!!modal) {
                    mw.$(modal.container).addClass('mw_gallery_loading');
                }
                mw.image.preload(img, function (w, h) {
                    if (typeof desc != 'undefined' && desc != '') {
                        callback.call("<div class='mwf-single-holder'><img src='" + img + "'  class='mwf-single mwf-single-loading '  width='" + w + "' data-width='" + w + "' data-height='" + h + "' height='" + h + "' onclick='mw.tools.gallery.next()' onload='mw.tools.gallery.normalize(mw.$(\"#mw_gallery\")[0].modal);'  /><div class='mwf-gallery-description'><div class='mwf-gallery-description-holder'>" + desc + "</div></div></div>");
                    }
                    else {
                        callback.call("<div class='mwf-single-holder'><img src='" + img + "'  data-width='" + w + "' width='" + w + "' data-height='" + h + "' height='" + h + "' class='mwf-single mwf-single-loading' onclick='mw.tools.gallery.next()' onload='mw.tools.gallery.normalize(mw.$(\"#mw_gallery\")[0].modal);' /></div>");
                    }
                    mw.$(modal.container).removeClass('mw_gallery_loading');
                });
            }
            else if (typeof item === 'object' && typeof item.nodeType === 'number') {
                var e = mwd.createElement('div');
                e.appendChild(item.cloneNode(true));
                var html = e.innerHTML;
                var e = null;
                callback.call("<div class='mwf-gallery-modeHTML'>" + html + "</div>");
            }
        },
        next: function (modal) {

            var modal2_test = mw.$("#mw_gallery")[0];
            var modal2 = false;
            if (typeof(modal2_test) != 'undefined' && typeof(modal2_test.modal) != 'undefined') {
                modal2 = modal2_test.modal;
            }

            var modal = modal || modal2;
            var galeryContainer = mw.$('.mwf-gallery-container', modal.container);
            var arr = modal.gallery.array, curr = modal.gallery.curr;
            var next = typeof arr[curr + 1] !== 'undefined' ? curr + 1 : 0;
            mw.tools.gallery.generateHTML(arr[next], function () {
                galeryContainer.html(this);
                modal.gallery.curr = next;
                mw.tools.gallery.normalize(modal);
                var next_of_next = typeof arr[next + 1] !== 'undefined' ? next + 1 : 0;
                if (typeof arr[next_of_next] !== 'undefined') {
                    if (typeof arr[next_of_next]['image'] !== 'undefined') {
                        var next_of_next_url = arr[next_of_next]['image']
                        var src_regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
                        if (src_regex.test(next_of_next_url)) {
                            try {
                                var _prelaod_img = new Image();
                                _prelaod_img.src = next_of_next_url;
                            } catch (e) {
                            }
                        }
                    }
                }
            }, modal);
        },
        prev: function (modal) {


            var modal2_test = mw.$("#mw_gallery")[0];
            var modal2 = false;
            if (typeof(modal2_test) != 'undefined' && typeof(modal2_test.modal) != 'undefined') {
                modal2 = modal2_test.modal;
            }

            var modal = modal || modal2;
            var galeryContainer = mw.$('.mwf-gallery-container', modal.container);
            var arr = modal.gallery.array, curr = modal.gallery.curr;
            var prev = typeof arr[curr - 1] !== 'undefined' ? curr - 1 : arr.length - 1;
            mw.tools.gallery.generateHTML(arr[prev], function () {
                galeryContainer.html(this);
                modal.gallery.curr = prev;
                mw.tools.gallery.normalize(modal);
            }, modal);
        },
        playing: false,
        playingInt: null,
        play: function (modal, interval) {

            if (!modal) {
                clearInterval(mw.tools.gallery.playingInt);
                mw.tools.gallery.playing = false;
                return;
            }
            if (mw.tools.gallery.playing) {
                mw.tools.gallery.playing = false;
                clearInterval(mw.tools.gallery.playingInt);
                mw.$('.mwf-loader', modal.container).stop().css({width: '0%'})
            }
            else {
                mw.tools.gallery.playing = true;
                interval = interval || 4000;
                mw.$('.mwf-loader', modal.container).stop().css({width: '0%'}).animate({width: '100%'}, interval);
                mw.tools.gallery.playingInt = setInterval(function () {
                    if (mw.tools.gallery.playing) {
                        if ($('.mwf-loader', modal.container).length > 0) {
                            mw.$('.mwf-loader', modal.container).stop().css({width: '0%'}).animate({width: '100%'}, interval);
                            mw.tools.gallery.next(modal);
                        }
                        else {
                            clearInterval(mw.tools.gallery.playingInt);
                        }
                    }
                }, interval);
            }
        },
        go: function (modal, index) {
            var modal = modal || mw.$("#mw_gallery")[0].modal;
            var index = index || 0;
            if (modal.gallery.curr != index) {
                var galeryContainer = mw.$('.mwf-gallery-container', modal.container);
                var arr = modal.gallery.array;
                mw.tools.gallery.generateHTML(arr[index], function () {
                    galeryContainer.html(this);
                    modal.gallery.curr = index;
                    mw.tools.gallery.normalize(modal);
                }, modal);
            }
            else {
            }
        },
        init: function (arr, start, modal) {
            /* "arr" parameter must be [{img:"url.jpg", description:"Lorem Ipsum"}, {img:"..."}]   or ["some <formated>", " <b>html</b> ..."]  or NodeList */
            if (arr === null || arr === undefined) {
                return false;
            }
            if (typeof arr.length !== 'number') {
                return false;
            }
            if (arr.length === 0) {
                return false;
            }
            var start = start || 0;
            if (mw.$("#mw_gallery").length > 0) {
                var m = mw.$("#mw_gallery")[0].modal;
                m.gallery = {
                    array: arr,
                    curr: 0
                }
                mw.tools.gallery.go(m, start);
                return false;
            }
            var next = arr.length > 1 ? '<span class="mwf-next">&rsaquo;</span>' : '';
            var prev = arr.length > 1 ? '<span class="mwf-prev">&lsaquo;</span>' : '';
            var play = arr.length > 1 ? '<span class="mwf-play"></span>' : '';
            var loader = arr.length > 1 ? '<span class="mwf-loader"></span>' : '';
            var ghtml = ''
                + '<div class="mwf-gallery">'
                + '<div class="mwf-gallery-container">'
                + '</div>'
                + next
                + prev
                + play
                + loader
                + (mw.tools.isFullscreenAvailable() ? '<span class="mwf-fullscreen"></span>' : '')
                + '</div>';
            var modal = modal || mw.top().tools.modal.init({
                    width: "100%",
                    height: "100%",
                    html: '',
                    draggable: false,
                    overlay: true,
                    name: "mw_gallery",
                    template: 'mw_modal_gallery',
                    onremove: function () {
                        clearInterval(mw.tools.gallery.playingInt);
                        mw.tools.gallery.playing = false;
                    }
                });
            modal.overlay.style.opacity = 0.8;
            modal.container.innerHTML = ghtml;
            modal.gallery = {
                array: arr,
                curr: start
            }
            var galeryContainer = mw.$('.mwf-gallery-container', modal.container);
            mw.tools.gallery.generateHTML(arr[start], function () {
                galeryContainer.html(this)
                var next = mw.$('.mwf-next', modal.container);
                var prev = mw.$('.mwf-prev', modal.container);
                var play = mw.$('.mwf-play', modal.container);
                var f = mw.$('.mwf-fullscreen', modal.main);
                next.click(function () {
                    mw.tools.gallery.next(modal);
                });
                prev.click(function () {
                    mw.tools.gallery.prev(modal);
                });
                play.click(function () {
                    mw.$(this).toggleClass('active');
                    mw.tools.gallery.play(modal);
                });
                f.click(function () {
                    mw.tools.toggleFullscreen(modal.main[0]);
                    mw.tools.gallery.normalize(modal);
                });
                mw.tools.fullscreenChange(function () {
                    if (this == true) {
                        mw.$(".mw_modal_gallery").addClass("fullscreen-mode");
                    }
                    else {
                        mw.$(".mw_modal_gallery").removeClass("fullscreen-mode");
                    }
                })
                mw.tools.gallery.normalize(modal);
            }, modal);
            return modal;
        },
        normalizer: function (modal) {
            var img = modal.container.querySelector('.mwf-single');
            var ww = mw.$(window).width();
            var wh = mw.$(window).height();
            if (img !== null) {
                var dw = parseFloat($(img).dataset("width"));
                var dh = parseFloat($(img).dataset("height"));
                var mxw = ((dw > ww) ? (ww - 33) : dw);
                var mxh = ((dh > wh) ? (wh - 33) : dh);
                img.style.maxWidth = mxw + 'px';
                //img.style.maxWidth = 'auto';
                img.style.maxHeight = mxh + 'px';
                //img.style.maxHeight = 'auto';
                var holder = img.parentNode;
                mw.tools.modal.center(holder);
            }
            else {
                var holder = modal.container.querySelector('.mwf-gallery-modeHTML');
                holder.style.maxWidth = (ww - 33) + 'px';
                holder.style.maxHeight = (wh - 33) + 'px';
                mw.$(holder).width($(holder).width())
                mw.$(holder).height($(holder).height())
                mw.tools.modal.center(holder);
            }
        },
        normalize: function (modal) {
            mw.tools.gallery.normalizer(modal);
            (function (modal) {
                setTimeout(function () {
                    mw.$('.mwf-single', modal).removeClass('.mwf-single-loading');
                }, 50);
            })(modal)
            if (typeof modal.normalized === 'undefined') {
                modal.normalized = true;
                mw.$(window).bind("resize", function () {
                    if (mwd.getElementById('mw_gallery') !== null) {
                        mw.tools.gallery.normalizer(modal);
                    }
                });
            }
        }

    };
    mw.tools.gallery = gallery;
})();


mw.required.push('userfiles/modules/microweber/api/tools/helpers.js');

(function(expose){
    var helpers = {
        fragment: function(){
            if(!this._fragment){
                this._fragment = document.createElement('div');
                this._fragment.style.visibility = 'hidden';
                this._fragment.style.position = 'absolute';
                this._fragment.style.width = '1px';
                this._fragment.style.height = '1px';
                document.body.appendChild(this._fragment);
            }
            return this._fragment;
        },
        _isBlockCache:{},
        isBlockLevel:function(node){
            if(!node || node.nodeType === 3){
                return false;
            }
            var name = node.nodeName;
            if(typeof this._isBlockCache[name] !== 'undefined'){
                return this._isBlockCache[name];
            }
            var test = document.createElement(name);
            this.fragment().appendChild(test);
            this._isBlockCache[name] = getComputedStyle(test).display === 'block';
            this.fragment().removeChild(test);
            return this._isBlockCache[name];
        },
        _isInlineCache:{},
        isInlineLevel:function(node){
            if(node.nodeType === 3){
                return false;
            }
            var name = node.nodeName;
            if(typeof this._isInlineCache[name] !== 'undefined'){
                return this._isInlineCache[name];
            }
            var test = document.createElement(name);
            this.fragment().appendChild(test);
            this._isInlineCache[name] = getComputedStyle(test).display === 'inline' && node.nodeName !== 'BR';
            this.fragment().removeChild(test);
            return this._isInlineCache[name];
        },
        elementOptions: function(el) {
            var opt = ( el.dataset.options || '').trim().split(','), final = {};
            if(!opt[0]) return final;
            $.each(opt, function(){
                var arr = this.split(':');
                var val = arr[1].trim();
                if(!val){

                }
                else if(val === 'true' || val === 'false'){
                    val = val === 'true';
                }
                else if(!/\D/.test(val)){
                    val = parseInt(val, 10);
                }
                final[arr[0].trim()] = val;
            });
            return final;
        },
        createAutoHeight: function() {
            if(window.thismodal && thismodal.iframe) {
                mw.tools.iframeAutoHeight(thismodal.iframe, 'now');
            }
            else if(mw.top().win.frameElement && mw.top().win.frameElement.contentWindow === window) {
                mw.tools.iframeAutoHeight(mw.top().win.frameElement, 'now');
            } else if(window.top !== window) {
                mw.top().$('iframe').each(function(){
                    try{
                        if(this.contentWindow === window) {
                            mw.tools.iframeAutoHeight(this, 'now');
                        }
                    } catch(e){}
                })
            }
        },
        collision: function(el1, el2){
            if(!el1 || !el2) return;
            el1 = mw.$(el1);
            el2 = mw.$(el2);
            var o1 = el1.offset();
            var o2 = el2.offset();
            o1.width = el1.width();
            o1.height = el1.height();
            o2.width = el2.width();
            o2.height = el2.height();
            return (o1.left < o2.left + o2.width  && o1.left + o1.width  > o2.left &&  o1.top < o2.top + o2.height && o1.top + o1.height > o2.top);
        },
        distance: function (x1, y1, x2, y2) {
            var a = x1 - x2;
            var b = y1 - y2;
            return Math.floor(Math.sqrt(a * a + b * b));
        },
        copy: function (value) {
            var tempInput = document.createElement("input");
            tempInput.style = "position: absolute; left: -1000px; top: -1000px";
            tempInput.value = value;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
            mw.notification.success(mw.lang('Copied') + ': "' + value + '"');
        },
        cloneObject: function (object) {
            return jQuery.extend(true, {}, object);
        },
        constructions: function () {
            mw.$(".mw-image-holder").each(function () {
                var img = this.querySelector('img');
                if (img && img.src) {
                    mw.$(this).css('backgroundImage', 'url(' + img.src + ')');
                }
            });
        },
        isRtl: function (el) {
            //todo
            el = el || document.documentElement;
            return document.documentElement.dir === 'rtl';
        },
        isEditable: function (item) {
            var el = item;
            if (!!item.type && !!item.target) {
                el = item.target;
            }
            return mw.tools.parentsOrCurrentOrderMatchOrOnlyFirst(el, ['edit', 'module']);
        },
        eachIframe: function (callback, root, ignore) {
            root = root || document;
            var scope = this;
            ignore = ignore || [];
            var all = root.querySelectorAll('iframe'), i = 0;
            for (; i < all.length; i++) {
                if (mw.tools.canAccessIFrame(all[i]) && ignore.indexOf(all[i]) === -1) {
                    callback.call(all[i].contentWindow, all[i].contentWindow);
                    scope.eachIframe(callback, all[i].contentWindow.document);
                }
            }
        },
        eachWindow: function (callback, options) {
            options = options || {};
            var curr = window;
            callback.call(curr, curr);
            while (curr !== top) {
                this.eachIframe(function (iframeWindow) {
                    callback.call(iframeWindow, iframeWindow);
                }, curr.parent.document, [curr]);
                curr = curr.parent;
                callback.call(curr, curr);
            }
            this.eachIframe(function (iframeWindow) {
                callback.call(iframeWindow, iframeWindow);
            });
            if (window.opener !== null && mw.tools.canAccessWindow(opener)) {
                callback.call(window.opener, window.opener);
                this.eachIframe(function (iframeWindow) {
                    callback.call(iframeWindow, iframeWindow);
                }, window.opener.document);
            }
        },
        canAccessWindow: function (winObject) {
            var can = false;
            try {
                var doc = winObject.document;
                can = !!doc.body;
            } catch (err) {
            }
            return can;
        },
        canAccessIFrame: function (iframe) {
            var can = false;
            try {
                var doc = iframe.contentDocument || iframe.contentWindow.document;
                can = !!doc.body && !!doc.documentElement;
            } catch (err) {
            }
            return can;
        },
        createStyle: function (c, css, ins) {
            ins = ins || mwd.getElementsByTagName('head')[0];
            var style = mw.$(c)[0];
            if (!style) {
                style = mwd.createElement('style');
                ins.appendChild(style);
            }
            style.innerHTML = css;
            return style;
        },
        cssNumber: function (val) {
            var units = ["px", "%", "in", "cm", "mm", "em", "ex", "pt", "pc"];
            if (typeof val === 'number') {
                return val + 'px';
            }
            else if (typeof val === 'string' && parseFloat(val).toString() === val) {
                return val + 'px';
            }
            else {
                if (isNaN(parseFloat(val))) {
                    return '0px';
                }
                else {
                    return val;
                }
            }

        },
        isField: function (target) {
            var t = target.nodeName.toLowerCase();
            var fields = /^(input|textarea|select)$/i;
            return fields.test(t);
        },

        toggleCheckbox: function (node) {
            if (node === null || node === undefined) return false;
            node.checked = !node.checked;
            return node.checked;
        },
        jQueryFields: function (root) {
            if (typeof root === 'string') {
                root = mwd.querySelector(root);
            }
            if (typeof root === 'undefined' || root === null) return false;
            var allFields = "textarea, select, input[type='checkbox']:checked, input[type='color'], input[type='date'], input[type='datetime'], input[type='datetime-local'], input[type='email'], input[type='file'], input[type='hidden'], input[type='month'], input[type='number'], input[type='password'], input[type='radio']:checked, input[type='range'], input[type='search'], input[type='tel'], input[type='text'], input[type='time'], input[type='url'], input[type='week']";
            return mw.$(allFields, fields).not(':disabled');
        },
        toggle: function (who, toggler, callback) {
            who = mw.$(who);
            who.toggle();
            who.toggleClass('toggle-active');
            mw.$(toggler).toggleClass('toggler-active');
            mw.is.func(callback) ? callback.call(who) : '';
        },
        _confirm: function (question, callback) {
            var conf = confirm(question);
            if (conf && typeof callback === 'function') {
                callback.call(window);
            }
            return conf;
        },
        el_switch: function (arr, type) {
            if (type === 'semi') {
                mw.$(arr).each(function () {
                    var el = mw.$(this);
                    if (el.hasClass("semi_hidden")) {
                        el.removeClass("semi_hidden");
                    }
                    else {
                        el.addClass("semi_hidden");
                    }
                });
            }
            else {
                mw.$(arr).each(function () {
                    var el = mw.$(this);
                    if (el.css('display') === 'none') {
                        el.show();
                    }
                    else {
                        el.hide();
                    }
                });
            }
        },
        focus_on: function (el) {
            if (!$(el).hasClass('mw-focus')) {
                mw.$(".mw-focus").each(function () {
                    this !== el ? mw.$(this).removeClass('mw-focus') : '';
                });
                mw.$(el).addClass('mw-focus');
            }
        },
        scrollTo: function (el, callback, minus) {
            minus = minus || 0;
            if ($(el).length === 0) {
                return false;
            }
            if (typeof callback === 'number') {
                minus = callback;
            }
            mw.$('html,body').stop().animate({scrollTop: mw.$(el).offset().top - minus}, function () {
                typeof callback === 'function' ? callback.call(el) : '';
            });
        },
        accordion: function (el, callback) {
            mw.require('css_parser.js');
            var speed = 200;
            var container = el.querySelector('.mw-accordion-content');
            if (container === null) return false;
            var is_hidden = mw.CSSParser(container).get.display() === 'none';
            if (!$(container).is(":animated")) {
                if (is_hidden) {
                    mw.$(container).slideDown(speed, function () {
                        mw.$(el).addClass('active');
                        typeof callback === 'function' ? callback.call(el, 'visible') : '';
                    });
                }
                else {
                    mw.$(container).slideUp(speed, function () {
                        mw.$(el).removeClass('active');
                        typeof callback === 'function' ? callback.call(el, 'hidden') : '';
                    });
                }
            }
        },
        index: function (el, parent, selector) {
            el = mw.$(el)[0];
            selector = selector || el.tagName.toLowerCase();
            parent = parent || el.parentNode;
            var all;
            if (parent.constructor === [].constructor) {
                all = parent;
            }
            else {
                all = mw.$(selector, parent)
            }
            var i = 0, l = all.length;
            for (; i < l; i++) {
                if (el === all[i]) return i;
            }
        },

        highlight: function (el, color, speed1, speed2) {
            if (!el) return false;
            mw.$(el).stop();
            color = color || '#48AD79';
            speed1 = speed1 || 777;
            speed2 = speed2 || 777;
            var curr = window.getComputedStyle(el, null).backgroundColor;
            if (curr === 'transparent') {
                curr = '#ffffff';
            }
            mw.$(el).animate({backgroundColor: color}, speed1, function () {
                mw.$(el).animate({backgroundColor: curr}, speed2, function () {
                    mw.$(el).css('backgroundColor', '');
                });
            });
        },
        highlightStop: function (el) {
            mw.$(el).stop();
            mw.$(el).css('backgroundColor', '');
        },
        toCamelCase: function (str) {
            return str.replace(/(\-[a-z])/g, function (a) {
                return a.toUpperCase().replace('-', '');
            });
        },
        multihover: function () {
            var l = arguments.length, i = 1;
            var type = arguments[0].type;
            var check = ( type === 'mouseover' || type === 'mouseenter');
            for ( ; i < l; i++ ) {
                check ? mw.$(arguments[i]).addClass('hovered') : mw.$(arguments[i]).removeClass('hovered');
            }
        },
        listSearch: function (val, list) {
            val = val.trim().toLowerCase();
            if(!val) {
                $('li', list).show();
                return;
            }
            this.search(val, 'li', function (found) {
                if(found) {
                    $(this).show();
                } else {
                    $(this).hide();
                }

            }, list);
        },
        search: function (string, selector, callback, root) {
            root = !!root ? $(root)[0] : mwd;
            if (!root) {
                return;
            }
            string = string.toLowerCase();
            var items;
            if (typeof selector === 'object') {
                items = selector;
            }
            else if (typeof selector === 'string') {
                items = root.querySelectorAll(selector);
            }
            else {
                return false;
            }
            var i = 0, l = items.length;
            for (; i < l; i++) {
                items[i].textContent.toLowerCase().contains(string) ? callback.call(items[i], true) : callback.call(items[i], false);
            }
        },
        ajaxIsSearching: false,
        ajaxSearcSetting: {
            limit: 10,
            keyword: '',
            order_by: 'updated_at desc',
            search_in_fields: 'title'
        },
        ajaxSearch: function (o, callback) {
            if (!mw.tools.ajaxIsSearching) {
                var obj = $.extend({}, mw.tools.ajaxSearcSetting, o);
                mw.tools.ajaxIsSearching = $.post(mw.settings.site_url + "api/get_content_admin", obj, function (data) {
                    if (typeof callback === 'function') {
                        callback.call(data, data);
                    }
                }).always(function () {
                    mw.tools.ajaxIsSearching = false
                });
            }
            return mw.tools.ajaxIsSearching;
        },
        getPostById: function (id, callback) {
            var config = {
                limit: 10,
                keyword: '',
                order_by: 'updated_at desc',
                search_in_fields: 'id',
                id: id
            };
            return this.ajaxSearch(config, callback);
        },
        iframeLinksToParent: function (iframe) {
            mw.$(iframe).contents().find('a').each(function () {
                var href = this.href;
                if (href.contains(mw.settings.site_url)) {
                    this.target = '_parent';
                }
            });
        },
        get_filename: function (s) {
            if (s.contains('.')) {
                var d = s.lastIndexOf('.');
                return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
            }
            else {
                return undefined;
            }
        },
        is_field: function (obj) {
            if (obj === null || typeof obj === 'undefined' || obj.nodeType === 3) {
                return false;
            }
            if (!obj.nodeName) {
                return false;
            }
            var t = obj.nodeName.toLowerCase();
            if (t === 'input' || t === 'textarea' || t === 'select') {
                return true
            }
            return false;
        },
        getAttrs: function (el) {
            var attrs = el.attributes;
            var obj = {};
            for (var x in attrs) {
                if (attrs[x].nodeName) {
                    obj[attrs[x].nodeName] = attrs[x].nodeValue;
                }
            }
            return obj;
        },
        copyAttributes: function (from, to, except) {
            except = except || [];
            var attrs = mw.tools.getAttrs(from);
            if (mw.tools.is_field(from) && mw.tools.is_field(to)) to.value = from.value;
            for (var x in attrs) {
                ( $.inArray(x, except) == -1 && x != 'undefined') ? to.setAttribute(x, attrs[x]) : '';
            }
        },
        isEmptyObject: function (obj) {
            for (var a in obj) {
                if (obj.hasOwnProperty(a)) return false;
            }
            return true;
        },
        objLenght: function (obj) {
            var len = 0, x;
            if (obj.constructor === {}.constructor) {
                for ( x in obj ) {
                    len++;
                }
            }
            return len;
        },
        scaleTo: function (selector, w, h) {
            w = w || 800;
            h = h || 600;
            var is_percent = w.toString().contains("%") ? true : false;
            var item = mw.$(selector);
            if (item.hasClass('mw-scaleto') || w == 'close') {
                item.removeClass('mw-scaleto');
                item.removeAttr('style');
            }
            else {
                item.parent().height(item.height());
                item.addClass('mw-scaleto');
                if (is_percent) {
                    item.css({
                        width: w,
                        height: h,
                        left: ((100 - parseFloat(w)) / 2) + "%",
                        top: ((100 - parseFloat(h)) / 2) + "%"
                    });
                }
                else {
                    item.css({
                        width: w,
                        height: h,
                        marginLeft: -w / 2,
                        marginTop: -h / 2
                    });
                }
            }
        },
        getFirstEqualFromTwoArrays: function (a, b) {
            var ia = 0, ib = 0, la = a.length, lb = b.length;
            loop:
                for (; ia < la; ia++) {
                    var curr = a[ia];
                    for (; ib < lb; ib++) {
                        if (b[ib] == curr) {
                            return curr;
                        }
                    }
                }
        },
        has: function (el, what) {
            return el.querySelector(what) !== null;
        },
        html_info: function (html) {
            if (typeof mw._html_info === 'undefined') {
                mw._html_info = mwd.createElement('div');
                mw._html_info.id = 'mw-html-info';
                mwd.body.appendChild(mw._html_info);
            }
            mw.$(mw._html_info).html(html);
            return mw._html_info;
        },
        image_info: function (a, callback) {
            var img = mwd.createElement('img');
            img.className = 'semi_hidden';
            img.src = a.src;
            mwd.body.appendChild(img);
            img.onload = function () {
                callback.call({width: mw.$(img).width(), height: mw.$(img).height()});
                mw.$(img).remove();
            };
        },
        refresh_image: function (node) {
            node.src = mw.url.set_param('refresh_image', mw.random(), node.src);
            return node;
        },
        refresh: function (a) {
            if (a === null || typeof a === 'undefined') {
                return false;
            }
            if (a.src) {
                a.src = mw.url.set_param('mwrefresh', mw.random(), a.src);
            }
            else if (a.href) {
                a.href = mw.url.set_param('mwrefresh', mw.random(), a.href);
            }
        },
        getDiff: function (_new, _old) {
            var diff = {}, x, y;
            for (x in _new) {
                if (!x in _old || _old[x] != _new[x]) {
                    diff[x] = _new[x];
                }
            }
            for (y in _old) {
                if (typeof _new[y] === 'undefined') {
                    diff[y] = "";
                }
            }
            return diff;
        },
        parseHtml: function (html) {
            var doc = mwd.implementation.createHTMLDocument("");
            doc.body.innerHTML = html;
            return doc;
        },
        isEmpty: function (node) {
            return ( node.innerHTML.trim() ).length === 0;
        },
        isJSON: function (a) {
            if (typeof a === 'object') {
                if (a.constructor === {}.constructor) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else if (typeof a === 'string') {
                try {
                    JSON.parse(a);
                }
                catch (e) {
                    return false;
                }
                return true;
            }
            else {
                return false;
            }
        },
        toJSON: function (w) {
            if (typeof w === 'object' && mw.tools.isJSON(w)) {
                return w;
            }
            if (typeof w === 'string') {
                try {
                    var r = JSON.parse(w);
                }
                catch (e) {
                    var r = {"0": w};
                }
                return r;
            }
            if (typeof w === 'object' && w.constructor === [].constructor) {
                var obj = {}, i = 0, l = w.length;
                for (; i < l; i++) {
                    obj[i] = w[i];
                }
                return obj;
            }
        },
        mwattr: function (el, a, b) {
            if (!b && !!el) {
                var data = mw.$(el).dataset(a);
                if (!!$(el)[0].attributes) {
                    var attr = mw.$(el)[0].attributes[a];
                }

                if (data !== '') {
                    return data;
                }
                if (!!attr) {
                    return attr.value;
                }
                return false;
            }
            else {
                mw.$(el).dataset(a, b);
            }
        },
        disable: function (el, text, global) {
            text = text || mw.msg.loading + '...';
            global = global || false;
            var _el = mw.$(el);
            if (!_el.length) {
                return false;
            }
            if (!_el.hasClass("disabled")) {
                _el.addClass('disabled');
                if (_el[0].tagName !== 'INPUT') {
                    _el.dataset("text", _el.html());
                    _el.html(text);
                }
                else {
                    _el.dataset("text", _el.val());
                    _el.val(text);
                }
                if (global) mw.$(mwd.body).addClass("loading");
            }
            return el;
        },
        enable: function (el) {
            var _el = mw.$(el);
            if (!_el.length) {
                return false;
            }
            var text = _el.dataset("text");
            _el.removeClass("disabled");
            if (_el[0].tagName !== 'INPUT') {
                _el.html(text);
            }
            else {
                _el.val(text);
            }
            mw.$(mwd.body).removeClass("loading");
            return el;
        },
        prependClass: function (el, cls) {
            el.className = (cls + ' ' + el.className).trim()
        },
        inview: function (el) {
            var $el = mw.$(el);
            if ($el.length === 0) {
                return false;
            }
            var dt = mw.$(window).scrollTop(),
                db = dt + mw.$(window).height(),
                et = $el.offset().top;
            return (et <= db) && !(dt > ($el.height() + et));
        },
        wholeinview: function (el) {
            var $el = mw.$(el),
                dt = mw.$(window).scrollTop(),
                db = dt + mw.$(window).height(),
                et = $el.offset().top,
                eb = et + mw.$(el).height();
            return ((eb <= db) && (et >= dt));
        },
        preload: function (u, c) {
            var im = new Image();
            if (typeof c === 'function') {
                im.onload = function () {
                    c.call(u, im);
                }
            }
            im.src = u;
        },
        mapNodeValues: function (n1, n2) {
            if (!n1 || !n2 || n1 === null || n2 === null) return false;
            var setValue1 = ((!!n1.type && n1.nodeName !== 'BUTTON') || n1.nodeName === 'TEXTAREA') ? 'value' : 'textContent';
            var setValue2 = ((!!n2.type && n2.nodeName !== 'BUTTON') || n2.nodeName === 'TEXTAREA') ? 'value' : 'textContent';
            var events = 'keyup paste';
            mw.$(n1).bind(events, function () {
                n2[setValue2] = n1[setValue1];
                mw.$(n2).trigger('change');
            });
            mw.$(n2).bind(events, function () {
                n1[setValue1] = n2[setValue2];
                mw.$(n1).trigger('change');
            });
        },
        copyEvents: function (from, to) {
            if (typeof $._data(from, 'events') === 'undefined') {
                return false;
            }
            $.each($._data(from, 'events'), function () {
                $.each(this, function () {
                    mw.$(to).bind(this.type, this.handler);
                });
            });
        },
        setTag: function (node, tag) {
            var el = mwd.createElement(tag);
            mw.tools.copyAttributes(node, el);
            while (node.firstChild) {
                el.appendChild(node.firstChild);
            }
            mw.tools.copyEvents(node, el);
            mw.$(node).replaceWith(el);
            return el;
        },

        module_settings: function (a, view, liveedit) {
            var opts = {};
            if (typeof liveedit === 'undefined') {
                opts.liveedit = true;
            }
            if (!!view) {
                opts.view = view;
            }
            else {
                opts.view = 'admin';
            }
            return mw.live_edit.showSettings(a, opts);
        },
        fav: function (a) {
            var canvas = document.createElement("canvas");
            canvas.width = 16;
            canvas.height = 16;
            var context = canvas.getContext("2d");
            context.fillStyle = "#EF3D25";
            context.fillRect(0, 0, 16, 16);
            context.font = "normal 10px Arial";
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillStyle = "white";
            context.fillText(a, 8, 8);
            var im = canvas.toDataURL();
            var l = document.createElement('link');
            l.className = 'mwfav';
            l.setAttribute('rel', 'icon');
            l.setAttribute('type', 'image/png');
            l.href = im;
            mw.$(".mwfav").remove();
            mwd.getElementsByTagName('head')[0].appendChild(l);
        },
        px2pt: function (px) {
            var n = parseInt(px, 10);
            if (isNaN(n)) {
                return false;
            }
            return Math.round(((3 / 4) * n));
        },
        matches: function (node, what) {
            if (node === 'init') {
                if (!!mwd.documentElement.matches) mw.tools.matchesMethod = 'matches';
                else if (!!mwd.documentElement.matchesSelector) mw.tools.matchesMethod = 'matchesSelector';
                else if (!!mwd.documentElement.mozMatchesSelector) mw.tools.matchesMethod = 'mozMatchesSelector';
                else if (!!mwd.documentElement.webkitMatchesSelector) mw.tools.matchesMethod = 'webkitMatchesSelector';
                else if (!!mwd.documentElement.msMatchesSelector) mw.tools.matchesMethod = 'msMatchesSelector';
                else if (!!mwd.documentElement.oMatchesSelector) mw.tools.matchesMethod = 'oMatchesSelector';
                else mw.tools.matchesMethod = undefined;
            }
            else {
                if (node === null) {
                    return false;
                }
                if (typeof node === 'undefined') {
                    return false;
                }
                if (node.nodeType !== 1) {
                    return false;
                }
                if (!!mw.tools.matchesMethod) {
                    return node[mw.tools.matchesMethod](what)
                }
                else {
                    var doc = mwd.implementation.createHTMLDocument("");
                    node = node.cloneNode(true);
                    doc.body.appendChild(node);
                    var all = doc.body.querySelectorAll(what),
                        l = all.length,
                        i = 0;
                    for (; i < l; i++) {
                        if (all[i] === node) {
                            return true;
                        }
                    }
                    return false;
                }
            }
        }
    }

    Object.assign(expose, helpers);
    expose.matches('init');

})(mw.tools);


mw.required.push('userfiles/modules/microweber/api/tools/iframe-tools.js');

mw.tools.createAutoHeight = function() {
    if(window.thismodal && thismodal.iframe) {
        mw.tools.iframeAutoHeight(thismodal.iframe);
    }
    else if(mw.top().win.frameElement && mw.top().win.frameElement.contentWindow === window) {
        mw.tools.iframeAutoHeight(mw.top().win.frameElement);
    } else if(window.top !== window) {
        mw.top().$('iframe').each(function(){
            try{
                if(this.contentWindow === window) {
                    mw.tools.iframeAutoHeight(this);
                }
            } catch(e){}
        })
    }
};

mw.tools.moduleFrame = function(type, template){
    return mw.dialogIframe({
        url: mw.external_tool('module_dialog') + '?module=' + type + (template ? ('&template=' + template) : ''),
        width: 532,
        height: 'auto',
        autoHeight:true,
        title: type,
        className: 'mw-dialog-module-settings',
        closeButtonAction: 'remove'
    });
};


mw.tools.iframeAutoHeight = function(frame, opt){

    frame = mw.$(frame)[0];
    if(!frame) return;

    var _detector = document.createElement('div');
    _detector.className = 'mw-iframe-auto-height-detector';
    _detector.id = mw.id();

    var insertDetector = function() {
        if(frame.contentWindow && frame.contentWindow.document && frame.contentWindow.document.body){
            var det = frame.contentWindow.document.querySelector('.mw-iframe-auto-height-detector');
            if(!det){
                frame.contentWindow.document.body.appendChild(_detector);
            } else if(det !== frame.contentWindow.document.body.lastChild){
                frame.contentWindow.document.body.appendChild(det);
            }
            if(frame.contentWindow.mw) {
                frame.contentWindow.mw._iframeDetector = _detector;
            }

        }
    };



    setTimeout(function(){
        insertDetector();
    }, 100);
    frame.scrolling="no";
    frame.style.minHeight = 0 + 'px';
    mw.$(frame).on('load resize', function(){

        if(!mw.tools.canAccessIFrame(frame)) {
            console.log('Iframe can not be accessed.', frame);
            return;
        }
        if(!frame.contentWindow.document.body){
            return;
        }
        if(!!frame.contentWindow.document.querySelector('.mw-iframe-auto-height-detector')){
            return;
        }
        insertDetector();
    });
    var offset = function () {
        return _detector.getBoundingClientRect().top;
    };
    frame._intPause = false;
    frame._int = setInterval(function(){
        if(!frame._intPause && frame.parentNode && frame.contentWindow ){
            var calc = offset() + _detector.offsetHeight;
            frame._currHeight = frame._currHeight || 0;
            if(calc && calc !== frame._currHeight ){
                frame._currHeight = calc;
                frame.style.height = Math.max(calc) + 'px';
                var scroll = Math.max(frame.contentWindow.document.documentElement.scrollHeight, frame.contentWindow.document.body.scrollHeight);
                if(scroll > frame._currHeight) {
                    frame._currHeight = scroll;
                    frame.style.height = scroll + 'px';
                }
                mw.$(frame).trigger('bodyResize');
            }
        }
        else {
            //clearInterval(frame._int);
        }
    }, 77);

};


mw.required.push('userfiles/modules/microweber/api/tools/images.js');

mw.image = {
    isResizing: false,
    currentResizing: null,
    resize: {
        create_resizer: function () {
            if (mw.image_resizer == undefined) {
                var resizer = document.createElement('div');
                resizer.className = 'mw-defaults mw_image_resizer';
                resizer.innerHTML = '<div id="image-edit-nav"><span onclick="mw.wysiwyg.media(\'#editimage\');" class="mw-ui-btn mw-ui-btn-medium mw-ui-btn-invert mw-ui-btn-icon image_change tip" data-tip="' + mw.msg.change + '"><span class="mw-icon-image-frame"></span></span><span class="mw-ui-btn mw-ui-btn-medium mw-ui-btn-invert mw-ui-btn-icon tip image_change" id="image-settings-button" data-tip="' + mw.msg.edit + '" onclick="mw.image.settings();"><span class="mw-icon-edit"></span></span></div>';
                document.body.appendChild(resizer);
                mw.image_resizer = resizer;
                mw.image_resizer_time = null;
                mw.image_resizer._show = function () {
                    clearTimeout(mw.image_resizer_time)
                    mw.$(mw.image_resizer).addClass('active')
                };
                mw.image_resizer._hide = function () {
                    mw.image_resizer_time = setTimeout(function () {
                        mw.$(mw.image_resizer).removeClass('active')
                    }, 3000)
                };

                mw.$(resizer).on("click", function (e) {
                    if (mw.image.currentResizing[0].nodeName === 'IMG') {
                        mw.wysiwyg.select_element(mw.image.currentResizing[0])
                    }
                });
                mw.$(resizer).on("dblclick", function (e) {
                    mw.wysiwyg.media('#editimage');
                });
            }
        },
        prepare: function () {
            mw.image.resize.create_resizer();
            mw.$(mw.image_resizer).resizable({
                handles: "all",
                minWidth: 60,
                minHeight: 60,
                start: function () {
                    mw.image.isResizing = true;
                    mw.$(mw.image_resizer).resizable("option", "maxWidth", mw.image.currentResizing.parent().width());
                    mw.$(mw.tools.firstParentWithClass(mw.image.currentResizing[0], 'edit')).addClass("changed");
                },
                stop: function () {
                    mw.image.isResizing = false;
                    mw.drag.fix_placeholders();
                },
                resize: function () {
                    var offset = mw.image.currentResizing.offset();
                    mw.$(this).css(offset);
                },
                aspectRatio: 16 / 9
            });
            mw.image_resizer.mwImageResizerComponent = true;
            var all = mw.image_resizer.querySelectorAll('*'), l = all.length, i = 0;
            for (; i < l; i++) all[i].mwImageResizerComponent = true
        },
        resizerSet: function (el, selectImage) {
            var selectImage = typeof selectImage === 'undefined' ? true : selectImage;
            /*  var order = mw.tools.parentsOrder(el, ['edit', 'module']);
             if(!(order.module > -1 && order.edit > order.module) && order.edit>-1){   */


            mw.$('.ui-resizable-handle', mw.image_resizer)[el.nodeName == 'IMG' ? 'show' : 'hide']()

            var el = mw.$(el);
            var offset = el.offset();
            var parent = el.parent();
            var parentOffset = parent.offset();
            if(parent[0].nodeName !== 'A'){
                offset.top = offset.top < parentOffset.top ? parentOffset.top : offset.top;
                offset.left = offset.left < parentOffset.left ? parentOffset.left : offset.left;
            }
            var r = mw.$(mw.image_resizer);
            var width = el.outerWidth();
            var height = el.outerHeight();
            r.css({
                left: offset.left,
                top: offset.top,
                width: width,
                height: mw.tools.hasParentsWithClass(el[0], 'mw-image-holder') ? 1 : height
            });
            r.addClass("active");
            mw.$(mw.image_resizer).resizable("option", "alsoResize", el);
            mw.$(mw.image_resizer).resizable("option", "aspectRatio", width / height);
            mw.image.currentResizing = el;
            if (!el[0].contentEditable) {
                mw.wysiwyg.contentEditable(el[0], true);
            }

            if (selectImage) {
                if (el[0].parentNode.tagName !== 'A') {
                    mw.wysiwyg.select_element(el[0]);
                }
                else {
                    mw.wysiwyg.select_element(el[0].parentNode);
                }
            }
            if (mwd.getElementById('image-settings-button') !== null) {
                if (!!el[0].src && el[0].src.contains('userfiles/media/pixum/')) {
                    mwd.getElementById('image-settings-button').style.display = 'none';
                }
                else {
                    mwd.getElementById('image-settings-button').style.display = '';
                }
            }
            /* } */
        },
        init: function (selector) {
            mw.image_resizer == undefined ? mw.image.resize.prepare() : '';

            mw.on("ImageClick", function (e, el) {
                if (!mw.image.isResizing && !mw.isDrag && !mw.settings.resize_started && el.tagName === 'IMG') {
                    mw.image.resize.resizerSet(el);
                }
            })
        }
    },

    _isrotating: false,
    rotate: function (img_object, angle) {
        if (!mw.image.Rotator) {
            mw.image.Rotator = mwd.createElement('canvas');
            mw.image.Rotator.style.top = '-9999px';
            mw.image.Rotator.style.left = '-9999px';
            mw.image.Rotator.style.position = 'absolute';
            mw.image.RotatorContext = mw.image.Rotator.getContext('2d');
            document.body.appendChild(mw.image.Rotator);
        }
        if (!mw.image._isrotating) {
            mw.image._isrotating = true;
            img_object = img_object || mwd.querySelector("img.element-current");
            if (img_object === null) {
                return false;
            }
            mw.image.preload(img_object.src, function () {
                if (!img_object.src.contains("base64")) {
                    var currDomain = mw.url.getDomain(window.location.href);
                    var srcDomain = mw.url.getDomain(img_object.src);
                    if (currDomain !== srcDomain) {
                        mw.tools.alert("This action is allowed for images on the same domain.");
                        return false;
                    }
                }
                var angle = angle || 90;
                var image = mw.$(this);
                var w = this.naturalWidth;
                var h = this.naturalHeight;
                var contextWidth = w;
                var contextHeight = h;
                var x = 0;
                var y = 0;
                switch (angle) {
                    case 90:
                        contextWidth = h;
                        contextHeight = w;
                        y = -h;
                        break;
                    case 180:
                        x = -w;
                        y = -h;
                        break;
                    case 270:
                        contextWidth = h;
                        contextHeight = w;
                        x = -w;
                        break;
                    default:
                        contextWidth = h;
                        contextHeight = w;
                        y = -h;
                }
                mw.image.Rotator.setAttribute('width', contextWidth);
                mw.image.Rotator.setAttribute('height', contextHeight);
                mw.image.RotatorContext.rotate(angle * Math.PI / 180);
                mw.image.RotatorContext.drawImage(img_object, x, y);
                var data = mw.image.Rotator.toDataURL("image/png");
                img_object.src = data;
                mw.image._isrotating = false;
                if (!!mw.wysiwyg) mw.wysiwyg.normalizeBase64Image(img_object);
            });
        }
    },
    grayscale: function (node) {
        var node = node || mwd.querySelector("img.element-current");
        if (node === null) {
            return false;
        }
        mw.image.preload(node.src, function () {
            var canvas = mwd.createElement('canvas');
            var ctx = canvas.getContext('2d');
            canvas.width = this.naturalWidth;
            canvas.height = this.naturalHeight;
            ctx.drawImage(node, 0, 0);
            var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
            for (var y = 0; y < imgPixels.height; y++) {
                for (var x = 0; x < imgPixels.width; x++) {
                    var i = (y * 4) * imgPixels.width + x * 4; //Why is this multiplied by 4?
                    var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
                    imgPixels.data[i] = avg;
                    imgPixels.data[i + 1] = avg;
                    imgPixels.data[i + 2] = avg;
                }
            }
            ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
            node.src = canvas.toDataURL();
            if (!!mw.wysiwyg) mw.wysiwyg.normalizeBase64Image(node);
        })
    },
    vr: [0, 0, 0, 1, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 17, 18, 19, 19, 20, 21, 22, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 44, 45, 47, 48, 49, 52, 54, 55, 57, 59, 60, 62, 65, 67, 69, 70, 72, 74, 77, 79, 81, 83, 86, 88, 90, 92, 94, 97, 99, 101, 103, 107, 109, 111, 112, 116, 118, 120, 124, 126, 127, 129, 133, 135, 136, 140, 142, 143, 145, 149, 150, 152, 155, 157, 159, 162, 163, 165, 167, 170, 171, 173, 176, 177, 178, 180, 183, 184, 185, 188, 189, 190, 192, 194, 195, 196, 198, 200, 201, 202, 203, 204, 206, 207, 208, 209, 211, 212, 213, 214, 215, 216, 218, 219, 219, 220, 221, 222, 223, 224, 225, 226, 227, 227, 228, 229, 229, 230, 231, 232, 232, 233, 234, 234, 235, 236, 236, 237, 238, 238, 239, 239, 240, 241, 241, 242, 242, 243, 244, 244, 245, 245, 245, 246, 247, 247, 248, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
    vg: [0, 0, 1, 2, 2, 3, 5, 5, 6, 7, 8, 8, 10, 11, 11, 12, 13, 15, 15, 16, 17, 18, 18, 19, 21, 22, 22, 23, 24, 26, 26, 27, 28, 29, 31, 31, 32, 33, 34, 35, 35, 37, 38, 39, 40, 41, 43, 44, 44, 45, 46, 47, 48, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 71, 72, 73, 74, 75, 76, 77, 79, 80, 81, 83, 84, 85, 86, 88, 89, 90, 92, 93, 94, 95, 96, 97, 100, 101, 102, 103, 105, 106, 107, 108, 109, 111, 113, 114, 115, 117, 118, 119, 120, 122, 123, 124, 126, 127, 128, 129, 131, 132, 133, 135, 136, 137, 138, 140, 141, 142, 144, 145, 146, 148, 149, 150, 151, 153, 154, 155, 157, 158, 159, 160, 162, 163, 164, 166, 167, 168, 169, 171, 172, 173, 174, 175, 176, 177, 178, 179, 181, 182, 183, 184, 186, 186, 187, 188, 189, 190, 192, 193, 194, 195, 195, 196, 197, 199, 200, 201, 202, 202, 203, 204, 205, 206, 207, 208, 208, 209, 210, 211, 212, 213, 214, 214, 215, 216, 217, 218, 219, 219, 220, 221, 222, 223, 223, 224, 225, 226, 226, 227, 228, 228, 229, 230, 231, 232, 232, 232, 233, 234, 235, 235, 236, 236, 237, 238, 238, 239, 239, 240, 240, 241, 242, 242, 242, 243, 244, 245, 245, 246, 246, 247, 247, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 255],
    vb: [53, 53, 53, 54, 54, 54, 55, 55, 55, 56, 57, 57, 57, 58, 58, 58, 59, 59, 59, 60, 61, 61, 61, 62, 62, 63, 63, 63, 64, 65, 65, 65, 66, 66, 67, 67, 67, 68, 69, 69, 69, 70, 70, 71, 71, 72, 73, 73, 73, 74, 74, 75, 75, 76, 77, 77, 78, 78, 79, 79, 80, 81, 81, 82, 82, 83, 83, 84, 85, 85, 86, 86, 87, 87, 88, 89, 89, 90, 90, 91, 91, 93, 93, 94, 94, 95, 95, 96, 97, 98, 98, 99, 99, 100, 101, 102, 102, 103, 104, 105, 105, 106, 106, 107, 108, 109, 109, 110, 111, 111, 112, 113, 114, 114, 115, 116, 117, 117, 118, 119, 119, 121, 121, 122, 122, 123, 124, 125, 126, 126, 127, 128, 129, 129, 130, 131, 132, 132, 133, 134, 134, 135, 136, 137, 137, 138, 139, 140, 140, 141, 142, 142, 143, 144, 145, 145, 146, 146, 148, 148, 149, 149, 150, 151, 152, 152, 153, 153, 154, 155, 156, 156, 157, 157, 158, 159, 160, 160, 161, 161, 162, 162, 163, 164, 164, 165, 165, 166, 166, 167, 168, 168, 169, 169, 170, 170, 171, 172, 172, 173, 173, 174, 174, 175, 176, 176, 177, 177, 177, 178, 178, 179, 180, 180, 181, 181, 181, 182, 182, 183, 184, 184, 184, 185, 185, 186, 186, 186, 187, 188, 188, 188, 189, 189, 189, 190, 190, 191, 191, 192, 192, 193, 193, 193, 194, 194, 194, 195, 196, 196, 196, 197, 197, 197, 198, 199],
    vintage: function (node) {
        var node = node || mwd.querySelector("img.element-current");
        if (node === null) {
            return false;
        }
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        mw.image.preload(node.src, function (w, h) {
            canvas.width = w;
            canvas.height = h;
            ctx.drawImage(node, 0, 0);
            var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height), l = imageData.data.length, i = 0;
            for (; i < l; i += 4) {
                imageData.data[i] = mw.image.vr[imageData.data[i]];
                imageData.data[i + 1] = mw.image.vg[imageData.data[i + 1]];
                imageData.data[i + 2] = mw.image.vb[imageData.data[i + 2]];
                if (noise > 0) {
                    var noise = Math.round(noise - Math.random() * noise), j = 0;
                    for (; j < 3; j++) {
                        var iPN = noise + imageData.data[i + j];
                        imageData.data[i + j] = (iPN > 255) ? 255 : iPN;
                    }
                }
            }
            ctx.putImageData(imageData, 0, 0);
            node.src = canvas.toDataURL();
            if (!!mw.wysiwyg) mw.wysiwyg.normalizeBase64Image(node);
            mw.$(canvas).remove()
        });
    },
    _dragActivated: false,
    _dragcurrent: null,
    _dragparent: null,
    _dragcursorAt: {x: 0, y: 0},
    _dragTxt: function (e) {
        if (mw.image._dragcurrent !== null) {
            mw.image._dragcursorAt.x = e.pageX - mw.image._dragcurrent.offsetLeft;
            mw.image._dragcursorAt.y = e.pageY - mw.image._dragcurrent.offsetTop;
            var x = e.pageX - mw.image._dragparent.offsetLeft - mw.image._dragcurrent.startedX - mw.image._dragcursorAt.x;
            var y = e.pageY - mw.image._dragparent.offsetTop - mw.image._dragcurrent.startedY - mw.image._dragcursorAt.y;
            mw.image._dragcurrent.style.top = y + 'px';
            mw.image._dragcurrent.style.left = x + 'px';
        }
    },
    preloadForAll: function (array, eachcall, callback) {
        var size = array.length, i = 0, count = 0;
        for (; i < size; i++) {
            mw.image.preload(array[i], function (imgWidth, imgHeight) {
                count++;
                eachcall.call(this, imgWidth, imgHeight)
                if (count === size) {
                    if (!!callback) callback.call()
                }
            })
        }
    },
    preloadAll: function (array, callback) {
        var size = array.length, i = 0, count = 0;
        for (; i < size; i++) {
            mw.image.preload(array[i], function () {
                count++;
                if (count === size) {
                    callback.call()
                }
            })
        }
    },
    preload: function (url, callback) {
        var img;
        if (typeof window.chrome === 'object') {
            var img = new Image();
        }
        else {
            img = mwd.createElement('img')
        }
        img.className = 'semi_hidden';
        img.src = url;
        img.onload = function () {
            setTimeout(function () {
                if (typeof callback === 'function') {
                    callback.call(img, img.naturalWidth, img.naturalHeight);
                }
                mw.$(img).remove();
            }, 33);
        }
        img.onerror = function () {
            setTimeout(function () {
                if (typeof callback === 'function') {
                    callback.call(img, 0, 0, 'error');
                }
            }, 33);
        }
        mwd.body.appendChild(img);
    },
    description: {
        add: function (text) {
            var img = document.querySelector("img.element-current");
            img.title = text;
        },
        get: function () {
            return document.querySelector("img.element-current").title;
        },
        init: function (id) {
            var area = mw.$(id);
            area.hover(function () {
                area.addClass("desc_area_hover");
            }, function () {
                area.removeClass("desc_area_hover");
            });
            var curr = mw.image.description.get();
            if (!area.hasClass("inited")) {
                area.addClass("inited");
                area.bind("keyup change paste", function () {
                    var val = mw.$(this).val();
                    mw.image.description.add(val);
                });
            }
            area.val(curr);
            area.show();
        }
    },
    settings: function () {
        //var modal = mw.tools.modal.frame({
        var modal = mw.dialogIframe({
            url: 'imageeditor',
            template: "mw_modal_basic",
            overlay: true,
            width: '600',
            height: "auto",
            autoHeight: true,
            name: 'mw-image-settings-modal'
        });
    }
};


mw.required.push('userfiles/modules/microweber/api/tools/jquery.tools.js');

$.fn.dataset = function (dataset, val) {
    var el = this[0];
    if (el === undefined) return false;
    var _dataset = !dataset.contains('-') ? dataset : mw.tools.toCamelCase(dataset);
    if (!val) {
        var dataset = !!el.dataset ? el.dataset[_dataset] : mw.$(el).attr("data-" + dataset);
        return dataset !== undefined ? dataset : "";
    }
    else {
        !!el.dataset ? el.dataset[_dataset] = val : mw.$(el).attr("data-" + dataset, val);
        return mw.$(el);
    }
};

$.fn.reload_module = function (c) {
    return this.each(function () {
        //   if($(this).hasClass("module")){
        (function (el) {
            mw.reload_module(el, function () {
                if (typeof(c) != 'undefined') {
                    c.call(el, el)
                }
            })
        })(this)
        //   }
    })
};


    $.fn.getDropdownValue = function () {
        return this.dataset("value") || mw.$('.active', this).attr('value');
    };
    $.fn.setDropdownValue = function (val, triggerChange, isCustom, customValueToDisplay) {

        var isCustom = isCustom || false;
        var triggerChange = triggerChange || false;
        var isValidOption = false;
        var customValueToDisplay = customValueToDisplay || false;
        var el = this;
        if (isCustom) {
            var isValidOption = true;
            el.dataset("value", val);
            triggerChange ? el.trigger("change") : '';
            var valel = mw.$(".mw-dropdown-val", el);
            var method = valel[0].type ? 'val' : 'html';
            if (!!customValueToDisplay) {
                valel[method](customValueToDisplay);
            }
            else {
                valel[method](val);
            }
        }
        else {
            mw.$("[value]", el).each(function () {
                if (this.getAttribute('value') == val) {
                    el.dataset("value", val);
                    var isValidOption = true;
                    var html = !!this.getElementsByTagName('a')[0] ? this.getElementsByTagName('a')[0].innerText : this.innerText;
                    mw.$(".mw-dropdown-val", el[0]).html(html);
                    if (triggerChange === true) {
                        el.trigger("change")
                    }
                    return false;
                }
            });
        }
        this.dataset("value", val);
        //    }, 100);
    };
    $.fn.commuter = function (a, b) {
        if (a === undefined) {
            return false
        }
        var b = b || function () {
            };
        return this.each(function () {
            if ((this.type === 'checkbox' || this.type === 'radio') && !this.cmactivated) {
                this.cmactivated = true;
                mw.$(this).bind("change", function () {
                    this.checked === true ? a.call(this) : b.call(this);
                });
            }
        });
    };



$.fn.visible = function () {
    return this.css("visibility", "visible").css("opacity", "1");
};
$.fn.visibilityDefault = function () {
    return this.css("visibility", "").css("opacity", "");
};
$.fn.invisible = function () {
    return this.css("visibility", "hidden").css("opacity", "0");
};

$.fn.mwDialog = function(conf){
    var el = this[0];
    var options = mw.tools.elementOptions(el);
    var id = mw.id('mwDialog-');
    var idEl = mw.id('mwDialogTemp-');
    var defaults = {
        height: 'auto',
        autoHeight: true,
        width: 'auto'
    };
    var settings = $.extend({}, defaults, options, conf, {closeButtonAction: 'remove'});
    if(conf === 'close' || conf === 'hide' || conf === 'remove'){
        if(el._dialog){
            el._dialog.remove()
        }
        return;
    }
    $(el).before('<mw-dialog-temp id="'+idEl+'"></mw-dialog-temp>');
    var dialog = mw.dialog(settings);
    el._dialog = dialog;
    dialog.dialogContainer.appendChild(el);
    $(el).show();
    if(settings.width === 'auto'){
        dialog.width($(el).width);
        dialog.center($(el).width);
    }
    $(dialog).on('BeforeRemove', function(){
        mw.$('#' + idEl).replaceWith(el);
        $(el).hide();
        el._dialog = null;
    });
    return this;
};

mw.ajax = function (options) {
    var xhr = $.ajax(options);
    return xhr;
};

mw.ajax = $.ajax;

jQuery.each(["xhrGet", "xhrPost"], function (i, method) {
    mw[method] = function (url, data, callback, type) {
        if (jQuery.isFunction(data)) {
            type = type || callback;
            callback = data;
            data = undefined;
        }
        return mw.ajax(jQuery.extend({
            url: url,
            type: i == 0 ? 'GET' : 'POST',
            dataType: type,
            data: data,
            success: callback
        }, jQuery.isPlainObject(url) && url));
    };
});


mw.required.push('userfiles/modules/microweber/api/tools/loading.js');

mw.tools.progressDefaults = {
    skin: 'mw-ui-progress',
    action: mw.msg.loading + '...',
    progress: 0
};

mw.tools.progress = function (obj) {
    if (typeof obj.element === 'string') {
        obj.element = mw.$(obj.element)[0];
    }
    if (obj.element === null || !obj.element) return false;
    if (obj.element.querySelector('.mw-ui-progress-bar')) {
        obj.element.progressOptions.show()
        return obj.element.progressOptions;
    }
    obj = $.extend({}, mw.tools.progressDefaults, obj);
    if(obj.progress > 100 ) {
        obj.progress = 100;
    }
    if(obj.progress < 0 ) {
        obj.progress = 0;
    }
    var progress = mwd.createElement('div');
    progress.className = obj.skin;
    progress.innerHTML = '<div class="mw-ui-progress-bar" style="width: ' + obj.progress + '%;"></div><div class="mw-ui-progress-info">' + obj.action + '</div><span class="mw-ui-progress-percent">'+obj.progress+'%</span>';
    progress.progressInfo = obj;
    var options = {
        progress: progress,
        show: function () {
            this.progress.style.display = 'block';
        },
        hide: function () {
            this.progress.style.display = 'none';
        },
        remove: function () {
            progress.progressInfo.element.progressOptions = undefined;
            mw.$(this.progress).remove();
        },
        set: function (v, action) {
            if (v > 100) {
                v = 100;
            }
            if (v < 0) {
                v = 0;
            }
            action = action || this.progress.progressInfo.action;
            mw.$('.mw-ui-progress-bar', this.progress).css('width', v + '%');
            mw.$('.mw-ui-progress-percent', this.progress).html(v + '%');
            progress.progressInfo.element.progressOptions.show()
        }
    };
    progress.progressOptions = obj.element.progressOptions = options;
    obj.element.appendChild(progress);
    return options;
}
mw.tools.loading = function (element, progress, speed) {
    /*

     progress:number 0 - 100,
     speed:string, -> 'slow', 'normal, 'fast'

     mw.tools.loading(true) -> slowly animates to 95% on body
     mw.tools.loading(false) -> fast animates to 100% on body

     */
    function set(el, progress, speed) {
        speed = speed || 'normal';
        mw.tools.removeClass(el, 'mw-progress-slow');
        mw.tools.removeClass(el, 'mw-progress-normal');
        mw.tools.removeClass(el, 'mw-progress-fast');
        mw.tools.addClass(el, 'mw-progress-' + speed);
        element.__loadingTime = setTimeout(function () {
            el.querySelector('.mw-progress-index').style.width = progress + '%';
        }, 10)

    }

    if (typeof element === 'boolean') {
        progress = !!element;
        element = mwd.body;
    }
    if (typeof element === 'number') {
        progress = element;
        element = mwd.body;
    }
    if (element === document || element === mwd.documentElement) {
        element = mwd.body;
    }
    element = mw.$(element)[0]
    if (element === null || !element) return false;
    if (element.__loadingTime) {
        clearTimeout(element.__loadingTime)
    }
    mw.require('css_parser.js')

    var isLoading = mw.tools.hasClass(element, 'mw-loading');
    var el = element.querySelector('.mw-progress');
    if (!el) {
        el = document.createElement('div');
        el.className = 'mw-progress';
        el.innerHTML = '<div class="mw-progress-index"></div>';
        if (element === mwd.body) el.style.position = 'fixed';
        element.appendChild(el);
    }
    var pos = mw.CSSParser(element).get.position();
    if (pos == 'static') {
        element.style.position = 'relative';
    }
    if (progress) {
        if (progress === true) {
            set(el, 95, speed || 'slow')
        }
        else if (typeof progress === 'number') {
            progress = progress <= 100 ? progress : 100;
            progress = progress >= 0 ? progress : 0;
            set(el, progress, speed)
        }
    }
    else {
        if (el) {
            set(el, 100, speed || 'fast')
        }
        element.__loadingTime = setTimeout(function () {
            mw.$(element).removeClass('mw-loading-defaults mw-loading');
            mw.$(el).remove()
        }, 700)
    }
};


mw.required.push('userfiles/modules/microweber/api/tools/loops.js');

(function(){
    var loopTools = {
       loop: {/* Global index for MW loops */},
        stopLoop: function (loop) {
            mw.tools.loop[loop] = false;
        },
        foreachParents: function (el, callback) {
            if (!el) return false;
            var index = mw.random();
            mw.tools.loop[index] = true;
            var _curr = el.parentNode;
            var count = -1;
            if (_curr !== null && _curr !== undefined) {
                var _tag = _curr.tagName;
                while (_tag !== 'BODY') {
                    count++;
                    var caller = callback.call(_curr, index, count);
                    _curr = _curr.parentNode;
                    if (caller === false || _curr === null || _curr === undefined || !mw.tools.loop[index]) {
                        delete mw.tools.loop[index];
                        break;
                    }
                    _tag = _curr.tagName;
                }
            }
        },
        foreachChildren: function (el, callback) {
            if (!el) return false;
            var index = mw.random();
            mw.tools.loop[index] = true;
            var _curr = el.firstChild;
            var count = -1;
            if (_curr !== null && _curr !== undefined) {
                while (_curr.nextSibling !== null) {
                    if (_curr.nodeType === 1) {
                        count++;
                        var caller = callback.call(_curr, index, count);
                        _curr = _curr.nextSibling;
                        if (caller === false || _curr === null || _curr === undefined || !mw.tools.loop[index]) {
                            delete mw.tools.loop[index];
                            break
                        }
                        var _tag = _curr.tagName;
                    }
                    else {
                        _curr = _curr.nextSibling;
                    }
                }
            }
        }
    };
    Object.assign(mw.tools, loopTools);
})();


mw.required.push('userfiles/modules/microweber/api/tools/modal.js');

/*

Deprecated:

Use mw.dialog() instead


*/

(function(){
    var modal = {
        settings: {
            width: 600,
            height: 500,
            draggable: true
        },
        source: function (id, template, icon) {
            template = template || 'mw_modal_primary';
            if (template === 'basic') {
                template = 'mw_modal_basic';
            }
            if (template === 'default') {
                template = 'mw_modal_primary';
            }
            if (template === 'simple') {
                template = 'mw_modal_simple';
            }
            id = id || "modal_" + mw.random();
            var html = ''
                + '<div class=" mw_modal mw_modal_maximized ' + template + '" id="' + id + '">'
                + '<div class="mw_modal_toolbar">'
                + (icon ? '<span class="mw_modal_icon">' + icon + '</span>' : '')
                + '<span class="mw_modal_title"></span>'
                + '<span class="mw-modal-close"  title="' + mw.msg.close + '"></span>'
                + '</div>'
                + '<div class="mw_modal_container">'
                + '</div>'
                + '<div class="iframe_fix"></div>'
                + '</div>';
            return {html: html, id: id}
        },
        _init: function (o) {
            var html = o.html,
                width = o.width,
                height = o.height,
                callback = o.callback,
                title = o.title,
                name = o.name,
                template = o.template,
                overlay = o.overlay,
                draggable = o.draggable,
                onremove = o.onremove,
                icon = o.icon,
                onopen = o.onopen;
            if (typeof name === 'string' && mw.$("#" + name).length > 0) {
                return false;
            }

            var modal = mw.tools.modal.source(name, template, icon);
            mw.$(mwd.body).append(modal.html);
            var _modal = mwd.getElementById(modal.id);
            if (!_modal.remove) {
                _modal.remove = function () {
                    mw.tools.modal.remove(modal.id);
                }
            }
            var modal_object = mw.$(_modal);
            mw.$('.mw_modal_container', _modal).append(html);
            mw.tools.modal.setDimmensions(_modal, width, height, false);
            mw.$(".mw-tooltip").hide();
            modal_object.show();
            mw.tools.modal.center(_modal);
            draggable = typeof draggable !== 'undefined' ? draggable : true;
            if (typeof $.fn.draggable === 'function' && draggable) {
                modal_object.addClass("mw-modal-draggable");
                modal_object.draggable({
                    handle: '.mw_modal_toolbar',
                    containment: 'window',
                    iframeFix: false,
                    distance: 10,
                    drag: function (e, ui) {
                        if (ui.position.top < 0) ui.position.top = 0;
                    },
                    start: function () {
                        mw.$(this).find(".iframe_fix").show();
                        if ($(".mw_modal").length > 1) {
                            var mw_m_max = parseFloat($(this).css("zIndex"));
                            mw.$(".mw_modal").not(this).each(function () {
                                var z = parseFloat($(this).css("zIndex"));
                                mw_m_max = z >= mw_m_max ? z + 1 : mw_m_max;
                            });
                            mw.$(this).css("zIndex", mw_m_max);
                        }
                    },
                    stop: function (e, ui) {
                        mw.$(this).find(".iframe_fix").hide();
                        var w = mw.$(window).width();
                        if (this.style.width.toString().contains("%")) {
                        }
                        if (this.style.height.toString().contains("%")) {
                        }
                    }
                });
            }
            else {
                mw.$(".mw_modal_toolbar", mwd.getElementById(modal.id)).css("cursor", "default");
            }
            var modal_return = {main: modal_object, container: modal_object.find(".mw_modal_container")[0]}
            typeof callback === 'function' ? callback.call(modal_return) : '';
            typeof title === 'string' ? mw.$(modal_object).find(".mw_modal_title").html(title) : '';
            typeof name === 'string' ? mw.$(modal_object).attr("name", name) : '';
            modal_return.onremove = typeof onremove === 'function' ? onremove : false;
            if (overlay == true) {
                var ol = mw.tools.modal.overlay(modal_object);
                if (o.overlayRemovesModal) {
                    ol.onclick = function () {
                        modal_return.remove();
                    }
                }
                modal_object[0].overlay = ol;
                modal_return.overlay = ol;
            }
            mwd.getElementById(modal.id).modal = modal_return;
            modal_return.hide = function () {
                modal_object.hide();
                mw.$(modal_return.overlay).hide();
                mw.$(modal_return).trigger('modal.hide');
                return this;
            }
            modal_return.show = function () {
                modal_object.show();
                mw.$(modal_return.overlay).show();
                mw.$(modal_return).trigger('modal.show');
                return modal_return;
            }
            modal_return.remove = function () {
                mw.$(modal_return).trigger('modal.remove');
                if (typeof modal_return.onremove === 'function') {
                    modal_return.onremove.call(window, modal_return);
                }
                modal_object.remove();
                mw.$(modal_return.overlay).remove();
            }
            mw.$('.mw-modal-close', modal_object[0]).bind('click', function () {
                modal_return.remove();
            });
            modal_return.center = function (a) {
                mw.tools.modal.center(modal_object, a);
                return modal_return;
            }
            modal_return.resize = function (w, h) {
                mw.tools.modal.setDimmensions(modal_object[0], w, h);
                mw.$(modal_return).trigger('modal.resize');
                return modal_return;
            }
            if (onopen) {
                onopen.call(window, modal_return)
            }
            var max = 0;
            mw.$(".mw_modal, .mw-dialog").each(function () {
                var z = parseInt($(this).css('zIndex'), 10);
                if (!isNaN(z)) {
                    max = z > max ? z : max;
                }
            }).css('zIndex', max);
            return modal_return;
        },

        init: function (o) {
            var o = $.extend({}, mw.tools.modal.settings, o);
            if (typeof o.content !== 'undefined' && typeof o.html === 'undefined') {
                o.html = o.content;
            }
            if (typeof o.id !== 'undefined' && typeof o.name === 'undefined') {
                o.name = o.id;
            }
            return new mw.tools.modal._init(o);
        },
        get: function (selector) {
            return mw.dialog.get(selector);
        },
        minimize: function (id) {
            var doc = mwd;
            var modal = mw.$("#" + id);
            var window_h = mw.$(doc.defaultView).height();
            var window_w = mw.$(doc.defaultView).width();
            var modal_width = modal.width();
            var old_position = {
                width: modal.css("width"),
                height: modal.css("height"),
                left: modal.css("left"),
                top: modal.css("top")
            }
            modal.data("old_position", old_position);
            var margin = 24 * ($(".is_minimized").length);
            modal.addClass("is_minimized");
            modal.animate({
                top: window_h - 24 - margin,
                left: window_w - modal_width,
                height: 24
            });
            if (typeof $.fn.draggable === 'function') {
                modal.draggable("option", "disabled", true);
            }
        },
        maximize: function (id) {
            var modal = mw.$("#" + id);
            modal.removeClass("is_minimized");
            modal.animate(modal.data("old_position"));
            if (typeof $.fn.draggable === 'function') {
                modal.draggable("option", "disabled", false);
            }
        },
        minimax: function (id) {
            if ($("#" + id).hasClass("is_minimized")) {
                mw.tools.modal.maximize(id);
            }
            else {
                mw.tools.modal.minimize(id);
            }
        },
        settings_window: function (callback) {
            var modal = mw.modal("");
            return modal;
        },
        frame: function (obj) {
            obj = $.extend({}, mw.tools.modal.settings, obj);

            var frame = "<iframe name='frame-" + obj.name + "' id='frame-" + obj.name + "' style='overflow-x:hidden;overflow-y:auto;' class='mw-modal-frame' src='" + mw.external_tool(obj.url) + "'  frameBorder='0' allowfullscreen></iframe>";
            obj.html = frame;
            var modal = mw.tools.modal.init(obj);
            mw.$(modal.main).addClass("mw_modal_type_iframe");
            mw.$(modal.container).css("overflow", "hidden");
            if (typeof modal.main == 'undefined') {
                return;
            }
            modal.main[0].querySelector('iframe').contentWindow.thismodal = modal;
            modal.main[0].querySelector('iframe').onload = function () {
                typeof obj.callback === 'function' ? obj.callback.call(modal, this) : '';
                typeof obj.onload === 'function' ? obj.onload.call(modal, this) : '';
            };
            modal.iframe = modal.container.querySelector('iframe');
            return modal;
        },
        remove: function (id) {
            if (typeof id === 'object') {
                if (id.constructor === {}.constructor) {
                    var id = mw.$(id.main)[0].id;
                }
                else {
                    var id = mw.$(id)[0].id;
                }
            }
            if (!id.contains("#")) {
                var el = mwd.getElementById(id);
            }
            else {
                var el = mw.$(id)[0];
            }
            if (el === null) {
                return false;
            }
            if (!!el.overlay) {
                mw.$(el.overlay).remove();
            }
            mw.$(el).remove();
        },
        modalCompletelyVisibleFromParent: function (modalMain, parentFixedElement) {
            if (!modalMain || modalMain === null || !modalMain.querySelector) return true;
            var frame = mww.frameElement;
            if (frame === null) return true; // means it's the same window
            if (!frame) return true; // in case property does not exists
            if (frame.offsetHeight < mw.$(parent).height()) return true;
            var _top = modalMain.offsetTop;
            var wh = parent.innerHeight;
            var dt = mw.$(parent.document).scrollTop();
            var ft = mw.$(frame).offset().top;
            modalMain.style.maxHeight = wh - 100 + 'px';
            var zero = dt - ft;
            var mtop = zero + wh / 2 - modalMain.offsetHeight / 2;
            if (mtop < zero) {
                var mtop = zero;
            }
            if (mtop < 0) {
                var mtop = 0;
            }
            if (!!parentFixedElement) {
                mtop += parentFixedElement.offsetHeight;
            }
            modalMain.style.top = mtop + 'px';
        },

        setDimmensions: function (modal, w, h, trigger) {
            if (typeof modal === 'string') {
                var modal = mw.$(modal)[0];
            }
            if (!modal || modal === null) return false;
            var trigger = trigger || false;
            var root = modal.constructor === {}.constructor ? mw.$(modal.main)[0] : modal;
            var win = mw.$(window),
                maxW = win.width() - 50,
                maxH = win.height() - 50;
            if (!!w) {
                if (typeof w === 'number') {
                    var w = w < maxW ? w : maxW;
                }
                root.style.width = mw.tools.cssNumber(w);
            }
            if (!!h) {
                var toolbar_height = mw.$('.mw_modal_toolbar', modal).outerHeight();
                if (typeof h == 'string') {
                    if (h.indexOf('px') !== -1) {
                        h = parseInt(h, 10);
                        h = h + toolbar_height
                    }
                }
                else {
                    h = h + toolbar_height
                }
                if (typeof h === 'number') {
                    var h = h < maxH ? h : maxH;
                }
                root.style.height = mw.tools.cssNumber(h);
            }
            var toolbarHeight = mw.$('.mw_modal_toolbar', root).outerHeight();
            mw.tools.modal.containerHeight(mw.$('.mw_modal_container', root)[0])
            if (trigger) {
                mw.$(root).trigger("resize");
            }
        },
        containerHeight: function (container) {
            mw.require('css_parser.js')

            if (!container || container === null) return false;
            if (container.parentNode.parentNode === null /* if modal is removed from DOM  */) {
                if (!!container.modalContainerInt) {
                    clearInterval(container.modalContainerInt);
                }
                return false;
            }
            var root = container.parentNode;
            var toolbarHeight = mw.$('.mw_modal_toolbar', root).outerHeight();
            var cp = mw.CSSParser(container);
            var final = ($(root).outerHeight() - toolbarHeight - cp.get.margin(true).top) + 'px'
            if (container.style.height != final) {
                container.style.height = final;
            }
            if (!container.modalContainerInt) {
                container.modalContainerInt = setInterval(function () {
                    mw.tools.modal.containerHeight(container);
                }, 333);
            }
        },
        resize: function (modal, w, h, center) {
            mw.tools.modal.setDimmensions(modal, w, h);
            if (center === true) {
                mw.tools.modal.center(modal)
            }
            ;
        },
        center: function (modal, only) {
            var only = only || 'all';
            var modal = mw.$(modal);
            var h = modal.height();
            var w = modal.width();
            var top = ($(mww).height() / 2) - (h / 2);
            var top = top > 0 ? top : 0;
            var left = ($(mww).width() / 2) - (w / 2);
            var left = left > 0 ? left : 0;
            if (only == 'all') {
                modal.css({top: top, left: left});
            }
            else if (only == 'vertical') {
                modal.css({top: top});
            }
            else if (only == 'horizontal') {
                modal.css({left: left});
            }
            if (self !== parent) {
                mw.tools.modal.modalCompletelyVisibleFromParent(modal[0]);
            }
        },
        overlay: function (modal) {
            var overlay = mwd.createElement('div');
            overlay.className = 'mw_overlay';
            var id = !!modal ? mw.$(modal).attr("id") : 'none';
            mw.$(overlay).attr("rel", id);
            mwd.body.appendChild(overlay);
            return overlay;
        }

    };
    mw.tools.modal = modal;
})();


/***********************************************
 mw.modal({
        content:   Required: String or Node Element or jQuery Object
        width:     Optional: ex: 400 or "85%", default 600
        height:    Optional: ex: 400 or "85%", default 500
        draggable: Optional: Boolean, default true (Requires jQuery UI )
        overlay:   Optional: Boolean, default false
        title:     Optional: String for the title of the modal
        template:  Optional: String
        id:        Optional: String: set this to protect from multiple instances
      });
 The function returns Object
 ************************************************/
mw.modal = function (o) {
    // return new mw.Dialog(o);
    var modal = mw.tools.modal.init(o);
    if (!!modal && (typeof(modal.main) != "undefined")) {
        if (modal.main.constructor === $.fn.constructor) {
            modal.main = modal.main[0];
        }
    }
    else {
        var modal = undefined;
    }
    return modal;
};
mw.modalFrame = function (o) {
    var modal = mw.tools.modal.frame(o);
    if (!!modal && (typeof(modal.main) != "undefined")) {
        if (modal.main.constructor === $.fn.constructor) {
            modal.main = modal.main[0];
        }
    }
    else {
        var modal = undefined;
    }
    return modal;
}

mw.required.push('userfiles/modules/microweber/api/tools/modules-dialogs.js');

(function(){
    var systemDialogs = {
          confirm_reset_module_by_id: function (module_id) {
        if (confirm("Are you sure you want to reset this module?")) {
            var is_a_preset = mw.$('#'+module_id).attr('data-module-original-id');
            var is_a_preset_attrs = mw.$('#'+module_id).attr('data-module-original-attrs');
            if(is_a_preset){
                var orig_attrs_decoded = JSON.parse(window.atob(is_a_preset_attrs));
                if (orig_attrs_decoded) {
                    mw.$('#'+module_id).removeAttr('data-module-original-id');
                    mw.$('#'+module_id).removeAttr('data-module-original-attrs');
                    mw.$('#'+module_id).attr(orig_attrs_decoded).reload_module();

                    if(  mw.top().win.module_settings_modal_reference_preset_editor_thismodal ){
                        mw.top().win.module_settings_modal_reference_preset_editor_thismodal.remove();
                    }
                 }
                 return;
            }

            var data = {};
            data.modules_ids = [module_id];

            var childs_arr = [];

            mw.$('#'+module_id).andSelf().find('.edit').each(function (i) {
                var some_child = {};

                mw.tools.removeClass(this, 'changed')
                some_child.rel = mw.$(this).attr('rel');
                some_child.field = mw.$(this).attr('field');

                childs_arr.push(some_child);

            });


            window.mw.on.DOMChangePause = true;

            if (childs_arr.length) {
                $.ajax({
                    type: "POST",
                   // dataType: "json",
                    //processData: false,
                    url: mw.settings.api_url + "content/reset_edit",
                    data: {reset:childs_arr}
                  //  success: success,
                  //  dataType: dataType
                });
           }


           //data-module-original-attrs

            $.ajax({
                type: "POST",
                // dataType: "json",
                //processData: false,
                url: mw.settings.api_url + "content/reset_modules_settings",
                data: data,
                success: function(){

                    setTimeout(function () {


                        mw.$('#'+module_id).removeAttr('data-module-original-id');
                        mw.reload_module('#'+module_id);
                        window.mw.on.DOMChangePause = false;

                    }, 1000);

                 },
            });
        }
    },
    open_reset_content_editor: function (root_element_id) {

        var src = mw.settings.site_url + 'api/module?id=mw_global_reset_content_editor&live_edit=true&module_settings=true&type=editor/reset_content&autosize=true';

        if(typeof(root_element_id) != 'undefined') {
            var src = src + '&root_element_id='+root_element_id;
        }

        // mw.tools.modal.frame({
        var modal = mw.dialogIframe({
            url: src,
            // width: 500,
            // height: mw.$(window).height() - (2.5 * mw.tools.TemplateSettingsModalDefaults.top),
            name: 'mw-reset-content-editor-front',
            title: 'Reset content',
            template: 'default',
            center: false,
            resize: true,
            autosize: true,
            autoHeight: true,
            draggable: true
        });
    },
    open_global_module_settings_modal: function (module_type, module_id, modalOptions, additional_params) {


        var params = {};
        params.id = module_id;
        params.live_edit = true;
        params.module_settings = true;
        params.type = module_type;
        params.autosize = false;

        var params_url = $.extend({}, params, additional_params);

        var src = mw.settings.site_url + "api/module?" + json2url(params_url);


        modalOptions = modalOptions || {};

        var defaultOpts = {
            url: src,
            // width: 500,
            height: 'auto',
            autoHeight: true,
            name: 'mw-module-settings-editor-front',
            title: 'Settings',
            template: 'default',
            center: false,
            resize: true,
            draggable: true
        };

        var settings = $.extend({}, defaultOpts, modalOptions);

        // return mw.tools.modal.frame(settings);
        return mw.dialogIframe(settings);
    },
    open_module_modal: function (module_type, params, modalOptions) {

        var id = mw.id('module-modal-');
        var id_content = id + '-content';
        modalOptions = modalOptions || {};

        var settings = $.extend({}, {
            content: '<div class="module-modal-content" id="' + id_content + '"></div>',
            id: id
        }, modalOptions, {skin: 'default'});

        var xhr = false;
        var openiframe = false;
        if (typeof (settings.iframe) != 'undefined' && settings.iframe) {
            openiframe = true;
        }
        if (openiframe) {

            var additional_params = {};
            additional_params.type = module_type;
            var params_url = $.extend({}, params, additional_params);
            var src = mw.settings.site_url + "api/module?" + json2url(params_url);


            var settings = {
                url: src,
                name: 'mw-module-settings-editor-front',
                title: 'Settings',
                center: false,
                resize: true,
                draggable: true,
                height:'auto',
                autoHeight: true
            };
            return mw.top().dialogIframe(settings);
           // return mw.top().tools.modal.frame(settings);

        } else {
            delete settings.skin;
            delete settings.template;
            settings.height = 'auto';
            settings.autoHeight = true;
            settings.encapsulate = false;
            var modal = mw.dialog(settings);
            xhr = mw.load_module(module_type, '#' + id_content, function(){
                setTimeout(function(){
                    modal.center();
                },333)
            }, params);
        }


        return {
            xhr: xhr,
            modal: modal,
        }
    }
    };

    for (var i in systemDialogs) {
        mw.tools[i] = systemDialogs[i];
    }
})()


mw.required.push('userfiles/modules/microweber/api/tools/native-notification.js');

mw.tools.notification = function (body, tag, icon) {
    if (!body) return;
    var n = window.Notification || window.webkitNotification || window.mozNotification;
    if (typeof n == 'undefined') {
        return false;
    }
    if (n.permission == 'granted') {
        new n("MW Update", {
            tag: tag || "Microweber",
            body: body,
            icon: icon || mw.settings.includes_url + "img/logomark.png"
        });
    }
    else if (n.permission == 'default') {
        n.requestPermission(function (result) {

            if (result == 'granted') {
                return mw.tools.notification(body, tag, icon)
            }
            else if (result == 'denied') {
                mw.notification.error('Notifications are blocked')
            }
            else if (result == 'default') {
                mw.notification.warn('Notifications are canceled')

            }
        });
    }
}


mw.required.push('userfiles/modules/microweber/api/tools/notification.js');

mw.notification = {
    msg: function (data, timeout, alert) {
        timeout = timeout || 1000;
        alert = alert || false;
        if (data) {
            if (data.success) {
                if (alert) {
                    mw.notification.success(data.success, timeout);
                }
                else {
                    Alert(data.success);
                }
            }
            if (data.error) {
                mw.notification.error(data.error, timeout);
            }
            if (data.warning) {
                mw.notification.warning(data.warning, timeout);
            }
        }
    },
    build: function (type, text, name) {
        var div = mwd.createElement('div');
        div.id = name;
        div.className = 'mw-notification mw-' + type;
        div.innerHTML = '<div>' + text + '</div>';
        return div;
    },
    append: function (type, text, timeout, name) {
        if(typeof type === 'object') {
            text = type.text;
            timeout = type.timeout;
            name = type.name;
            type = type.type;
        }
        name = name || mw.id();
        name = 'mw-notification-id-' + name;
        if(document.getElementById(name)) {
            return;
        }
        timeout = timeout || 1000;
        var div = mw.notification.build(type, text, name);
        if (typeof mw.notification._holder === 'undefined') {
            mw.notification._holder = mwd.createElement('div');
            mw.notification._holder.id = 'mw-notifications-holder';
            mwd.body.appendChild(mw.notification._holder);
        }
        mw.notification._holder.appendChild(div);
        var w = mw.$(div).outerWidth();
        mw.$(div).css("marginLeft", -(w / 2));
        setTimeout(function () {
            div.style.opacity = 0;
            setTimeout(function () {
                mw.$(div).remove();
            }, 1000);
        }, timeout);
    },
    success: function (text, timeout, name) {
        if ( typeof text === 'object' ) {
            timeout = text.timeout;
            name = text.name;
            text = text.text;
        }
        timeout = timeout || 1000;
        mw.notification.append('success', text, timeout, name);
    },
    error: function (text, timeout, name) {
        if ( typeof text === 'object' ) {
            timeout = text.timeout;
            name = text.name;
            text = text.text;
        }
        timeout = timeout || 1000;
        mw.notification.append('error', text, timeout, name);
    },
    warning: function (text, timeout, name) {
        if ( typeof text === 'object' ) {
            timeout = text.timeout;
            name = text.name;
            text = text.text;
        }
        timeout = timeout || 1000;
        mw.notification.append('warning', text, timeout, name);
    }
};


mw.required.push('userfiles/modules/microweber/api/tools/responsive.js');

mw.responsive = {
    table: function (selector, options) {
        options = options || {};
        mw.$(selector).each(function () {
            var cls = 'responsive-table-' + mw.random();
            mw.tools.addClass(this, cls);
            var el = mw.$(this);
            el.wrap('<div class="mw-responsive-table-wrapper"></div>');
            if (options.minWidth) {
                el.css('minWidth', options.minWidth)
            }
            if (!el.hasClass('mw-mobile-table')) {
                el.addClass('mw-mobile-table');
            }
        });
    }
};


mw.required.push('userfiles/modules/microweber/api/tools/select.js');

/*
    options.data = [
        {
            title: string,
            value: any,
            icon?: string,
            selected?: boolean
        }
    ]

 */


mw.Select = function(options) {
    var defaults = {
        data: [],
        skin: 'default',
        multiple: false,
        autocomplete: false,
        mobileAutocomplete: false,
        showSelected: false,
        document: document,
        size: 'normal',
        color: 'default',
        dropMode: 'over', // 'over' | 'push'
        placeholder: mw.lang('Select'),
        tags: false, // only if multiple is set to true,
        ajaxMode: {
            paginationParam: 'page',
            searchParam: 'keyword',
            endpoint: null,
            method: 'get'
        }
    };
    options  = options || {};
    this.settings = $.extend({}, defaults, options);



    if(this.settings.ajaxMode && !this.settings.ajaxMode.endpoint){
        this.settings.ajaxMode = false;
    }

    this.$element = $(this.settings.element).eq(0);
    this.element = this.$element[0];
    if(!this.element) {
        return;
    }

    this._rootInputMode = this.element.nodeName === 'INPUT';

    if(this.element._mwSelect) {
        return this.element._mwSelect;
    }

    var scope = this;
    this.document = this.settings.document;

    this._value = null;


    this.getLabel = function(item) {
        return item.title || item.name || item.label || item.value;
    };

    this._loading = false;

    this._page = 1;

    this.nextPage = function () {
        this._page++;
    };

    this.page = function (state) {
        if (typeof state === 'undefined') {
            return this._page;
        }
        this._page = state;
    };

    this.loading = function (state) {
        if (typeof state === 'undefined') {
            return this._state;
        }
        this._state = state;
        mw.tools.classNamespaceDelete(this.root, 'mw-select-loading-');
        mw.tools.addClass(this.root, 'mw-select-loading-' + state);
    };

    this.xhr = null;

    this.ajaxFilter = function (val, callback) {
        if (this.xhr) {
            this.xhr.abort();
        }
        val = (val || '').trim().toLowerCase();
        var params = { };
        params[this.settings.ajaxMode.searchParam] = val;
        params = (this.settings.ajaxMode.endpoint.indexOf('?') === -1 ? '?' : '&' ) + $.param(params);
        this.xhr = $[this.settings.ajaxMode.method](this.settings.ajaxMode.endpoint + params, function (data) {
            callback.call(this, data);
            scope.xhr = null;
        });
    };

    this.filter = function (val) {
        val = (val || '').trim().toLowerCase();
        if (this.settings.ajaxMode) {
            this.loading(true);
            this.ajaxFilter(val, function (data) {
                scope.setData(data.data);
                if(data.data && data.data.length){
                    scope.open()
                } else {
                    scope.close()
                }
                scope.loading(false);
            });
        } else {
            var all = this.root.querySelectorAll('.mw-select-option'), i = 0;
            if (!val) {
                for( ; i< all.length; i++) {
                    all[i].style.display = '';
                }
            } else {
                for( ; i< all.length; i++) {
                    all[i].style.display = this.getLabel(all[i].$value).toLowerCase().indexOf(val) !== -1 ? '' : 'none';
                }
            }
        }
    };

    this.setPlaceholder = function (plval) {
        /*plval = plval || this.settings.placeholder;
        if(scope.settings.autocomplete){
            $('.mw-ui-invisible-field', this.root).attr('placeholder', plval);
        } else {
            $('.mw-ui-btn-content', this.root).html(plval);
        }*/
        return this.displayValue(plval)
    };
    this.displayValue = function(plval){
        if(!plval && !this.settings.multiple && this.value()) {
            plval = scope.getLabel(this.value());
        }
        plval = plval || this.settings.placeholder;
        if(!scope._displayValue) {
            scope._displayValue = scope.document.createElement('span');
            scope._displayValue.className = 'mw-select-display-value mw-ui-size-' + this.settings.size;
            $('.mw-select-value', this.root).append(scope._displayValue)
        }
        if(this._rootInputMode){
            scope._displayValue.innerHTML = '&nbsp';
            $('input.mw-ui-invisible-field', this.root).val(plval);

        } else {
            scope._displayValue.innerHTML = plval + this.__indicateNumber();

        }
    };

    this.__indicateNumber = function () {
        if(this.settings.multiple && this.value() && this.value().length){
            return "<span class='mw-select-indicate-number'>" + this.value().length + "</span>";
        } else {
            return "<span class='mw-select-indicate-number mw-select-indicate-number-empty'>" + 0 + "</span>";
        }
    };

    this.rend = {

        option: function(item){
            var oh = scope.document.createElement('label');
            oh.$value = item;
            oh.className = 'mw-select-option';
            if (scope.settings.multiple) {
                oh.className = 'mw-ui-check mw-select-option';
                oh.innerHTML =  '<input type="checkbox"><span></span><span>'+scope.getLabel(item)+'</span>';

                $('input', oh).on('change', function () {
                    this.checked ? scope.valueAdd(oh.$value) : scope.valueRemove(oh.$value)
                });
            } else {
                oh.innerHTML = scope.getLabel(item);
                oh.onclick = function () {
                    scope.value(oh.$value)
                };
            }

            return oh;
        },
        value: function() {
            var tag = 'span', cls = 'mw-ui-btn';
            if(scope.settings.autocomplete){
                tag = 'span';
                cls = 'mw-ui-field'
            }
            var oh = scope.document.createElement(tag);
            oh.className = cls + ' mw-ui-size-' + scope.settings.size + ' mw-ui-bg-' + scope.settings.color + ' mw-select-value';

            if(scope.settings.autocomplete){
                oh.innerHTML = '<input class="mw-ui-invisible-field mw-ui-field-' + scope.settings.size + '">';
            } else {
                oh.innerHTML = '<span class="mw-ui-btn-content"></span>';
            }

            if(scope.settings.autocomplete){
                $('input', oh)
                    .on('input focus', function () {
                        scope.filter(this.value);
                        if(scope._rootInputMode) {
                            scope.element.value = this.value;
                            $(scope.element).trigger('input change')
                        }
                    })
                    .on('focus', function () {
                        if(scope.settings.data && scope.settings.data.length) {
                            scope.open();
                        }
                    }).on('focus blur input', function () {
                    var hasVal = !!this.value.trim();
                    mw.tools[hasVal ? 'addClass' : 'removeClass'](scope.root, 'mw-select-has-value')
                });
            } else {
                oh.onclick = function () {
                    scope.toggle();
                };
            }
            return oh;
        },
        options: function(){
            scope.optionsHolder = scope.document.createElement('div');
            scope.holder = scope.document.createElement('div');
            scope.optionsHolder.className = 'mw-select-options';
            $.each(scope.settings.data, function(){
                scope.holder.appendChild(scope.rend.option(this))
            });
            scope.optionsHolder.appendChild(scope.holder);
            return scope.optionsHolder;
        },
        root: function () {
            scope.root = scope.document.createElement('div');
            scope.root.className = 'mw-select mw-select-dropmode-' + scope.settings.dropMode + ' mw-select-multiple-' + scope.settings.multiple;

            return scope.root;
        }
    };

    this.state = 'closed';

    this.open = function () {
        this.state = 'opened';
        mw.tools.addClass(scope.root, 'active');
        mw.Select._register.forEach(function (item) {
            if(item !== scope) {
                item.close()
            }
        })
    };

    this.close = function () {
        this.state = 'closed';
        mw.tools.removeClass(scope.root, 'active')
    };

    this.tags = function () {
        if(!this._tags) {
            if(this.settings.multiple && this.settings.tags) {
                var holder = scope.document.createElement('div');
                holder.className = 'mw-select-tags';
                this._tags = new mw.tags({element:holder, data:scope._value || [], color: this.settings.tagsColor, size: this.settings.tagsSize || 'small'})
                $(this.optionsHolder).prepend(holder);
                mw.$(this._tags).on('tagRemoved', function (e, tag) {
                    scope.valueRemove(tag)
                })
            }
        } else {
            this._tags.setData(scope._value)
        }
        this.displayValue()
    };


    this.toggle = function () {
        if (this.state === 'closed') {
            this.open();
        } else {
            this.close();
        }
    };


    this._valueGet = function (val) {
        if(typeof val === 'number') {
            val = this.settings.data.find(function (item) {
                return item.id === val;
            })
        }
        return val;
    };



    this.valueAdd = function(val){
        if (!val) return;
        val = this._valueGet(val);
        if (!val) return;
        if (!this._value) {
            this._value = []
        }
        var exists = this._value.find(function (item) {
            return item.id === val.id;
        });
        if (!exists) {
            this._value.push(val);
            $(this.root.querySelectorAll('.mw-select-option')).each(function () {
                if(this.$value === val) {
                    this.querySelector('input').checked = true;
                }
            });
        }

        this.afterChange();
    };

    this.afterChange = function () {
        this.tags();
        this.displayValue();
        if($.isArray(this._value)) {
            $.each(this._value, function () {

            });
            $(this.root.querySelectorAll('.mw-select-option')).each(function () {
                if(scope._value.indexOf(this.$value) !== -1) {
                    mw.tools.addClass(this, 'active')
                }
                else {
                    mw.tools.removeClass(this, 'active')
                }
            });
        }
        $(this).trigger('change', [this._value]);
    };

    this.valueRemove = function(val) {
        if (!val) return;
        val = this._valueGet(val);
        if (!val) return;
        if (!this._value) {
            this._value = [];
        }
        var exists = this._value.find(function (item) {
            return item.id === val.id;
        });
        if (exists) {
            this._value.splice(this._value.indexOf(exists), 1);
        }
        $(this.root.querySelectorAll('.mw-select-option')).each(function () {
            if(this.$value === val) {
                this.querySelector('input').checked = false;
            }
        });
        this.afterChange()
    };

    this._valueToggle = function(val){
        if (!val) return;
        if (!this._value) {
            this._value = []
        }
        var exists = this._value.find(function (item) {
            return item.id === val.id;
        });
        if (exists) {
            this._value.splice(this._value.indexOf(exists), 1);
        } else {
            this._value.push(val);
        }
        this.afterChange()
    };

    this.value = function(val){
        if(!val) return this._value;
        val = this._valueGet(val);
        if (!val) return;
        if(this.settings.multiple){
            this._valueToggle(val)
        }
        else {
            this._value = val;
            $('.mw-ui-invisible-field', this.root).val(this.getLabel(val))
            this.close();
        }

        this.afterChange()
    };

    this.setData = function (data) {
        $(scope.holder).empty();
        scope.settings.data = data;
        $.each(scope.settings.data, function(){
            scope.holder.appendChild(scope.rend.option(this))
        });
        return scope.holder;
    };

    this.addData = function (data) {
        $.each(data, function(){
            scope.settings.data.push(this);
            scope.holder.appendChild(scope.rend.option(this));
        });
        return scope.holder;
    };

    this.build = function () {
        this.rend.root();
        this.root.appendChild(this.rend.value());
        this.root.appendChild(this.rend.options());
        if (this._rootInputMode) {
            this.element.type = 'hidden';
            this.$element.before(this.root);
        } else {
            this.$element.html(this.root);
        }
        this.setPlaceholder();
        mw.Select._register.push(this);
    };

    this.init = function () {
        this.build();
        this.element._mwSelect = this;
    };



    this.init();


};

mw.Select._register = [];


$(document).ready(function () {
    $(document).on('mousedown touchstart', function (e) {
        if(!mw.tools.firstParentOrCurrentWithClass(e.target, 'mw-select')){
            mw.Select._register.forEach(function (item) {
                item.close();
            });
        }
    });
});


mw.select = function(options) {
    return new mw.Select(options);
};


mw.required.push('userfiles/modules/microweber/api/tools/spinner.js');

mw.Spinner = function(options){
    if(!options || !options.element){
        return;
    }
    this.$element = $(options.element);
    if(!this.$element.length) return;
    this.element = this.$element[0];
    if(this.element._mwSpinner){
        return this.element._mwSpinner;
    }
    this.element._mwSpinner = this;
    this.options = options;

    this.options.size = this.options.size || 20;
    this.options.color = this.options.color || '#394cb0';
    this.options.insertMode = this.options.insertMode || 'append';

    this.color = function(val){
        if(!val) {
            return this.options.color;
        }
        this.options.color = val;
        this.$spinner.find('circle').css({
            stroke: this.options.color
        });
    };

    this.size = function(val){
        if(!val) {
            return this.options.size;
        }
        this.options.size = parseFloat(val);
        this.$spinner.css({
            width: this.options.size,
            height: this.options.size
        });
    };

    this.create = function(){
        this.$spinner = $('<div class="mw-spinner mw-spinner-mode-' + this.options.insertMode + '"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg></div>');
        this.size(this.options.size);
        this.color(this.options.color);
        this.$element[this.options.insertMode](this.$spinner);
        return this;
    };

    this.show = function(){
        this.$spinner.fadeIn();
        return this;
    };

    this.hide = function(){
        this.$spinner.fadeOut();
        return this;
    };

    this.remove = function(){
        this.$spinner.remove();
        delete this.element._mwSpinner;
    };

    this.create().show();

};

mw.spinner = function(options){
    return new mw.Spinner(options);
};


mw.required.push('userfiles/modules/microweber/api/tools/storage.js');

mw.storage = {
    init: function () {
        if (window.location.href.indexOf('data:') === 0 || !('localStorage' in mww) || /* IE Security configurations */ typeof mww['localStorage'] === 'undefined') return false;
        var lsmw = localStorage.getItem("mw");
        if (typeof lsmw === 'undefined' || lsmw === null) {
            lsmw = localStorage.setItem("mw", "{}");
        }
        this.change("INIT");
        return lsmw;
    },
    set: function (key, val) {
        if (!('localStorage' in mww)) return false;
        var curr = JSON.parse(localStorage.getItem("mw"));
        curr[key] = val;
        var a = localStorage.setItem("mw", JSON.stringify(curr));
        mw.storage.change("CALL", key, val);
        return a;
    },
    get: function (key) {
        if (!('localStorage' in mww)) return false;
        var curr = JSON.parse(localStorage.getItem("mw"));
        return curr[key];
    },
    _keys: {},
    change: function (key, callback, other) {
        if (!('localStorage' in mww)) return false;
        if (key === 'INIT' && 'addEventListener' in document) {
            addEventListener('storage', function (e) {
                if (e.key === 'mw') {
                    var _new = JSON.parse(e.newValue || {});
                    var _old = JSON.parse(e.oldValue || {});
                    var diff = mw.tools.getDiff(_new, _old);
                    for (var t in diff) {
                        if (t in mw.storage._keys) {
                            var i = 0, l = mw.storage._keys[t].length;
                            for (; i < l; i++) {
                                mw.storage._keys[t][i].call(diff[t]);
                            }
                        }
                    }
                }
            }, false);
        }
        else if (key === 'CALL') {
            if (!document.isHidden() && typeof mw.storage._keys[callback] !== 'undefined') {
                var i = 0, l = mw.storage._keys[callback].length;
                for (; i < l; i++) {
                    mw.storage._keys[callback][i].call(other);
                }
            }
        }
        else {
            if (key in mw.storage._keys) {
                mw.storage._keys[key].push(callback);
            }
            else {
                mw.storage._keys[key] = [callback];
            }
        }
    }
};
mw.storage.init();


mw.required.push('userfiles/modules/microweber/api/tools/system-dialogs.js');

mw.tools.alert = function (text) {
    var html = ''
        + '<table class="mw_alert" width="100%" height="140" cellpadding="0" cellspacing="0">'
        + '<tr>'
        + '<td align="center" valign="middle"><div class="mw_alert_holder">' + text + '</div></td>'
        + '</tr>'
        + '<tr>'
        + '<td align="center" height="25"><span class="mw-ui-btn" onclick="mw.tools.modal.remove(\'mw_alert\');"><b>' + mw.msg.ok + '</b></span></td>'
        + '</tr>'
        + '</table>';
    if (mw.$("#mw_alert").length === 0) {
        return mw.modal({
            html: html,
            width: 400,
            height: 200,
            overlay: false,
            name: "mw_alert",
            template: "mw_modal_basic"
        });
    }
    else {
        mw.$("#mw_alert .mw_alert_holder").html(text);
        return mw.$("#mw_alert")[0].modal;
    }
};


mw.tools.confirm = function (question, callback) {
        var html = ''
            + '<table class="mw_alert" width="100%" height="140" cellpadding="0" cellspacing="0">'
            + '<tr>'
            + '<td align="center" valign="middle"><div class="mw_alert_holder">' + question + '</div></td>'
            + '</tr>'
            + '</table>';

        var ok = $('<span tabindex="99999" class="mw-ui-btn mw-ui-btn-medium mw-ui-btn-info">'+mw.msg.ok+'</span>');
        var cancel = $('<span class="mw-ui-btn mw-ui-btn-medium ">' + mw.msg.cancel + '</span>');

        if (mw.$("#mw_confirm_modal").length === 0) {
            var modal = mw.top().dialog({
                content: html,
                width: 400,
                height: 'auto',
                autoHeight: true,
                overlay: false,
                name: "mw_confirm_modal",
                footer: [cancel, ok]
            });
        }
        else {
            mw.$("#mw_confirm_modal .mw_alert_holder").html(question);
            var modal = mw.$("#mw_confirm_modal")[0].modal;
        }


        ok.on('keydown', function (e) {
            if (e.keyCode === 13 || e.keyCode === 32) {
                callback.call(window);
                modal.remove();
                e.preventDefault();
            }
        });
        cancel.on('click', function () {
            modal.remove();
        });
        ok.on('click', function () {
            callback.call(window);
            modal.remove();
        });
        setTimeout(function () {
            mw.$(ok).focus();
        }, 120);
        return modal;
    };

mw.required.push('userfiles/modules/microweber/api/tools/tabs.js');

mw.tools.tabGroup = function (obj, element, model) {
    /*
    *
    *  {
    *       linkable: 'link' | 'auto',
    *       nav: string
    *       tabs: string
    *       onclick: function
    *  }
    *
    * */
    element = element || mwd.body;
    model = typeof model === 'undefined' ? true : model;
    if (model) {
        model = {
            set: function (i) {
                if (typeof i === 'number') {
                    if (!$(obj.nav).eq(i).hasClass(active)) {
                        mw.$(obj.nav).removeClass(active);
                        mw.$(obj.nav).eq(i).addClass(active);
                        mw.$(obj.tabs).hide().eq(i).show();
                    }
                }
            },
            setLastClicked: function () {
                if ((typeof(obj.lastClickedTabIndex) != 'undefined') && obj.lastClickedTabIndex !== null) {
                    this.set(obj.lastClickedTabIndex);
                }
            },
            unset: function (i) {
                if (typeof i === 'number') {
                    if ($(obj.nav).eq(i).hasClass(active)) {
                        mw.$(obj.nav).eq(i).removeClass(active);
                        mw.$(obj.tabs).hide().eq(i).hide();
                    }
                }
            },
            toggle: function (i) {
                if (typeof i === 'number') {
                    if ($(obj.nav).eq(i).hasClass(active)) {
                        this.unset(i);
                    }
                    else {
                        this.set(i);
                    }
                }
            }
        };
    }
    var active = obj.activeNav || obj.activeClass || "active active-info",
        firstActive = 0;

    obj.lastClickedTabIndex = null;

    if (obj.linkable) {


        if (obj.linkable === 'link') {

        } else if (typeof obj.linkable === 'string') {
            $(window).on('load hashchange', function () {
                var param = mw.url.windowHashParam(obj.linkable);
                if(param) {
                    var el = $('[data-' + obj.linkable + '="' + param + '"]');
                }
            });
            $(obj.nav).each(function (i) {
                this.dataset.linkable = obj.linkable + '-' + i;
                (function (linkable, i) {
                    this.onclick = function () {
                        mw.url.windowHashParam(linkable, i);
                    };
                })(obj.linkable, i);
            });
        }
    }


    mw.$(obj.nav).on('click', function (e) {
        if (obj.linkable) {
            if (obj.linkable === 'link') {

            }
        } else {
            if (!$(this).hasClass(active)) {
                var i = mw.tools.index(this, mw.$(obj.nav).get(), mw.$(obj.nav)[0].nodeName);
                mw.$(obj.nav).removeClass(active);
                mw.$(this).addClass(active);
                mw.$(obj.tabs).hide().eq(i).show();
                obj.lastClickedTabIndex = i;
                if (typeof obj.onclick === 'function') {
                    obj.onclick.call(this, mw.$(obj.tabs).eq(i)[0], e, i);
                }
            }
            else {
                if (obj.toggle === true) {
                    mw.$(this).removeClass(active);
                    mw.$(obj.tabs).hide();
                    if (typeof obj.onclick === 'function') {
                        var i = mw.tools.index(this, element, obj.nav);
                        obj.onclick.call(this, mw.$(obj.tabs).eq(i)[0], e, i);
                    }
                }
            }
        }


        return false;
    }).each(function (i) {
        if (mw.tools.hasClass(this, active)) {
            firstActive = i;
        }
    });
    model.set(firstActive);
    return model;
};


mw.required.push('userfiles/modules/microweber/api/tools/tooltip.js');

(function(){
    var tooltip = {
        source: function (content, skin, position, id) {
            if (skin === 'dark') {
                skin = 'mw-tooltip-dark';
            } else if (skin === 'warning') {
                skin = 'mw-tooltip-default mw-tooltip-warning';
            }
            if (typeof id === 'undefined') {
                id = 'mw-tooltip-' + mw.random();
            }
            var tooltip = mwd.createElement('div');
            var tooltipc = mwd.createElement('div');
            tooltip.className = 'mw-tooltip ' + position + ' ' + skin;
            tooltipc.className = 'mw-tooltip-content';
            tooltip.id = id;
            $(tooltipc).append(content);
            $(tooltip).append(tooltipc).append('<span class="mw-tooltip-arrow"></span>');
            mwd.body.appendChild(tooltip);
            return tooltip;
        },
        setPosition: function (tooltip, el, position) {
                el = mw.$(el);
                if (el.length === 0) {
                    return false;
                }
                tooltip.tooltipData.element = el[0];
                var w = el.outerWidth(),
                    tipwidth = mw.$(tooltip).outerWidth(),
                    h = el.outerHeight(),
                    tipheight = mw.$(tooltip).outerHeight(),
                    off = el.offset(),
                    arrheight = mw.$('.mw-tooltip-arrow', tooltip).height();
                if (off.top === 0 && off.left === 0) {
                    off = mw.$(el).parent().offset();
                }
                mw.tools.removeClass(tooltip, tooltip.tooltipData.position);
                mw.tools.addClass(tooltip, position);
                tooltip.tooltipData.position = position;

                off.left = off.left > 0 ? off.left : 0;
                off.top = off.top > 0 ? off.top : 0;

                var leftCenter = off.left - tipwidth / 2 + w / 2;
                leftCenter = leftCenter > 0 ? leftCenter : 0;

                if (position === 'auto') {
                    var $win = mw.$(window);
                    var wxCenter =  $win.width()/2;
                    var wyCenter =  ($win.height() + $win.scrollTop())/2;
                    var elXCenter =  off.left +(w/2);
                    var elYCenter =  off.top +(h/2);
                    var xPos, yPost;
                    var space = 100;

                    if(elXCenter > wxCenter) {
                        xPos = 'left'
                    } else {
                        xPos = 'right'
                    }

                    yPos = 'top'


                    return this.setPosition (tooltip, el, (xPos+'-'+yPos));
                }

                if (position === 'bottom-left') {
                    mw.$(tooltip).css({
                        top: off.top + h + arrheight,
                        left: off.left
                    });
                }
                else if (position === 'bottom-center') {
                    mw.$(tooltip).css({
                        top: off.top + h + arrheight,
                        left: leftCenter
                    });
                }
                else if (position === 'bottom-right') {
                    mw.$(tooltip).css({
                        top: off.top + h + arrheight,
                        left: off.left - tipwidth + w
                    });
                }
                else if (position === 'top-right') {
                    mw.$(tooltip).css({
                        top: off.top - tipheight - arrheight,
                        left: off.left - tipwidth + w
                    });
                }
                else if (position === 'top-left') {
                    mw.$(tooltip).css({
                        top: off.top - tipheight - arrheight,
                        left: off.left
                    });
                }
                else if (position === 'top-center') {

                    mw.$(tooltip).css({
                        top: off.top - tipheight - arrheight,
                        left: leftCenter
                    });
                }
                else if (position === 'left-top') {
                    mw.$(tooltip).css({
                        top: off.top,
                        left: off.left - tipwidth - arrheight
                    });
                }
                else if (position === 'left-bottom') {
                    mw.$(tooltip).css({
                        top: (off.top + h) - tipheight,
                        left: off.left - tipwidth - arrheight
                    });
                }
                else if (position === 'left-center') {
                    mw.$(tooltip).css({
                        top: off.top - tipheight / 2 + h / 2,
                        left: off.left - tipwidth - arrheight
                    });
                }
                else if (position === 'right-top') {
                    mw.$(tooltip).css({
                        top: off.top,
                        left: off.left + w + arrheight
                    });
                }
                else if (position === 'right-bottom') {
                    mw.$(tooltip).css({
                        top: (off.top + h) - tipheight,
                        left: off.left + w + arrheight
                    });
                }
                else if (position === 'right-center') {
                    mw.$(tooltip).css({
                        top: off.top - tipheight / 2 + h / 2,
                        left: off.left + w + arrheight
                    });
                }
                if (parseFloat($(tooltip).css('top')) < 0) {
                    mw.$(tooltip).css('top', 0);
                }
            },
            fixPosition: function (tooltip) {
                /* mw_todo */
                var max = 5;
                var arr = mw.$('.mw-tooltip-arrow', tooltip);
                arr.css('left', '');
                var arr_left = parseFloat(arr.css('left'));
                var tt = mw.$(tooltip);
                if (tt.length === 0) {
                    return false;
                }
                var w = tt.width(),
                    off = tt.offset(),
                    ww = mw.$(window).width();
                if ((off.left + w) > (ww - max)) {
                    var diff = off.left - (ww - w - max);
                    tt.css('left', ww - w - max);
                    arr.css('left', arr_left + diff);
                }
                if (parseFloat(tt.css('top')) < 0) {
                    tt.css('top', 0);
                }
            },
            prepare: function (o) {
                if (typeof o.element === 'undefined') return false;
                if (o.element === null) return false;
                if (typeof o.element === 'string') {
                    o.element = mw.$(o.element)
                }

                if (o.element.constructor === [].constructor && o.element.length === 0) return false;
                if (typeof o.position === 'undefined') {
                    o.position = 'auto';
                }
                if (typeof o.skin === 'undefined') {
                    o.skin = 'mw-tooltip-default';
                }
                if (typeof o.id === 'undefined') {
                    o.id = 'mw-tooltip-' + mw.random();
                }
                if (typeof o.group === 'undefined') {
                    o.group = null;
                }
                return {
                    id: o.id,
                    element: o.element,
                    skin: o.template || o.skin,
                    position: o.position,
                    content: o.content,
                    group: o.group
                }
            },
            init: function (o, wl) {

                var orig_options = o;
                o = mw.tools.tooltip.prepare(o);
                if (o === false) return false;
                if (o.id && mw.$('#' + o.id).length > 0) {
                    var tip = mw.$('#' + o.id)[0];
                } else {
                    var tip = mw.tools.tooltip.source(o.content, o.skin, o.position, o.id);
                }
                tip.tooltipData = o;
                var wl = wl || true;
                if (o.group) {
                    var tip_group_class = 'mw-tooltip-group-' + o.group;
                    var cur_tip = mw.$(tip)
                    if (!cur_tip.hasClass(tip_group_class)) {
                        cur_tip.addClass(tip_group_class)
                    }
                    var cur_tip_id = cur_tip.attr('id');
                    if (cur_tip_id) {
                        mw.$("." + tip_group_class).not("#" + cur_tip_id).hide();
                        if (o.group && typeof orig_options.close_on_click_outside !== 'undefined' && orig_options.close_on_click_outside) {
                            setTimeout(function () {
                                mw.$("#" + cur_tip_id).show();
                            }, 100);
                        } else {
                            mw.$("#" + cur_tip_id).show();
                        }
                    }
                }
                if (wl && $.contains(self.document, tip)) {
                    /*
                     //position bug: resize fires in modal frame
                     mw.$(self).bind('resize scroll', function (e) {
                     if (self.document.contains(tip)) {
                     self.mw.tools.tooltip.setPosition(tip, tip.tooltipData.element, o.position);
                     }
                     });*/
                    if (o.group && typeof orig_options.close_on_click_outside !== 'undefined' && orig_options.close_on_click_outside) {
                        mw.$(self).bind('click', function (e, target) {
                            mw.$("." + tip_group_class).hide();
                        });
                    }
                }
                mw.tools.tooltip.setPosition(tip, o.element, o.position);
                return tip;
            }

    };

    mw.tools.tooltip = tooltip;
    mw.tools.titleTip = function (el, _titleTip) {
        _titleTip = _titleTip || '_titleTip';
        if (mw.tools.hasClass(el, 'tip-disabled')) {
            mw.$(mw.tools[_titleTip]).hide();
            return false;
        }
        var skin = mw.$(el).attr('data-tipskin');
        skin = (skin) ? skin : 'mw-tooltip-dark';
        var pos = mw.$(el).attr('data-tipposition');
        var iscircle = mw.$(el).attr('data-tipcircle') === 'true';
        if (!pos) {
            pos = 'top-center';
        }
        var text = mw.$(el).attr('data-tip');
        if (!text) {
            text = mw.$(el).attr('title');
        }
        if (!text) {
            text = mw.$(el).attr('tip');
        }
        if (typeof text === 'undefined' || !text) {
            return;
        }
        if (text.indexOf('.') === 0 || text.indexOf('#') === 0) {
            var xitem = mw.$(text);
            if (xitem.length === 0) {
                return false;
            }
            text = xitem.html();
        }
        else {
            text = text.replace(/\n/g, '<br>');
        }
        var showon = mw.$(el).attr('data-showon');
        if (showon) {
            el = mw.$(showon)[0];
        }
        if (!mw.tools[_titleTip]) {
            mw.tools[_titleTip] = mw.tooltip({skin: skin, element: el, position: pos, content: text});
            mw.$(mw.tools[_titleTip]).addClass('mw-universal-tooltip');
        }
        else {
            mw.tools[_titleTip].className = 'mw-tooltip ' + pos + ' ' + skin + ' mw-universal-tooltip';
            mw.$('.mw-tooltip-content', mw.tools[_titleTip]).html(text);
            mw.tools.tooltip.setPosition(mw.tools[_titleTip], el, pos);
        }
        if (iscircle) {
            mw.$(mw.tools[_titleTip]).addClass('mw-tooltip-circle');
        }
        else {
            mw.$(mw.tools[_titleTip]).removeClass('mw-tooltip-circle');
        }
        mw.$(mw.tools[_titleTip]).show();
    }

})();


mw.required.push('userfiles/modules/microweber/api/tools/uiaccordion.js');

mw.uiAccordion = function (options) {
    if (!options) return;
    options.element = options.element || '.mw-accordion';

    var scope = this;



    this.getContents = function () {
        this.contents = this.root.children(this.options.contentSelector);
        if (!this.contents.length) {
            this.contents = mw.$();
            this.root.children(this.options.itemSelector).each(function () {
                var title = mw.$(this).children(scope.options.contentSelector)[0];
                if (title) {
                    scope.contents.push(title)
                }
            });
        }
    }
    this.getTitles = function () {
        this.titles = this.root.children(this.options.titleSelector);
        if (!this.titles.length) {
            this.titles = mw.$();
            this.root.children(this.options.itemSelector).each(function () {
                var title = mw.$(this).children(scope.options.titleSelector)[0];
                if (title) {
                    scope.titles.push(title)
                }
            });
        }
    }

    this.prepare = function (options) {
        var defaults = {
            multiple: false,
            itemSelector: ".mw-accordion-item,mw-accordion-item",
            titleSelector: ".mw-accordion-title,mw-accordion-title",
            contentSelector: ".mw-accordion-content,mw-accordion-content",
            openFirst: true,
            toggle: true
        };
        this.options = $.extend({}, defaults, options);

        this.root = mw.$(this.options.element).not('.mw-accordion-ready').eq(0);
        if (!this.root.length) return;
        this.root.addClass('mw-accordion-ready');
        this.root[0].uiAccordion = this;
        this.getTitles();
        this.getContents();

    };

    this.getItem = function (q) {
        var item;
        if (typeof q === 'number') {
            item = this.contents.eq(q)
        }
        else {
            item = mw.$(q);
        }
        return item;
    };

    this.set = function (index) {
        var item = this.getItem(index);
        if (!this.options.multiple) {
            this.contents.not(item)
                .slideUp()
                .removeClass('active')
                .prev()
                .removeClass('active')
                .parents('.mw-accordion-item').eq(0)
                .removeClass('active');
        }
        item.stop()
            .slideDown()
            .addClass('active')
            .prev()
            .addClass('active')
            .parents('.mw-accordion-item').eq(0)
            .addClass('active');
        mw.$(this).trigger('accordionSet', [item]);
    };

    this.unset = function (index) {
        if (typeof index === 'undefined') return;
        var item = this.getItem(index);
        item.stop()
            .slideUp()
            .removeClass('active')
            .prev()
            .removeClass('active')
            .parents('.mw-accordion-item').eq(0)
            .removeClass('active');
        ;
        mw.$(this).trigger('accordionUnset', [item]);
    }

    this.toggle = function (index) {
        var item = this.getItem(index);
        if (item.hasClass('active')) {
            if (this.options.toggle) {
                this.unset(item)
            }
        }
        else {
            this.set(item)
        }
    }

    this.init = function (options) {
        this.prepare(options);
        if(typeof(this.contents) !== 'undefined'){
            this.contents.hide()
        }

        if (this.options.openFirst) {
            if(typeof(this.contents) !== 'undefined'){
                this.contents.eq(0).show().addClass('active')
            }
            if(typeof(this.titles) !== 'undefined'){
                this.titles.eq(0).addClass('active').parent('.mw-accordion-item').addClass('active');
            }
        }
        if(typeof(this.titles) !== 'undefined') {
            this.titles.on('click', function () {
                scope.toggle(scope.titles.index(this));
            });
        }
    }

    this.init(options);

};


mw.tabAccordion = function (options, accordion) {
    if (!options) return;
    var scope = this;
    this.options = options;

    this.options.breakPoint = this.options.breakPoint || 800;
    this.options.activeClass = this.options.activeClass || 'active-info';


    this.buildAccordion = function () {
        this.accordion = accordion || new mw.uiAccordion(this.options);
    }

    this.breakPoint = function () {
        if (matchMedia("(max-width: " + this.options.breakPoint + "px)").matches) {
            mw.$(this.nav).hide();
            mw.$(this.accordion.titles).show();
        }
        else {
            mw.$(this.nav).show();
            mw.$(this.accordion.titles).hide();
        }
    }

    this.createTabButton = function (content, index) {
        this.buttons = this.buttons || mw.$();
        var btn = document.createElement('span');
        this.buttons.push(btn)
        var size = (this.options.tabsSize ? ' mw-ui-btn-' + this.options.tabsSize : '');
        var color = (this.options.tabsColor ? ' mw-ui-btn-' + this.options.tabsColor : '');
        var active = (index === 0 ? (' ' + this.options.activeClass) : '');
        btn.className = 'mw-ui-btn' + size + color + active;
        btn.innerHTML = content;
        btn.onclick = function () {
            scope.buttons.removeClass(scope.options.activeClass).eq(index).addClass(scope.options.activeClass);
            scope.accordion.set(index);
        }
        return btn;
    }

    this.createTabs = function () {
        this.nav = document.createElement('div');
        this.nav.className = 'mw-ui-btn-nav mw-ui-btn-nav-tabs';
        mw.$(this.accordion.titles)
            .each(function (i) {
                scope.nav.appendChild(scope.createTabButton($(this).html(), i))
            })
            .hide();
        mw.$(this.accordion.root).before(this.nav)
    }

    this.init = function () {
        this.buildAccordion();
        this.createTabs();
        this.breakPoint();
        mw.$(window).on('load resize orientationchange', function () {
            scope.breakPoint();
        });
    };

    this.init();
};




mw.confirm = mw.tools.confirm;
mw.tabs = mw.tools.tabGroup;
mw.progress = mw.tools.progress;
mw.external = function (o) {
    return mw.tools._external(o);
};

mw.gallery = function (arr, start, modal) {

    return mw.tools.gallery.init(arr, start, modal)

};

window.Alert = mw.tools.alert;
mw.tooltip = function (config) {
    return mw.tools.tooltip.init(config);
};

mw.gallery = function (arr, start, modal) {
    return mw.tools.gallery.init(arr, start, modal)
};














var getFieldValue = function(a){
  return typeof a === 'string' ? a : ( typeof a === 'object' && a.tagName !== undefined ? a.value : null);
};


//Cross-browser placeholder






mw.form = {
  typeNumber:function(el){
    el.value = el.value.replace(/[^0-9\.,]/g,'');
  },
  fixPrice:function(el){
    el.value = el.value.replace(/,/g,'');
    var arr = el.value.split('.');
    var len = arr.length;
    if(len>1){
      if(arr[len-1]===''){
          arr[len-1] = '.00';
      }
      else{
         arr[len-1] = '.' + arr[len-1];
      }
      el.value = arr.join('');
    }
  },
  dstatic:function(event, d){
    d = d || mw.$(event.target).dataset('default') || false;
    var type = event.type;
    var target = event.target;
    if(!!d){
        if(type === 'focus'){
           target.value==d?target.value='':'';
        }
        else if(type=='blur'){
           target.value==''?target.value=d:'';
        }
    }
    if(type=='keyup'){
        mw.$(target).addClass('loading');
    }
  },

  post:function(selector, url_to_post, callback, ignorenopost, callback_error, callback_user_cancel, before_send){
    mw.session.checkPause = true;
    if(selector.constructor === {}.constructor){
      return mw.form._post(selector);
    }

    callback_error = callback_error || false;
    ignorenopost = ignorenopost || false;
    var is_form_valid = mw.form.validate.init(selector);

	if(!url_to_post){

		url_to_post = mw.settings.site_url + 'api/post_form';

	}

 // var is_form_valid = true;


    if(is_form_valid){
        var obj = mw.form.serialize(selector, ignorenopost);
      	var xhr = $.ajax({
            url: url_to_post,
            data: before_send ? before_send(obj) : obj,
            method: 'post',
            success: function(data){
                mw.session.checkPause = false;
                if(typeof callback === 'function'){
                    callback.call(data, mw.$(selector)[0]);
                } else {
                    return data;
                }
            },
            onExternalDataDialogClose: function() {
                if(callback_user_cancel) {
                    callback_user_cancel.call();
                }
            }
      	});
        xhr.fail(function(a,b) {
           mw.session.checkPause = false;
           if(typeof callback_error === 'function'){
              callback_error.call(a,b);
           }
        });
    }
	return false;
  },
  _post:function(obj){
    mw.form.post(obj.selector, obj.url, obj.done, obj.ignorenopost, obj.error, obj.error);
  },
  validate:{
    checkbox: function(obj){
        return obj.checked === true;
    },
    field:function(obj){
		return getFieldValue(obj).replace(/\s/g, '') != '';
    },
    email:function(obj){
        var regexmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
        return regexmail.test(getFieldValue(obj));
    },
    url:function(obj){
	  /* var rurl =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig; */
       var rurl = /^((https?|ftp):\/\/)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/;
       return rurl.test(getFieldValue(getFieldValue(obj)));
    },
    radio:function(objname){
        var radios = document.getElementsByName(objname), i = 0, len = radios.length;
        this_radio_valid = false;
        for( ; i < len ; i++){
            if(radios[i].checked){
                this_radio_valid = true;
                break;
            }
        }
        var parent = mw.$(document.getElementsByName(objname)[0].parentNode);
        if(this_radio_valid){
           parent.removeClass("error");
        }
        else{
           parent.addClass("error");
        }
        return this_radio_valid;
    },
    image_url:function(url, valid, invalid){
        var url = url.replace(/\s/gi,'');
        if(url.length<6){
            typeof invalid =='function'? invalid.call(url) : '';
            return false;
        }
        else{
          if(!url.contains('http')){var url = 'http://'+url}
          if(!window.ImgTester){
              window.ImgTester = new Image();
              document.body.appendChild(window.ImgTester);
              window.ImgTester.className = 'semi_hidden';
              window.ImgTester.onload = function(){
                typeof valid =='function'? valid.call(url) : '';
              }
              window.ImgTester.onerror = function(){
                typeof invalid =='function'? invalid.call(url) : '';
              }
          }
          window.ImgTester.src = url;
        }
    },
    proceed:{
      checkbox:function(obj){
        if(mw.form.validate.checkbox(obj)){
            mw.$(obj).parents('.field').removeClass("error");
        }
        else{
            mw.$(obj).parents('.field').addClass("error");
        }
      },
      field:function(obj){
        if(mw.form.validate.field(obj)){
           mw.$(obj).parents('.field').removeClass("error");
         }
         else{
           mw.$(obj).parents('.field').addClass("error");
         }
      },
      email:function(obj){
        if(mw.form.validate.email(obj)){
           mw.$(obj).parents('.field').removeClass("error");
        }
        else{
           mw.$(obj).parents('.field').addClass("error");
        }
      }
    },
    checkFields:function(form){
        mw.$(form).find(".required,[required]").each(function(){
          var type = mw.$(this).attr("type");
          if(type=='checkbox'){
             mw.form.validate.proceed.checkbox(this);
          }
          else if(type=='radio'){
             mw.form.validate.radio(this.name);
          }
          else{
             mw.form.validate.proceed.field(this);
          }
        });
        mw.$(form).find(".required-email").each(function(){
            mw.form.validate.proceed.email(this);
        });
    },
    init:function(obj){
        mw.form.validate.checkFields(obj);
        if($(obj).find(".error").length>0){
            mw.$(obj).addClass("error submited");
            return false;
        }
        else{
           mw.$(obj).removeClass("error");
            return true;
        }
    }
  },
  serialize : function(id, ignorenopost){
    var ignorenopost = ignorenopost || false;
    return mw.serializeFields(id, ignorenopost);
  }
}


mw.postForm = function(o){
  return mw.form._post(o);
}















// URL Strings - Manipulations

json2url = function(obj){ var t=[];for(var x in obj)t.push(x+"="+encodeURIComponent(obj[x]));return t.join("&").replace(/undefined/g, 'false') };


mw.url = {
    hashStart: '',
    getDomain:function(url){
      return url.match(/:\/\/(www\.)?(.[^/:]+)/)[2];
    },
    removeHash:function(url){
        return url.replace( /#.*/, "");
    },
    getHash:function(url){
      return url.indexOf('#')!=-1 ? url.substring(url.indexOf('#'), url.length) : "";
    },
    strip:function(url){
      return url.replace(/#[^#]*$/, "").replace(/\?[^\?]*$/, "")
    },
    getUrlParams:function(url){
        var url = mw.url.removeHash(url);
        if(url.contains('?')){
          var arr = url.slice(url.indexOf('?') + 1).split('&');
          var obj = {}, i=0, len = arr.length;
          for( ; i<len; i++){
            var p_arr = arr[i].split('=');
            obj[p_arr[0]] = p_arr[1];
          }
          return obj;
        }
        else{return {} }
    },
    set_param:function(param, value, url){
        var url = url || window.location.href;
        var hash = mw.url.getHash(url);
        var params = mw.url.getUrlParams(url);
        params[param] = value;
        var params_string = json2url(params);
        var url = mw.url.strip(url);
        return decodeURIComponent (url + "?" + params_string + hash);
    },
    remove_param:function(url, param){
        var hash = mw.url.getHash(url);
        var params = mw.url.getUrlParams(url);
        delete params[param];
        var params_string = json2url(params);
        var url = mw.url.strip(url);
        return decodeURIComponent (url + "?" + params_string + hash);
    },
    getHashParams:function(hash){
        var r = new RegExp(mw.url.hashStart, "g");
        var hash = hash.replace(r, "");
        var hash = hash.replace(/\?/g, "");
        if(hash=='' || hash=='#'){
          return {}
        }
        else{
          var hash = hash.replace(/#/g, "");
          var arr = hash.split('&');
          var obj = {}, i=0, len = arr.length;
          for( ; i<len; i++){
            var p_arr = arr[i].split('=');
            obj[p_arr[0]] = p_arr[1];
          }
          return obj;
        }
    },
    setHashParam:function(param, value, hash){

      var hash = hash || mw.hash();
      var obj = mw.url.getHashParams(hash);
      obj[param] = value;
      return mw.url.hashStart + decodeURIComponent(json2url(obj));
    },
    windowHashParam:function(a,b){
      if(b !== undefined){
        mw.hash(mw.url.setHashParam(a,b));
      }
      else{
        return mw.url.getHashParams(mw.hash())[a];
      }
    },
    deleteHashParam:function(hash, param){
        var params = mw.url.getHashParams(hash);
        delete params[param];
        var params_string = decodeURIComponent(mw.url.hashStart+json2url(params));
        return params_string;
    },
    windowDeleteHashParam:function(param){
       mw.hash(mw.url.deleteHashParam(window.location.hash, param));
    },
    whichHashParamsHasBeenRemoved:function(currHash, prevHash){
        var curr = mw.url.getHashParams(currHash);
        var prev = mw.url.getHashParams(prevHash);
        var hashes = [];
        for(var x in prev){
            curr[x] === undefined ? hashes.push(x) : '';
        }
        return hashes;
    },
    hashParamToActiveNode:function(param, classNamespace, context){
        var context = context || mwd.body;
        var val =  mw.url.windowHashParam(param);
        mw.$('.'+classNamespace, context).removeClass('active');
        var active = mw.$('.'+classNamespace + '-' + val, context);
        if(active.length > 0){
           active.addClass('active');
        }
        else{
           mw.$('.'+classNamespace + '-none', context).addClass('active');
        }
    },
    mwParams:function(url){
        url = url || window.location.pathname;
        url = mw.url.removeHash(url);
        var arr = url.split('/');
        var obj = {};
        var i=0,l=arr.length;
        for( ; i<l; i++){
            if(arr[i].indexOf(':') !== -1 && arr[i].indexOf('http') === -1){
                var p = arr[i].split(':');
                obj[p[0]] = p[1];
            }
        }
        return obj;
    },
    type:function(url){
      url = url.toString();
      if( url ===  'false' ){
          return false;
      }
      if(url.indexOf('/images.unsplash.com/') !== -1){
          return 'image';
      }
      var extension = url.split('.').pop();
      var images = 'jpg,png,gif,jpeg,bmp';
      if(images.contains(extension)){
        return 'image';
      }
      else if(extension=='swf'){return 'flash'}
      else if(extension=='pdf'){return 'pdf'}
      else if(url.contains('youtube.com') || url.contains('youtu.be')){return 'youtube'}
      else if(url.contains('vimeo.com')){return 'vimeo'}

      else{ return 'link'; }
    }
}

mw.slug = {
  normalize:function(string){

  //  return string.replace(/[`~!@#$%^&№€§*()\=?'"<>\{\}\[\]\\\/]/g, '');
    return string.replace(/[`~!@#$%^&№€§*()\=?'"<>\{\}\[\]\\]/g, '');
  },
  removeSpecials:function(string){
    var string = mw.slug.normalize(string);
    var special = 'àáäãâèéëêìíïîòóöôõùúüûñç·=,:;',
        normal =  'aaaaaeeeeiiiiooooouuuunc------',
        len = special.length,
        i = 0;
    for ( ; i<len; i++) {
       var bad = special[i];
       var good = normal[i];
       var string = string.replace(new RegExp(bad, 'g'), good);
    }
    return string;
  },
  create:function(string){
    var string = mw.slug.removeSpecials(string);
    return string.trim().toLowerCase().replace(/[-\s]+/g, '-');
  },
  toggleEdit:function(){
    var edit = mw.$(".edit-post-slug");
    var view = mw.$(".view-post-slug");
    mw.$([edit, view]).toggleClass('active');

    if(view.hasClass("active")){
     view.html(edit.val());
    }
    else{
       edit.focus();
    }
  },
  setVal:function(el){
    var val = mw.slug.create(el.value);
    el.value = val;
    mw.$(".view-post-slug").html(val);
  }
};


mw.require('url.js');

mw.hash = function(b){ return b === undefined ? window.location.hash : window.location.hash = b; };

mw.on = function(eventName, callback){
    $.each(eventName.split(' '), function(){
        mw.$(mw._on._eventsRegister).on(this.toString(), callback);
    });
};
mw.trigger = function(eventName, paramsArray){
    return mw.$([mww, mw._on._eventsRegister]).trigger(eventName, paramsArray);
};

mw._on = {
  _eventsRegister:{},
  mouseDownAndUp:function(el, callback){
    var $el = mw.$(el);
    el = $el[0];
    $el.on('mousedown touchstart', function(){
      this.__downTime = new Date().getTime();
      (function(el){
        setTimeout(function(){
          el.__downTime = -1;
        }, 777);
      })(this);
    });
    $el.on('mouseup touchend', function(e){
      if(!!callback){
        callback.call(this, new Date().getTime()-this.__downTime, e)
      }
    });
  },
  onmodules : {},
  moduleReload : function(id, c, trigger){
      var exists;
     if(trigger){
          exists = typeof mw.on.onmodules[id] !== 'undefined';
          if(exists){
            var i = 0, l = mw.on.onmodules[id].length;
            for( ; i < l; i++){
               mw.on.onmodules[id][i].call(mwd.getElementById(id));
            }
          }
        return false;
     }
     if(mw.is.func(c)){
       exists = typeof mw.on.onmodules[id] !== 'undefined';
       if(exists){
          mw.on.onmodules[id].push(c);
       }
       else{
         mw.on.onmodules[id] = [c];
       }
     }
     else if(c==='off'){
        exists = typeof mw.on.onmodules[id] !== 'undefined';
        if(exists){
          mw.on.onmodules[id] = [];
        }
     }
  },
  _hashrec : {},
  _hashparams : this._hashparams || [],
  _hashparam_funcs : [],
  hashParam : function(param, callback, trigger, isManual){
    if(isManual){
        var index = mw.on._hashparams.indexOf(param);
        if(mw.on._hashparam_funcs[index]!==undefined){
          mw.on._hashparam_funcs[index].call(false);
        }
        return false;
    }
    if(trigger === true){
        var index = mw.on._hashparams.indexOf(param);

        if(index != -1){
          var hash = mw.hash();
          var params = mw.url.getHashParams(hash);

          if(typeof params[param] === 'string' && mw.on._hashparam_funcs[index] !== undefined){
              mw.on._hashparam_funcs[index].call(decodeURIComponent(params[param]));

          }
        }
    }
    else{
        mw.on._hashparams.push(param);
        mw.on._hashparam_funcs.push(callback);
    }
},
hashParamEventInit:function(){
  var hash = mw.hash();
  var params = mw.url.getHashParams(hash);

  if(hash==='' || hash==='#' || hash ==='#?'){
    var len = mw.on._hashparams.length, i=0;
    for( ; i < len; i++){
        mw.on.hashParam(mw.on._hashparams[i], "", true);
    }
  }
  else{
    for(var x in params){
        if(params[x] !== mw.on._hashrec[x] || typeof mw.on._hashrec[x] === 'undefined'){
            mw.on.hashParam(x, "", true);
        }
    }
  }

  mw.on._hashrec = params;
},
DOMChangePause:false,
DOMChangeTime:1500,
DOMChange:function(element, callback, attr, a){
    attr = attr || false;
    a = a || false;

    element.addEventListener("input", function(e){
        if( !mw.on.DOMChangePause ) {
            if(!a){
                callback.call(this);
            }
            else{
                clearTimeout(element._int);
                element._int = setTimeout(function(){
                    callback.call(element);
                }, mw.on.DOMChangeTime);
            }

        }
    }, false);

    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

    if(typeof MutationObserver === 'function'){
        var observer = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation){
            if( !mw.on.DOMChangePause ) {
                callback.call(mutation.target);
            }
          });
        });
        var config = { attributes: attr, childList: true, characterData: true };
        observer.observe(element, config);
    } else {
        element.addEventListener("DOMCharacterDataModified", function(e){
            if( !mw.on.DOMChangePause ) {
                if(!a){
                    callback.call(this);
                }
                else{
                    clearTimeout(element._int);
                    element._int = setTimeout(function(){
                        callback.call(element);
                    }, mw.on.DOMChangeTime);
                }

            }
        }, false);
        element.addEventListener("DOMNodeInserted", function(e){

            if(/*mw.tools.hasClass(e.target, 'element') || */mw.tools.hasClass(e.target, 'module') || mw.tools.hasParentsWithClass(e.target, 'module')){
                return false;
            }
            if( !mw.on.DOMChangePause ) {
                if(!a){
                    callback.call(this);
                }
                else{
                    clearTimeout(element._int);
                    element._int = setTimeout(function(){
                        callback.call(element);
                    }, mw.on.DOMChangeTime);
                }
            }
        }, false);

        if(attr){
            element.addEventListener("DOMAttrModified", function(e){

                var attr = e.attrName;
                if(attr !== "contenteditable"){
                    if( !mw.on.DOMChangePause ) {
                        if(!a){
                            callback.call(this);
                        }
                        else{
                            clearTimeout(element._int);
                            element._int = setTimeout(function(){
                                callback.call(element);
                            }, mw.on.DOMChangeTime);
                        }
                    }
                }
            }, false);
        }
    }

 },
 stopWriting:function(el, c){
    if(el === null || typeof el === 'undefined'){ return false; }
    if(!el.onstopWriting){
      el.onstopWriting = null;
    }
    clearTimeout(el.onstopWriting);
    el.onstopWriting = setTimeout(function(){
        c.call(el);
    }, 400);
 },
 scrollBarOnBottom : function(obj, distance, callback){
    if(typeof obj === 'function'){
       callback = obj;
       obj =  window;
       distance = 0;
    }
    if(typeof distance === 'function'){
      callback = distance;
      distance = 0;
    }
    obj._pauseCallback = false;
    obj.pauseScrollCallback = function(){ obj._pauseCallback = true;}
    obj.continueScrollCallback = function(){ obj._pauseCallback = false;}
    mw.$(obj).scroll(function(e){
      var h = obj === window ? mwd.body.scrollHeight : obj.scrollHeight;
      var calc = h - mw.$(obj).scrollTop() - mw.$(obj).height();
      if(calc <= distance && !obj._pauseCallback){
        callback.call(obj);
      }
    });
  },
  tripleClick : function(el, callback){
      var t, timeout = 199;
      el = el || window;
      el.addEventListener("dblclick", function () {
          t = setTimeout(function () {
              t = null;
          }, timeout);
      });
      el.addEventListener("click", function (e) {
          if (t) {
              clearTimeout(t);
              t = null;
              callback.call(el, e.target);
          }
      });
  },
  transitionEnd:function(el,callback){
    mw.$(el).bind('webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd otransitionend', function(){
        callback.call(el);
    });
  },
  ones:{ },
  one:function(name, c, trigger, isDone){
    if(trigger !== true){
      if(mw.on.ones[name] === undefined){
         mw.on.ones[name] = [c]
      }
      else{
         mw.on.ones[name].push(c);
      }
    }
    else{
       if(mw.on.ones[name] !== undefined){
          var i=0, l = mw.on.ones[name].length;
          for( ; i<l; i++){
              if(isDone === true){
                mw.on.ones[name][i].call('ready', 'ready');
              }
              else{
                mw.on.ones[name][i].call('start', 'start');
              }
          }
       }
    }
  },
  userIteractionInitRegister: new Date().getTime(),
  userIteractionInit: function(){
      var max = 378;
      mw.$(mwd).on('mousemove touchstart click keydown resize ajaxStop', function(){
          var time = new Date().getTime();
          if((time - mw._on.userIteractionInitRegister) > max){
              mw._on.userIteractionInitRegister = time;
              mw.trigger('UserInteraction');
          }
      });
  }
};

for(var x in mw._on) mw.on[x] = mw._on[x];



mw.hashHistory = [window.location.hash]

mw.prevHash = function(){
  var prev = mw.hashHistory[mw.hashHistory.length - 2];
  return prev !== undefined ? prev : '';
};



$(window).on("hashchange load", function(event){
    if(event.type === 'load'){
        mw._on.userIteractionInit();
    }

    mw.on.hashParamEventInit();

   var hash =  mw.hash();

   var isMWHash = hash.replace(/\#/g, '').indexOf('mw@') === 0;
   if (isMWHash) {
       var MWHash = hash.replace(/\#/g, '').replace('mw@', '');
       var el = document.getElementById(MWHash);
       if(el) {
           mw.tools.scrollTo(el);
       }
   }
   if(hash.contains("showpostscat")){
      mw.$("html").addClass("showpostscat");
   }
   else{
      mw.$("html").removeClass("showpostscat");
   }


   if (event.type === 'hashchange') {
     mw.hashHistory.push(mw.hash());
     var size = mw.hashHistory.length;
     var changes = mw.url.whichHashParamsHasBeenRemoved(mw.hashHistory[size-1], mw.hashHistory[size-2]), l=changes.length, i=0;
     if (l>0) {
       for( ; i < l; i++ ){
          mw.on.hashParam(changes[i], "", true, true);
       }
     }
   }
});


mw.event = {
    windowLeave: function(c) {
      document.documentElement.addEventListener('mouseout', function(e) {
          if (!e.relatedTarget && !e.toElement && c) {
              c.call(document.body, e);
          }
      });
    },
    cancel:function(e, prevent){
    prevent === true ? e.preventDefault() : '';
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    },
    key:function(e,key){
        return (e.keyCode === parseFloat(key));
    },
    page: function (e) {
      e = e.originalEvent || e;
      if (e.type.indexOf('touch') !== 0) {
        return {
            x: e.pageX,
            y: e.pageY
        };
      } else {
          return {
              x: e.changedTouches[0].pageX,
              y: e.changedTouches[0].pageY
          };
      }
    },
    targetIsField: function(e) {
        e = e.originalEvent || e;
        var t = e.target;
        return t.nodeName === 'INPUT' ||
            t.nodeName === 'textarea' ||
            t.nodeName === 'select';
    },
    get: function(e) {
        return e.originalEvent || e;
    },
    keyCode: function(e) {
        e = mw.event.get(e);
        return e.keyCode || e.which;
    },
    isKeyCode: function(e, code){
        return this.keyCode(e) === code;
    },
    is: {
      enter: function (e) {
        e = mw.event.get(e);
        return e.key === "Enter" || mw.event.isKeyCode(e, 13);
      },
      escape: function (e) {
          e = mw.event.get(e);
          return e.key === "Escape" || mw.event.isKeyCode(e, 27);
      },
      backSpace : function (e) {
        e = mw.event.get(e);
        return e.key === "Backspace" || mw.event.isKeyCode(e, 8);
      },
      delete: function (e) {
          e = mw.event.get(e);
          return e.key === "Delete" || mw.event.isKeyCode(e, 46);
      }
    }
};














// JavaScript Document
mw.require('forms.js');


mw.cart = {

    add_and_checkout: function (content_id, price, c) {
        if (typeof(c) == 'undefined') {
            var c = function () {
                window.location.href = mw.settings.api_url + 'shop/redirect_to_checkout';
            }
        }
        return mw.cart.add_item(content_id, price, c);
    },

    add_item: function (content_id, price, c) {
        var data = {};
        if (content_id == undefined) {
            return;
        }

        data.content_id = content_id;

        if (price != undefined && data != undefined) {
            data.price = price;
        }

        $.post(mw.settings.api_url + 'update_cart', data,
            function (data) {

             //   mw.cart.after_modify(data);


                if (typeof c === 'function') {
                    c.call(data);
                }
                mw.cart.after_modify(data,['mw.cart.add']);

              //  mw.trigger('mw.cart.add', [data]);
            });
    },

    add: function (selector, price, c) {
        var data = mw.form.serialize(selector);


        var is_form_valid = true;
        mw.$('[required],.required', selector).each(function () {

            if (!this.validity.valid) {
                is_form_valid = false

                var is_form_valid_check_all_fields_tip = mw.tooltip({
                    id: 'mw-cart-add-invalid-form-tooltip-show',
                    content: 'This field is required',
                    close_on_click_outside: true,
                    group: 'mw-cart-add-invalid-tooltip',
                    skin: 'warning',
                    element: this
                });


                return false;
            }
        });

        if (!is_form_valid) {
            return;
        }


        if (price != undefined && data != undefined) {
            data.price = price;
        }
        if (data.price == null) {
            data.price = 0;
        }
        $.post(mw.settings.api_url + 'update_cart', data,
            function (data) {

               // mw.trigger('mw.cart.add', [data]);

                if (typeof c === 'function') {
                    c.call(data);
                }
                mw.cart.after_modify(data,['mw.cart.add']);



            });
    },

    remove: function ($id) {
        var data = {}
        data.id = $id;

        $.post(mw.settings.api_url + 'remove_cart_item', data,
            function (data) {
                var parent = mw.$('.mw-cart-item-' + $id).parent();
                mw.$('.mw-cart-item-' + $id).fadeOut(function () {
                    mw.$(this).remove();
                    if (parent.find(".mw-cart-item").length == 0) {

                    }
                });
                //mw.cart.after_modify();
                // mw.reload_module('shop/cart');
                // mw.reload_module('shop/shipping');
                // mw.trigger('mw.cart.remove', [data]);
                mw.cart.after_modify(data,['mw.cart.remove']);

            });
    },

    qty: function ($id, $qty) {
        var data = {}
        data.id = $id;
        data.qty = $qty;
        $.post(mw.settings.api_url + 'update_cart_item_qty', data,
            function (data) {
                // mw.reload_module('shop/cart');
                // mw.reload_module('shop/shipping');
                // mw.trigger('mw.cart.qty', [data]);

                mw.cart.after_modify(data,['mw.cart.qty']);



            });

    },

    after_modify: function (data, events_to_trigger) {



        var modules = ["shop/cart", "shop/shipping", "shop/payments"].filter(function(module){
            return !!document.querySelector('[data-type="'+ module +'"');
        });

        var events = ['mw.cart.modify'];

        if(!!events_to_trigger) {
            var events = events.concat(events_to_trigger);
         }



        if(modules.length) {
            mw.reload_modules(modules, function (data) {
                events.forEach(function(item){
                    mw.trigger(item, [data]);
                })
            }, true);
        } else {
            events.forEach(function(item){
                mw.trigger(item, [data]);
            })
        }


        // mw.reload_module('shop/cart');
        // mw.reload_module('shop/shipping');
        // mw.reload_module('shop/payments');



        if((typeof data == 'object') && typeof data.cart_items_quantity !== 'undefined'){
            $('.js-shopping-cart-quantity').html(data.cart_items_quantity);
        }


        mw.trigger('mw.cart.after_modify', data);





    },

    checkout: function (selector, callback) {
        var form = mw.$(selector);


        var state = form.dataset("loading");
        if (state == 'true') return false;
        form.dataset("loading", 'true');
        form.find('.mw-checkout-btn').attr('disabled', 'disabled');
        form.find('.mw-checkout-btn').hide();
        var obj = mw.form.serialize(selector);
        $.ajax({
            type: "POST",
            url: mw.settings.api_url + 'checkout',
            data: obj
        })
            .done(function (data) {
                mw.trigger('checkoutDone', data);


                var data2 = data;

                if (data != undefined) {
                    mw.$(selector + ' .mw-cart-data-btn').removeAttr('disabled');
                    mw.$('[data-type="shop/cart"]').removeAttr('hide-cart');


                    if (typeof(data2.error) != 'undefined') {
                        mw.$(selector + ' .mw-cart-data-holder').show();
                        mw.response(selector, data2);
                    } else if (typeof(data2.success) != 'undefined') {


                        if (typeof callback === 'function') {
                            callback.call(data2.success);

                        } else if (typeof window[callback] === 'function') {
                            window[callback](selector, data2.success);
                        } else {

                            mw.$('[data-type="shop/cart"]').attr('hide-cart', 'completed');
                            mw.reload_module('shop/cart');
                            mw.$(selector + ' .mw-cart-data-holder').hide();
                            mw.response(selector, data2);
                        }


                        mw.trigger('mw.cart.checkout.success', data2);


                        if (typeof(data2.redirect) != 'undefined') {

                            setTimeout(function () {
                                window.location.href = data2.redirect;
                            }, 10)

                        }


                    } else if (parseInt(data) > 0) {
                        mw.$('[data-type="shop/checkout"]').attr('view', 'completed');
                        mw.reload_module('shop/checkout');
                    } else {
                        if (obj.payment_gw != undefined) {
                            var callback_func = obj.payment_gw + '_checkout';
                            if (typeof window[callback_func] === 'function') {
                                window[callback_func](data, selector);
                            }
                            var callback_func = 'checkout_callback';
                            if (typeof window[callback_func] === 'function') {
                                window[callback_func](data, selector);
                            }
                        }
                    }

                }
                form.dataset("loading", 'false');
                form.find('.mw-checkout-btn').removeAttr('disabled');
                form.find('.mw-checkout-btn').show();
                mw.trigger('mw.cart.checkout', [data]);
            });
    }
}



mw.cart.modal = {}

mw.cart.modal.init = function (root_node) {


    mw.cart.modal.bindStepButtons(root_node);


    var inner_cart_module = $(root_node).find('[parent-module-id="js-ajax-cart-checkout-process"]')[0];
    var inner_cart_module = $(root_node).find('[id="cart_checkout_js-ajax-cart-checkout-process"]')[0];

    if(inner_cart_module ){
        // mw.log(inner_cart_module.innerHTML);
        var check  = $(document).find('[id="'+inner_cart_module.id+'"]').length


        //mw.log(check);

        mw.on.moduleReload(inner_cart_module.id, function () {
            //alert('Module was reloaded')
        });
    }






    //
    // mw.on('mw.cart.after_modify', function () {
    //
    // });


    // var inner_cart_module = $(root_node).find('[data-type="shop/cart"]');
    // if(inner_cart_module.length > 0){
    //     if(!inner_cart_module.hasClass('cart-modal-module-events-binded')){
    //         var inner_cart_module_id = inner_cart_module.attr('id')
    //
    //         inner_cart_module.addClass('cart-modal-module-events-binded')
    //
    //
    //
    //         mw.on.moduleReload($('[data-type="shop/cart"]')[0], function () {
    //             alert('Module was reloaded')
    //         });
    //
    //     }
    //
    // }



}

mw.cart.modal.bindStepButtons = function (root_node) {

    $( root_node).off( "click",'.js-show-step');
    $( root_node).on( "click",'.js-show-step', function( event ) {




        var has_error = false;
        var step = mw.$(this).data('step');
        var holder = mw.tools.firstParentWithClass(this, 'js-step-content');





        if (step == 'checkout-complete') {
            return;
        }






        mw.$('input,textarea,select', holder).each(function () {
            if (!this.checkValidity()) {
                mw.$(this).addClass('is-invalid');
                // mw.$(this).addClass('error');
                has_error = 1;
            } else {
                mw.$(this).removeClass('is-invalid');
                // mw.$(this).removeClass('error');
            }

        });





        if (step == 'payment-method'  || step == 'preview') {
            if (has_error) {
                step = 'delivery-address'
            }
        }




        mw.$('.js-show-step').removeClass('active');

        mw.$('[data-step]').removeClass('active');
        mw.$('[data-step="' + step + '"]').addClass('active').parent().removeClass('muted');
        mw.$(this).addClass('active');
        step1 = '.js-' + step;
        mw.$('.js-step-content').hide();
        mw.$(step1).show();

        if (!has_error) {

        }

        if (has_error) {
            mw.notification.warning('Please fill the required fields');
        }

    });


    /*
        mw.$('.js-show-step').off('click');
        mw.$('.js-show-step').on('click', function () {



        });*/


}


$(document).ready(function(){
    mw.$('.mw-lazy-load-module').reload_module();
});


$(document).ready(function(){

    mw.common['data-mw-close']();
    mw.$(mwd.body)
    .on('click', '[data-mw-dialog]', function(e){
        mw.common['data-mw-dialog'](e);
    })
    .on('click', '[data-mw-close]', function(e){
        mw.common['data-mw-close'](e);
    });
});

mw.common = {
    setOptions:function (el, options) {
        options = options || {};
        if(el.target){
            el = el.target;
        }
        var settings = el.getAttribute('data-mw-settings');
        try{
            settings = JSON.parse(settings);
        }
        catch(e){
            settings = {};
        }
        return $.extend(options, settings)

    },
    'data-mw-close':function(e){
        if(e && e.target){
            var data = e.target.getAttribute('data-mw-close');
            var cookie = JSON.parse(mw.cookie.get('data-mw-close') || '{}');
            mw.$(data).slideUp(function(){
                mw.$(this).remove();
                cookie[data] = true;
                mw.cookie.set('data-mw-close', JSON.stringify(cookie));
            })
        }
        else{
            var cookie =  JSON.parse(mw.cookie.get('data-mw-close') || '{}');
            mw.$('[data-mw-close]').each(function(){
                var data = this.getAttribute('data-mw-dialog');
                if(cookie[data]){
                    mw.$(data).remove();
                }
            })
        }
    },
    'data-mw-dialog':function(e){
        var skin = 'basic';
        var overlay = true;
        var data = e.target.getAttribute('data-mw-dialog');

        if(data){
            e.preventDefault();
            data = data.trim();
            var arr = data.split('.');
            var ext = arr[arr.length-1];
            if(data.indexOf('http') === 0){
                if(ext && /(gif|png|jpg|jpeg|bpm|tiff)$/i.test(ext)){
                    mw.image.preload(data, function(w,h){
                        var html = "<img src='"+data+"'>";
                        var conf = mw.common.setOptions(e, {
                            width:w,
                            height:h,
                            content:html,
                            template:skin,
                            overlay:overlay,
                            overlayRemovesModal:true
                        })
                        mw.modal(conf);
                    });
                }
                else{
                    var conf = mw.common.setOptions(e, {
                        url:data,
                        width:'90%',
                        height:'90%',
                        template:skin,
                        overlay:overlay,
                        overlayRemovesModal:true
                    })
                    mw.modalFrame(conf)
                }
            }
            else if(data.indexOf('#') === 0 || data.indexOf('.') === 0){
                var conf = mw.common.setOptions(e, {
                    content:$(data)[0].outerHTML,
                    template:skin,
                    overlay:overlay,
                    overlayRemovesModal:true
                });
                mw.modal(conf);
            }
        }
    }
}


    mw.components = {
    _rangeOnce: false,
    'range': function(el){
        mw.lib.require('jqueryui');
        var options = this._options(el);
        var defaults = {
            range: 'min',
            animate: "fast"
        };
        var ex = {}, render = el;
        if(el.nodeName === 'INPUT'){
            el._pauseChange = false;
            el.type = 'text';
            render = document.createElement('div');
            $(el).removeClass('mw-range');
            $(render).addClass('mw-range');
            $(el).after(render);
            ex = {
                slide: function( event, ui ) {
                    el._pauseChange = true;
                   $(el).val(ui.value).trigger('change').trigger('input');
                    setTimeout(function () {
                        el._pauseChange = false;
                    }, 78);
                }
            };

        }
        var settings = $.extend({}, defaults, options, ex);
        if(el.min){
            settings.min = parseFloat(el.min);
        }
        if(el.max){
            settings.max = parseFloat(el.max);
        }
        if(el.value){
            settings.value = parseFloat(el.value);
        }
        mw.$(render)
            .slider(settings)
            .on('mousedown touchstart', function(){
                mw.$(this).addClass('active');
            });
        $(el).on('input', function(){
            mw.$(render).slider( "value", this.value );
        });
        if(!mw.components._rangeOnce) {
            mw.components._rangeOnce = true;
            mw.$(document.body).on('mouseup touchend', function(){
                mw.$('.mw-range.active').removeClass('active');
            });
        }
    },
    'color-picker': function(el){
        var options = this._options(el);
        var defaults = {
            position: 'bottom-center'
        };
        var settings = $.extend({}, defaults, options);
        var nav = document.createElement('div');
        nav.className = 'mw-ui-btn-nav mw-color-picker-holder';
        var view = document.createElement('div');
        view.className = 'mw-ui-btn';
        view.innerHTML = '<span class="mw-ui-btn-img"></span>';
        nav.appendChild(view);
        var inputEl;
        if(el.nodeName === 'INPUT'){
            inputEl = el;
            mw.$(el).addClass('mw-ui-field').after(nav);
            nav.appendChild(el);
            mw.$('.mw-ui-btn-img', view).css("background-color", el.value);
        }

        inputEl._time = null;
        var picker = mw.colorPicker({
            element:inputEl,
            position:settings.position,
            onchange:function(color){
                mw.$('.mw-ui-btn-img', view).css("background-color", color);
                mw.$(inputEl).trigger('change');
            }
        });
        mw.$(view).on("click", function(){
            setTimeout(function(){
                picker.toggle();
            }, 10);
        });
    },
    'file-uploader':function(el){
        var options = this._options(el);
        var defaults = {
            element: el
        };
        var settings = $.extend({}, defaults, options);
        var ch = mw.$(el).attr("onchange");

        mw.fileWindow({
            types:'media',
            change:function(url){
                try{
                    eval(ch);
                }
                catch(err){}
            }
        });
    },
    'modules-tabs':function(el){
        var options = this._options(el);
        options.breakPoint = 100; //makes accordion if less then 100px
        if(window.live_edit_sidebar) {
            mw.$(el).addClass('mw-accordion-window-height')
            options.breakPoint = 800; //makes accordion if less then 800px
        }
        var accordion = this.accordion(el);
        var tb = new mw.tabAccordion(options, accordion);
    },
    'tab-accordion':function(el){
       var options = this._options(el);
       var accordion = this.accordion(el);
       var tb = new mw.tabAccordion(options, accordion);
    },
    accordion:function(el){
        if(!el || el._accordion) return;
        if(!$(el).is(':visible')){
            setTimeout(function(){
                mw.components.accordion(el);
            }, 777, el);
            return;
        }
        el._accordion = true;
        var options = this._options(el);
        var settings = $.extend(options, {element:el})
        var accordion = new mw.uiAccordion(settings);
        if($(el).hasClass('mw-accordion-window-height')){
            accordion._setHeight = function(){
                var max =  mw.$(window).height() - (accordion.root.offset().top - mw.$(window).scrollTop());
                accordion.root.css('height', max);
                var content_max = max - (accordion.titles.length * accordion.titles.eq(0).outerHeight());
                accordion.contents.css('height', content_max);
            };
            accordion._setHeight();
            mw.$(window).on('load resize', function(){
                accordion._setHeight();
            });
            if(window !== top){
                mw.$(top).on('load resize', function(){
                    accordion._setHeight();
                });
            }
        }
        if($(el).hasClass('mw-accordion-full-height')){
            accordion._setHeight = function(){
                var max = Math.min($(el).parent().height(), mw.$(window).height());
                accordion.root.css('maxHeight', max);
                var content_max = max - (accordion.titles.length * accordion.titles.eq(0).outerHeight());
                accordion.contents.css('maxHeight', content_max);
            };
            accordion._setHeight();
            mw.$(window).on('load resize', function(){
                accordion._setHeight();
            });
            if(window !== top){
                mw.$(top).on('load resize', function(){
                    accordion._setHeight();
                });
            }
        }
        return accordion;
    },
    postSearch: function (el) {
        var defaults = {keyword: el.value, limit: 4};
        el._setValue = function (id) {
            mw.tools.ajaxSearch(this._settings, function () {

            });
        };

        el = mw.$(el);
        var options = JSON.parse(el.attr("data-options") || '{}');
        settings = $.extend({}, defaults, options);
        el[0]._settings = settings;

        el.wrap("<div class='mw-component-post-search'></div>");
        el.after("<ul></ul>");

        el.on("input focus blur", function (event) {

            if (!el[0].is_searching) {
                var val = el.val();
                if (event.type == 'blur') {
                    mw.$(this).next('ul').hide();
                    return false;
                }
                if (event.type == 'focus') {
                    if ($(this).next('ul').html()) {
                        mw.$(this).next('ul').show()
                    }
                    return false;
                }
                el[0].is_searching = true;

                this._settings.keyword = this.value;
                mw.$('ul', el).empty("")
                el.parent().addClass("loading");
                mw.tools.ajaxSearch(this._settings, function () {
                    var lis = [];
                    var json = this;
                    for (var item in json) {
                        var obj = json[item];
                        if (typeof obj === 'object') {
                            var li = document.createElement("li");
                            li._value = obj;
                            li.innerHTML = obj.title;
                            mw.$(li).on("mousedown touchstart", function () {
                                el.val(this._value.title);

                                el[0]._value = this._value;

                                el.trigger('postSelected', [this._value]);
                                mw.$(this.parentNode).hide()
                            })

                            lis.push(li);
                        }
                    }
                    el.parent().removeClass("loading");
                    var ul = el.parent().find("ul");
                    ul.empty().append(lis).show();
                    el[0].is_searching = false;
                });
            }
        });
        el.trigger("postSearchReady");
    },
    _options: function (el) {
        return mw.tools.elementOptions(el);
    },
    _init: function () {
        mw.$('.mw-field input[type="range"]').addClass('mw-range');
        mw.$('[data-mwcomponent]').each(function () {
            var component = mw.$(this).attr("data-mwcomponent");
            if (mw.components[component]) {
                mw.components[component](this);
                mw.$(this).removeAttr('data-mwcomponent')
            }
        });
        $.each(this, function(key){
            if(key.indexOf('_') === -1){
                mw.$('.mw-'+key+', mw-'+key).not(".mw-component-ready").each(function () {
                    mw.$(this).addClass('mw-component-ready');
                    mw.components[key](this);
                });
            }
        });
    }
};

$(document).ready(function () {
    mw.components._init();
});

$(window).on('load', function () {
    mw.components._init();
});

    mw.on('ComponentsLaunch', function () {
        mw.components._init();
    });

    mw.on('mwDialogShow', function () {
        setTimeout(function () {
            mw.components._init();
        }, 110);
    });

$(window).on('ajaxStop', function () {
    setTimeout(function () {
        mw.components._init();
    }, 100);
});

mw.registerComponent = function(name, func){
    if(mw.components[name]){
        console.warn('Component ' + name + ' already exists.');
        return;
    }
    mw.components[name] = func;
};


(function (mw) {


    var dialogEncapsulate = function (content, scripts) {
        scripts = $.merge(scripts || [], [
            mw.settings.site_url + 'apijs_settings?mwv=' + mw.version,
            mw.settings.site_url + 'apijs?mwv='+mw.version
        ]);

        var frame = document.createElement('iframe');
        frame.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
        frame.allowFullscreen = true;
        frame.scrolling = "no";
        frame.width = "100%";
        frame.frameBorder = "0";
        frame.style.display = 'none';
        document.body.appendChild(frame);

        frame.__int = setInterval(function(){
            if(frame.contentWindow && frame.contentWindow.document && frame.contentWindow.document.body){
                $(frame.contentWindow.document.head)
                    .append('<link rel="stylesheet" href="'+mw.settings.modules_url + 'microweber/default.css?mwv='+mw.version+'">');
                var c = 0;
                $.each(scripts, function(){
                    var el = frame.contentWindow.document.createElement('script');
                    $(el).on('load error', function(){
                        c++;
                        if(c === scripts.length){
                            setTimeout(function(){
                                $(frame).trigger('load');
                                $(frame.contentWindow).trigger('load');
                            }, 78);
                        }
                    });
                    el.src = this;
                    // $(frame.contentWindow.document.head).append(el);
                });

                $(frame.contentWindow.document.body).append(content);

                mw.tools.iframeAutoHeight(frame);
                clearInterval(frame.__int);

            }
        }, 78);
        return frame;
    };

    mw.dialog = function (options) {
        return new mw.Dialog(options);
    };
    mw.dialogIframe = function (options, cres) {
        options.pauseInit = true;
        var attr = 'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen';
        if (options.autoHeight) {
            attr += ' scrolling="no"';
            options.height = 'auto';
        }
        options.content = '<iframe src="' + mw.external_tool(options.url.trim()) + '" ' + attr + '><iframe>';
        options.className = ('mw-dialog-iframe mw-dialog-iframe-loading ' + (options.className || '')).trim();
        options.className += (options.autoHeight ? ' mw-dialog-iframe-autoheight' : '');
        var dialog = new mw.Dialog(options, cres);
        dialog.iframe = dialog.dialogContainer.querySelector('iframe');
        mw.tools.loading(dialog.dialogContainer, 90);



        setTimeout(function () {
            var frame = dialog.dialogContainer.querySelector('iframe');
            frame.style.minHeight = 0; // reset in case of conflicts
            if (options.autoHeight) {
                mw.tools.iframeAutoHeight(frame, {dialog: dialog});
            } else{
                $(frame).height(options.height - 60);
                frame.style.position = 'relative';
            }
            mw.$(frame).on('load', function () {
                mw.tools.loading(dialog.dialogContainer, false);
                setTimeout(function () {
                    dialog.center();
                    mw.$(frame).on('bodyResize', function () {
                        dialog.center();
                    });
                    dialog.dialogMain.classList.remove('mw-dialog-iframe-loading');
                    frame.contentWindow.thismodal = dialog;
                    if (options.autoHeight) {
                        mw.tools.iframeAutoHeight(frame, {dialog: dialog});
                    }
                }, 78);
                if (mw.tools.canAccessIFrame(frame)) {
                    mw.$(frame.contentWindow.document).on('keydown', function (e) {
                        if (mw.event.is.escape(e) && !mw.event.targetIsField(e)) {
                            if(mw.top().__dialogs && mw.top().__dialogs.length){
                                var dlg = mw.top().__dialogs;
                                dlg[dlg.length - 1]._doCloseButton();
                                $(dlg[dlg.length - 1]).trigger('closedByUser');
                            }
                            else {
                                if (dialog.options.closeOnEscape) {
                                    dialog._doCloseButton();
                                    $(dialog).trigger('closedByUser');
                                }
                            }
                        }
                    });
                }
                if(typeof options.onload === 'function') {
                    options.onload.call(dialog);
                }
            });
        }, 12);
        return dialog;
    };

    mw.dialog.get = function (selector) {
        var $el = mw.$(selector);
        var el = $el[0];
        if(!el) return false;
        if(el._dialog) {
            return el._dialog;
        }
        var child_cont = el.querySelector('.mw-dialog-holder');
        var parent_cont = $el.parents(".mw-dialog-holder:first");
        if (child_cont) {
            return child_cont._dialog;
        }
        else if (parent_cont.length !== 0) {
            return parent_cont[0]._dialog;
        }
        else {
             // deprecated
            child_cont = el.querySelector('.mw_modal');
            parent_cont = $el.parents(".mw_modal:first");
            if(child_cont) {
                return child_cont.modal;
            } else if (parent_cont.length !== 0) {
                return parent_cont[0].modal;
            }
            return false;
        }
    };


    mw.Dialog = function (options, cres) {

        var scope = this;

        options = options || {};
        options.content = options.content || options.html || '';

        if(!options.height && typeof options.autoHeight === 'undefined') {
            options.height = 'auto';
            options.autoHeight = true;
        }

        var defaults = {
            skin: 'default',
            overlay: true,
            overlayClose: false,
            autoCenter: true,
            root: document,
            id: mw.id('mw-dialog-'),
            content: '',
            closeOnEscape: true,
            closeButton: true,
            closeButtonAppendTo: '.mw-dialog-header',
            closeButtonAction: 'remove', // 'remove' | 'hide'
            draggable: true,
            scrollMode: 'inside', // 'inside' | 'window',
            centerMode: 'intuitive', // 'intuitive' | 'center'
            containment: 'window',
        };

        this.options = $.extend({}, defaults, options, {
            skin: 'default'
        });

        this.id = this.options.id;
        var exist = document.getElementById(this.id);
        if (exist) {
            return exist._dialog;
        }

        this.hasBeenCreated = function () {
            return this.options.root.getElementById(this.id) !== null;
        };

        if (this.hasBeenCreated()) {
            return this.options.root.getElementById(this.id)._dialog;
        }

        if(!mw.top().__dialogs ) {
            mw.top().__dialogs = [];
        }
        if (!mw.top().__dialogsData) {
            mw.top().__dialogsData = {};
        }


        if (!mw.top().__dialogsData._esc) {
            mw.top().__dialogsData._esc = true;
            mw.$(document).on('keydown', function (e) {
                if (mw.event.is.escape(e)) {
                    var dlg = mw.top().__dialogs[mw.top().__dialogs.length - 1];
                    if (dlg.options.closeOnEscape) {
                        dlg._doCloseButton();
                    }
                }
            });
        }

        mw.top().__dialogs.push(this);

        this.draggable = function () {
            if (this.options.draggable && $.fn.draggable) {
                var $holder = mw.$(this.dialogHolder);
                $holder.draggable({
                    handle: this.options.draggableHandle || '.mw-dialog-header',
                    start: function () {
                        $holder.addClass('mw-dialog-drag-start');
                        scope._dragged = true;
                    },
                    stop: function () {
                        $holder.removeClass('mw-dialog-drag-start');
                    },
                    containment: scope.options.containment,
                    iframeFix: true
                });
            }
        };

        this.header = function () {
            this.dialogHeader = this.options.root.createElement('div');
            this.dialogHeader.className = 'mw-dialog-header';
            if (this.options.title || this.options.header) {
                this.dialogHeader.innerHTML = '<div class="mw-dialog-title">' + (this.options.title || this.options.header) + '</div>';
            }
        };

        this.footer = function (content) {
            this.dialogFooter = this.options.root.createElement('div');
            this.dialogFooter.className = 'mw-dialog-footer';
            if (this.options.footer) {
                $(this.dialogFooter).append(this.options.footer);
            }
        };

        this.title = function (title) {
            var root = mw.$('.mw-dialog-title', this.dialogHeader);
            if (typeof title === 'undefined') {
                return root.html();
            } else {
                if (root[0]) {
                    root.html(title);
                }
                else {
                    mw.$(this.dialogHeader).prepend('<div class="mw-dialog-title">' + title + '</div>');
                }
            }
        };


        this.build = function () {
            this.dialogMain = this.options.root.createElement('div');

            this.dialogMain.id = this.id;
            var cls = 'mw-defaults mw-dialog mw-dialog-scroll-mode-' + this.options.scrollMode + ' mw-dialog-skin-' + this.options.skin;
            cls += (!this.options.className ? '' : (' ' + this.options.className));
            this.dialogMain.className = cls;
            this.dialogMain._dialog = this;

            this.dialogHolder = this.options.root.createElement('div');
            this.dialogHolder.id = 'mw-dialog-holder-' + this.id;


            this.dialogHolder._dialog = this;

            this.header();
            this.footer();
            this.draggable();



            this.dialogContainer = this.options.root.createElement('div');
            this.dialogContainer._dialog = this;

            this.dialogContainer.className = 'mw-dialog-container';
            this.dialogHolder.className = 'mw-dialog-holder';

            var cont = this.options.encapsulate ? dialogEncapsulate(this.options.content) : this.options.content;

            mw.$(this.dialogContainer).append(cont);

            if (this.options.encapsulate) {
                this.iframe = cont;
                this.iframe.style.display = '';
            }

            this.dialogHolder.appendChild(this.dialogHeader);
            this.dialogHolder.appendChild(this.dialogContainer);
            this.dialogHolder.appendChild(this.dialogFooter);

            this.closeButton = this.options.root.createElement('div');
            this.closeButton.className = 'mw-dialog-close';

            this.closeButton.$scope = this;

            this.closeButton.onclick = function () {
                this.$scope[this.$scope.options.closeButtonAction]();
                $(this.$scope).trigger('closedByUser');
            };
            this.main = mw.$(this.dialogContainer); // obsolete
            this.main.width = this.width;

            this.width(this.options.width || 600);
            this.height(this.options.height || 320);

            this.options.root.body.appendChild(this.dialogMain);
            this.dialogMain.appendChild(this.dialogHolder);
            if (this.options.closeButtonAppendTo) {
                mw.$(this.options.closeButtonAppendTo, this.dialogMain).append(this.closeButton)
            }
            else {
                this.dialogHolder.appendChild(this.closeButton);

            }
            this.dialogOverlay();
            return this;
        };

        this._doCloseButton = function() {
            this[this.options.closeButtonAction]();
        };

        this.containmentManage = function () {
            if (scope.options.containment === 'window') {
                if (scope.options.scrollMode === 'inside') {
                    var rect = this.dialogHolder.getBoundingClientRect();
                    var $win = mw.$(window);
                    var sctop = $win.scrollTop();
                    var height = $win.height();
                    if (rect.top < sctop || (sctop + height) > (rect.top + rect.height)) {
                        this.center();
                    }
                }
            }
        };

        this.dialogOverlay = function () {
            this.overlay = this.options.root.createElement('div');
            this.overlay.className = 'mw-dialog-overlay';
            this.overlay.$scope = this;
            if (this.options.overlay === true) {
                this.dialogMain.appendChild(this.overlay);
            }
            mw.$(this.overlay).on('click', function () {
                if (this.$scope.options.overlayClose === true) {
                    this.$scope._doCloseButton();
                    $(this.$scope).trigger('closedByUser');
                }
            });

            return this;
        };

        this._afterSize = function() {
            if(mw._iframeDetector) {
                mw._iframeDetector.pause = true;
                var frame = window.frameElement;
                if(frame && parent !== top){
                    var height = this.dialogContainer.scrollHeight + this.dialogHeader.scrollHeight;
                    if($(frame).height() < height) {
                        frame.style.height = ((height + 100) - this.dialogHeader.offsetHeight - this.dialogFooter.offsetHeight) + 'px';
                        if(window.thismodal){
                            thismodal.height(height + 100);
                        }

                    }
                }
            }
        };

        this.show = function () {
            mw.$(this.dialogMain).find('iframe').each(function(){
                this._intPause = false;
            });
            mw.$(this.dialogMain).addClass('active');
            this.center();
            this._afterSize();
            mw.$(this).trigger('Show');
            mw.trigger('mwDialogShow', this);
            return this;
        };

        this._hideStart = false;
        this.hide = function () {
            if (!this._hideStart) {
                this._hideStart = true;
                mw.$(this.dialogMain).find('iframe').each(function(){
                    this._intPause = true;
                });
                setTimeout(function () {
                    scope._hideStart = false;
                }, 300);
                mw.$(this.dialogMain).removeClass('active');
                if(mw._iframeDetector) {
                    mw._iframeDetector.pause = false;
                }
                mw.$(this).trigger('Hide');
                mw.trigger('mwDialogHide', this);
            }
            return this;
        };

        this.remove = function () {
            this.hide();
            mw.removeInterval('iframe-' + this.id);
            mw.$(this).trigger('BeforeRemove');
            mw.$(this.dialogMain).remove();
            mw.$(this).trigger('Remove');
            mw.trigger('mwDialogRemove', this);
            for (var i = 0; i < mw.top().__dialogs.length; i++) {
                if (mw.top().__dialogs[i] === this) {
                    mw.top().__dialogs.splice(i, 1);
                    break;
                }
            }
            return this;
        };

        this.destroy = this.remove;

        this._prevHeight = -1;
        this._dragged = false;

        this.center = function (width, height) {
            var $holder = mw.$(this.dialogHolder), $window = mw.$(window);
            var holderHeight = height || $holder.outerHeight();
            var holderWidth = width || $holder.outerWidth();
            var dtop, css = {};

            if (this.options.centerMode === 'intuitive' && this._prevHeight < holderHeight) {
                dtop = $window.height() / 2 - holderHeight / 2;
            } else if (this.options.centerMode === 'center') {
                dtop = $window.height() / 2 - holderHeight / 2;
            }

            if (!scope._dragged) {
                css.left = $window.outerWidth() / 2 - holderWidth / 2;
            } else {
                css.left = parseFloat($holder.css('left'));
            }

            if(css.left + holderWidth > $window.width()){
                css.left = css.left - ((css.left + holderWidth) - $window.width());
            }

            if (dtop) {
                css.top = dtop > 0 ? dtop : 0;
            }

            if(window !== mw.top().win && document.body.scrollHeight > mw.top().win.innerHeight){
                $win = $(mw.top());

                css.top = $(document).scrollTop() + 50;
                var off = $(window.frameElement).offset();
                if(off.top < 0) {
                    css.top += Math.abs(off.top);
                }
                if(window.thismodal) {
                    css.top += thismodal.dialogContainer.scrollTop;
                }

            }


            $holder.css(css);
            this._prevHeight = holderHeight;


            this._afterSize();
            mw.$(this).trigger('dialogCenter');

            return this;
        };

        this.width = function (width) {
            if(!width) {
                return mw.$(this.dialogHolder).outerWidth();
            }
            mw.$(this.dialogHolder).width(width);
            this._afterSize();
        };
        this.height = function (height) {
            if(!height) {
                return mw.$(this.dialogHolder).outerHeight();
            }
            mw.$(this.dialogHolder).height(height);
            this._afterSize();
        };
        this.resize = function (width, height) {
            if (typeof width !== 'undefined') {
                this.width(width);
            }
            if (typeof height !== 'undefined') {
                this.height(height);
            }
            this.center(width, height);
        };
        this.content = function (content) {
            this.options.content = content || '';
            $(this.dialogContainer).empty().append(this.options.content);
            return this;
        };

        this.result = function(result, doClose) {
            this.value = result;
            if(this.options.onResult){
                this.options.onResult.call( this, result );
            }
            if (cres) {
                cres.call( this, result );
            }
            $(this).trigger('Result', [result]);
            if(doClose){
                this._doCloseButton();
            }
        };


        this.contentMaxHeight = function () {
            var scope = this;
            if (this.options.scrollMode === 'inside') {
                mw.interval('iframe-' + this.id, function () {
                    var max = mw.$(window).height() - scope.dialogHeader.clientHeight - scope.dialogFooter.clientHeight - 40;
                    scope.dialogContainer.style.maxHeight = max + 'px';
                    scope.containmentManage();
                });
            }
        };
        this.init = function () {
            this.build();
            this.contentMaxHeight();
            this.center();
            this.show();
            if (this.options.autoCenter) {
                (function (scope) {
                    mw.$(window).on('resize orientationchange load', function () {
                        scope.contentMaxHeight();
                        scope.center();
                    });
                })(this);
            }
            if (!this.options.pauseInit) {
                mw.$(this).trigger('Init');
            }
            setTimeout(function(){
                scope.center();
                setTimeout(function(){
                    scope.center();
                    setTimeout(function(){
                        scope.center();
                    }, 3000);
                }, 333);
            }, 78);


            return this;
        };
        this.init();

    };

    mw.Dialog.elementIsInDialog = function (node) {
        return mw.tools.firstParentWithClass(node, 'mw-dialog');
    };


})(window.mw);


(function () {
    function scoped() {
        var all = document.querySelectorAll('style[scoped]'), i = 0;

        try {
            for( ; i < all.length; i++ ) {
                var parent = all[i].parentNode;
                parent.id = parent.id || mw.id('scoped-id-');
                var prefix = '#' + parent.id + ' ';
                var rules = all[i].sheet.rules;
                var r = 0;
                for ( ; r < rules.length; r++) {
                    var newRule = prefix + rules[r].cssText;
                    all[i].sheet.deleteRule(r);
                    all[i].sheet.insertRule(newRule, r);
                }
                all[i].removeAttribute('scoped');
            }
        }
        catch(error) {

        }


    }
    scoped();
    $(window).on('load', function () {
        scoped();
    });
})();



mw._instrument = function(){
    this._value = null;
    var $scope = $(this);
    this.value = function(val){
        if (!val) return this._value;
        this._value = val;
        $scope.trigger('change', [val]);
        return this;
    };
};
mw.instruments = {
    _create:function (config) {
        config = config || {};
        var settings = $.extend({}, config);
        var frame = document.createElement('iframe');
        frame.src = mw.external_tool(settings.url);
        frame.className = 'mw-instrument-frame';
        frame.frameBorder = '0';
        $(frame).css(settings.css || {width: '100%'}).on('load', function () {
            mw.instruments._prepareFrame(frame, settings);
        });
        return frame;
    },
    _prepareFrame: function (frame, settings) {
        frame.contentWindow.thisframe = frame;
        if(!settings.css || !settings.css.height) {
            mw.tools.iframeAutoHeight(frame);
        }
    },
    _run: {},
    run: function(config){
        if(!config || !config.instrument || !config.id) {
            return;
        }
        config.show = typeof config.show === 'undefined' ? true : config.show;
        config.width = config.width || 660;
        if(!this._run[config.id]){
            var inst = this[config.instrument]({
                mode: 'inline'
            });
            var div = $('<div id="'+config.id+'" />');
            div.hide();
            $(document.body).append(div);
            div.append(inst.frame);
            this._run[config.id] = inst;
        }
        if (config.show) {
            mw.$('#' + config.id).mwDialog({
                //id: 'mw-instrument-dialog-' + config.id,
                width: config.width
            });
        }
        return this._run[config.id];
    },
    createMode: function(mode, url, id){
        var frame, dialog;
        if(mode === 'inline'){
            frame = this._create({
                url: 'link_editor'
            });
        } else if(mode === 'dialog') {
            var exists = mw.dialog.get('#' + id.replace('#', ''));
            if(exists){
                exists.show();
                return {
                    dialog: exists,
                    frame: exists.iframe
                };
            }
            dialog = mw.dialogIframe({
                url: url,
                height: 'auto',
                autoHeight: true
            });
            frame = dialog.iframe;
        } else {
            return {};
        }

        return {
            frame: frame,
            dialog: dialog
        };
    },
    _handlers: {},
    handler: function(id, val){
        if(!val) {
            return this._handlers[id];
        }
        this._handlers[id] = val;
    },
    link: function(config){
        config = config || {};
        var defaults = {
            mode: 'dialog' // 'dialog', 'inline'
        };
        var settings = $.extend({}, defaults, config);
        var frame, dialog;
        if(settings.mode === 'inline'){
            frame = this._create({
                url: 'link_editor'
            });
            mw.tools.iframeAutoHeight(frame);
        } else if(settings.mode === 'dialog') {
          dialog = mw.dialogIframe({
              url:' link_editor',
              height: 'auto',
              autoHeight: true,
              width: 800
          });
          frame = dialog.iframe;
        } else {
            return {};
        }
        var id = mw.id();
        var final = {
            frame: frame,
            dialog: dialog,
            handler: $({}),
            id: id,
            window: window
        };
        this.handler(id, final);
        $(frame).on('load', function(url, target, text){
            this.contentWindow.mw.instrumentData = final;
        });
        if(frame.contentWindow && frame.contentWindow.mw){
            frame.contentWindow.mw.instrumentData = final;
        }
        return final;
    },
    file: function(config){
        config = config || {};
        var defaults = {
            mode: 'dialog' // 'dialog', 'inline'
        };
        var settings = $.extend({}, defaults, config);
        var frame, dialog;
        var url = 'file_picker';
        if(config.types) {
            url += '?types=' + config.types
        }
        if(settings.mode === 'inline'){
            frame = this._create({
                url: url
            });
        } else if(settings.mode === 'dialog') {
            dialog = mw.dialogIframe({
                url:url,
                height: 'auto',
                autoHeight: true
            });
            frame = dialog.iframe;
        } else {
            return {};
        }
        var id = mw.id();
        var final = {
            frame: frame,
            dialog: dialog,
            handler: $({}),
            id: id,
            window: window
        };
        this.handler(id, final);
        $(frame).on('load', function(url, target, text){
            this.contentWindow.mw.instrumentData = final;
        });
        if(frame.contentWindow && frame.contentWindow.mw){
            frame.contentWindow.mw.instrumentData = final;
        }
        return final;
    }
};


/***********************


    var myFont = new mw.font();


    //create group of fonts

    myFont.set({
        family:{
            Roboto:[300,400],
            'Architects Daughter':[400, 700],
        },
        subset:["cyrillic","cyrillic-ext","korean","latin-ext"]
    })

    //add to group

    myFont.add({
        family:{
            Roboto:[100]
        }
    })


    myFont.remove('Roboto', 100) // removes weight 100

    myFont.remove('Roboto')  // removes family



*************************/




mw.fonts = {
    _create:function(){
        var el = document.createElement('link');
        el.rel = 'stylesheet';
        document.documentElement.appendChild(el);
        return el;
    },
    _unique:function(obj){
        var data = {};
        var n;
        for(n in obj){
            data.name = n;
            data.weight = obj[n];
        }
        return data;
    },
    google:{
        create:function(){
            var root = 'https://fonts.googleapis.com/css?';
            var el = mw.fonts._create();
            el._rooturl = root;
            el._config = {};

            return el;
        },
        remove:function(el, family, weight){
            if(!family){
                mw.$(el).removeAttr('href');
                el._config = {};
            }
            else if(!weight){
                if(el._config.family && el._config.family[family]){
                    delete el._config.family[family];
                }
                this.config(el._config, el)
            }
            else if(weight && family){
                weight = parseInt(weight, 10)
                if(el._config.family && el._config.family[family]){
                    for(var i=0; i<el._config.family[family].length; i++){
                        el._config.family[family][i] = parseInt(el._config.family[n][i], 10);
                    }
                }
            }
        },
        setUrl:function(options, el){
            var url = 'family=';
            for( var i in options.family){
                url += i + ':'+options.family[i].join(',') + '|';
            }
            url = url.substring(0, url.length - 1);

            if(options.subset){
                url += '&amp;subset=' + options.subset.join(',')
            }
            el._config = options;
            el.href = el._rooturl + url.replace(/\s/g, '+');
        },
        config:function(options, el, mode){

            /*
            {
                family:{
                     'Roboto': [300,500] ,
                    'Tajawal': [400,700]
                },

                subset:["cyrillic","cyrillic-ext","korean","latin-ext"]
            }
            */

            for(var n in el._config.family){
                for(var i=0; i<el._config.family[n].length; i++){
                    el._config.family[n][i] = parseInt(el._config.family[n][i], 10);
                }
            }

            if(mode == 'add'){
                $.each(options.family, function(key,val){
                    if(el._config.family && el._config.family[key]){
                        options.family[key] = el._config.family[key].concat(options.family[key]);
                        options.family[key] = options.family[key].filter( function (value, i, self) {
                            return self.indexOf(value) == i;
                        });
                    }
                });
                $.each(el._config.family, function(key,val){
                    if(options.family && !options.family[key]){
                        options.family[key] = el._config.family[key]
                    }
                });
            }

            this.setUrl(options, el)

        }
    },
    noop:{
        fonts:[],
        config:function(){

        }
    }
}
mw.font = function(){
    this.data = {};
    this.init = function(options){
        options = options || {};
        if(options.provider){
            options.provider = options.provider.trim().toLowerCase();
        }
        else{
            options.provider = 'google';
        }
        if(!this[options.provider]){
            this[options.provider] = mw.fonts[options.provider].create();
        }
        this.options = options;
    }
    this.remove = function(family, weight){
        mw.fonts[this.options.provider].remove(this[options.provider], family, weight);
    }

    this.add = function(options){
        this.init(options)
        mw.fonts[this.options.provider].config(this.options, this[options.provider], 'add');
    };

    this.set = function(options){
        this.init(options);
        mw.fonts[this.options.provider].config(this.options, this[options.provider]);
    };


}







$(window).on('load', function(){
    if(typeof $().emulateTransitionEnd === 'function'){
        $(".modal").each(function(){
            var selector = 'form[action*="/api/"], form.mw-checkout-form';
            var hasMWForm = $(selector, this).length;
            if(hasMWForm){
                $(this).on('shown.bs.modal', function() {
                    $(document).off('focusin.modal');
                });
            }
        })
    }
})



mw.session = {
    checkPause: false,
    checkPauseExplicitly: false,
    check: function (callback) {
        if (!mw.session.checkPause) {
            mw.session.checkPause = true;
            if (mw.session.checkPauseExplicitly) {
                return false;
            }
            $.post(mw.settings.api_url + "is_logged", function (data) {
                if (data === null) {
                    return;
                }
                if (data !== false) {
                    if (typeof callback === 'function') {
                        callback.call(undefined, true);
                    }

                }
                else {
                    if (typeof callback === 'function') {
                        callback.call(undefined, false)
                    }

                }
                mw.session.checkPause = false;
            });
        }
    },
    logRequest: function () {
        var modal = mw.tools.modal.init({
            html: "<h3 style='margin:0;'>" + mw.msg.session_expired + ".</h3> <p style='margin:0;'>" + mw.msg.login_to_continue + ".</p> <br> <div id='session_popup_login'></div>",
            id: "session_modal",
            name: "session_modal",
            overlay: true,
            width: 400,
            height: 300,
            template: 'mw_modal_basic',
            callback: function () {
                mw.load_module("users/login", '#session_popup_login', false, {template: 'popup'});
            }
        });
    },
    checkInit: function () {
        if (self !== top) {
            return false;
        }
        setInterval(function () {
            mw.session.check(function (is_logged) {
                if (is_logged) {
                    var m = mw.tools.modal.get("#session_modal");
                    if (m) {
                        mw.$(m.overlay).remove();
                        mw.$(m.main).remove();
                    }
                }
                else {
                    mw.session.logRequest();
                }
            });
        }, 90000);
    }
}
$(document).ready(function () {

    mw.$(document).on("ajaxSend",function () {

        mw.session.checkPause = true;
    }).bind("ajaxComplete", function () {
            mw.session.checkPause = false;
        });
});

'use strict';

let Html = function (tag) {
  let el = document.createElement(tag);

  return {
    get node() {
      return el;
    },

    appendChild: function (node) {
      el.appendChild(node);

      return this;
    },

    setAttribute: function (attribute, value) {
      el[attribute] = value;

      return this;
    },

    setClass: function (cls) {
      el.className = cls;

      return this;
    },
  };
};

window.addEventListener('load', () => {
  console.log("drafting.js loaded");

  let siteTitle = Html('h1')
    .setAttribute('innerHTML', 'Drafting');

  let siteSubtitle = Html('h3')
    .setAttribute('innerHTML', '一個 html/css/node.js 的練習專案');

  let siteBanner = Html('header')
    .setClass('site-banner')
    .appendChild(siteTitle.node)
    .appendChild(siteSubtitle.node);

  let siteStatus = Html('header')
    .setClass('site-status')
    .setAttribute('innerHTML', '<span>x:<span id="cursor-x">0</span>y:<span id="cursor-y">0</span>');

  /*
  // E _ 可輸入文字的內框
  // D _ 輸入框 E 的外框，包含 E
  // C _ 標籤 (血量、姓名、攻擊力...等)
  // B _ 包含 D、E
  // A _ 包含 Bname、Bhp、Bap、Bdp
  */

  // 姓名
  let Ename = Html('input')
    .setClass('input')
    .setAttribute('placeholder', '李知勳')
    .setAttribute('id', 'name')
    .setAttribute('type', 'text');

  let Dname = Html('p')
    .setClass('control')
    .appendChild(Ename.node);

  let Cname = Html('label')
    .setClass('control-label')
    .setAttribute('htmlFor', 'name')
    .setAttribute('innerHTML', '姓名');

  let Bname = Html('div')
    .setClass('h-field')
    .appendChild(Cname.node)
    .appendChild(Dname.node);

  // 血量
  let Ehp = Html('input')
    .setClass('input')
    .setAttribute('placeholder', '1122')
    .setAttribute('id', 'hp')
    .setAttribute('type', 'number');

  let Dhp = Html('p')
    .setClass('control')
    .appendChild(Ehp.node);

  let Chp = Html('label')
    .setClass('control-label')
    .setAttribute('htmlFor', 'hp')
    .setAttribute('innerHTML', '血量 (hp)');

  let Bhp = Html('div')
    .setClass('h-field')
    .appendChild(Chp.node)
    .appendChild(Dhp.node);

  // 攻擊力
  let Eap = Html('input')
    .setClass('input')
    .setAttribute('placeholder', '1996')
    .setAttribute('id', 'ap')
    .setAttribute('type', 'number');

  let Dap = Html('p')
    .setClass('control')
    .appendChild(Eap.node);

  let Cap = Html('label')
    .setClass('control-label')
    .setAttribute('htmlFor', 'ap')
    .setAttribute('innerHTML', '攻擊力 (ap)');

  let Bap = Html('div')
    .setClass('h-field')
    .appendChild(Cap.node)
    .appendChild(Dap.node);

  // 防禦力
  let Edp = Html('input')
    .setClass('input')
    .setAttribute('placeholder', '1717')
    .setAttribute('id', 'dp')
    .setAttribute('type', 'number');

  let Ddp = Html('p')
    .setClass('control')
    .appendChild(Edp.node);

  let Cdp = Html('label')
    .setClass('control-label')
    .setAttribute('htmlFor', 'dp')
    .setAttribute('innerHTML', '防禦力 (dp)');

  let Bdp = Html('div')
    .setClass('h-field')
    .appendChild(Cdp.node)
    .appendChild(Ddp.node);

  let siteBody = Html('article')
    .setClass('site-body')
    .appendChild(siteStatus.node);

  let A = Html('div')
    .setClass('pane')
    .appendChild(Bname.node)
    .appendChild(Bhp.node)
    .appendChild(Bap.node)
    .appendChild(Bdp.node);

  let copyright = Html('small')
    .setClass('float-right')
    .setAttribute('innerHTML', '&copy; Copyright 2020，佛光大學資訊應用學系');

  let siteFooter = Html('footer')
    .setClass('site-footer')
    .appendChild(copyright.node);

  let siteContainer = Html('div')
    .setClass('site-container')
    .appendChild(siteBanner.node)
    .appendChild(siteBody.node)
    .appendChild(siteFooter.node);

  document.body.appendChild(siteContainer.node);

  // 準備承載 *網頁標題* (title) 的 HTML 元素
  let cardTitle = Html('span')
    .setAttribute('textContent', 'Drafting!');

  // 準備承載 *網頁版頭* (header) 的 HTML 元素
  let cardHeader = Html('header')
    .setClass('card-header')
    .appendChild(cardTitle.node); // 將 *網頁標題* 放上 *網頁版頭*

  // 準備承載 *網頁內容* 的 HTML 元素
  let cardContent = Html('article')
    .setClass('card-content')
    .appendChild(A.node);

  // 準備 *網頁桌面* 的 HTML 元素
  let cardDesktop = Html('section')
    .setClass('card')
    .appendChild(cardHeader.node)   // 將 *網頁版頭* 放上 *網頁桌面*
    .appendChild(cardContent.node); // 將 *網頁內容* 放上 *網頁桌面*

  // 將 *網頁桌面* 放上 *網頁*
  let desktop = document
    .querySelector('.site-body')
    .appendChild(cardDesktop.node);

  /*
  // 滑鼠游標移動追踪
  //
  // @callback
  // @param 'mousemove' : DOM 事件名
  // @param e : DOM event 物件
  // @returns {undefined}
  */
  desktop.addEventListener('mousemove', (e) => {
    document.getElementById('cursor-x').textContent = e.clientX;
    document.getElementById('cursor-y').textContent = e.clientY;
  });
});

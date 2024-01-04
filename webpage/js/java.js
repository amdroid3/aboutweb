function beta() {
  alert('いつか作るかも。多分やらないと思うけど。')
}

function winopen(url) {
  window.open(url, "window_name", "width=660,height=820,scrollbars=yes");
}

//jQuery修正
window.onload = function(){
  $('.message-text').hide();
  $('.message-text').slideDown(700);
  $('.content-wrapper').fadeIn('normal');
  $('.wait').fadeOut('fast');
};

// ヘッダー呼び出し
function header(){ 
  var html = "";
  html += '<header>';
  html += '<div class="header" id="slide">';
  html += '<div class="logo"><a href="./index.html"><img src="./img/logo.png"></a></div>';
  html += '<div class="links">';
  html += '<a href="./about.html">About Me</a>';
  html += '<a href="./news.html">News</a>';
  html += '<a href="./special.html">My Works</a>';
  html += '</div>';
  html += '<div class="sociallogo">';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  html += '<div class="header_smart">';
  html += '<a href="./index.html"><img class="logo" src="./img/logo.png" style="height:30%; margin-top:4px;"></a>';
  html += '<div class="links_smart">';
  html += '<a href="./about.html">About Me</a>';
  html += '<a href="./news.html">News</a>';
  html += '<a href="./special.html">My Works</a>';
  html += '</div>';
  html += '</div>';
  html += '</header>';
  document.write(html);
}
    
function footer() {
  var html = "";
  html += '<div class="footer">';
  html += '<div class="footer-left">';
  html += '<p>Various Team All Rights Reserved.</p>';
  html += '</div>';
  html += '<div class="footer-right">';
  html += '<a href="./index.html">Topへ</a>';
  html += '</div>';
  document.write(html);
}

function footer_index() {
  var html = "";
  html += '<div class="footer">';
  html += '<div class="footer-left">';
  html += '<p>Various Team All Rights Reserved. Animation Powered by <a href="https://www.vantajs.com/" target="_blank">Vanta.js</a></p>';
  html += '</div>';
  document.write(html);
}
// Generated by CoffeeScript 1.6.2
$(function(){var e,t;e=$("#start");t=new Tour({onStart:function(){return e.addClass("disabled",!0)},onEnd:function(){return e.removeClass("disabled",!0)}});t.addStep({element:"#download",placement:"bottom",title:"Welcome to Bootstrap Tour!",content:"Introduce new users to your product by walking them through it step by step. Builton the awesome <a href='http://twitter.github.com/bootstrap' target='_blank'>Bootstrap from Twitter.</a>"});t.addStep({element:"#usage",placement:"top",title:"Setup in four easy steps",content:"Easy is better, right? Easy like Bootstrap.",options:{labels:{prev:"Go back",next:"Hey",end:"Stop"}}});t.addStep({path:"/",element:"#options",placement:"top",title:"And it is powerful!",content:"There are more options for those, like us, who want to do complicated things. <br />Power to the people! :P",reflex:!0});t.addStep({path:"/",element:"#demo",placement:"top",title:"A new shiny Backdrop option",content:"If you need to highlight the current step's element, activate the backdrop and you won't lose the focus anymore!",backdrop:!0});t.addStep({path:"/",element:"#reflex",placement:"bottom",title:"Reflex mode",content:"Reflex mode is enabled, click on the page heading to continue!",reflex:!0});t.addStep({path:"/page.html",element:"h1",placement:"bottom",title:"See, you are not restricted to only one page",content:"Well, nothing to see here. Click next to go back to the index page."});t.addStep({path:"/",element:"#contribute",placement:"bottom",title:"Best of all, it's free!",content:"Yeah! Free as in beer... or speech. Use and abuse, but don't forget to contribute!"});t.start();t.ended()&&$('<div class="alert"><button class="close" data-dismiss="alert">&times;</button>You ended the demo tour. <a href="#" class="start">Restart the demo tour.</a></div>').prependTo(".content").alert();$(document).on("click",".start",function(e){e.preventDefault();if($(this).hasClass("disabled"))return!1;t.restart();return $(".alert").alert("close")});return $("html").smoothScroll()});
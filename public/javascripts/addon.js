(function(){function p(){var t='<div id="'+e+'" class="CodeMirror-completions" style="display: none;"><select multiple="false"></select></div>';$("body").append(t)}function d(){$("body").on("dblclick",r,function(){m(y()),s=!0}),$(n).keydown(function(e){if(e.keyCode===u.ESCAPE)C(),f.focus();else if(w(e.keyCode)){var t=$(this).find(":selected").text();if(t!==undefined&&t!==""){m(t);if(e.keyCode==u.ENTER)return e.preventDefault(),e.stopPropagation(),s=!0,!0}}})}function m(e){var t=L(f),n=t.start,r=f.charCoords(n),i=t.word;i!==""&&(f.replaceRange(e,n,t.end),f.focus()),C(),g(e)}function g(e){if(c===undefined||c==="en")return;$.post("learn",{text:e,lang:c})}function y(){return $(n).find(":selected").text()}function b(){var e=y();e!==undefined&&e!==""&&m(e)}function w(e){var t=$.inArray(e,a)==-1?!1:!0;return t?!0:!1}function E(e,t){var r=$.event.fix(t);if(r.type!="keydown")return;s=!1;if(r.keyCode==u.ESCAPE){C();return}if(i){if(r.keyCode===u.DOWN_ARROW)return $(n).focus(),r.preventDefault(),r.stopPropagation(),!0;if(w(r.keyCode)){b();if(r.keyCode===u.ENTER)return r.preventDefault(),r.stopPropagation(),s=!0,!0}}else if(r.keyCode==u.SPACE){s=!0;var o=L(f);v[o.word]=o}else w(r.keyCode)&&(s=!0)}function S(){var e=L(f),t=f.charCoords(e.start);e.word!==""?x(t.x,t.y,e.word):C()}function x(e,t,r){if(c==="en")return;var s={text:r,lang:c};show_error=!1,C(),request=$.ajax({url:"tl?"+$.param(s),dataType:"jsonp",crossDomain:"true",success:function(r){h!==null&&h(!1);if(v[r.input]!==undefined)wordToReplace=v[r.input],actualValueAtThatPos=f.getRange(wordToReplace.start,wordToReplace.end),actualValueAtThatPos==r.input&&f.replaceRange(r.result[0],wordToReplace.start,wordToReplace.end),delete v[r.input];else if(L(f).word==r.input){var s="",o=0;$.each(r.result,function(e,t){e===0?s+="<option selected>"+t+"</option>":s+="<option>"+t+"</option>",o<t.length&&(o=t.length)}),$(n).html(s).css("height",r.result.length+1+"em").css("width",o+2+"em"),N(e,t),i=!0}},error:T})}function T(e,t,n){show_error=!0,window.setTimeout(function(){show_error&&h!==null&&h(!0)},2e3)}function N(e,n){var r=$(".CodeMirror"),i=$(t).css("display","block").css("left",e+"px").css("top",n+15+"px"),s=i.height(),o=i.width();n+s>r.position().top+r.innerHeight()&&i.css("top",n-s+"px"),e+o>r.position().left+r.innerWidth()&&i.css("left",e-o+"px")}function C(){$(t).css("display","none"),i=!1}function k(e){return e===null||e===""||e==" "||e=="\n"||e=="."||e=="	"||e=="\r"||e=='"'||e=="'"||e=="?"||e=="!"||e==","||e=="("||e==")"||e==""||e=="\f"||e==""||e=="\u2028"||e=="\u2029"||e=="\r"||e=="\n"||e==";"?!0:!1}function L(e){var t=e.getCursor(),n=0,r=0,i=e.getValue().length+1,s=t.ch;n=t;while(s){text=e.getRange({line:t.line,ch:s-1},{line:t.line,ch:s});if(k(text))break;--s,n={line:t.line,ch:s}}r=t,s=t.ch;while(s<i){text=e.getRange({line:t.line,ch:s},{line:t.line,ch:s+1});if(k(text))break;++s,r={line:t.line,ch:s}}return{start:n,end:r,word:e.getRange(n,r)}}function A(e,t,n,r,i){window.clearTimeout(o);if(s)return;o=window.setTimeout(function(){S()},10),l!==null&&l(e,t,n,r,i)}window.Varnam={};var e="popup",t="#"+e,n=t+" select",r=t+n+" option",i=!1,s=!1,o=null,u={ESCAPE:27,ENTER:13,TAB:9,SPACE:32,PERIOD:190,DOWN_ARROW:40,QUESTION:191,EXCLAMATION:49,COMMA:188,LEFT_BRACKET:57,RIGHT_BRACKET:48,SEMICOLON:59},a=[u.ENTER,u.TAB,u.SPACE,u.PERIOD,u.QUESTION,u.EXCLAMATION,u.COMMA,u.LEFT_BRACKET,u.RIGHT_BRACKET,u.SEMICOLON],f=null,l=null,c=null,h=null;Varnam.init=function(e){f=CodeMirror.fromTextArea(e.textArea,{mode:e.mode,lineNumbers:e.lineNumbers,lineWrapping:!0,onChange:A,extraKeys:{"Ctrl-Space":function(e){S()}},onKeyEvent:E}),l=e.textChangedCallback,Varnam.editor=f,Varnam.setLanguage(e.language),h=e.errorCallback,p(),d()},Varnam.setLanguage=function(e){c=e};var v={}})();
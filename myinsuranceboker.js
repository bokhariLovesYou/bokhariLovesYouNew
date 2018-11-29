
window.onload = function () {
// creating a variable and storing personal styles onto it.
var css = '.call-button {height: 100%; } @media (max-width: 768px) {.call-button {border: 2px solid #ffd575; border-radius: 100px; padding: 0 20px; height: 80%; margin-top: 4px; box-shadow: 0 0 27px 0 rgba(214, 231, 233, 0.82); padding-left: 20px; padding-right: 20px; } a.menu--item.right:nth-child(3) .svg_phone {width: 20px; } } @media (min-width: 860px) {.call-button {border: 2px solid #ffd575; border-radius: 100px; padding: 0 20px; height: 80%; margin-top: 4px; box-shadow: 0 0 27px 0 rgba(214, 231, 233, 0.82); } a.menu--item.right:nth-child(3) span {font-size: 17px; } a.menu--item.right:nth-child(3) .svg_phone {width: 20px; margin-left: 10px; } }',
// getting the <head> element within the dom
head = document.head || document.getElementsByTagName('head')[0],
// Creating <style></style> element.
style = document.createElement('style');
//  setting the 'type' of <style></style> tags.
style.type = 'text/css';
// Appending the variable 'css' within style. (for older browsers).
if (style.styleSheet){
// This is required for IE8 and below.
style.styleSheet.cssText = css;
} else {
// Appending the variable 'css' within style.
}
style.appendChild(document.createTextNode(css));
// Finally appending the stylesheet to the to the dom in <head>
head.appendChild(style);
// Creating rawHTML to wrap the 'call-button anchor tag'
var newButtonHtml = '<div ';
// concatenating..
newButtonHtml += 'class="call-button">';
//concatenating...
newButtonHtml += '<span>1 (855) 482-5001</span>' 
//concatenating....
newButtonHtml += '<svg class="svg_phone" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16"><g><path fill="#444444" d="M12,16H4c-1.103,0-2-0.897-2-2V2c0-1.103,0.897-2,2-2h8c1.103,0,2,0.897,2,2v12C14,15.103,13.103,16,12,16zM4,2v12h8.001L12,2H4z"></path><rect data-color="color-2" x="5" y="3" fill="#444444" width="6" height="7"></rect><circle data-color="color-2" fill="#444444" cx="8" cy="12" r="1"></circle></g></svg>';
//concatenating....
newButtonHtml += '</div>';
// Wrapping the div
document.querySelector('a.menu--item.right:nth-child(3)').innerHTML = newButtonHtml;

}



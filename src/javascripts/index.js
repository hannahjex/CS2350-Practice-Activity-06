// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO
import "bootstrap"

let f = document.getElementById("myForm")
f.onsubmit = function displayMessage(){
    let n = document.getElementById("Name").value
    alert("Welcome "+ n + "!")
}
# Mini-projects
This is my first github upload which consist -
<ol>
    <li>Dark mode theme changer</li>
    <li>Toc</li>
    <li>Banner slider</li>
    <li>Calculator</li>
    <li>Stop-watch</li>
    <li>Product searchbox</li>
    <li>Product filter</li>
</ol>

<h2>1)Dark mode theme</h2>
<p>In dark mode theme we have used a check box. When it is checked-> a class(dark-theme-files) will be added to the body tag. And when unchecked it will be removed from the body</p>

<p>In dark-theme-files class we have changed the css variable values that are assigned in the :root and the variables are used across the projects. <br>*This is the main concept of Theme changer*</p>

<p>But we wanted to use local storage so that the theme doesn't go after we reload the page. <br> 
So when the check box "change" event occurs-> chekced =  we used localStorage.setItem("theme","dark") where theme is the key and dark is the value, else localStorage.setItem("theme","light") <br>
so we got the values of theme in realtime. And called a function change_theme. So that the theme change at each event</p>
<p>In a function(change_theme) we have collected the theme value using a variable <br>1)if the variable is dark we have add the class and set the checkbox to checked(so that it also stays checked after reload) <br>
2)if the variable is light we have removed the class <br> we also called the function at the end of the code so that it can called when we reload</p>
<p>when an input is wrapped inside a label clicking on that label also changes input event. In here we use span as a container and used before as a toggle box and after as a round slider. Used ..checked + ..after for animation as it is the next sibling </p>

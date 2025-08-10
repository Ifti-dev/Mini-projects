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

<h2>1) Dark Mode Theme</h2>

<p>In dark mode theme, we used a checkbox.  
When it is checked → a class <code>dark-theme-files</code> is added to the <code>&lt;body&gt;</code> tag.  
When unchecked → the class is removed from the body.</p>

<p>In the <code>dark-theme-files</code> class, we changed the CSS variable values that are assigned in <code>:root</code>, and those variables are used across the project.<br>
<b>*This is the main concept of the Theme Changer*</b></p>

<p>We also used <b>localStorage</b> so that the theme persists after a page reload.<br>
When the checkbox <code>change</code> event occurs:  
• If checked → <code>localStorage.setItem("theme","dark")</code>  
• If unchecked → <code>localStorage.setItem("theme","light")</code></p>

<p>We retrieve the <code>theme</code> value in real time and call a function <code>change_theme()</code> to update the theme on each event.</p>

<p>Inside <code>change_theme()</code>:
<ol>
<li>If the value is <b>dark</b> → add the class and set the checkbox to checked (so it stays checked after reload).</li>
<li>If the value is <b>light</b> → remove the class.</li>
</ol>
We also call the function at the end of the code so it runs immediately on page load.</p>

<p>When an input is wrapped inside a label, clicking on the label also triggers the input’s event.  
Here, we used a <code>&lt;span&gt;</code> as a container with <code>::before</code> for the toggle track and <code>::after</code> for the round slider.  
The selector <code>:checked + span::after</code> is used for the animation, since the <code>span</code> is the next sibling.</p>


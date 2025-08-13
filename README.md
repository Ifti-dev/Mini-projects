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

<p>We retrieve the <code>theme</code> value in real time and call a function <code>change_theme()</code> to update the theme on each event. </p>

<p>Inside <code>change_theme()</code>:
<ol>
<li>We collected the theme value in a variable using <code>localStorage.getItem("theme")</code></li>
<li>If the value is <b>dark</b> → add the class and set the checkbox to checked (so it stays checked after reload).</li>
<li>If the value is <b>light</b> → remove the class.</li>
</ol>
We also call the function at the end of the code so it runs immediately on page load.</p>

<p>When an input is wrapped inside a label, clicking on the label also triggers the input’s event.  
Here, we used a <code>&lt;span&gt;</code> as a container with <code>::before</code> for the toggle track and <code>::after</code> for the round slider.  
The selector <code>:checked + span::after</code> is used for the animation, since the <code>span</code> is the next sibling.</p>

<h2>2) Table of Contents (TOC)</h2>

<p>We created an empty container so that the project headings (jump links) could be added there.</p>

<p>We added the same class (<code>.section-header</code>) to every heading and used <code>querySelectorAll()</code> to collect them.</p>

<ol>
    <li>Looped through each header using <code>forEach</code>.</li>
    <li>Collected the text content into a variable (<code>header_content</code>).</li>
    <li>Replaced spaces (<code>" "</code>) with underscores (<code>_</code>).</li>
    <li>Set the header <code>id</code> to this modified value.</li>
</ol>

<p>Now that we know each header’s <code>id</code>, we can create anchor tags (<code>&lt;a&gt;</code>) that link to them, using the original text content as the link label.</p>

<ol>
    <li>Used <code>createElement("a")</code> to create the link.</li>
    <li>Set its <code>href</code> attribute to the header’s <code>id</code>.</li>
    <li>Set its <code>textContent</code> to the header’s original text.</li>
    <li>Appended the link to the TOC container.</li>
</ol>

<p><em>We also used <code>scroll-behavior: smooth;</code> in CSS to make the scrolling smooth when clicking links.</em></p>


<h2>3) Banner Slider</h2>

<p>The banner slider has <strong>three main functionalities</strong> and uses a <code>slider_counter</code> variable to track the current slide index:</p>
<ol>
    <li>Automatic slide using <code>setInterval</code></li>
    <li>Manual slide using <strong>Previous</strong> and <strong>Next</strong> buttons</li>
    <li>Active dot indicator updates</li>
</ol>

<h3>1) Automatic Slide</h3>
<p>We call an auto slide function every 2 seconds:</p>
<ul>
    <li>If we are at the <strong>last slide</strong>, set the next slide index to <code>0</code> (go back to the first slide).</li>
    <li>Otherwise, increase the slide index by <code>1</code>.</li>
    <li>Call the main <code>banner_sliding()</code> function to update the slider position.</li>
</ul>

<h3>2) Manual Slide</h3>

<h4>2.0) Previous Button</h4>
<ul>
    <li>If at the <strong>first slide</strong>, set the index to the <strong>last slide</strong> (<code>slides.length - 1</code>).</li>
    <li>Otherwise, decrease the slide index by <code>1</code>.</li>
    <li>Call <code>banner_sliding()</code> and <code>reset_timer()</code>.</li>
</ul>

<h4>2.1) Next Button</h4>
<ul>
    <li>If at the <strong>last slide</strong> (<code>slides.length - 1</code>), set the index to <code>0</code>.</li>
    <li>Otherwise, increase the slide index by <code>1</code>.</li>
    <li>Call <code>banner_sliding()</code> and <code>reset_timer()</code>.</li>
</ul>

<h3>3) Main <code>banner_sliding()</code> Function</h3>
<p>We move the slider container using the <code>transform: translateX()</code> property:</p>

```javascript
let move_pos = slider_counter * -100;
banner_main_slider.style.transform = `translateX(${move_pos}%)`;

<p>The percentage (<code>100%</code>, <code>50%</code>, <code>33%</code>, etc.) depends on how many slides you want to show per page. Update your CSS <code>.single-slide</code> width accordingly.</p> 
<h3>4) Reset Timer Function</h3> 
<ul> 
    <li>Stops the current auto-slide interval using <code>clearInterval()</code>.</li> <li>Restarts it using <code>setInterval()</code> to avoid timing issues after manual navigation.</li> 
</ul> 
<h3>5) Active Dots</h3> 
<ul> 
    <li>Remove the <code>active</code> class from all dots.</li> 
    <li>Add the <code>active</code> class to the dot matching the current slide index.</li> 
</ul> 
<p><strong>In short:</strong> We move the slider container by applying a translation based on the current <code>slider_counter</code>, which is updated by either the auto-slide function or the navigation buttons.</p>
<p><strong>Short note</strong>If we use flex in the slider container it will shrink even if you set the slides width to 100% cause flex sets the flex shrink to 1 as default. So make sure you write <code> flex-shrink:0 </code> at slides css </p>


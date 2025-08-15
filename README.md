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
<code>
let move_pos = slider_counter * -100;
banner_main_slider.style.transform = `translateX(${move_pos}%)`;
</code>

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


<h2>4) Calculator</h2>
<p>It's just a normal calculator with extra functionality:</p>
<ul>
    <li>Calculate values using <code>eval()</code></li>
    <li>Show history when clicked on the history button</li>
    <li>Clear history when clicked on the clear button on history container</li>
    <li>Use <code>try...catch</code> for error handling (e.g., when strings are entered on the screen)</li>
</ul>

<p>We collect each button's value by calling the <code>calculate(value)</code> function, passing the value as the parameter. In that function, we append the values to the calculator screen.</p>

<p>When the "Answer" button is clicked, we call the <code>answer()</code> function, which collects the screen data before evaluation (for history) and the output after <code>eval()</code>. We display the output on the screen. The calculation is done inside a <code>try</code> block, and in <code>catch</code> we set <code>calscreen_value = "error"</code>. This prevents JS runtime errors if any invalid strings (a-z or unsupported characters) are entered.</p>

<p>When the "Clear" button is clicked, we create a <code>&lt;p&gt;</code> tag and store <code>history = output</code> (collected data before eval = output).</p>

<p>When the "Clear History" button is clicked, we empty the history container (i.e., <code>innerHTML = ""</code>).</p>

<h2>5) Stop Watch</h2>
<p>We use three main variables to track the time:</p>
<ol>
    <li><code>stop_ml</code> – Milliseconds (actually counts in 1/100 of a second)</li>
    <li><code>stop_sec</code> – Seconds</li>
    <li><code>stop_min</code> – Minutes</li>
</ol>

<p>The logic is straightforward. Initially, we make the stopwatch startable by setting <code>let stop_timer_started = true</code>. When we click the <b>Start</b> button, the <code>stop_start()</code> function is called. Inside this function:</p>
<ul>
    <li>If the stopwatch is startable, we set an interval to call <code>stop_running()</code> every 10ms using <code>setInterval</code>.</li>
    <li>We then set <code>stop_timer_started = false</code> to prevent multiple intervals from starting.</li>
</ul>

<p>In the <code>stop_running()</code> function:</p>
<ul>
    <li>Since it’s called every 10ms, we increment <code>stop_ml</code> by 1 each time (meaning we display 1/100 of a second).</li>
    <li>If <code>stop_ml == 100</code> (i.e., 100 × 10ms = 1000ms), we reset <code>stop_ml</code> to 0 and increment <code>stop_sec</code> by 1.</li>
    <li>If <code>stop_sec == 59</code>, we reset <code>stop_sec</code> to 0 and increment <code>stop_min</code> by 1.</li>
</ul>

<p>When we click the <b>Stop</b> button:</p>
<ul>
    <li>We clear the interval using <code>clearInterval</code>.</li>
    <li>We set <code>stop_timer_started = true</code> so the stopwatch can be started again without bugs.</li>
</ul>

<p>When we click the <b>Reset</b> button:</p>
<ul>
    <li>We clear the interval and set <code>stop_timer_started = true</code>.</li>
    <li>We reset all timing variables (<code>stop_ml</code>, <code>stop_sec</code>, <code>stop_min</code>) to 0.</li>
    <li>We also reset the display to show 0 for all values.</li>
</ul>


<h2>6) Search Box Product</h2>

<p>This feature allows users to search products in real-time. When the user types anything into the search box (triggering an <code>input</code> event), we check the entered value against each product's <code>&lt;h2&gt;</code> text.</p>

<p>Implementation steps:</p>
<ol>
    <li>Listen for the <code>input</code> event on the search box.</li>
    <li>Loop through each product using <code>forEach</code>.</li>
    <li>Use JavaScript's built-in <code>includes()</code> method to check if the product's title matches the search query.</li>
    <li>If there is a match → <code>product.style.display = "block"</code>.</li>
    <li>If there is no match → <code>product.style.display = "none"</code>.</li>
</ol>

<p>This way, products are dynamically shown or hidden as the user types.</p>


<h2>7) Product Filter</h2>

<p>This feature allows users to filter products by category, brand, and price range using checkboxes and a range filter.</p>

<h3>Functionalities:</h3>
<ul>
    <li><b>Show / Hide Filter Panel</b> – Clicking the "Show Filter" button adds the <code>show_filter</code> class to make the filter panel visible. Clicking the "Hide Filter" button removes the class to hide it.</li>
    <li><b>Category & Brand Filtering</b> – Uses checkbox inputs for categories and brands to filter products.</li>
    <li><b>Price Range Filtering</b> – Filters products within a specified lower and upper price range.</li>
    <li><b>Real-Time Filtering</b> – Updates products dynamically when checkboxes are changed or when the price filter button is clicked.</li>
</ul>

<h3>How it works:</h3>

<ol>
    <li><b>Show / Hide Filter</b>
        <ul>
            <li><code>filter_product_filter_show_btn</code> adds the <code>show_filter</code> class when clicked.</li>
            <li><code>filter_product_filter_hide_btn</code> removes the <code>show_filter</code> class when clicked.</li>
        </ul>
    </li>

    <li><b>Collecting Selected Filters</b>
        <ul>
            <li>All checked category checkboxes are collected into <code>cat_checked_chekbox_list</code>.</li>
            <li>All checked brand checkboxes are collected into <code>brand_checked_chekbox_list</code>.</li>
        </ul>
    </li>

    <li><b>Why <code>map()</code> and <code>includes()</code>?</b>
        <p>
        If we checked categories or brands one at a time and applied the filter immediately, a product could appear for one filter but disappear for another, causing inconsistent results.
        Instead, we first collect <i>all</i> selected categories and brands, then check products against the complete set at once.
        </p>
        <p>
        - <b><code>map()</code></b> runs a function on each item in an array and returns a new array of results. Since <code>querySelectorAll</code> returns a NodeList (not an array), we convert it using <code>Array.from()</code>, then use <code>map()</code> to extract the <code>value</code> of each checked checkbox.
        <br>
        Example: <code>Array.from(checkboxList).map(item => item.value)</code> gives us an array of all selected filter values.
        </p>
        <p>
        - <b><code>includes()</code></b> checks if an array contains a specific value. We use it to see if a product’s category or brand exists in the selected filter arrays. This way, all checked categories/brands are matched at once, ensuring consistent filtering.
        </p>
    </li>

    <li><b>Filtering Logic</b>
        <p>For each product:</p>
        <ul>
            <li>Get <code>data-category</code>, <code>data-brand</code>, and price from <code>.new_price</code>.</li>
            <li><b>Price filter check:</b> Product price must be between <code>price_range_lower</code> and <code>price_range_upper</code>, or no price range is set.</li>
            <li><b>Category filter check:</b> Product category must match one of the selected categories, or if none are selected, all categories pass.</li>
            <li><b>Brand filter check:</b> Works same as category check, but for brands.</li>
            <li>If all checks pass → <code>product.style.display = "block"</code>. Otherwise → <code>"none"</code>.</li>
        </ul>
    </li>

    <li><b>Event Listeners</b>
        <ul>
            <li>All checkboxes call <code>filter_product()</code> when changed.</li>
            <li>Clicking the price range filter button calls <code>filter_product()</code>.</li>
        </ul>
    </li>
</ol>

<p>This approach ensures that multiple filters work together and update in real-time without refreshing the page.</p>

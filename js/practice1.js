//Theme changer

const theme_changer_btn = document.querySelector("#theme_changer_btn")


theme_changer_btn.addEventListener("change",()=>{
    if(theme_changer_btn.checked)
    {
        localStorage.setItem("theme","dark")
    }
    else
    {
        localStorage.setItem("theme","light")
    }
    change_theme()
})
    
function change_theme(){
    let theme_value = localStorage.getItem("theme")
    if(theme_value == "dark")
    {
        theme_changer_btn.checked = true
        document.querySelector("body").classList.add("dark-theme-files")
    }
    else if(theme_value == "light")
        {
        document.querySelector("body").classList.remove("dark-theme-files")
    }
}
change_theme()
//we have added the theme class adding funcyonality outside the click event
//because system will not able to reach their if click event is not happening
//thats why we add it to a function and called it to set the theme initial value
//and also called it in the click event so that it can be updated in realtime

//end of theme changer

//Toc
const section_header = document.querySelectorAll(".section-header")
const toc_wrapper = document.querySelector(".toc_wrapper")
let toc_link_counter = 0

section_header.forEach(header=>{
    toc_link_counter += 1

    let header_content = header.textContent
    let header_id = header_content.replace(" ","_")
    header.id = header_id

    let toc_link = document.createElement("a")
    toc_link.href = `#${header_id}`
    toc_link.textContent = `${toc_link_counter}. ${header_content}`
    toc_wrapper.appendChild(toc_link)

})
//end of TOC

// banner slider
const next_btn= document.body.querySelector(".next-button")
const prev_btn= document.body.querySelector(".prev-button")
const slider_bullet_dots= document.body.querySelectorAll(".dots")


const banner_main_slider = document.body.querySelector(".banner-slider")
const banner_slides = banner_main_slider.querySelectorAll(".banner-slide")

let banner_timer = setInterval(auto_slide, 2000)
let slider_counter = 0


function auto_slide(){
    if(banner_slides.length-1 == slider_counter){
        slider_counter = 0 
    }
    else{
        slider_counter+=1
    }
    banner_sliding()

// When the slider is at last(ie: banner_slides.length-1= 2) and slide will be at last+1(ie:3) but we dont want that,
// we wanna show the first slide at that time. So when there is 3 slides 
// slider_counter = 0  (ie: show the first slide, because its based on index which starts from 0 but slider length starts from 1) 
// else the slider_counter will be +1. So that we can push the slides on left ||<-||
// than we call the main function to update the slider_counter


//In short we are saying that if we are showing last slide after that show the 1st slide
//else keep showing other slider as index 0,1,2...
}

function banner_sliding(){
    

    let move_pos= slider_counter*( -100) 
    banner_main_slider.style.transform = `translateX(${move_pos}%)`
    

        // it is the main function where all the calculation for moving th slides are made->
    //move_pos =  it is the pos calculation. We wanna move the slides 100% everytime. 
    // So if their is 3 slides it will move 0*100,1*100,2*100. 
    // 0,1,2 is the main slider_counter which we will use to increase the translation movement.

    for(let i =0;i<=slider_bullet_dots.length-1;i++){
            slider_bullet_dots[i].classList.remove("active")    
    }
    slider_bullet_dots[slider_counter].classList.add("active")

    // in slider bullet dots first we will count the total dot and remove every dots active instance 
    // everytime the slider moves. You might think what about the first active dot-> we have initially 
    // setactive instance in the first dot.

    // after that every slider_counter value will be used as an index of the dots and active instance 
    // will be added.

}

prev_btn.addEventListener("click",()=>{
    if(slider_counter==0){
    slider_counter = banner_slides.length -1
}
else{
    slider_counter-=1
}
console.log(slider_counter)
banner_sliding()
reset_timer()

// When the slider is at 0 and then we click on prev btn it will be at -1 but we dont want that,
// we wanna show the last slide at that time. So when there is 3 slides 
// slider_counter = banner_slides.length -1 => 2. 
// else the slider_counter will be -1. So that we can push the slides on right ||->||

// than we call the main function to update the slider_counter
// and we call reset_timer to clear the auto_slide functionality for a moment to fix timing issues

})

next_btn.addEventListener("click",()=>{
    if(slider_counter==banner_slides.length-1){
    slider_counter = 0
}
else{
    slider_counter+=1
}
console.log(slider_counter)
banner_sliding()
reset_timer()

// When the slider is at last(ie: banner_slides.length-1= 2) and then we click on next btn it will be at last+1(ie:3) but we dont want that,
// we wanna show the first slide at that time. So when there is 3 slides 
// slider_counter = 0  (ie: show the first slide)
// else the slider_counter will be +1. So that we can push the slides on left ||<-||

// than we call the main function to update the slider_counter
// and we call reset_timer to clear the auto_slide functionality for a moment to fix timing issues

})

function reset_timer(){
    clearInterval(banner_timer)
    banner_timer= setInterval(auto_slide,2000)

// When reset_timer is called, we clear the existing auto_slide timer
// to prevent multiple intervals from stacking. Move the slider using main function and
// Then we start a new interval to resume auto sliding.
// This avoids bugs like speeding up or unexpected multiple transitions.

}

//end of banner slider

//calculator
let cal_screen = document.body.querySelector("#cal-screen")
let cal_history_container = document.body.querySelector(".history-container")
let cal_history_btn = document.body.querySelector("#cal-history-btn")
let cal_btn = document.body.querySelector(".cal_btn")
let history = null
let cal_history_list_container = document.body.querySelector(".history-list")

function calculate(new_value){
    cal_screen.value += new_value
}
function answer(){
    try{
        history = cal_screen.value
        update = eval(cal_screen.value)
        cal_screen.value = update
    }
    // catch(errr){
    //     cal_screen.value = errr
    // } here catch(parameter -> stores the main error, you can directly show that or do anything
    catch{
        cal_screen.value = "Error"
    }
   
}
function del(){
    update = cal_screen.value.slice(0,-1)
    cal_screen.value = update
}

function clearr(){
    let new_history = document.createElement("p")
    new_history.textContent = `${history} = ${cal_screen.value}`
    cal_history_list_container.appendChild(new_history)
    cal_screen.value = ""
}

function clear_history(){
    cal_history_list_container.innerHTML = '';

}

cal_history_btn.addEventListener('click',()=>{
cal_history_container.classList.toggle("history-container-full")
 
})


//end of calculator



//stopwatch

const stop_number = document.body.querySelector(".stopwatch-screen-num")
let stop_start_timer
let stop_timer_started = true

let stop_ml = 0
let stop_sec = 0
let stop_min = 0


function stop_start(){   
    if(stop_timer_started)
        stop_start_timer = setInterval(stop_running,10)
        stop_timer_started = false
}

function stop_running(){
    stop_ml+=1
    if(stop_ml==100){
        stop_sec+=1
        stop_ml = 0
    }
    if(stop_sec==59){
        stop_min += 1
        stop_sec = 0
    }

    let mil_sec = stop_ml < 10? `0${stop_ml}`: stop_ml
    let sec = stop_sec < 10? `0${stop_sec}`: stop_sec
    let min = stop_min < 10? `0${stop_min}`: stop_min

    stop_number.textContent = `${mil_sec}:${sec}:${min}`
}

function stop_reset(){
    clearInterval(stop_start_timer)
    stop_timer_started = true
    stop_ml = 0
    stop_sec = 0
    stop_min = 0
    stop_number.textContent = `00:00:00`
}
function stop_pause(){
    clearInterval(stop_start_timer)
    stop_timer_started = true
    
}
//end of stop watch


//search product
const search_input = document.querySelector("#product-search-box")
const search_box_products = document.querySelectorAll(".search_box_product")

search_input.addEventListener("input",()=>{
    

    search_box_products.forEach((product)=>{
        let product_head = product.querySelector("h5").textContent
        if(product_head.toUpperCase().includes(search_input.value.toUpperCase())){
            product.style.display= ""
        }
        else{
            product.style.display= "none"
        }
    })

    }

    //array.forEach(function(currentValue, index, arr), thisValue) 
    // ...here currentValue	Required.The value of the current element(ie.product in this case). 
    // Index is the The index of the current element(optional). 
    // arr is the parent var (ie. search_box_products in this case) 
)

//end of search product

//product filter

//show hide filter on mobile
const filter_product_filter_show_btn = document.querySelector("#filter_show_btn")
const filter_product_filter_hide_btn = document.querySelector("#filter_hide_btn")
const filter_product_filter = document.querySelector('.filter_wrapper')

filter_product_filter_show_btn.addEventListener("click",()=>{
    filter_product_filter.classList.add("show_filter")
})
filter_product_filter_hide_btn.addEventListener("click",()=>{
    filter_product_filter.classList.remove("show_filter")
})

const price_range_lower = document.querySelector("#price_range_lower")
const price_range_upper = document.querySelector("#price_range_upper")
const filter_product_products = document.querySelectorAll(".filter_product_product")
const filter_product_price_range_btn = document.querySelector("#filter_product_price_range_btn")

const filter_product_cat_filter = document.querySelector(".filter_product_cat_filter")
const filter_product_brand_filter = document.querySelector(".filter_product_brand_filter")


//price+cat+brand
const filter_product_all_filter = filter_product_filter.querySelectorAll('input[type="checkbox"]')

function filter_product(){
    //getting checkboxes details
    let cat_checked_chekbox_list =Array.from(filter_product_cat_filter.querySelectorAll('input[type="checkbox"]:checked'))
        .map(item=>item.value)
    let brand_checked_chekbox_list =Array.from(filter_product_brand_filter.querySelectorAll('input[type="checkbox"]:checked'))
    .map(item=>item.value)
    


    filter_product_products.forEach((product)=>{
        //getting product details
        let product_category = product.getAttribute("data-category")
        let product_brand = product.getAttribute("data-brand")
        let product_price = parseInt(product.querySelector(".new_price").textContent)

        //getting filter results true/false 
        let price_filter_check = product_price >= price_range_lower.value &&  product_price<= price_range_upper.value || price_range_lower.value =="" && price_range_upper.value==""
        let cat_filter_check = cat_checked_chekbox_list.includes(product_category) || cat_checked_chekbox_list.length==0
        let brand_filter_check =  brand_checked_chekbox_list.includes(product_brand) ||  brand_checked_chekbox_list.length==0 

        if(price_filter_check && cat_filter_check && brand_filter_check)
        {
            product.style.display = "block"
        }
        else{
            product.style.display = "none"
        }
    })
}


filter_product_all_filter.forEach(check_filter_box=>{
    check_filter_box.addEventListener("change",()=>{
        filter_product()
        console.log("yo")
    })})
filter_product_price_range_btn.addEventListener("click",()=>{
    filter_product()
})

//end of filter product



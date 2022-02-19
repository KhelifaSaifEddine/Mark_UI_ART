function button_continue_quest_hover(){
   const button = document.querySelectorAll(".button")
   let activeelement
   let notactiveelement
   let flipped = true
   button.forEach(element => {
       element.addEventListener("mouseover",flip)
       element.addEventListener("mouseout",flip)
       console.log(element)
    
       if( element.classList.contains("active")){
        activeelement = element
        
       }else{
        notactiveelement =element
       }
   });
   function flip(){
    if(flipped){
        activeelement.classList.remove("active")
        notactiveelement.classList.add("active")
        flipped = false
    }else{
        activeelement.classList.add("active")
        notactiveelement.classList.remove("active")
        flipped= true
    }
   }
}
function button_continue_quest_click(){
    const button = document.querySelectorAll(".button")
    button.forEach(element => {
        element.style.cursor ="pointer"
        element.addEventListener("click",popup)
    })
}
function button_close_popup_click(){
    const close_button = document.getElementById("close_button_animation")
      close_button.addEventListener("click",popup)
}
function popup(ev){
    const popup = document.querySelector(".section-popup") 
    if(flip){ 
        popup.classList.add('open');
        flip = false
   }else{
        popup.classList.remove('open');
        flip = true
   }
}

let flip = true
button_continue_quest_hover()
button_continue_quest_click()
button_close_popup_click()

/******************************************stats buttons *******************/
function button_stats_hover(name){
    const button = document.querySelectorAll(name)
    console.log(button)
    let activeelement
    let notactiveelement
    let flipped = true
    button.forEach(element => {
        element.addEventListener("mouseover",flip)
        element.addEventListener("mouseout",flip)
        console.log(element)
        element.style.cursor ="pointer"
        if( element.classList.contains("active")){
         activeelement = element
         
        }else{
         notactiveelement =element
        }
    });
    function flip(){
     if(flipped){
         activeelement.classList.remove("active")
         notactiveelement.classList.add("active")
         flipped = false
     }else{
         activeelement.classList.add("active")
         notactiveelement.classList.remove("active")
         flipped= true
     }
    }
 }

 button_stats_hover(".button_stats_Gallery")

 button_stats_hover(".button_stats_Students")

 button_stats_hover(".button_Upload")

 button_stats_hover(".button_Quest")
 
 button_stats_hover(".button_Dungeons")
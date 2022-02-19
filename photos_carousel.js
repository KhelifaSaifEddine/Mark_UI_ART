  var slider = document.querySelector('.items');
  list_Url_photos = ["./images/Status_Elements/Photo1.png","./images/Status_Elements/Photo1.png","./images/Status_Elements/Photo2.png","./images/Status_Elements/Photo.png","./images/Status_Elements/Photo.png","./images/Status_Elements/Photo.png"]
  function add_photos(list_Url_photos){
  var item_counter = 0
  list_Url_photos.forEach(element => {
        var img = new Image();
        img.src = element;
        const div_element = document.createElement("div")
        const class_name = "item" + " " + "item" + item_counter
        div_element.setAttribute("class",class_name )
        div_element.appendChild(img)
        slider.appendChild(div_element)
  });

  }
  add_photos(list_Url_photos)
    
  let isDown = false;
  let startX;
  let scrollLeft;


  slider.addEventListener('mousedown', (e) => {
    
    
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    console.log("erreerre", scrollLeft)
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    
    element.classList.remove('active');
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
    
    console.log('sdsd', scrollLeft)
    console.log(slider.scrollLeft)
  });


//   touchEvents

  slider.addEventListener('touchstart', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('touchend', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('touchcancel', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('touchmove', (e) => {
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });
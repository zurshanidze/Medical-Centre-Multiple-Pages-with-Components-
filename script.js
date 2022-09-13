  let circleContainer = document.getElementById("circle-container");
  let btnWrapper = document.getElementById("btn-wrapper");

  let playPause = document.getElementById("play-pause");
  let text = document.getElementById("text");
  let pulse = document.getElementById("pulse");
  let textWrapper = document.getElementById("text-wrapper");

  let body = document.body
  let dayNightComponent = document.getElementById("day-night-component");

  let headerComponent = document.getElementById("header-component");
  let navbar = document.getElementById("navbar");
  let headerTitle = document.getElementById("header-title");
  let navbarCapsules = document.getElementById("navbar-capsules");
  

  let main = document.getElementById("main")
  let greetingText = document.getElementById("greetingText")

  let footerComponent = document.getElementById("footer-component");
  let footer = document.getElementById("footer")
  let copyright = document.getElementById("copyright");


  let Loader = window.onload = function(){
    setTimeout(()=>{
      pulse.remove();
      text.remove();
      circleContainer.remove();
      btnWrapper.remove();
      
      body.style.animation = "fadeIn 1500ms";
      body.style.backdropFilter = "blur(0px)";
      
      headerComponent.classList.add("header-component-afterLoader")
      dayNightComponent.classList.add("day-night-component-AfterLoader")
      
      greetingText.classList.add("greetingText")
      greetingText.innerHTML = "Welcome To Our Medical Center";
      greetingText.style.display = "flex"
      
      const serviceListContainer = document.createElement("div");
      document.body.appendChild(serviceListContainer);
      serviceListContainer.classList.add("list-container")
      
      let serviceList = document.createElement("div")
      serviceList.innerHTML = `<h4 id="sub-title" class="sub-title">We guarantee healthy life</4>`;
      serviceListContainer.appendChild(serviceList);
      serviceList.classList.add("list")
      serviceList.id = "list";
      
      const paragraph = document.createElement("div");
      paragraph.classList.add("paragraph")
      paragraph.id = "paragraph";
      paragraph.innerHTML = UnorderedList
      serviceList.appendChild(paragraph);
      main.appendChild(serviceList);
      footerComponent.style.display = "flex"
      
      textWrapper.remove();

    }, 3000)
  }
     
  

  let removeSmoothly = setTimeout(()=>{
    greetingText.style.animation = "removeSmoothly 1000ms";

      let removeGreetingText = setTimeout(()=>{
        greetingText.remove();
      }, 1000)
      
      clearTimeout(Loader)
      clearTimeout(removeSmoothly)
    
  }, 7000)
    

  

playPause.addEventListener("click", () => { 
  
   if (circle1.style.animationPlayState != 'paused'){
  
      if(circle1.style.animationPlayState = 'running'){
        circle1.style.animationPlayState = 'paused';
        playPause.style.background = "red";
        playPause.style.fontSize = "17px";
        playPause.innerHTML = "Paused"
        text.innerHTML = "Click to Play";
        return hiddenHeartBeat();
      }
   }
   else if(circle1.style.animationPlayState = 'paused'){
      circle1.style.animationPlayState = 'running'
     playPause.style.background = "#4287f5";
     playPause.style.fontSize = "revert";
     playPause.innerHTML = "Played";
     text.innerHTML = " ";
     return hiddenHeartBeat()
   }
})


function hiddenHeartBeat(){
  if (pulse.style.animationPlayState != 'paused'){
    if(pulse.style.animationPlayState = 'running'){
      pulse.style.animationPlayState = 'paused';
      pulse.style.display = "none";
      text.style.position = "absolute";
    }
  }
  else if(pulse.style.animationPlayState = 'paused'){
    pulse.style.display = "block";
    pulse.style.animationPlayState = 'running'
  }
}


      let sunContainer = document.getElementById("sun-container");
      let moonContainer = document.getElementById("moon-container");

      sunContainer.addEventListener("click", dayMode)
      moonContainer.addEventListener("click", nightMode)



      let capsuleRight = document.getElementsByClassName("capsule-right"); 
      let capsuleNav = document.getElementsByClassName("capsule-nav");
      let moon = document.getElementById("moon")
      let serviceList = document.getElementsByClassName("list");
      let contact = document.getElementById("contact");
      let sun = document.getElementById("sun");


      function nightMode() {
        
        body.style.backgroundImage = `url("https://static.dezeen.com/uploads/2020/09/interiors-ekh-childrens-hospital-thailand-integrated-field-_dezeen_2364_col_9.jpg")`;
        
        [].map.call(capsuleRight, item => item.classList.add("capsule-right-night"));
          
        [].map.call(capsuleNav, item => item.classList.add("capsule-nav-night"));
        
        sunContainer.classList.add("sun-container-night")
        sun.classList.add("sun-night")
        
        moon.classList.add("moon-night");
        
        [].map.call(serviceList, item => item.classList.add("list-night"));
      }





      function dayMode() {
        
        body.style.removeProperty("background-image");
        
        [].map.call(capsuleRight, item => item.classList.remove("capsule-right-night"));
        
        [].map.call(capsuleNav, item => item.classList.remove("capsule-nav-night"));
        
        [].map.call(serviceList, item => item.classList.remove("list-night"));
        
        sunContainer.classList.remove("sun-container-night")
        sun.classList.remove("sun-night")
        
        moon.classList.remove("moon-night");                
      }




const UnorderedList = `<ul>
                              <li>
                                <i class="fa-solid fa-check-to-slot fa-xl"></i>
                                <div class="p-wrapper" id="p-wrapper">
                                  <p>treatment for minor illnesses, such as:
                                    <ul>
                                      <li>colds.</li> 
                                      <li>ear pain.</li>
                                      <li>bug bites.</li> 
                                      <li>minor cuts or wounds.</li> 
                                      <li>skin rash.</li> 
                                      <li>strep throat.</li> 
                                      <li>UTIs.</li> 
                                    </ul>
                                  </p>
                                </div>
                                  
                              </li>
                              <li>
                              <i class="fa-solid fa-check-to-slot fa-xl"></i>
                              <p>pediatric care.</p>
                              </li>
                              <li>
                              <i class="fa-solid fa-check-to-slot fa-xl"></i>
                              <p>basic laboratory testing.</p>
                              </li>
                              <li>
                              <i class="fa-solid fa-check-to-slot fa-xl"></i>
                              <p>routine health screenings.</p>
                              </li>
                              <li>
                              <i class="fa-solid fa-check-to-slot fa-xl"></i>
                              <p>Nutritional support.</p>
                              </li>
                            </ul>`
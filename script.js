document.addEventListener("DOMContentLoaded",function(){

    // Menu button code
    const menuBtn=document.querySelector(".menu-btn");
    const sidebar=document.querySelector(".sidebar");
    menuBtn.addEventListener("click",function(){
        sidebar.classList.add("active");
        menuBtn.style.visibility="hidden";
    })

    // Close button code
    const closeBtn=document.querySelector(".close-btn");
    closeBtn.addEventListener("click",function(){
        sidebar.classList.remove("active");
        menuBtn.style.visibility="visible";       
    });

    // Sub-Menu code
    const subMenuBtns=document.querySelectorAll(".sub-btn");

    subMenuBtns.forEach((btn)=>{
        btn.addEventListener("click", function(event){
            event.preventDefault();
            const container=document.getElementById(this.dataset.container);

            if(!container.classList.contains("Jesus")){
                //Add Rotate to arrow
                this.querySelector(".dropdown").classList.add("rotate");
                //Adds Jesus to submenu
                container.classList.add("Jesus");
                container.style.height="auto";
                const height= container.clientHeight+"px";
                container.style.height="0px";
                setTimeout(function(){
                    container.style.height=height;
                },0);
            }
            else{
                //Remove Rotate to arrow
                this.querySelector(".dropdown").classList.remove("rotate");
                //Removes Jesus from submenu
                container.style.height="0px";
                container.addEventListener("transitionend",function(){
                    container.classList.remove("Jesus");
                },
                {
                    once:true
                }
            );
            }
 
        })
    })


});

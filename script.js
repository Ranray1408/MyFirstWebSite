timer();

function timer(){  
   var i = 0;
   var slider = document.querySelectorAll('.slider .slider__img');	
   setTimeout(autoSlide, 4000); 
   //BUTTON FUNCTION 
		function manuallySlider(){
			var prev = document.getElementById('prev');
			var next = document.getElementById('next');
			next.addEventListener('click', clickFuncNext);
			prev.addEventListener('click', clickFuncPrev);
			function clickFuncPrev(){
                slider[i].style.opacity = '0';
			    i--;
			    if (i< 0){
			    	i = slider.length-1;
			    } 
			    slider[i].style.opacity = '1';			    
				}
			
			function clickFuncNext(){
                slider[i].style.opacity = '0';
			    i++;
			    if (i>= slider.length){
			    	i = 0;
			    } 
			    slider[i].style.opacity = '1';			    
				}
		}
		//AUTO TIMER
		function autoSlide(){	
		    slider[i].style.opacity = '0';
		    i++;
		    if (i>= slider.length){
		    	i = 0;
		    } 
		    slider[i].style.opacity = '1';
		    setTimeout(autoSlide, 4000);
		    manuallySlider();   
		}
}
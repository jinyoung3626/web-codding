(function(window,document){
    'use strict'

    var $toggles = document.querySelectorAll('.toggle')
    var $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click',function(){

        toggleElements();
    })

    function toggleElements(){
        [].forEach.call($toggles,function(toggle){
            toggle.classList.toggle('on');
        })
    }

    // *************background swiching***************
    var slides = $('.visual-container').find('>div')
    var currentIndex = 0
    var slideLength = slides.length
    
    for( var i = 1; i<slideLength; i++){
        slides.eq(i).css("display","none")
    }
  

    function SHOW(){
        var nextIndex = (currentIndex + 1) % slideLength
        slides.eq(currentIndex).fadeOut(0)
        slides.eq(nextIndex).fadeIn(0)

        currentIndex = nextIndex 
    }
    

    setInterval(SHOW,2000)



})(window,document)


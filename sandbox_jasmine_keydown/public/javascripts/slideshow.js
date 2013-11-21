
// ----------------------------------
// COMMON
// ----------------------------------

var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;
var SPACE = 32;

var queryAll = function(query) {

  nodeList = document.querySelectorAll(query);
  return Array.prototype.slice.call(nodeList, 0);

};

// ----------------------------------
// SLIDE CLASS
// ----------------------------------
var Slide = function(node) {

};

Slide.prototype = {

};

// ----------------------------------
// SLIDESHOW CLASS
// ----------------------------------  
var SlideShow = function(slides) {

  this._slides = (slides).map(function(element) {
	    
    return new Slide(element);

  });

  this._numberOfSlides = this._slides.length;	

  var _t = this;
  document.addEventListener('keydown',
    function(e) { _t.handleKeys(e); }, false
  );   

};

SlideShow.prototype = {
	
  _currentIndex : 0,
  _numberOfSlides : 0,	
	
  next: function() {
	    
    this._currentIndex = this._currentIndex + 1;

  },  

};

// ----------------------------------
// TEACHER SLIDESHOW CLASS / EXTENDS SLIDESHOW
// ----------------------------------
var TeacherSlideShow = function(slides) {
  
  SlideShow.call(this, slides);
	
};

TeacherSlideShow.prototype = {
	
  handleKeys: function(e) {
	    
    switch (e.keyCode) {
	      
      case RIGHT_ARROW:  
  
        this.next(); 
	      
      break;	      
	      
    }	  
	  
  },	
	
};

for(key in SlideShow.prototype) {

  TeacherSlideShow.prototype[key] = SlideShow.prototype[key];

}

// ----------------------------------
// INITIALIZE SLIDESHOW
// ----------------------------------  
var teacherSlideshow = new TeacherSlideShow(queryAll('.slide'));
//~ var slideshowTimer = setInterval( function(){ teacherSlideshow.synchronise(); },2000);


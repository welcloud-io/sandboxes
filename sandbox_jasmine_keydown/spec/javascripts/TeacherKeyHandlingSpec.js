describe("TeacherSlideShow key management :", function() {

  it("should detect key pressed", function() {
	  
    // the source js already have a listener

    spyOn(TeacherSlideShow.prototype, 'handleKeys');
	  
    expect(TeacherSlideShow.prototype.handleKeys.calls.length).toBe(0);

    __triggerKeyboardEvent(document, RIGHT_ARROW);

    expect(TeacherSlideShow.prototype.handleKeys).toHaveBeenCalled();
    expect(TeacherSlideShow.prototype.handleKeys.calls.length).toBe(1);

  });	

  it("should go to second slide", function() {
	  
    setFixtures("<div class='slides'><div class='slide'/><div class='slide'/><div class='slide'/></div>")
    setFixtures("<div class='slides'><div class='slide'/><div class='slide'/></div>") // The second fixture is taken into account
	  
    var teacherSlideshow = new TeacherSlideShow(queryAll('.slide')) // to get the fixtures taken into account. Problem : we have a second slide show in memory with a keydown event
	  
    expect(teacherSlideshow._numberOfSlides).toBe(2)

    __triggerKeyboardEvent(document, RIGHT_ARROW)
	  
    expect(teacherSlideshow._currentIndex).toBe(1)	  


  });    
  
  it("should detect key pressed again and only one", function() {
	  
    spyOn(TeacherSlideShow.prototype, 'handleKeys');
	  
    expect(TeacherSlideShow.prototype.handleKeys.calls.length).toBe(0);

    __triggerKeyboardEvent(document, RIGHT_ARROW); // should call event only one time but we now have 2 slideshows with the event in memory

    expect(TeacherSlideShow.prototype.handleKeys).toHaveBeenCalled();
    expect(TeacherSlideShow.prototype.handleKeys.calls.length).toBe(1);

  });	   

});
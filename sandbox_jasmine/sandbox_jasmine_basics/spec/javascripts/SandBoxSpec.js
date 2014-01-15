describe("Spec with spy :", function() {

  it("should check if spy has been called ", function() {

    spyOn(SandBox.prototype, 'spied_function');
	  
    var sandbox = new SandBox();	  
    sandbox.call_a_function_with_spied_function_in_it()
	  
    expect(SandBox.prototype.spied_function).toHaveBeenCalled();

  });  
	
});


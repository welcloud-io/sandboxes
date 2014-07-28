describe("Spec with spy :", function() {

  it("should check if spy has been called ", function() {

    spyOn(SandBox.prototype, 'spied_function');
	  
    var sandbox = new SandBox();	  
    sandbox.call_a_function_with_spied_function_in_it()
	  
    expect(SandBox.prototype.spied_function).toHaveBeenCalled();
    expect(SandBox.prototype.spied_function.calls.count()).toBe(1);
    expect(SandBox.prototype.spied_function).toHaveBeenCalledWith(); 	  

  });  
  
  it("should check if spy has been called ", function() {

    spyOn(SandBox.prototype, 'spied_function').and.returnValue(1);
	  
    var sandbox = new SandBox();	  
    var result = sandbox.call_a_function_with_spied_function_in_it()
	  
    expect(result).toBe(1);

  });  
	
});


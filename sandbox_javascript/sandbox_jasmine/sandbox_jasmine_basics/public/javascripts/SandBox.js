var SandBox = function() {}

SandBox.prototype = {

  spied_function: function() {
  },
	  
  call_a_function_with_spied_function_in_it: function() {
	return this.spied_function();
  },
  
}

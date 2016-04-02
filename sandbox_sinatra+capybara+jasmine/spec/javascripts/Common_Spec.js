
describe("Common is_a_number", function() {
	
  it("should tell value is a number", function() {
    
    expect(QSDFG).toBe(1);    
    expect(is_a_number(1)).toBe(true);
    expect(is_a_number('a')).toBe(false);
    expect(is_a_number('')).toBe(false);
    expect(is_a_number(undefined)).toBe(false);
    
  });
  
});
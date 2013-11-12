
if __FILE__ == $0 then

  require "test/unit"

  class TestSimpleNumber < Test::Unit::TestCase
	  
    def setup
    end
 
    def test_simple
      assert_equal 4, 2*2
    end
    
    def teardown
    end
 
  end

end

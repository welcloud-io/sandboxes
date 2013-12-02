#encoding:UTF-8

require 'sinatra'

enable :sessions; set :session_secret, 'secret'

# ---- HTTP METHODS

get '/' do
	
  session[:id] = 123
  puts 'get'
  puts session_id

end

post '/' do

  puts 'post'
  puts session_id

end


def session_id
  session[:id] ### ATTENTION NE PAS METTRE session_id, CAR CORRESPOND AU NUMERO DE SESSION par exemple : 821a81578498a58b2aba627c5148ccc2874a86607b35f3d5f7ae76ed45a2cc4e
end

# ---- TESTS

require 'test/unit'
require 'rack/test'

class TestsSession < Test::Unit::TestCase
  
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end
  
  def setup
    $session_id = 0
  end  
  
  def test01
	
    post '/'	  
	  
    get'/'
    
    post '/'

    #~ session = {}
    
    #~ get '/', {}, 'rack.session' => session
    #~ assert_equal 1, session[:session_id]
    
  end
  
end
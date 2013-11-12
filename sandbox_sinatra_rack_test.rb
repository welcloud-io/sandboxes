require 'sinatra'

get '/' do
  "Hello World #{params[:name]}".strip
end

get '/division_by_0' do
  0 / 0
end

# -----------------------------------

ENV['RACK_ENV'] = 'test'

require 'test/unit'
require 'rack/test'

class HelloWorldTest < Test::Unit::TestCase

  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  def test_it_says_hello_world
    get '/'
    assert last_response.ok?
    assert_equal 'Hello World', last_response.body
  end

  def test_it_says_hello_to_a_person
    get '/', :name => 'Simon'
    assert last_response.body.include?('Simon')
    assert_equal 'Hello World Simon', last_response.body    
  end
  
  def test_it_should_raise_a_pagenotfound_error
    get '/unknown_adress'
    assert_equal 404, last_response.status
    #~ puts last_response.errors
  end
  
  def test_it_should_raises_a_server_error
    get '/division_by_0'
    assert_equal 500, last_response.status
    puts last_response.body
    #~ puts last_response.errors
  end

end
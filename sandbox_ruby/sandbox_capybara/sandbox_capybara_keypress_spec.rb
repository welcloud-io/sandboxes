require 'rspec'
require 'capybara/rspec'

# ----------------------------------- SINATRA CONTROLLER
require 'sinatra'

set :logging, false

get '/' do

  '<div class="test">TEST</div>'
  
end

# -----------------------------------

Capybara.app = Sinatra::Application.new

describe 'Page', :type => :feature, :js => true do
	
  before(:each) do
  end
    
  it 'should send a key' do

    visit '/'
    find(:css, 'div.test').native.send_key(:alt)
    
  end
  
end
require 'sinatra'

get '/' do
  "Hello World #{params[:name]}".strip
end

get '/division_by_0' do
  0 / 0
end

# -----------------------------------

require 'rspec'
require 'rack/test'

describe 'The HelloWorld App' do
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  it "says hello" do
    get '/'
    expect(last_response).to be_ok
    expect(last_response.body).to eq('Hello World')
  end
  
  it "can not find url" do
    get '/unknown_adress'
    expect(last_response).not_to be_ok
  end

  it "raises a server error" do
    get '/division_by_0'
    expect(last_response).to be_ok
  end

end
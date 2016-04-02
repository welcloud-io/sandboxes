require 'capybara/rspec'

require_relative '../../server.rb'
Capybara.app = Sinatra::Application.new

describe "the signin process", :type => :feature do

  it "test 1" do
    visit '/'
    expect(page).to have_content 'HELLO'
  end

end

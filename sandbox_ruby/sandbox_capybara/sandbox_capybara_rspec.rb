require 'rspec'
require 'capybara/rspec'

# ----------------------------------- SINATRA CONTROLLER
require 'sinatra'

set :logging, false

get '/text' do
	
  'TEXT
  <div id="div_id">DIV</div>
  '
  
end

get '/radio_button_form' do
	
  '<html>
  <body>
    <style>
      /*input[type=radio].input_class { display:none;}*/
    </style>
	<div id="question_id">
	  <div class="label_class">
	    QUESTION
	  </div>
	  <input class="input_class" type="radio" id="input_id" name="input_name">
	  <label id="label_id" for="input_id">ANSWER</label>
	</div>	
  </body>
  </html>'
	
end

get '/field' do

  '<textarea id="TEXTAREA_ID"></textarea>
  '
 
end

get '/button' do
	
  "<input type='button' id='BUTTON_ID' value='BEFORE_CLICK' onclick=\"this.value='AFTER_CLICK'\">"

end

# -----------------------------------

Capybara.app = Sinatra::Application.new

describe 'Page With NO Javascript', :type => :feature do
	
  before(:each) do # :all is another possible value
  end
    
  it 'should have_text' do

    visit '/text'
    expect(page).to have_content "TEXT"
    
    within('#div_id') do
      expect(page).to have_content "DIV"
      expect(page).not_to have_content "TEXT"
    end
    
    
  end
  
  it 'should select a radio button' do
	  
    visit '/radio_button_form'
    
    expect { page.find("#input_id").click }.not_to raise_error
    expect { page.find("#i").click }.to raise_error
    
    expect { page.find("#label_id").click }.not_to raise_error    
    
    expect { page.find("label", :text => "ANSWER").click }.not_to raise_error
    expect { page.find("label", :text => "A").click }.not_to raise_error #Be careful 1 character from the label is enought to choose a button

    expect { choose("ANSWER")  }.not_to raise_error
    expect { choose("A")  }.not_to raise_error #Be careful 1 character from the label is enought to choose a button
    expect { choose("N")  }.not_to raise_error #Be careful 1 character from the label is enought to choose a button
    expect { choose("x")  }.to raise_error
    
    within('#question_id') do
      expect { choose("ANSWER")  }.not_to raise_error # Works when button is visible (display !=none) or :js option is not set
      expect { find("#input_id").click }.not_to raise_error # Works when button is visible (display !=none) or :js option is not set
      expect { find("#label_id").click }.not_to raise_error # Usefull when radio is not visible
    end
    
  end
  
  it 'should fill in a field' do
    
    visit '/field'
    
    expect(page).to have_field 'TEXTAREA_ID', :with => ""
    fill_in 'TEXTAREA_ID', :with => "Something"
    expect(page).to have_field 'TEXTAREA_ID', :with => "Something"

  end

  after(:each) do # :all is another possible value
  end

end

describe 'Page With Javascript', :type => :feature, :js => true do  

  it 'should click on button' do
    
    visit '/button'

    expect(find_button('BUTTON_ID').value).to eq 'BEFORE_CLICK'
    expect(page).to have_button 'BUTTON_ID'
    click_on 'BUTTON_ID'
    expect(find_button('BUTTON_ID').value).to eq 'AFTER_CLICK'

  end

end
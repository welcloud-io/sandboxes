# myapp.rb
require 'sinatra'

#STYLE = "{}"

class Slide
  
  attr_reader :section
  
  def initialize
    @section = read_section_file
  end
  
  def read_section_file
    File.read('presentation/section.html')
  end
  
end

get '/' do
  @slide = Slide.new
  erb :erb_file
end

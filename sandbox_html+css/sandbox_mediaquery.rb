require 'sinatra'

set :public_folder, "."

get '/' do
  send_file "sandbox_mediaquery.html"
end

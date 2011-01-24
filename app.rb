require 'rubygems'
require 'sinatra'
require 'sinatra/reloader' if development?
require 'haml'
require 'sass'
require 'instagram'
require 'json'

get '/' do
  haml :index
end

get '/photo' do
  photos = Instagram::popular
  p = photos.first
  content_type :json
  #image size can be 150, 306 or 612
  { :username => p.user.username, :author => p.user.full_name, :taken => p.taken_at, :url => p.image_url(306) }.to_json
end

get '/stylesheets/global.css' do
  content_type 'text/css', :charset => 'utf-8'
  sass :global
end

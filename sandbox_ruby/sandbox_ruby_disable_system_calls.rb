undef :system
begin
  puts system("pwd")
rescue Exception => e
  puts e.message
end

undef :exec
begin
  exec("pwd")
rescue Exception => e
    puts e.message
end

undef :`
begin
  puts `pwd`
rescue Exception => e
  puts e.message
end

begin
  puts %x(pwd)
rescue Exception => e
  puts e.message
end



Tn = Time.now

puts 'Time.now'
puts Tn
puts
puts 'Time.now.strftime("%Y-%m-%d %H:%M:%S.%L")'
puts Tn.strftime("%Y-%m-%d %H:%M:%S.%L")
puts
puts 'Time.now.to_i'
puts Tn.to_i
puts
puts 'Time.at(' + Tn.to_i.to_s + ')'
puts Time.at(Tn.to_i) 
puts
puts 'Time.now.to_f'
puts Tn.to_f
puts
puts 'Time.at(' + Tn.to_f.to_s + ')'
puts Time.at(Tn.to_f) 
puts
10.times do puts Time.now.to_i end
puts
10.times do puts Time.now.to_f end

puts
puts Time.at(1387370361.1313498)
puts Time.at(1387370371.539212)
puts Time.at(1387370371.539212) - Time.at(1387370361.1313498)



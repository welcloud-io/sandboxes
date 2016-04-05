class C
 attr_accessor :a
end

c = C.new

c.a = 1
puts c.a

eval "c.a = 2"

puts c.a

v = "a"
eval "c." + v + " = 3"

puts c.a


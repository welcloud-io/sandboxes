def m(a = 1)
 puts a
end

m

m(2)

m(a=3)

def n(a, b = 1)
  puts a - b
end

n(1)

n(1, b = 2)

n(b=6)

n(b=6, a=11)

class A
  def initialize(a, b = 1, c)
  end
end

A.new(b = 1, c = 2)

def o(a: 1)
  puts a
end

puts o

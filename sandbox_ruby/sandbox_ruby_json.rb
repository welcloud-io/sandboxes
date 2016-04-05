require 'json'

# From STRING to HASH (parse Json)
execution_context = JSON.parse('{"code": "print 1"}')
puts execution_context["code"]

# From HASH to STRING (generate Json)
execution_context = {:code => "print 2"}
puts JSON.generate(execution_context)

# TRIALS
p ({:code => "print 3"}).to_json

execution_context = JSON.parse('{}')
p execution_context["code"]
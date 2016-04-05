require 'pg'
require 'uri'

db_url = 'postgres://postgres:postgres@localhost:5432/postgres'

db_infos = URI.parse(db_url)

db = PG.connect(db_infos.host, db_infos.port, '', '', db_infos.path[1..-1], db_infos.user, db_infos.password)

database_name = "database-tmp"
table_name = "table_tmp"
columns = "column_1 TEXT"

database_exists = db.exec("select * from pg_catalog.pg_database where datname='#{database_name}'").num_tuples == 1

puts "Supression de la base si elle existe: #{database_name}"
db.exec("DROP DATABASE \"#{database_name}\"") if database_exists

puts "Creation de la base : #{database_name}"
db.exec("CREATE DATABASE \"#{database_name}\"") unless database_exists

puts "Creation de la table : #{table_name}"
db.exec("DROP TABLE IF EXISTS #{table_name}")

puts "Creation de la table : #{table_name}"
db.exec("CREATE TABLE #{table_name} (#{columns})")

puts "Contenu de la table : #{table_name}"
p db.exec("SELECT * FROM #{table_name}").to_a

database_exists = db.exec("select * from pg_catalog.pg_database where datname='#{database_name}'").num_tuples == 1

puts "Supression de la base : #{database_name}"
db.exec("DROP DATABASE \"#{database_name}\"") if database_exists
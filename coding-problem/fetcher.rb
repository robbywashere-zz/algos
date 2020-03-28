#!/usr/bin/env ruby
#

datestr = Time.now.strftime("%m-%d-%Y")

def write_code_file(company, msgid, content)
  filename = "#{datestr}--#{company}_#{msgid}.js".gsub(" ", "_")
  puts "Writing #{filename}"
  File.open(filename, "w") do |file|
    file.write("/*\n#{content.gsub(/\r/, "\n")}*/")
  end
end

existing_ids = Dir.glob("*.js").map do |f|
  (f.split("_")[1] || "").split(".js")[0]
end

puts "Fetching coding problems..."

msgs = `glima scan +dailycodingproblem`

problems = msgs.split("\n").map { |m|
  msgid = m.split(" ")[3]
  msgid if m.include?("Good") and !existing_ids.include? msgid
}.compact

puts "Found #{problems.length} new problem(s)"

problems.each { |msgid|
  msg = `glima show #{msgid}`
  company = (msg.match(/asked by (.+?)\./) || [nil, "UNKNOWN"])[1]
  content = (msg.match(/asked by.+?\.+?(.+?)Upgrade to premium/m) || [nil, "UNKNOWN"])[1]
  write_code_file(company, msgid, content)
}

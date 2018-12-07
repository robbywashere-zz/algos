#!/usr/bin/env ruby
#

def write_code_file(company, msgid, content)
  filename = "#{company}_#{msgid}.js"
  puts "Writing #{filename}"
  File.open(filename, 'w') { |file| 
    file.write("/*\n#{content.gsub(/\r/,"\n")}*/")
  }
end

filelist = Dir.glob('*.js').map { |f| (f.split('_')[1]||"").split('.js')[0] }


puts "Fetching coding problems..."

msgs = `glima scan +dailycodingproblem`

problems = msgs.split("\n").map { |m| 
  msgid = m.split(" ")[3] 
  msgid if m.split(" ")[4] == "Good" and !filelist.include? msgid 
}.compact


puts "Found #{problems.length} new problem(s)"

problems.each{ |msgid| 
  msg = `glima show #{msgid}`
  company = (msg.match(/asked by (.+?)\./) || [nil,"UNKNOWN"])[1]
  content = (msg.match(/asked by.+?\.+?(.+?)Upgrade to premium/m) || [nil,"UNKNOWN"])[1]
  write_code_file(company, msgid, content)
}




require 'jasmine'

load 'jasmine/tasks/jasmine.rake'

task :install do
    sh "npm install && bower-installer && gulp js sass html"
    sh "rm -r glyph* bootstrap.less bower_components/"
    sh "sensible-browser 'localhost:8000/public/index.html' && php -S localhost:8000"
end

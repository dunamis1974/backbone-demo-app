# Project: backbone-demo-app
Uses Node.js based REST proxy used for JS UI developments to avoid CORS problems

#Installation
$ git clone https://github.com/dunamis1974/backbone-demo-app.git

$ cd backbone-demo-app

$ npm install

#Configuration
Use conf.js to configure data you need. Note that the static content is not required to be in the ./public folder. You can put it anywhere on the filesystem as long as your user can access it.

#Start using it
node .

Server starts by default on port 5000. Now you can point your browser to the http://localhost:5000/ and you are good to go.

#More info
There are some more advanced routing methods here. I use them in bigger applications to avoid loadding of all scripts at once.

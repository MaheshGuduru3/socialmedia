from node
workdir /app
copy package*.json .
run npm install
copy . .
expose 3005
cmd ["node" , "server.js"]
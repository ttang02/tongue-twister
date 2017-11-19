FROM node:latest

COPY package.json package.json
RUN npm install

#ADD your sources files 
COPY . .
EXPOSE 3000
CMD ["node","index.js"]

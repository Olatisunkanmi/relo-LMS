FROM node:latest

# Path: /app/workdir
WORKDIR /app

#copy package.json and package-lock.json to the workdir
COPY package*.json ./

#install dependencies
RUN yarn install

#copy all files to the workdir
COPY . .

#expose port 3000
EXPOSE 3000

#run the app
CMD ["yarn", "start:dev"]




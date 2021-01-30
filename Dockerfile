FROM node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
RUN npm run prod 
ENV ENVURI $ENVURI 
ENV ENVPSD $ENVPSD
CMD ENVURI=$ENVURI ENVPSD=$ENVPSD npm start 
# Pulls latest verstion of node
from node:latest
# Create file structure in docker
RUN mkdir /application
# Set the working directory in docker
WORKDIR /application
# Move files over
COPY ./application /application
# run npm
RUN npm install
# create bundle
RUN npm run react-prod
# Expose port in container
EXPOSE 3127
# set up command
CMD ["npm", "start"]
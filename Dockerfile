# Use Node 10 to build the image
FROM node:10-alpine as builder

WORKDIR /usr/src/app

# Copy the dependencies and the lockfile
COPY package.json .
COPY yarn.lock .

# Donwload the dependencies from the lockfile
RUN yarn install

# Now copy the source code and the public files
COPY src ./src
COPY public ./public

# Build the production files
RUN yarn run build


# Use an NGINX alpine image to serve the files
FROM nginx:alpine

# Remove the NGINX configuration file, replace with our
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built files from Node to the static files
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
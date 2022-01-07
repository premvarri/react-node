FROM gcr.io/google_appengine/nodejs
COPY . /app/
#Change directory to client nside app
WORKDIR /app/client
# You have to specify "--unsafe-perm" with npm install
# when running as root.  Failing to do this can cause
# install to appear to succeed even if a preinstall
# script fails, and may have other adverse consequences
# as well.
# This command will also cat the npm-debug.log file after the
# build, if it exists.
# installs required node modules for our client
RUN npm install --unsafe-perm || \
    ((if [ -f npm-debug.log ]; then \
    cat npm-debug.log; \
    fi) && false)
# Creates a optimised build of our react app
RUN npm run build
# Removes the node modules inside client after 
## build as they are no longer needed
RUN rm -rf node_modules
# Go back to our app folder
WORKDIR /app
# install node modules for our server
RUN npm install --unsafe-perm
# start our server
CMD npm start
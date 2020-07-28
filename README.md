## Steps for installing a new npm package
1. Change directory into the folder that needs a new npm package and run your standard `npm installl XX --save`
2. Rebuild the docker image `docker-compose build --no-cache`
3. Find  `docker ps -a`  and remove the container `docker rm CONTAINERID`
4. Run project with new npm packages `docker-compose up`
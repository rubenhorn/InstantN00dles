# InstantN00dles
A simple docker + node.js template for hosting websites on the actual internet without hassle.

## How do I use it?
1. Create your http app from `./src/index.js`
2. Set your subdomain in `./Dockerfile`
3. Run `docker build -t instant-n00dles . && docker run instant-n00dles`
4. ???
5. Profit

## Is it secure?
Your app runs in a docker container and is isolated from your host system.  
A tunnel is established connecting only this container to the dangerous void beyond your LAN.

## Can I run it locally only?
If the environment variable `SUBDOMAIN` is not set, no tunnel is established.  
When running in a docker container, you have to remove the corresponding line from `./Dockerfile` and create a port mapping instead.

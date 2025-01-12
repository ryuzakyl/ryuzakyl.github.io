---
title: Docker Cheatsheet
---

In this section you will find my notes on using Docker for the deployment of Git projects.

:::tip

You do not have to write out the `CONTAINER_ID` in full. The partial `CONTAINER_ID` specified need only uniquely identify the container. Given a container 'aa151b912448' and 'aa153cd14238', `docker logs aa15` will not work, but `docker logs aa151` will.

:::


## Containers

**Deleting all containers**
```bash
$ docker rm -f $(docker ps -a -q)
```

## Docker for local services

**Run a PostgreSQL container with specific credentials and mapped volume**
```bash
docker run --name postgres --restart always -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=thepassword -p 5432:5432 -v /data/postgresql:/var/lib/postgresql/data  -d postgres
```

**Run a redis container in detach mode with a mapped volume**
```bash
docker run --name redis --restart always -p 6379:6379 -v /data/redis:/data -d redis
```

## Resources
- [Stop docker containers with name matching a pattern](https://stackoverflow.com/questions/56998486/stop-docker-containers-with-name-matching-a-pattern/66126170#66126170)
- [docker container ls](https://docs.docker.com/reference/cli/docker/container/ls/)
- [docker container logs](https://docs.docker.com/reference/cli/docker/container/logs/)
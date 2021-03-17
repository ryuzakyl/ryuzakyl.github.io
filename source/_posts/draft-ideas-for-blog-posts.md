---
title: (TODO) Ideas for blog posts... 
date: 2021-01-01 00:00:00
toc: true
tags:
  - ideas
  - todo
  - blog
categories:
    - WIP
keywords:
  - wip
  - ideas
  - blog
---

> **TL;DR** Ideas/topics for blog posts that will come in the future.

![](https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)

<!-- more -->

# [< 75th Post] Documented on Trello

<!-- ---------------------------------------------------------------------- -->

# [75th Post] Playing with Trello & Python with **py-trello**

> **TL;DR** Needed to send some info to a friend, which I had in Trello cards. Lazy as I am, I decided to *automate* that process This post lays out the detailed steps for consuming Trello's API from Python.

Post image:
https://images.pexels.com/photos/1181494/pexels-photo-1181494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940

<!-- https://www.pexels.com/photo/woman-wearing-eyeglasses-using-blue-and-and-gray-laptop-inside-room-1181494/ -->

* Another tutorial: https://medium.com/@rafael.dourado/utilizando-a-api-do-trello-com-python-740583e6ab27.

* Take the final source code from ...projects/cacharra/python/trello.

* And another one:
https://medium.com/@vishnuashok123/downloading-all-attachments-from-trello-using-python-ca1901cc701e

* The Python package used on this tutorial is https://pypi.org/project/py-trello/

## Step by Step instructions

To get your Trello API Keys, follow instructions from:

https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/#:~:text=You%20can%20get%20your%20API,comprised%20of%20random%20alphanumeric%20characters.
https://trello.com/app-key

To setup up **py-trello**, follow these instructions:
https://pypi.org/project/py-trello/

The official documentation of **py-trello** (sadly the docs are no good :( )):
https://py-trello.readthedocs.io/en/latest/

Documentation for devs?
https://py-trello-dev.readthedocs.io/en/latest/trello.html#module-trello.card

<!-- ---------------------------------------------------------------------- -->

# [76th Post] Develop extensions for **VS Code**

> **TL;DR** I wanted/needed (lazy as I am) to open a file from an URL on the Internet in VS Code to be able to edit the file locally. In this tutorial, we will learn to develop a VS Code extension by solving this problem.

**NOTE:** Probably at the beginning we will only solve the problem for simple HTTP URLs, maybe in the future we can expand it for SSH, FTP and other protocols.

**Examples to use as guidance:**
* (Kubernetes Snippets)
https://github.com/ipedrazas/kubernetes-snippets,
https://marketplace.visualstudio.com/items?itemName=ipedrazas.kubernetes-snippets
* (REST Client)
https://github.com/Huachao/vscode-restclient

**NOTE:** We could solve some developer's concern like this one (https://stackoverflow.com/questions/58967325/can-i-open-a-url-as-a-file-in-vscode).

<!-- ---------------------------------------------------------------------- -->

# [77th Post] Develop on Docker containers in **VS Code**

> **TL;DR** Wanted to develop inside containers because switching between Linux and Windows 10 + WSL 2 to make the switch as seemless as possible.

**Instructions:** https://code.visualstudio.com/docs/remote/containers

For the issues communicating the containers, these are the approaches:

## Approach 1: Use host.internal.docker

Access host port from inside docker container: https://stackoverflow.com/questions/31324981/how-to-access-host-port-from-docker-container

Another link (Answer it on Stack Overflow, it's probably the IP Tables rule missing): https://stackoverflow.com/questions/65362926/from-inside-one-docker-container-how-to-connect-to-the-port-of-another-docker-c

## Approach 2: Make containers be part of a separate network

Instructions: https://stackoverflow.com/a/58764482/2766396

To verify that the containers are on the same network: https://stackoverflow.com/a/43904733/2766396

For example, this is how we find the containers on the host network (running with *--network host*):
docker network inspect host -f <pre>"{{json .Containers }}"</pre>

### How to access the containers?

You can connect using the container's name. Some DNS resolution is done (search for a better explanation reference that tutorial) and we can use the following URL:

**container-name**:**container-port**

### Remove the network when there still endpoints

Instructions: https://github.com/moby/moby/issues/17217#issuecomment-196607597

Example:
$ docker network inspect qq-network | grep endpoint
$ docker network disconnect -f qq-network backend-service 
$ docker network disconnect -f qq-network frontend-service 
$ docker network rm qq-network 
qq-network

## Approach 3: User the host's network

Using the host network: https://docs.docker.com/network/network-tutorial-host/
Testing that with command: sudo netstat -tulpn | grep :**port**

## Connecting Firefox for Developers (include it here on another post?)

The only difference is that we need to provide firefox's binary location on the *launch.json* config

## Troubleshooting (containers do not communicate)

### Cannot access a container from inside another

IP Table rule to allow traffic to **docker0** interface: https://forums.docker.com/t/configuring-iptables-to-let-docker-containers-access-out/41176

### Firefox/Chrome cannot connect to the debugger

NOTE: Still don't know why Chrome can't connect to debugger. Firefox can. 

### Connection reset by peer when when hitting Docker container

Troubleshooting the issue: https://www.javaer101.com/es/article/49770319.html
Using the host network: https://docs.docker.com/network/network-tutorial-host/
Testing that with command: sudo netstat -tulpn | grep :**port**

<!-- ---------------------------------------------------------------------- -->

# [78th Post] Docker Networking

Start with links gathered in my Trello board **Study > Docker > Networking**.

# [79th Post] Cheapest K8s Cluster ~1USD a day

https://georgepaw.medium.com/how-to-run-the-cheapest-kubernetes-cluster-at-1-per-day-9287abb90cee
https://georgepaw.medium.com/how-to-run-the-cheapest-kubernetes-cluster-at-1-per-day-tutorial-9673f062b903

# [80th Post] Microservices development (yes... development) with Kubernetes

Debugging and Developing microservices communicating with other services in a K8s cluster:

https://erkanerol.github.io/post/debugging-k8s-services/
https://www.telepresence.io/

# [81th Post] Configuring Secrets on Kubernetes

Links:
* **(use case for secret creation)** https://sookocheff.com/post/kubernetes/local-kubernetes-development-with-kind/
* **(K8s: Pull images from private registries)** https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/, (several registries: proxy and push) https://maelvls.dev/docker-proxy-registry-kind/ https://kind.sigs.k8s.io/docs/user/local-registry/
* **(Creating secrets from GitHub, GitLab, etc.)** https://towardsdatascience.com/multiple-ways-to-create-kubernetes-secrets-33f97feaa499
* **(Add ImagePullSecrets to a service account)** https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#add-imagepullsecrets-to-a-service-account
* **(kubectl imperative secret creation)** https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#-em-secret-docker-registry-em-


# [82nd Post] Automate Python development environment

* (automating + CI/CD) https://martinheinz.dev/blog/17
* (reference Post 81th for Kubernetes part) Also https://martinheinz.dev/blog/20

# [83th Post] Install ytfzf with by-product

* *ytfzf* is for lazy dudes like me and we can see now youtube videos from the terminal.
* one interesting thing is you can watch YT videos without annoying adds.
* as a *by-product*, we install fzf and adding the line ([ -f ~/.fzf.bash ] && source ~/.fzf.bash) to your ~/.bashrc gives you a very nice autocompletion on Ctrl + R on bash.

# [84th Post] Modelling business/software user cases/requirements with Finite State Automatons

* (My Trello board) https://trello.com/c/K5gOn4FM/18-good-software-practices

# [85th Post] Jobs & CronJobs in Kubernetes

* (tutorial Celery + RabbitMQ) https://github.com/kubernetes/kubernetes/tree/release-1.3/examples/celery-rabbitmq
* (Parallel processing queue in Kubernetes) https://kubernetes.io/docs/tasks/job/coarse-parallel-processing-work-queue/

# [86th Post] Work queues in Kubernetes with Celery and RabbitMQ

* (Jobs) https://levelup.gitconnected.com/understanding-jobs-in-kubernetes-541614ccd796
* (CronJobs) https://levelup.gitconnected.com/getting-started-with-cronjobs-in-kubernetes-da94263d4887
* (Jobs & CronJobs) https://opensource.com/article/20/11/kubernetes-jobs-cronjobs, https://betterprogramming.pub/tutorial-how-to-use-kubernetes-job-and-cronjob-1ef4ffbc8e84

# [86th Post] Kubernetes & VS Code Development Workflows

* (Cloud Code extension) https://marketplace.visualstudio.com/items?itemName=GoogleCloudTools.cloudcode
* (NEXT.io video) https://www.youtube.com/watch?v=62GLbBDLiPE

# [87th Post] Profiling NodeJs app

* https://www.infoq.com/presentations/profile-nodejs/
* https://medium.com/@mohit3081989/detecting-performance-bottlenecks-in-node-js-application-ae5a9f9fbde3
* https://www.youtube.com/watch?v=HyCwu9kBO2g
* https://www.youtube.com/watch?v=ASv8188AkVk
* https://www.youtube.com/watch?v=nhW7Qb4ojH8
* https://www.youtube.com/watch?v=t3NlzG3rfs0
* https://developer.ibm.com/languages/node-js/tutorials/learn-nodejs-debugging-and-profiling-node-applications/

# [88th Post] ML & DA meets Kubernetes

* https://towardsdatascience.com/deploy-machine-learning-applications-to-kubernetes-using-streamlit-and-polyaxon-49bf4b963515
* https://github.com/polyaxon/polyaxon
* https://polyaxon.com/
* https://github.com/streamlit/streamlit
* https://streamlit.io/
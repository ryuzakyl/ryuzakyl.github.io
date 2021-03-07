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
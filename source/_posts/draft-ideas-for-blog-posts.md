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



# [76th Post] Develop extensions for **VS Code**

> **TL;DR** I wanted/needed (lazy as I am) to open a file from an URL on the Internet in VS Code to be able to edit the file locally. In this tutorial, we will learn to develop a VS Code extension by solving this problem.

**NOTE:** Probably at the beginning we will only solve the problem for simple HTTP URLs, maybe in the future we can expand it for SSH, FTP and other protocols.

**Examples to use as guidance:**
* (Kubernetes Snippets) https://github.com/ipedrazas/kubernetes-snippets, https://marketplace.visualstudio.com/items?itemName=ipedrazas.kubernetes-snippets
* (REST Client) https://github.com/Huachao/vscode-restclient

**NOTE:** We could solve some developer's concern like this one (https://stackoverflow.com/questions/58967325/can-i-open-a-url-as-a-file-in-vscode).
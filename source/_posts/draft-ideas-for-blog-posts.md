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
* https://software.danielwatrous.com/kubernetes-on-the-cheap/
* https://redmaple.tech/blogs/affordable-kubernetes-for-personal-projects/

GKE Pre-emptible nodes:
* https://cloud.google.com/kubernetes-engine/docs/how-to/preemptible-vms
* https://cloud.google.com/blog/products/containers-kubernetes/cutting-costs-with-google-kubernetes-engine-using-the-cluster-autoscaler-and-preemptible-vms
* https://medium.com/google-cloud/using-preemptible-vms-to-cut-kubernetes-engine-bills-in-half-de2481b8e814
* https://medium.com/swlh/how-to-save-big-on-gke-use-preemptible-nodes-298fd17b4971

# [80th Post] Microservices development (yes... development) with Kubernetes

Debugging and Developing microservices communicating with other services in a K8s cluster:

https://erkanerol.github.io/post/debugging-k8s-services/
https://www.telepresence.io/

Okteto: A Tool to Develop Applications on Kubernetes
https://github.com/okteto/okteto

An out-of-tree solution for troubleshooting running pods,
https://github.com/aylei/kubectl-debug#install-the-kubectl-debug-plugin

Telepresence:
* https://www.telepresence.io/
* https://www.telepresence.io/tutorials/kubernetes
* https://www.telepresence.io/tutorials/kubernetes-client
* https://www.telepresence.io/tutorials/kubernetes-rapid
* https://www.getambassador.io/docs/telepresence/latest/quick-start/

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

* https://www.linuxuprising.com/2021/03/ytfzf-search-with-thumbnails-and-play.html?m=1
* *ytfzf* is for lazy dudes like me and we can see now youtube videos from the terminal.
* one interesting thing is you can watch YT videos without annoying adds.
* as a *by-product*, we install fzf and adding the line ([ -f ~/.fzf.bash ] && source ~/.fzf.bash) to your ~/.bashrc gives you a very nice autocompletion on Ctrl + R on bash.

* https://github.com/junegunn/fzf/issues/1385
* https://stackoverflow.com/questions/63816790/youtube-dl-error-youtube-said-unable-to-extract-video-data

# [84th Post] Modelling business/software user cases/requirements with Finite State Automatons

* (My Trello board) https://trello.com/c/K5gOn4FM/18-good-software-practices

# [85th Post] Jobs & CronJobs in Kubernetes

* (tutorial Celery + RabbitMQ) https://github.com/kubernetes/kubernetes/tree/release-1.3/examples/celery-rabbitmq
* (Parallel processing queue in Kubernetes) https://kubernetes.io/docs/tasks/job/coarse-parallel-processing-work-queue/
* https://youtu.be/j1EnBbxSz64

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

ML & DA at scale:
* https://www.hpe.com/us/en/resources/solutions/kubernetes-mlops.html
* https://towardsdatascience.com/a-kubernetes-architecture-for-machine-learning-web-application-deployments-632f7765ef29
* https://towardsdatascience.com/machine-learning-with-docker-and-kubernetes-training-models-cbe33a08c999
* https://pages.awscloud.com/Scaling-Machine-Learning-on-Kubernetes-and-Kubeflow-with-SageMaker_2020_0514-MCL_OD.html
* https://thenewstack.io/democratizing-machine-learning-at-scale-with-kubernetes-on-azure/
* https://opencredo.com/blogs/machine-learning-at-scale-first-impressions-of-kubeflow/
* https://conferences.oreilly.com/jupyter/jup-ny/public/schedule/detail/69752.html

# [89th Post] Node.js OpenTracing/OpenCensus Instrumentation

* https://www.youtube.com/watch?v=1wWfVqYb-5Y
* https://cloud.google.com/monitoring/custom-metrics/open-census
* (section Node.js OpenTracing Instrumentation) https://blog.risingstack.com/the-future-of-microservices-monitoring-and-instrumentation/
* https://opensource.com/article/20/2/kubernetes-opencensus
* search for more links

# [90th Post] Kubernetes StatefulSets with PostgreSQL

* https://medium.com/@suyashmohan/setting-up-postgresql-database-on-kubernetes-24a2a192e962
* https://kubernetes.io/blog/2017/02/postgresql-clusters-kubernetes-statefulsets/
* https://www.youtube.com/watch?v=ewku1iuQQ-A

# [91th Post] Instrumenting with Prometheus

* (Prometheus metrics / OpenMetrics code instrumentation.) https://sysdig.com/blog/prometheus-metrics/
* https://prometheus.io/docs/guides/go-application/
* [Instrumenting a Go application](https://www.scalyr.com/blog/prometheus-tutorial-detailed-guide-to-getting-started/)
* https://www.scalyr.com/blog/prometheus-metrics-by-example/

# [92nd Post] Monotoring MongoDB with Mongo Exporter in Kubernetes

* https://www.youtube.com/watch?v=mLPg49b33sA

# [93th Post] OpenTelemetry/Zipkin

* https://alanstorm.com/category/open-telemetry/

# [94th Post] Ephemeral Containers

* https://kubernetes.io/docs/concepts/workloads/pods/ephemeral-containers/
* https://kubernetes.io/docs/tasks/debug-application-cluster/debug-running-pod/#ephemeral-container
* https://alexsimonjones.medium.com/kubectl-debug-time-to-say-goodbye-to-baking-diagnostic-tools-into-your-containers-47f6802d982b
* https://github.com/aylei/kubectl-debug

# [95th Post] KinD issues after docker/host restart

* https://github.com/kubernetes-sigs/kind/issues/2045
* https://github.com/kubernetes-sigs/kind/issues/111
* https://github.com/nginxinc/kubernetes-ingress/issues/885
* https://www.edureka.co/community/19762/kubernetes-ingress-kepps-returning-502-server-error

Walkthrough for my tests troubleshooting this issue (add my captures of these troubleshooting steps): https://cameron-manavian.medium.com/how-to-debug-a-502-on-kubernetes-c2b0bc1f7490

# [96th Post] Kubeflow 101

* https://www.kubeflow.org/
* https://github.com/kubeflow/kubeflow
* https://www.youtube.com/watch?v=cTZArDgbIWw&list=PLIivdWyY5sqLS4lN75RPDEyBgTro_YX7x

# [97th Post] CodeStream in VS Code

* https://www.youtube.com/watch?v=mRzU7MJ1588
* https://github.com/TeamCodeStream/codestream
* https://www.youtube.com/watch?v=Fg1uP-CxCXY
* https://dev.to/codestream/vs-code-github-and-codestream-choosing-the-best-of-all-worlds-mc3

# [97th Post] Chaos Engineering with Istio in Kubernetes

* https://istio.io/latest/docs/tasks/traffic-management/fault-injection/
* https://dzone.com/articles/chaos-testing-your-microservices-with-istio
* https://developers.redhat.com/blog/2018/04/10/istio-chaos-engineering/
* https://samirbehara.com/2019/06/06/chaos-testing-your-microservices-with-istio/
* https://www.oreilly.com/library/view/introducing-istio-service/9781491988770/ch05.html
* https://www.istiobyexample.dev/fault-injection
* https://kiali.io/documentation/latest/features/#_traffic_management_fault_injection

# [98th Post] Resilient Microservices with Istio Circuit Breaker

* https://istio.io/docs/tasks/traffic-management/circuit-breaking/
* https://www.katacoda.com/courses/istio/increasing-reliability/handling-failures-with-circuit-breakers
* https://samirbehara.com/2019/06/03/resilient-microservices-with-istio-circuit-breaker/
* https://samirbehara.com/2019/06/02/istio-circuit-breaker-with-outlier-detection/

# [99th Post] Mongo Express and MongoDB on Kubernetes

* Installation guide here: https://www.youtube.com/watch?v=EQNO_kM96Mo
* https://github.com/mongo-express/mongo-express
* https://www.helpnetsecurity.com/2019/04/26/securing-mongo-express-web-administrative-interfaces/#:~:text=Mongo%20Express%20is%20a%20lightweight,js%2C%20Express%20and%20Bootstrap%20packages.

# [100th Post] Istio Traffic Management

https://istio.io/latest/docs/concepts/traffic-management/

# [101th Post] Secure Control of Egress Traffic in Istio

* https://istio.io/latest/blog/2019/egress-traffic-control-in-istio-part-1/
* https://istio.io/latest/blog/2019/egress-traffic-control-in-istio-part-2/
* https://istio.io/latest/blog/2019/egress-traffic-control-in-istio-part-3/

think that one of the talks by meghan o'keefe or the sand lord has a demo of this.

# [102th Post] Istio External Authorization

https://istio.io/latest/blog/2021/better-external-authz/

# [103th Post] Leveraging Istio Ingress Gateway with NGINX Ingress

* https://software.danielwatrous.com/istio-ingress-vs-kubernetes-ingress/
* https://discuss.istio.io/t/istio-routing-compared-to-kubernetes-ingress/2791

* https://matiasmct.medium.com/using-istio-with-nginx-ingress-ccb8e28d9aff
* https://istio.io/latest/docs/reference/config/annotations/

* https://blog.jayway.com/2018/10/22/understanding-istio-ingress-gateway-in-kubernetes/

* https://www.alibabacloud.com/blog/north-south-traffic-management-of-istio-gateways-with-answers-from-service-mesh-experts_596658

* https://banzaicloud.com/blog/istio-multiple-gateways/
* https://banzaicloud.com/blog/backyards-ingress/

# [104th Post] Which is the right choice: Kubernetes Ingress, Istio Gateway or API Gateway

* https://medium.com/@zhaohuabing/which-one-is-the-right-choice-for-the-ingress-gateway-of-your-service-mesh-21a280d4a29c

# [105th Post] Vault on Kubernetes

* https://www.vaultproject.io/docs/platform/k8s/helm/run
* https://learn.hashicorp.com/tutorials/vault/kubernetes-sidecar
* https://istio.io/v1.2/docs/tasks/security/vault-ca/
* https://stackoverflow.com/questions/65735493/istio-and-hashicorpt-vault-agent-sidecar-not-working-properly

# [106th Post] Tracing with Kiali

* https://medium.com/kialiproject/trace-my-mesh-part-1-3-35e252f9c6a9
* https://medium.com/kialiproject/trace-my-mesh-part-2-3-13cd6ccae1de
* https://medium.com/kialiproject/trace-my-mesh-part-3-3-e1e64795e61f
* https://kiali.io/documentation/latest/distributed-tracing/

# [107 Post] Youtube-dl and some cool stuff

* How to install
* Usage
* automate download lists, etc.

https://www.linuxuprising.com/2021/03/ytfzf-search-with-thumbnails-and-play.html

# [108 Post] Malware analysis on Chrome extensions

Case study:
![](/assets/images/draft/malware-extension.png)

View source code of extension:
* https://gist.github.com/paulirish/78d6c1406c901be02c2d
* https://www.howtogeek.com/198964/how-to-view-the-source-code-of-a-chrome-extension/#:~:text=Using%20the%20Chrome%20Extension%20Source%20Code%20Viewer&text=Now%20that%20it%20is%20installed,file%20or%20view%20it%20online.
* https://www.saintlad.com/get-source-code-of-chrome-extension/

Malware Analysis for chrome extensions:
* https://resources.infosecinstitute.com/topic/how-to-spot-a-malicious-browser-extension/
* https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.374.8978&rep=rep1&type=pdf
* https://securelist.com/dissecting-the-chrome-extension-facebook-malware/81716/
* https://null-byte.wonderhowto.com/how-to/analyze-web-browser-extensions-for-possible-malware-other-malicious-activity-0236335/
* https://www.usenix.org/sites/default/files/conference/protected-files/cset17_slides_dekoven.pdf
* https://static.googleusercontent.com/media/research.google.com/es//pubs/archive/43824.pdf
* https://www.wired.com/story/chrome-extension-malware/


# [109 Post] Kubernetes CIS Benchmarks for Auditing

Talk about the benchmarks
Talk about Aqua and NueVector implementations
Talk about how to exploit failing benchmarks?
Talk about how to do it in a cronjob and alert via Prometheus or another alerting mechanism:
* https://github.com/sukeesh/k8s-job-notify
* https://medium.com/@tristan_96324/prometheus-k8s-cronjob-alerts-94bee7b90511
* https://github.com/marcomicera/kubemarks

# [110 Post] Kubernetes Networking [Demistified | in depth | from zero to hero ]

* K8s Network Model/Architecture (https://k8s.networkop.co.uk/arch/)
* K8s CNI Plugins (https://k8s.networkop.co.uk/cni/)
  * kindnet (https://github.com/aojea/kindnet)
  * cilium
  * calico (https://alexbrand.dev/post/creating-a-kind-cluster-with-calico-networking/)
  * flannel
  * etc.
* https://medium.com/swlh/customise-your-kind-clusters-networking-layer-1249e7916100
* (Network Troubleshooting tool) https://github.com/nicolaka/netshoot
* Networking stuff from my Brainstorming doc


# [111 Post] KinD support for insecure registries

* https://kind.sigs.k8s.io/docs/user/local-registry/
* https://github.com/kubernetes-sigs/kind/issues/110#issuecomment-554594072
* https://github.com/networkop/k8s-guide-labs/blob/master/kind.yaml

# [112 Post] Kubernetes Network Policies

* Take from my brainstorming document

# [113 Post] Should I get a CKA, CKAD, CKS, LFS260 certifications?

https://github.com/cncf/curriculum
https://www.reddit.com/r/kubernetes/comments/nejmo5/my_views_on_cka/
killer.sh


CKA:
* https://www.reddit.com/r/kubernetes/comments/nrs1ry/today_i_got_my_cka_here_are_some_tips/
* https://arunksingh16.medium.com/admin-notebook-how-to-be-quick-with-kubectl-1-19-8845176be4d7
* https://www.gcuisinier.net/blog/2020/08/comment-jai-pass%C3%A9-la-certification-kubernetes-administrator/


CKAD:
* https://www.cncf.io/certification/ckad/
* https://www.ivonet.nl/2021/04/16/kubernetes-for-developers/
* https://kgamanji.medium.com/how-i-passed-my-ckad-with-97-6b54dcffa72f
* https://arunksingh16.medium.com/admin-notebook-how-to-be-quick-with-kubectl-1-19-8845176be4d7

CKS:
* (Gooood one) https://www.youtube.com/watch?v=Ny3p0UKBcYs
* (Good one) https://k21academy.com/docker-kubernetes/certified-kubernetes-security-specialist-cks-step-by-step-activity-guide-hands-on-lab/
* https://itnext.io/cks-exam-series-5-imagepolicywebhook-8d09f1ceee70
* https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/
* https://www.cncf.io/blog/2020/07/15/certified-kubernetes-security-specialist-cks-coming-in-november/
* https://itnext.io/cks-exam-series-3-immutable-pods-3812cf76cff4
* https://medium.com/devopsturkiye/certified-kubernetes-security-specialist-cks-ultimate-guide-537b6bbd901f
https://medium.com/cooking-with-azure/certified-kubernetes-security-specialist-cks-exam-guide-a8fc2b4c47ea

LFS260:
* https://training.linuxfoundation.org/training/kubernetes-security-essentials-lfs260/
* https://www.linkedin.com/in/manuelmorejon/
* https://www.youtube.com/watch?v=uDibFQyBO9E

DOFD:
* https://www.devopsuniversity.org/certified-devops-foundation/
* https://devopsinstitute.com/courses/devops-foundation/
* https://devopsinstitute.com/certifications/devops-foundation/
* https://devopsinstitute.com/event/devops-foundation-certification/

# [114 Post] Consuming the API Server with cURL

* https://nieldw.medium.com/curling-the-kubernetes-api-server-d7675cfc398c

# [115 Post] kubelet authentication and authorization

* https://github.com/cyberark/kubeletctl
* https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet-authentication-authorization/
* https://stupefied-goodall-e282f7.netlify.app/contributors/design-proposals/node/kubelet-auth/
* https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/

# [116 Post] Develop browser extensions/add-ons

* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension
* https://hacks.mozilla.org/2019/10/developing-cross-browser-extensions-with-web-ext-3-2-0/
* https://www.smashingmagazine.com/2017/04/browser-extension-edge-chrome-firefox-opera-brave-vivaldi/
* https://github.com/albinantony92/Web-Page-Annotation

# [117 Securing Kubernetes: CAP_NET_RAW

Do the video with Kubehunter, etc. Try to fix CAP_NET_RAW?? Does it makes sense to do so?

* https://www.weave.works/blog/container-capabilities-kubernetes/
* https://gitlab.com/gitlab-org/gitlab-runner/-/issues/26833
* https://stackoverflow.com/questions/53328090/why-is-requiring-that-all-capabilities-be-dropped-in-a-kubernetes-podsecuritypol
* https://www.stackrox.com/post/2020/06/mitigating-kubernetes-cve-2020-10749/
* https://github.com/kubernetes-simulator/simulator/issues/125
* https://snyk.io/blog/kubernetes-securitycontext-linux-capabilities/

# [118 Post] Manage cloud pricing for Kubernetes cluster

* https://medium.com/@bahubalishetti/analyzing-self-managed-kubernetes-cluster-cost-on-aws-via-cloudhealth-8a1c0b30156b
* https://cloud.google.com/kubernetes-engine/pricing

# [119 Post] KinD cluster configuration

Components to be configured:
* kubelet
* apiServer
* controllerManager (https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/)
* scheduler

Configurations:
* https://kind.sigs.k8s.io/docs/user/configuration/#kubeadm-config-patches
* https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/control-plane-flags/

https://github.com/kubernetes/kubeadm/issues/552#issuecomment-353368971

https://github.com/kubernetes-sigs/kind/issues/1839
https://github.com/kubernetes/kubernetes/issues/60896

# [120 Post] Install Albert

* https://www.reddit.com/r/linux/comments/9lmcaj/* making_albert_launcher_on_linux_as_good_as_alfred/
* https://github.com/albertlauncher/albert
* https://medium.com/curiouscaloo/macos-to-ubuntu-part1-alfred-replacement-7864b4d26397
* https://medium.com/curiouscaloo/macos-to-ubuntu-part1-alfred-replacement-7864b4d26397#:~:text=Albert%20is%20an%20open%20source,your%20fancy%2C%20add%20one%20yourself.

* https://albertlauncher.github.io/
* https://www.youtube.com/watch?v=4KWKwKItG94
* https://www.youtube.com/watch?v=i95rn3sl_Uo
* https://www.youtube.com/watch?v=9t6Zr9lAFfo

# [121 Post] Kritis and Grafeas tutorial

* Do a real scenario of exploitation. Create a vulnerable image. deployit to the cluster and exploit it
* Talk about the necessity of these tools and explain them
* Do the setup/tutorial to mitigate these threats.

References:
* Section for 'Security in the Software Supply Chain'

# [122 Post] App for relative voting

* https://half-measures.tumblr.com/
* https://jesseepinkman.tumblr.com/Reputation

# [123 Post] Kubernetes for IoT

* http://thinkmind.org/articles/cloud_computing_2019_1_10_28010.pdf
* https://www.missioncloud.com/blog/leveraging-kubernetes-from-an-iot-perspective
* https://capgemini-engineering.com/us/en/insight/how-kubernetes-benefits-iot-edge/
* https://www.lfedge.org/2020/05/01/extending-kubernetes-to-the-iot-edge/
* https://www.youtube.com/watch?v=_L_pR6ZYwEs

# [123 Post] Silly Kubelet for Honeypot

* https://medium.com/hackernoon/a-silly-virtual-kubelet-71b2ec466bc6
* https://github.com/lizrice/virtual-kubelet/tree/silly/providers/silly
* https://asciinema.org/a/152964

# [123 Post] Knative

* https://github.com/meteatamel/knative-tutorial
* https://redhat-developer-demos.github.io/knative-tutorial/knative-tutorial/index.html

# [123 Post] Backend server side performance comparison

* (starting point)(read the comments) https://www.toptal.com/back-end/server-side-io-performance-node-php-java-go
* (include Python) https://gist.github.com/grantjenks/dacc0a1e7fa9a08264439b9c6a05ec5b
* Two benchmarks: a simple computation and, on the other hand, some CRUD operations

# [123 Post] Playing with AdmissionControl with ImagePolicyWebhook

* My video about it when troubleshooting why it was not working on KinD.
* https://github.com/kubernetes/kubernetes/issues/58426
* https://ikcoo.tistory.com/157
* https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/

# [124 Post] Automatic Docker image build from Github repo

* https://stackoverflow.com/questions/25328166/docker-hub-automated-build-tagging
* https://docs.docker.com/docker-hub/builds/#set-up-build-rules
* https://itnext.io/understanding-docker-image-tags-and-publishing-images-to-docker-hub-b7a4f900f201
* https://stackoverflow.com/questions/18216991/create-a-tag-in-a-github-repository


# [125th Post] Rewriting BookInfo in C# and golang

Give credit to original author

* https://github.com/sevikarakose/BookInfo

# [126th Post] Deep dive into the whole PSP/PSS controversy

* https://github.com/appscodelabs/tasty-kube/tree/master/kind/psp
* https://medium.com/coryodaniel/kubernetes-assigning-pod-security-policies-with-rbac-2ad2e847c754
* https://developer.squareup.com/blog/kubernetes-pod-security-policies/ 
* https://codilime.com/the-benefits-of-pod-security-policy-a-use-case/
* (possible values for PSP fields like runAsUser) https://kubernetes.io/docs/concepts/policy/pod-security-policy/#users-and-groups
* https://suraj.io/post/k8s-hostpat-nuke-nodes/
* https://sysdig.com/blog/kubernetes-security-psp-network-policy/#admission-controllers
* https://blog.appsecco.com/kubernetes-namespace-breakout-using-insecure-host-path-volume-part-1-b382f2a6e216
* https://blog.appsecco.com/prevent-hostpath-based-kubernetes-attacks-with-pod-security-policies-2f8646df6761


# [127th Post] Rootless containers

* https://medium.com/@k8spin/rootless-containers-on-kubernetes-part-1-eca737fa7a81
* https://medium.com/@k8spin/rootless-containers-on-kubernetes-part-2-dfff67f899a6
---
title: Kubernetes Cheatsheet
---

## Deployments

### Expose the `myapp` deployment through a `NodePort` service:
```bash
$ kubectl expose deployment myapp
    --name=myapp-nodeport-svc
    --type=NodePort
    --port=8080
    --target-port=8080
    --dry-run=client -o yaml > ~/Downloads/exposed-svc.yaml
```

### Scale `my-deployment` to 5 replicas

```bash
$ kubectl scale deployment my-deployment --replicas=5
```

### Create a simple nginx deployment

```bash
$ kubectl create deployment --image=nginx nginx
```

### Generate Deployment YAML file (-o yaml). Don't create it(--dry-run)

```bash
$ kubectl create deployment --image=nginx nginx --dry-run=client -o yaml
```

### Generate Deployment with 4 Replicas
```bash
$ kubectl create deployment nginx --image=nginx --replicas=4
```

### Scale deploiyment with `kubectl scale` command

```bash
$ kubectl scale deployment nginx --replicas=4
```
Another way to do this is to save the YAML definition to a file and modify

```bash
$ kubectl create deployment nginx --image=nginx --dry-run=client -o yaml > nginx-deployment.yaml
```

You can then update the YAML file with the replicas or any other field before creating the deployment.

## Services

### Create a `redis-service` of type ClusterIP to expose pod redis on port 6379

```bash
$ kubectl expose pod redis --port=6379 --name redis-service --dry-run=client -o yaml
```

This will automatically use the pod's labels as selectors.

Another approach is:
```bash
$ kubectl create service clusterip redis --tcp=6379:6379 --dry-run=client -o yaml
```

This will not use the pods labels as selectors, instead it will assume selectors as `app=redis`. You cannot
pass in selectors as an option. So it does not work very well if your pod has a different label set. So
generate the file and modify the selectors before creating the service

### Create a service named nginx of type NodePort to expose pod nginx's port 80 on port 30080 on the nodes

```bash
$ kubectl expose pod nginx --type=NodePort --port=80 --name=nginx-service --dry-run=client -o yaml
```

This will automatically use the pod's labels as selectors, but you cannot specify the node port. You have to
generate a definition file and then add the node port in manually before creating the service with the pod.


Or another approach is:
```bash
$ kubectl create service nodeport nginx --tcp=80:80 --node-port=30080 --dry-run=client -o yaml
```

This will not use the pods labels as selectors.

Both the above commands have their own challenges. While one of it cannot accept a selector the other cannot accept
a node port. I would recommend going with the kubectl expose command. If you need to specify a node port, generate a
definition file using the same command and manually input the nodeport before creating the service.

## Pods

### Create a simple nginx pod

```bash
$ kubectl run nginx --image=nginx
```

### Generate POD Manifest YAML file (-o yaml). Don't create it(--dry-run)

```bash
$ kubectl run nginx --image=nginx --dry-run=client -o yaml
```

### Create a pod and corresponding service
```bash
$ kubectl run httpd --image=httpd:alpine --port=80 --expose --dry-run=client -o yaml
```

### Delete completed pods

```bash
$ kubectl get pod --field-selector=status.phase==Succeeded

$ kubectl delete pod --field-selector=status.phase==Succeeded

$ kubectl delete pod --field-selector=status.phase==Failed
```

https://stackoverflow.com/questions/55072235/how-to-delete-completed-kubernetes-pod

## Containers

### Change the container image

```bash
# kubectl set image (-f FILENAME | TYPE NAME) CONTAINER_NAME_1=CONTAINER_IMAGE_1 ... CONTAINER_NAME_N=CONTAINER_IMAGE_N

$ kubectl set image deployment nginx nginx=nginx:1.20
```

https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#-em-image-em-


## Persisten Volumes (PV) and Persisten Volume Claims (PVC)

TBD


## Resources

- [Kubernets Reference](https://kubernetes.io/docs/reference/)
- [kubectl Usage Conventions](https://kubernetes.io/docs/reference/kubectl/conventions/)

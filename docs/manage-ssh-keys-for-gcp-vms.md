---
title: Manage SSH Keys for GCP VMs
---

Published on December 23, 2020

:::note Cite

The proper handling of ssh keys for VMs is not covered in this document.

:::

## Using GCP's Web Shell

For non terminal lovers, you can SSH into your VMs with the following steps:

1. Login to GCP console.
2. Navigate to `Compute` > `VMs`.
3. Click on the `SSH` button for the desired virtual machine.

## Using gcloud's CLI

In order to access your VMs from your _Bash_ terminal using `gcloud`, follow the followin steps.

```bash
$ gcloud auth login

$ gcloud config set project PROJECT_ID

# if missing, it generates and stores SSH keys
$ gcloud compute ssh VM_NAME
```

Doing so is equivalent to simply run the classic `ssh username@vm-ip-or-name`.

## Resources

- [Download public & private keys from Google Cloud Instance](https://serverfault.com/questions/852311/download-public-private-keys-from-google-cloud-instance)
- [Add SSH keys to VMs](https://cloud.google.com/compute/docs/connect/add-ssh-keys#gcloud)

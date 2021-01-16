---
title: Hello World. My first blog post
date: 2021-01-12 23:09:00
toc: true
tags:
  - hexo
  - csharp
  - python
  - golang
categories:
    - Programming
keywords:
  - blog
  - post
  - hello world
  - tech
---

![](/assets/images/2021-01-12-hello-world/study.jpg)

> "You Don’t Have to Know Everything. You Just Have to Know Where to Find It."
<p class="citation-author-text">― Albert Einstein? Samuel Johnson? Sophonisba Breckinridge? John Brunner? Anonymous?</p>

<!-- more -->

Work In Progress (WIP)

## Why this blog?

## Who is this blog for?


## What you came for... the tech part [<img class="gh-md-emoji-icon" src="https://github.githubassets.com/images/icons/emoji/unicode/1f389.png">](#)

{% tabs Code, 1 %}
<!-- tab C# -->
{% codeblock lang:csharp Program.cs %}
// Hello World! program
namespace HelloWorld
{
    class Program {
        static void Main(string[] args)
        {
            System.Console.WriteLine("Hello World!");
        }
    }
}
{% endcodeblock %}
<!-- endtab -->

<!-- tab Python -->
{% codeblock lang:python main.py %}
print('Hello World!')
{% endcodeblock %}
<!-- endtab -->

<!-- tab Golang -->
{% codeblock lang:golang main.go %}
package main

import "fmt"

func main() {
    fmt.Println("hello world")
}
{% endcodeblock %}
<!-- endtab -->
{% endtabs %}

---
slug: why-i-want-to-read-ddia-book
title: "Why I want to read Designing Data-Intensive Applications"
authors: ryuzakyl
tags: [book-wish, software-engineering, software-architecture]
---

With Moore's Law having directly (and indirectly) influenced in the democratization of resources like CPU and RAM, in many cases the challenges of large-scale distributed systems are different: the data volume. A highly recommended book for this particular scenario is [Designing Data-Intensive Applications](https://dataintensive.net/) by Martin Kleppmann.

A couple of my talented colleagues—engineers whose skills I admire—have praised this book as an essential read for anyone working in distributed, cloud, or data-intensive systems. Their endorsements, combined with my personal growth goals, have convinced me to pick it up.

<!--truncate-->

<div class="img-center">
    ![Designing Data-Intensive Applications](/img/blog/ddia.png)
</div>

Recently, I had an experience at work that underscored how the biggest challenge in modern large-scale distributed systems is often data volume. I had implemented what I thought was a perfectly sound solution to a problem, logically correct, and passing all initial tests. But when it came time to test it against massive data, the performance wasn’t acceptable.

<div class="img-center">
    ![Loading vs. Frozen](/img/blog/meme-fry-loading-or-frozen.jpg)
</div>

What initially felt like a minor optimization issue quickly turned into a full re-implementation of the solution. The sheer volume of data exposed bottlenecks that weren’t apparent during development, and I had to rethink the approach entirely. I had to face that in large-scale systems isn’t just about correctness—it’s about building solutions that can handle data at scale efficiently.

With my recent experience working in cloud environments and distributed systems as both a DevOps professional and Software Sngineer, I’ve come to appreciate the profound impact of well-designed systems in achieving both scalability and performance.

## A test drive

I'm usually busy and I _don't have the time_ (lies, it is always about priorities :lying_face:), but I know in my heart of hearts that it would greatly help me in understanding the three key principles in designing data-intensive system architecture: `Reliability`, `Scalability` and `Maintainability`.

People usually mention that one should at least check out the opening chapter, as Kleppman gives a comprehensive yet succinct overview of the building blocks when building these kinds of systems. I believe that understanding these foundational concepts could make a significant difference in how I approach architectural discussions with my team.

Stay tuned—I’ll share my thoughts and key takeaways from the book once I’ve finished reading it!

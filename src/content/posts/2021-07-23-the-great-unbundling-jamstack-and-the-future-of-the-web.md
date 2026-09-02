---
title: "The Great Unbundling: JAMstack and the Future of the Web"
date: 2021-07-23
categories: ["Investing", "Technology"]
description: "Originally published on The New Stack. Co-authored with Andy Kangpan."
originalSlug: "2021/07/23/the-great-unbundling-jamstack-and-the-future-of-the-web"
---

Originally published on [The New Stack](https://thenewstack.io/the-great-unbundling-jamstack-and-the-future-of-the-web/). Co-authored with Andy Kangpan.

One of the most exciting trends in the software development world today is what has come to be known as the JAMstack. Originally coined by Mathias Biilman, the co-founder of Netlify, the term literally stands for **J**avaScript, **A**PIs, and **M**arkup, but has become synonymous with modern web development. To talk about the JAMstack, you are really pointing to a number of overlapping trends in the development community including (but not limited to):

- Infrastructure that abstracts away back-end complexity for developers
- Mass proliferation of API providers
- Progression of compute to the edge via CDNs
- Dominance of JavaScript among front-end developers
- Rise of static site generators, and the creation of web applications at build time

Since the JAMstack is such a broad topic, it is challenging to properly define. While many have discussed the rise of the JAMstack in the past, we wanted to provide a clear explanation of the underlying technologies and trends, why we believe they are important, and where we think this is going.

**What is the JAMstack?**

The JAMstack is a *philosophy*, *methodology,* and *set of tools* for building web applications that are faster, more secure, and more scalable than applications built with traditional monolithic web architectures. 

The *philosophy* behind the JAMstack is simple, but extremely powerful, consisting of two main concepts. First, is the idea of decoupling, which draws a hard line in the sand between the front-end and back-end of an application. By doing so, front-end devs can primarily focus on the presentation layer of their product, rather than the back-end server logic. Second, is the concept of pre-rendering. The idea is to load the entire front-end into static pages during the build process, which can then be served directly from a content delivery network (CDN) rather than an origin web server at the time of a user request.

The JAMstack is also quite literally a *methodology* for building. At its core, it is a way to create products on the web that uses Javascript (React is the most popular framework, but the JS ecosystem rapidly changes), 3rd party APIs, and markup (i.e., pre-rendered HTML that is served through a site generator). There are many other best practices typically associated with a “JAMstack” site, like running on a CDN and using more modern build tools and workflows.

Lastly, there are a *set of tools* that have emerged, which cater specifically (but not exclusively) to developers building web applications with these principles and methods in mind. You can think about this non-exhaustive market map as a workflow, from the conception of a website to its arrival in front of the end user:

![](https://www.vinayiyengar.com/wp-content/uploads/2021/07/workflow.png)

**Why are people excited about the JAMstack?**

The JAMstack movement is one of the rare shifts in the software world that dramatically improves both the developer and end-user experience. When adopting JAMstack principles, organizations improve developer productivity, increase site reliability and security, and create a user experience that is more performant and personalized.

Simply put, JAMstack eliminates significant noise on a developer’s periphery that takes their attention away from building the core product. Developers building on JAMstack can focus more of their time building a compelling user experience, and less time on the complexities of enabling that experience. They spend less time learning and maintaining backend server logic, and ensuring that the application scales with user traffic. This ultimately increases developer cycle time and allows organizations to deliver better experiences faster to their customers. 

JAMstack sites are also more reliable and secure. Because these sites decouple their frontend and backend, developers no longer have to worry about monitoring backend servers, as API providers and CDN providers handle the necessary provisioning to ensure sites scale with user traffic. Additionally, sites no longer rely on a central CMS like Drupal or WordPress, which are often the target for malicious hackers. Lastly, because these sites are built using a collection of third party API services rather than a monolithic beast, it is easier to identify issues and debug. 

From a performance perspective, web experiences built in the JAMstack paradigm deliver much faster load times for the end user. When content is pre-rendered and cached on a CDN, it obviates the need for the user request to travel back to a central server, process the request, and send back the data. It is delivered almost instantaneously to the user, eliminating significant latency in the experience. We’ve seen many instances where shifting to the JAMstack can improve site performance by as much as 10x.

**Where is this going? (A few predictions for the future of the web)**

The JAMstack is just the beginning of a massive transformation in how developers build on the web. We believe the evolution of this trend will have far-ranging implications, a few of which we’ve detailed below.

1. **Every SaaS application and modern website will be built using a JAMstack framework** – While a lot of the use cases today are around eCommerce and static content like blogs and marketing copy, we think the long-term benefits of the JAMstack will result in this framework being the foundation for all types of web experiences, static or dynamic. Moreover, the JAMstack enables a “build once, deploy anywhere” approach, allowing great user experiences to be delivered directly to the end user, be they on a laptop, mobile device, or even a Peloton bike.
2. **The market for JAMstack-related tools and services will exceed $100B in the next 5 years** – Given the broad spectrum of use cases, for both consumers and enterprises, we think the market for JAMstack-related tools and services will dwarf the already massive $100b [web hosting](https://financesonline.com/30-essential-web-hosting-statistics-2019-analysis-of-trends-data-and-market-share/) market. There will be several exciting $1b+ companies built in this space, whether new hosting providers, headless CMS,’ or API vendors. We are already seeing the emergence of a few potential ones in Netlify, Contentful, and Vercel.
3. **The “full-stack” developer will slowly disappear from the enterprise** – The decoupling of the frontend and backend draws a clear line in the sand for what developers need to focus on in order to deliver a web experience. Out of necessity, front-end developers often need to learn complex back-end logic in addition to staying up to speed with a rapidly evolving set of front-end technologies. JAMstack obviates the need for this “full stack” set of expertise, and will enable front-end developers to focus on what they do best.
4. **Development teams will more frequently be organized around front-end and back-end logic, as opposed to products and microservices** – A monolithic product architecture by definition requires collaboration between front- and back-end developers. As such, engineering teams have historically been organized in a “vertically-integrated” approach or by specific product teams. However, our conversations with engineering leaders suggest that with a JAMstack-based approach, combined with the rise of microservices-based architectures, front- and back-end devs are more easily able to work independently. As such, we believe that engineering org structures will start to decouple in a similar fashion, with teams increasingly dedicated to just front- or back-end logic.
5. **JAMstack will help usher in a new golden age for immersive content** – As the complexity of building sophisticated, performant web applications gets abstracted away, content and functionality will become the critical components developers focus on to differentiate the experiences they build. We are already seeing better-designed web experiences, and our conversations with designers this past year indicate that 3D content will become pervasive on the internet. A simple browse through Apple’s [website](https://www.apple.com/) will reveal not a single 2D image. We believe this is the direction of many future websites. Moreover, we are excited about the potential of [WebGPU](https://gpuweb.github.io/gpuweb/), a future web standard like WebAssembly, that will enable richer, more dynamic 3D content on the web. In the more distant future, we expect AR content to also become more commonplace, once again enabled by the JAMstack building blocks we’re seeing put in place today.
6. **The web will become completely “unbundled”** – Aside from the sheer market size here, what excites us about the JAMstack trend is that it represents a broader “unbundling” of the web. The first wave, which we are seeing today, is that the “presentation layer” of the web is being cached and distributed to the edge. Over time, we expect that this trend will penetrate deeper than the presentation layer reaching the application logic and core infrastructure. Over time, we believe all modern software will begin to run as globally distributed services. The entire stack is moving closer to the end user presenting an end to a long era of centralized compute services, enabling richer, faster, and safer experiences.

![](https://www.vinayiyengar.com/wp-content/uploads/2021/07/unbundling.png)

Overall, we are thrilled about all the possibilities that the JAMstack will enable for developers and consumers. Though we are still in the early stages of the technology and framework being adopted, we are confident it will result in faster, safer, and more compelling web experiences. If you are an entrepreneur building in this space we would love to speak with you.


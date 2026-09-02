---
title: "The Rise of ML Ops: Why Model Performance Monitoring Could Be the Next Billion Dollar Industry"
date: 2020-10-27
categories: ["Investing", "Technology"]
description: "Originally published on the Two Sigma Ventures blog. Co-authored with Frances Schwiep."
originalSlug: "2020/10/27/the-rise-of-ml-ops-why-model-performance-monitoring-could-be-the-next-billion-dollar-industry"
---

Originally published on the [Two Sigma Ventures blog](https://twosigmaventures.com/blog/article/the-rise-of-ml-ops-why-model-performance-monitoring-could-be-the-next-billion-dollar-industry/). Co-authored with Frances Schwiep.

##### *Data-driven software is the future. This shift is bringing about a new category of tools—what we call model performance monitoring (MPM).*

As we dig into the model performance monitoring market we’ve been asking ourselves: what can we learn from the evolution of application monitoring that might apply to data science? How is it different and what do we look for in this new set of tools? 

Over the past two decades, there has been a wave of application performance monitoring (APM) companies that has fundamentally changed the course of software development; Datadog, New Relic, PagerDuty, AppDynamics, Dynatrace, and Splunk have created nearly $90B in market cap and growing. APM has enabled companies to prevent outages, monitor uptime, and ultimately has catalyzed digital transformation and the migration to cloud. These days it is difficult to imagine mission-critical software that relies on manual troubleshooting and spot-checking instead of systematic tooling. But such ad-hoc, unscalable workflows are shockingly commonplace in the world of machine learning systems.\* 

Much like cloud-native computing has ushered in a new era of software development and tooling, we believe data-driven systems, enabled by machine learning, have the power to unlock the next wave of innovation. In turn, we believe there will be a need for an analogous set of Model Performance Monitoring (MPM) tools to help with data quality, drift, model performance, and system reliability. Companies like WhyLabs, Toro Data, Mona Labs, Monte Carlo Data, LightUp, Soda Data, among many others, are just beginning to capitalize on what we see as a multi-decade long trend.

##### Why now?

If we look at the history of APM, the first wave came about in the late 1990s, following the rapid adoption of Java. Even though the applications built with Java were fairly simple, software-first companies recognized a need to manage performance. Thus, early companies like Wily Technology were born. 

The second generation of APM, catalyzed by the rise of the cloud and service-oriented architectures (SOA) in the 2000s, grew much larger. While new architectures offered the benefits of modularity, speed, and the development of more sophisticated software applications, they were also significantly more complex to manage. It took “moments of truth” – when these sophisticated, mission-critical systems failed – for companies to realize the importance of monitoring. 

These tailwinds led to the creation of many of the widely-used APM solutions we know today—New Relic, Datadog, and many others. 

In many ways, machine learning systems are the most complex systems we’ve seen to date, and these complex systems have become mission critical to many companies. Uber depends on algorithms to automatically predict and price demand for rides. Netflix’s recommendation engine powers its core user experience. And the performance of the AI models in Tesla self-driving cars can save lives. The list goes on. 

From Amazon to Facebook, we have learned about the sheer impact performance issues in machine learning systems can cause to a company. In the last 8 months alone, we’ve seen  massive issues for business-critical models that have left companies scrambling to fix corrupted models. Instacart, for example, saw their inventory prediction models go haywire due to COVID-related consumer behavior changes. Accuracy declined from [93% to 61%](https://fortune.com/2020/06/09/instacart-coronavirus-artificial-intelligence/), misguiding shoppers and frustrating customers whose product purchases were unable to be fulfilled. 

Similar to APM in the 2000s, as machine learning systems have introduced new complexity (and potential) to the tech stack, we are starting to see an increase in these “moment of truth” events for data-driven software. Solutions to monitor these critical machine learning systems are needed. Yesterday. 

##### Challenges and Opportunities

Traditional software is deterministic. Machine learning systems are probabilistic. This creates a double-edged sword for models. 

Models in production, if well-maintained, can get better over time—as data grows, its predictive power increases. The dangerous flip side is that models can degrade the moment you push them into production. The core reason for this is that ***“drift”*** can occur, that is, unexpected and/or undocumented changes in your data structure, semantics and other statistical properties that cause modeldegradation. Though drift occurs naturally, because data always changes in the real world, drift can be severe and lead to significant, often unobservable machine learning system “outages.” 

This also means there are a few unique and complex challenges MPM must overcome. First, models often fail silently. In other words, the equivalent of software outages and error response codes (404s, 500s, etc) don’t exist in machine learning systems today. Second, given the probabilistic nature of machine learning systems, KPIs are harder to define “out-of-the-box.” Finally, as a result, corrective actions for machine systems are not as clear-cut (e.g. can’t just say “add more processing power” to solve overloaded CPU). With these considerations in mind, we categorize machine learning monitoring into three core areas: **data, model, and code**. 

**Data (i.e. model input monitoring)**: *Are the data and statistical properties what we expected?* Data should be monitored for both quality and drift. Data quality issues arise because data values may be broken (e.g. missing, erroneous, or don’t fall within expected ranges) or there is a divergence from expected schemas. Data drift occurs when production data diverge from the model’s original training data or the distribution of your data changes such that your model is less representative.

**Model (i.e. prediction monitoring)**: *Are my predictions still accurate and relevant?* Often, there is a time delta between your prediction and what you aim to predict. In other words, it might take weeks to learn the real-world facts and realize that predictions aren’t accurate. In this case, you should monitor to compare distributions and prediction probabilities. If the time delta is not an issue, simpler monitoring methods (e.g. checking for accuracy, overfit or bias that was not found during training) can be deployed.   

**Code (i.e. system-wide, operational concerns)**: *Is our system performant and reliable?* Similar to APM, we should monitor for latency when calling machine learning API endpoints, memory/CPU usage when performing predictions, and disk utilization. Upstream feature engineering should also be monitored for changes that might affect the weights or relevance of features used in production models.

##### The Market

Though MPM as a category is still very nascent, we believe that the market will grow faster and could eventually be larger than APM in the next decade. We have several reasons for this hypothesis. First, MPM startups are already seeing annual contract values (ACVs) that are larger than the early contracts of their APM counterparts (e.g. New Relic had $8k ACVs at IPO according to their S1). This makes sense intuitively given that model monitoring is a much harder, and therefore more expensive problem to solve.. End-to-end machine learning pipelines are complex. They often involve many different datasets, utilize several different tools for processes like cleansing and ETL, and are distributed over multiple infrastructure providers. The best MPM products will be able to find errors at the application layer that may be invisible to an end user and even to the application developer themselves.

Moreover, we think MPM solutions will be needed much earlier in the lifecycle of a software business. In APM, solutions are only needed once a business has shipped a complex application distributed over multiple clouds or microservices. Most small and medium-sized software companies do not procure an APM solution. For MPM on the other hand, we are seeing adoption from a wide range of buyers, from small startups to multi-billion dollar enterprises. Machine learning models, whether they are serving 1 or 1 million end users in production, will need monitoring from day 0. We therefore think the number of potential customers for MPM solutions will include all those currently using APM solutions, in addition to the lower end of the market. In fact, many of the current modern APM solutions are now [leveraging machine learning](https://newrelic.com/resources/white-papers/accelerate-incident-response-with-aiops) in their products – APM businesses themselves need MPM solutions! 

This combination of potentially larger ACVs and a larger universe of addressable customers, leads us to believe that the market opportunity for MPM is massive. According to Gartner, APM is a [$4.5b](https://www.crn.com.au/news/15-top-application-performance-monitoring-vendors-gartner-547297#:~:text=The%20APM%20market%20is%20one,over%20the%20next%20three%20years.) market growing at an 11% CAGR. We believe that the MPM market will be at least double this size and will grow twice as fast over the next decade.

##### Six Keys to Winning The Model Performance Monitoring Market

After studying the parallels between the APM and MPM markets, we believe there are a few characteristics that will allow MPM companies to stand out from the pack and build valuable businesses:

- **An open ecosystem – We believe the best MPM products, similar to APM providers like Datadog, Splunk, and Elastic, will integrate with an open ecosystem of vendors, whether commercial or open source tools. Given the complexity and customization involved in building end-to-end data pipelines, the best tools will provide monitoring and observability features for many machine learning setups and use cases. They may even integrate with traditional APM providers to use logs and metrics in determining model health.**

- **Out-of-the-box value** – Moreover, the best products will provide immediate out-of-the-box value and be very easy to use for different user personas, without requiring months of implementation time or custom work. As a result of a wide availability of integrations, short time-to-setup, and an intuitive UI/UX, the best products will make it easy for either a business analyst or data scientist to make well informed, quick decisions on how to fix models in production.

- **Bottoms-up adoption** – We believe the winners of this market will have a bottoms-up go-to-market strategy. Most likely, it will be tailored towards a developer or data scientist user persona and have an open source component. At the very least, we imagine the best solutions will have free versions that are very easy for a data scientist to get started with and test out on their own. Eventually, a full-fledged enterprise sales team will be required to build a massive business here, but having organic, product-led growth will be critical in the early days as the winners emerge from the pack.

- **Clear ROI** –  The best products will have a clear ROI for the end user and will be priced accordingly. From what we have seen so far, even products that sell to midmarket customers with small (<10 person) data science teams are able to correct models and reduce complexity, saving money equivalent to 1-2 full-time data scientist salaries. As such, we are seeing ACVs in the $30-50k range solely on the basis of the OpEx savings the best-in-class products provide. Moreover, we believe these products will be priced on a per-model or per-volume of data basis as opposed to a per-seat basis. Thus, pricing is tied clearly to the ROI the end customer gets from each additional model or dataset that is monitored.

- **Proactive > Reactive** – Rather than identifying data or feature drift after the fact, the best tools will be able to discover these issues well in advance and prevent errors from actually impeding user experience. Similar to how Datadog is focused on providing timely and proactive alerts about downtime in infrastructure, the best model monitoring tools will leverage machine learning themselves to predict when models or datasets begin to be corrupted, taking into account data outside of the realm of the application at hand.

- **Security-first** – Given these tools will often deal with sensitive data, the best MPM products will be designed with security and compliance in mind. Unlike many APM tools which aren’t necessarily dealing with data itself, MPM businesses may need to be built from the ground up with these use cases in mind. For example, a monitoring tool that has access to credit card data will need to be PCI compliant and take extra precautions to encrypt this data. Many APM businesses, like AppDynamics for example, have managed to maintain user trust and expand the number of potential use cases for their product by achieving FedRAMP and SOC 2 compliance and ensuring the highest standards for user privacy and security.

We are still in the very early innings of the MPM market’s development but continue to be very excited about the activity we are seeing. If you are building a startup in this space or an adjacent one, we couldn’t be more excited to hear the story and share some more of our learnings. Feel free to follow/DM us on Twitter [@schwiepit](https://twitter.com/schwiepit?lang=en) and [@VinIyengar](https://twitter.com/viniyengar?lang=en). Happy hacking!

*\* For simplicity, we will refer to the models in this article as “machine learning models.” This encompasses all models in production, including more basic, multivariate regression models to more sophisticated deep learning models (i.e. artificial intelligence “AI”)*


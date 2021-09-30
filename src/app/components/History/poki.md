Poki's mission is to let the world play. They're working hard to build the world's biggest online playground which brings together kids, game developers and advertisers.

When I started at Poki, the live site was a PHP-monolith which was splitting at the seams due to years of changing requiremenets leading to inflexible code. The first goal was clear: rebuild the current website in a stack that would allow the business to react to the ever-changing online landscape in an agile way.

We rebuilt the backend in Go using a microservices architecture running on Kubernetes while the frontend was rewritten using React and Redux. After many months of testing this first rewrite went live one website at a time over the course of 2017, while ensuring revenue was up to par with the existing live site.

After this, we moved on to create a new frontend dubbed "playground" in which we put our users first while also allowing game developers and brands to add to a great experience.

While React was still a big player in this rewrite, we leveraged RxJS heavily in order to split business logic out of React components, allowing us to write more robust tests.

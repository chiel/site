Momentive is a company that offers a variety of products that allow companies to send surveys out to their users through all kinds of different channels.

My journey at Momentive actually began at Usabilla—a scale-up in Amsterdam that made various customer feedback solutions. Roughly one month after I joined the acquisition by SurveyMonkey was announced and finalised another month after that.

When I joined Usabilla they were well into a full overhaul of whole architecture in order to unify user feedback from their 6 silo'd products. The first project I worked on when I joined was to contribute to the frontend for the new product, called **workspaces**.

Once the first version of workspaces launched, the team split into multidisciplinary teams containing a mix of product, design and engineering which each own a different domain within the product.

Once this split happened it was clear we needed a way to work together on the same product while being able to develop and deploy autonomously, without teams blocking each other. To achieve this, I came up with an architecture which allowed us to develop features in isolation while being able to deploy it as part of the full application.

The first iteration of what was dubbed "guest modules" was entirely homegrown and was written in (and supported) JavaScript, but once Webpack's Module Federation came around, we iterated on the concept and used TypeScript while leveraging Module Federation to share context between modules.

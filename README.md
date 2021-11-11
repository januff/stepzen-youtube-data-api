
This repo contains the code referenced in the two StepZen posts below, an explainer and a schema design walkthrough:

- **[A New Workflow For API Mash-Ups](https://stepzen.com/blog/new-workflowf-for-api-mash-ups-postman-stepzen-youtube-data-api): Postman, StepZen & YouTube Data API**


  > With my StepZen and Postman workspaces side-by-side, I was able to achieve something remarkable: a localhost and live endpoint serving custom-aggregated YouTube-Data-as-GraphQL, after barely a day-and-a-half of experimentation. 

<p align="center">
  <img src="./images/channelbyQuery-Postman.jpg"/>
</p>

- **[Step-by-StepZen](./walkthrough.md): Sorting YouTube Comments, Reddit-Style** 

  > How your initial query triggers follow-up queries in StepZen is up to you: either set up explicit steps with the @sequence directive or auto-fill the fields of your schema with the @materializer directive.

  <p align="center">
    <img src="./images/commentsByVideoId-StepZen.jpg"/>
  </p>

<!-- Also collecting my cheatsheets here for the moment: StepZen doc pages I relied upon heavily, a few beginner questions I've resolved, and my new project checklist.  -->

### Essential StepZen Docs

- [Turn Any Data Source into GraphQL](https://www.youtube.com/watch?v=n4Ackk0xMe8) For me, the most eye-opening StepZen demo has been this Learn With Jason livestream, which squeezes in a whole lotta demo thanks to Jason and Carlos's shared Postman chops.

- [CONNECTING BACKENDS // How to Connect to a REST Service](https://stepzen.com/docs/connecting-backends/how-to-connect-a-rest-service) I'd call this the most concise single-page StepZen walkthrough at the moment.

<!-- - [DESIGN A GRAPHQL SCHEMA // Create Schema Files by Writing Code](https://stepzen.com/docs/design-a-graphql-schema#create-schema-files-by-writing-code) The 4-point checklist in this section is the most succinct schema starter; minimum requirements before you run ```stepzen start```. -->

- [DESIGN A GRAPHQL SCHEMA // How to Create a Sequence of Queries](https://stepzen.com/docs/design-a-graphql-schema/sequencing-queries) My schema adapts and (slightly) extends this super-followable build of a multi-part StepZen sequence. More than once I had to remind myself of their debugging advice in the "Testing" section: when a sequence doesn't work, *test each query individually*.

<!-- <p align="center">
  <img width="560" src="./images/channelIdByQuery-Postman.jpg"/>
</p> -->

<!-- ### My Personal FAQs (and Answers)
- **Should I re-use endpoints or create a new one per project?** Not if you want a legible endpoint.
- **Do I need to login again for a new project?** No, you’re installed and logged in globally.
- **Where should I install StepZen?**  Doesn’t matter, but I keep my schemas and YAML in a Stepzen folder. Be sure to run `stepzen start` from that folder.
- **What files should I have saved before I run stepzen start?**  A .graphql file, an index.graphql file, and a config.yaml.
- **What if I’m planning on committing code?**  Add a .env.local and a .gitignore. 
- **What’s the minimum I need to define a type in my graphql file?**  One type, one field, one query, and one endpoint.
- **How do I build a schema?**  Let your API suggest Types and fields through Postman. Postman is the best place to gather the two most important inputs to a StepZen-enhanced GraphQL schema: endpoint URLs and JSON responses.
- **How do I iterate my schema and add APIs?**  Itemize missing fields, solve with dependent query.





### My Starter Project Checklist

- [ ] **type ideas** in this case, ```Comment``` and ```Channel.```
- [ ] **project name** slug-case, for your endpoint URL
- [ ] **API docs URL** save API explorer pages as Postman 
- [ ] **API key or token** confirm and save in Postman
- [ ] **StepZen key** confirm and save in Postman -->

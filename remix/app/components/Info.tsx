import { AnimatePresence } from "framer-motion";

export function Info () {
  return (
    <div className="infobox">
      <h6><img src="../../favicon.ico"/> Remix // <img src="../../framer.png"/> Framer Motion // <img src="../../youtube.svg"/> YouTube // <img src="../../stepzen.svg"/> StepZen</h6>  
      <h4>Animating API Results (On A Budget)</h4>
      <p>
        Perfect in combination: Resource Routes in Remix and the <code>AnimatePresence</code> component in Framer. <a target="_blank" href="https://remix.run/docs/en/v1/guides/resource-routes">Resource Routes</a> are arbitrary serverless endpoints, one of which I've <a target="_blank" href="./resource">set up here</a> to serve placeholder results for a stepped API query (<a target="_blank" href="https://stepzen.com/blog/new-workflowf-for-api-mash-ups-postman-stepzen-youtube-data-api">sequenced using StepZen.</a>) It's a fairly quota-expensive query, the kind you want to keep as far from your local dev server as possible–especially when you're fiddling with web animations, which often demand endless browser reloads to make presentable. But with my YouTube query mocked in a static Resource Route, cloning Dev Ed's layout animations in his recent <a href="https://www.youtube.com/watch?v=nyg5Lpl6AiM">Awesome Filtering Animation with React Tutorial</a> video was a lot less stressful.
        </p>
        <p className="github"> 
          <a target="_blank" href="https://github.com/januff/stepzen-youtube-data-api"><img src="../../github.svg"/></a>
        </p>
    </div>
  );
}

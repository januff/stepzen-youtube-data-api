import { AnimatePresence } from "framer-motion";

export function Info () {
  return (
    <div className="infobox">
      <h6><img src="../../favicon.ico"/> Remix // <img src="../../framer.png"/> Framer Motion // <img src="../../youtube.svg"/> YouTube // <img src="../../stepzen.svg"/> StepZen</h6>  
      <h4>Animating API Results (On A Budget)</h4>
      <p>
        Perfect in combination: Resource Routes in Remix and the <code>AnimatePresence</code> component in Framer. <a target="_blank" href="https://remix.run/docs/en/v1/guides/resource-routes">Resource Routes</a> are arbitrary serverless endpoints, one of which I've <a target="_blank" href="./resource">set up here</a> to serve placeholder results for a stepped API query (orchestrated using StepZen.) It's a fairly quota-expensive query, the kind you want to keep as far from your local dev server as possible–especially when you're fiddling with web animations, which often demand endless browser reloads to make presentable. But with mock YouTube query mocked locally, I was free to follow Dev Ed's recent YouTube tutorial, <a href="https://www.youtube.com/watch?v=nyg5Lpl6AiM">Awesome Filtering Animation with React Tutorial</a>, and get these layout animations working exactly as promised, with no fear of API quotas.
        </p>
      <br></br>
    </div>
  );
}

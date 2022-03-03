import { Link, json,useLoaderData, Outlet} from "remix";
import { useEffect, useState } from "react";
import type { MetaFunction, LoaderFunction } from "remix";
import { Comment } from "../components/Comment";
import { Info } from "../components/Info";
import { motion, AnimatePresence } from "framer-motion";

export const meta: MetaFunction = () => {
  return {
    title: "YouTube Comment Sort",
    description: "YouTube Comments by Channel"
  };
};

export const loader: LoaderFunction = async () => {
  let res = await fetch('https://remix-resource-routes.vercel.app/resource')

  let fakeData = await res.json()
  console.log('fakeData from loader', fakeData)

  let commentsArray: any[] = []
  fakeData.data.channelByQuery?.videos.map(video => {
    video.comments.map(comment => {
      commentsArray.push({
        ...comment, 
        videoTitle: video.videoTitle, 
        videoId: video.videoId, 
        videoThumbnail: video.videoThumbnail 
      })
    })
  })
  // console.log('commentsArray', commentsArray)

  let likeSorted = [...commentsArray].sort((a, b) => { 
    return b.likeCount - a.likeCount
  })
  // console.log('likeSorted', likeSorted)
  
  let replySorted = [...commentsArray].sort((a, b) => { 
    return b.totalReplyCount - a.totalReplyCount
  })

  let mostLiked = likeSorted.slice(0, 100)
  let mostReplied = replySorted.slice(0, 100)

  return {mostLiked, mostReplied};
}

export default function Index() {
  const [ liked, setLiked ] = useState(true)
  const { mostLiked, mostReplied } = useLoaderData(); 
  
  useEffect(() => {}, [liked])

  console.log('mostLiked comments from component', mostLiked)
  console.log('mostReplied comments from component', mostReplied)

  return (
    <main>
      <Info />
      <button
        onClick={()=>setLiked(!liked)}>     
        { liked ? 
          "View Most Replied" : 
          "View Most Liked" }
      </button>
      <motion.section layout>
        <AnimatePresence>
          { liked ? 
            mostLiked.map((comment) => {
              return <Comment
                      key={comment.commentId} 
                      liked={liked} 
                      comment={comment} />; 
            }) : 
            mostReplied.map((comment) => {
              return <Comment
                      key={comment.commentId}  
                      liked={liked}
                      comment={comment} />; 
            })  
          }
        </AnimatePresence>
      </motion.section>
    </main>
  );
}
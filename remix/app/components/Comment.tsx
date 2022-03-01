import { motion } from "framer-motion";

export function Comment({ comment, liked }) {
  return (
    <motion.article 
      whileHover={{
        background: `rgba(0, 0, 0, 0.3) url(${comment.videoThumbnail})`,
        backgroundSize: "cover", 
        backgroundBlendMode: "multiply",
        backgroundPosition: "center",
        transition: { duration: 0.2 }
      }}
      style={{
        background: `rgba(0, 0, 0, 0.8) url(${comment.videoThumbnail})`,
        backgroundSize: "cover", 
        backgroundBlendMode: "multiply",
        backgroundPosition: "center",}}
      layout
      transition={{ duration: 0.8 }}
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: 800, opacity: 0 }}  
      exit={{ x: -800, opacity: 0 }}>
      <header dangerouslySetInnerHTML={{__html: comment.videoTitle }}>
      </header>
      <section>
        <span dangerouslySetInnerHTML={{__html: comment.textDisplay }} />
        –{comment.authorDisplayName}
      </section>
      <footer>
        { liked ? 
          `${Number(comment.likeCount).toLocaleString('en', {useGrouping:true})} Likes` :
          `${Number(comment.totalReplyCount).toLocaleString('en', {useGrouping:true})} Replies`
        }
      </footer>
    </motion.article>
  );
}

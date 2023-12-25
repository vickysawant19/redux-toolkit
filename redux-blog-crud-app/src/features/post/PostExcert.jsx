import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import PostTime from "./PostTime";
import ReactionBtn from "./ReactionBtn";


const PostExcert = ( { post } ) => {
  return (
    <article
        className="bg-blue-200 border-4 hover:bg-blue-300 p-2 transition duration-500 shadow" >
            <h1 className="text-center w-full">
            
        </h1>
        <Link to={`${post.id}`}> <h3 className="font-semibold ">{post.title}</h3>
           
            <p className="">{post.body.substring(0,50)}</p>
           <div className="flex justify-between">
                <div className="text-sm italic">
              <PostAuthor userid = {post.userId}/>
                </div>
                <div className="text-sm italic text-stone-600">
              <PostTime timestamp = {post.postTime} />
              </div>
           </div>
           </Link>
           <div>
             <ReactionBtn post={post} />
           </div>
       </article>
  )
}

export default PostExcert
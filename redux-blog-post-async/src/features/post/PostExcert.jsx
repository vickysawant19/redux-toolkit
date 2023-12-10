import PostAuthor from "./PostAuthor";
import PostTime from "./PostTime";
import ReactionBtn from "./ReactionBtn";


const PostExcert = ( { post } ) => {
  return (
    <article
        className="bg-blue-200 hover:bg-blue-300 mb-2 p-2 transition duration-500 shadow" >
            <h1 className="text-center w-full">
            {post.id}
        </h1>
            <h3 className="font-semibold ">{post.title}</h3>
            <p className="">{post.body.substring(0,50)}</p>
           <div className="flex justify-between">
                <div className="text-sm italic">
              <PostAuthor userid = {post.userId}/>
                </div>
                <div className="text-sm italic text-stone-600">
              <PostTime timestamp = {post.postTime} />
              </div>
           </div>
           <div>
             <ReactionBtn post={post} />
           </div>
       </article>
  )
}

export default PostExcert
import React from 'react'
import moment from 'moment'
import Link from 'next/link'




const PostCard = ({post}) => {

    
   
  return (
   <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 flex flex-col justify-between'>
    <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
         <img src={post.featuredImage.url} alt={post.title} className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"/>
    </div>
    <h1 className="transition duration-700 text-center mb-8 cursor:pointer hover:text-blue-900 text-xl font-semibold"><Link href={`/post/${post.slug}`}>
       {post.title} </Link></h1>
       <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
            <img alt={post.author.name} className='align-middle rounded-full h-8 w-8' src={post.author.photo.url}/>
            <p className='inline align-middle text-gray-700 ml-2 text-lg'>{post.author.name}</p>
            <div className='font-medium, text-gray-700 ml-8'>
                <p>
                    Created on :
                {moment(post.createdAt).format('MMM DD, YYYY')}
                </p> 
            </div>
        </div>
       </div>
       <p className='text-justify text-lg text-grey-700 font-normal mb-8'>{post.excerpt}</p>
       <div className='text-center'>
        <Link href={`/post/${post.slug}`}>
            <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-blue-900 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
                Continue Reading
            </span>
        </Link>
       </div>
   </div>
  )
}

export default PostCard
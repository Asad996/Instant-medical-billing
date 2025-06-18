import React from 'react'

import BlogPageBanner from '../Components/BlogPageBanner'
import Blogs from '../Components/Blogs'

const BlogPage = () => {
  return (
    <>
      <BlogPageBanner heading ="Instant medical billing Blogs"/>
      <Blogs  showAll={true} />
    </>
  )
}

export default BlogPage

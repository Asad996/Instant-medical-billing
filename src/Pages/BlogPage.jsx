import React from 'react'
import Banner3 from '../Shared/Banner3'
import BlogPageBanner from '../Shared/BlogPageBanner'
import Blogs from '../Sections/Blogs'

const BlogPage = () => {
  return (
    <>
      <BlogPageBanner heading ="Instant medical billing Blogs"/>
      <Blogs  showAll={true} />
    </>
  )
}

export default BlogPage

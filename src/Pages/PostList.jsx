import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const PostList = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const selectedPosts = searchParams.get('select') ==='active'
  return (

<>
<div>
<Link to="/post/1">Post 1</Link>
</div>
<div>
<Link to="/post/2">Post 2</Link>

</div>

<div>
<Link to="/post/3">Post 3</Link>

</div>

<button onClick={()=> setSearchParams({select:'active', sort:"asc"})}> Selected Posts</button>
<button onClick={()=> setSearchParams({})}> Clear Selection</button>

{selectedPosts&& <h2>Selected Posts</h2>}

</>
    )
}

export default PostList
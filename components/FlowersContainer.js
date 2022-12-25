import { useState } from "react";
import FlowerCard from "./FlowerCard";
import InfiniteScroll from "react-infinite-scroll-component";

export default function FlowersContainer({ data }){

    const [posts, setPosts] = useState(data);
    const [hasMore, setHasMore] = useState(true);
  
    const getMorePost = async () => {

        const last = posts.slice(-1)[0].name;

      const res = await fetch(
        `https://arzcqb3s2d.execute-api.eu-west-2.amazonaws.com/prod/get-flowers?type=more&last=${last.replace(/\s+/g, '-')}`
      );
      const newPosts = await res.json();
      setPosts((post) => [...post, ...newPosts]);

      console.log(posts.slice(-1)[0].name)
    };

    return(
        <div className="">

            <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 md:gap-x-2 md:gap-y-12 bg-neutral-50">
          {posts
            ? posts.map((flower, index) => (
                <FlowerCard key={index} data={posts[index]}/>
              ))
            : null}
            </div>
                  </InfiniteScroll>
        </div>
    )
}
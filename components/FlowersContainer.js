import { useState } from "react";
import FlowerCardBig from "./FlowerCardBig";
import InfiniteScroll from "react-infinite-scroll-component";

export default function FlowersContainer({ data }) {
  const [posts, setPosts] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  const getMorePost = async () => {
    const last = posts.slice(-1)[0].name;

    const res = await fetch(
      `https://arzcqb3s2d.execute-api.eu-west-2.amazonaws.com/prod/get-flowers?type=more&last=${last.replace(
        /\s+/g,
        "-"
      )}`
    );
    const newPosts = await res.json();
    setPosts((post) => [...post, ...newPosts]);

    console.log(posts.slice(-1)[0].name);
  };

  return (
    <div className="">
      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        <div className="flex flex-col md:flex-row md:flex-wrap md:items-baseline md:justify-center gap-8 bg-neutral-100 items-center pt-16">
          {posts
            ? posts.map((flower, index) => (
                <FlowerCardBig key={index} data={posts[index]} />
              ))
            : null}
        </div>
      </InfiniteScroll>
    </div>
  );
}

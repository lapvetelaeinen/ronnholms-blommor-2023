import { useState, useEffect } from "react";
import FlowerCardBig from "./FlowerCardBig";
import InfiniteScroll from "react-infinite-scroll-component";

export default function FlowersContainer() {
  const [posts, setPosts] = useState([]);
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

  const initialFlowers = [
    {
        "category": "Gypsophila Muralis",
        "stock": "yes",
        "sizes": "25 cm ampel",
        "name": "Brudslöja Gypsy Deeprose",
        "imgName": "gypsophila-muralis-gypsy-deeprose.jpg"
    },
    {
        "category": "Callie Lia",
        "stock": "yes",
        "sizes": "25 cm ampel",
        "name": "Callie Yellow Lia",
        "imgName": "calibrachoa-lia-yellow.png"
    },
    {
        "category": "Hedera Helix",
        "stock": "yes",
        "sizes": "12 cm kruka",
        "name": "Murgröna Mein Herz",
        "imgName": "hedera-helix-mein-herz.jpg"
    },
    {
        "category": "Lysimachia",
        "stock": "yes",
        "sizes": "12 cm kruka",
        "name": "Penningblad Goldilocks",
        "imgName": "lysimachia-goldilocks.jpg"
    },
    {
        "category": "Callie Million Bells",
        "stock": "yes",
        "sizes": "25 cm ampel",
        "name": "Million Bells Mix Bolero",
        "imgName": "calibrachoa-trixi-bolero.jpg"
    },
    {
        "category": "Red Profusion",
        "stock": "yes",
        "sizes": "25 cm ampel",
        "name": "Tomatampel",
        "imgName": "tomato-red.jpg"
    },
    {
        "category": "Begonia Doublet",
        "stock": "no",
        "sizes": "12 cm kruka",
        "name": "Isbegonia White Doublet",
        "imgName": "begonia-doublet-white.png"
    },
    {
        "category": "Callie Ombre",
        "stock": "yes",
        "sizes": "25 cm ampel",
        "name": "Callie Ombre Pink",
        "imgName": "calibrachoa-ombre-pink.png"
    },
    {
        "category": "Petunia",
        "stock": "yes",
        "sizes": "25 cm ampel",
        "name": "Petunia Tumbelina Victoria",
        "imgName": "petunia-tumbelina-victoria.jpg"
    },
    {
        "category": "Petunia",
        "stock": "yes",
        "sizes": "12 cm kruka",
        "name": "Petunia Dekko Magenta",
        "imgName": "petunia-dekko-magenta.jpg"
    },
    {
        "category": "Callie",
        "stock": "yes",
        "sizes": "25 cm ampel",
        "name": "Million Bells Burgundy MB",
        "imgName": "calibrachoa-callie-burgundy.jpg"
    },
    {
        "category": "Pelargonium",
        "stock": "yes",
        "sizes": "12 cm kruka",
        "name": "Pelargon Classic White",
        "imgName": "pelargonium-classic-white.jpg"
    },
    {
        "category": "Osteospermum",
        "stock": "yes",
        "sizes": "12 cm kruka",
        "name": "Stjärnöga FlowerPower White",
        "imgName": "osteospermum-flowerpower-white.jpg"
    },
    {
        "category": "Pelargonium",
        "stock": "yes",
        "sizes": "12 cm kruka",
        "name": "Pelargon Super Snow Cascade",
        "imgName": "pelargonium-super-snow-cascade.jpg"
    },
    {
        "category": "Osteospermum",
        "stock": "yes",
        "sizes": "12 cm kruka",
        "name": "Stjärnöga FlowerPower Purple Sun",
        "imgName": "osteospermum-flowerpower-purple-sun.jpg"
    },
    {
        "category": "Scaevola",
        "stock": "yes",
        "sizes": "25 cm ampel",
        "name": "Femtunga White Tongue",
        "imgName": "scaevola-white-touch.png"
    },
    {
        "category": "Inticancha Alstroemeria",
        "stock": "yes",
        "sizes": "22 cm kruka",
        "name": "Alströmeria Valentino",
        "imgName": "inticancha-alstroemeria-valentino.jpg"
    },
    {
        "category": "Begonia Doublet",
        "stock": "no",
        "sizes": "12 cm kruka",
        "name": "Isbegonia Rose Doublet",
        "imgName": "begonia-doublet-rose.png"
    },
    {
        "category": "Petunia",
        "stock": "yes",
        "sizes": "12 cm kruka",
        "name": "Petunia Amore Pink Heart",
        "imgName": "petunia-amore-pink-heart.png"
    },
    {
        "category": "Fuchsia",
        "stock": "yes",
        "sizes": "12 cm kruka",
        "name": "Fuchsia Evita",
        "imgName": "fuchsia-bella-evita.jpg"
    },
    {
        "category": "Thunbergia",
        "stock": "yes",
        "sizes": "22 cm kruka",
        "name": "Svartöga Amber Stripes",
        "imgName": "thunbergia-amber-stripes.jpg"
    },
    {
        "category": "Osteospermum",
        "stock": "yes",
        "sizes": "12 cm kruka",
        "name": "Stjärnöga FlowerPower Crystal Pink",
        "imgName": "osteospermum-flowerpower-crystal-pink.jpg"
    },
    {
        "category": "Hydrangea Hortensia",
        "stock": "yes",
        "sizes": "22 cm kruka",
        "name": "Hortensia Jip Pink",
        "imgName": "hydrangea-hortensia-jip-pink.jpg"
    },
    {
        "category": "Begonia Tophat",
        "stock": "yes",
        "sizes": "15 cm kruka",
        "name": "Isbegonia White Tophat",
        "imgName": "begonia-tophat-white.jpg"
    },
    {
        "category": "Callie Colibri",
        "stock": "yes",
        "sizes": "25 cm ampel",
        "name": "Callie Purple Lace",
        "imgName": "calibrachoa-colibri-purple-lace.png"
    }
]

useEffect(() => {
  setPosts(initialFlowers);
}, [])

  return (
    <div className="">
      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<h3>Laddar fler bilder...</h3>}
        endMessage={<h4>Inget mer att visa.</h4>}
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

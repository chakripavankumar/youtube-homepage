import { VideoCaard } from "./VideoCard"
const Videos=[{
        thumbnail:"https://i.ytimg.com/vi/7JXkKVA5RAA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXviFVE1V61Njd80U2GO0biUSkiA",
       channelImg:"https://yt3.ggpht.com/ytc/AIf8zZQmxnYpzwXNcE5bBQ7lFTQquch-q126U_RQEBOwmA=s68-c-k-c0x00ffffff-no-rj",
       title:"Basics of time compolexcity",
       channelName:"Take you Forward",
       views:"892k",
       timestamps:"5 months ago"
},{
    thumbnail:"https://i.ytimg.com/vi/7JXkKVA5RAA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXviFVE1V61Njd80U2GO0biUSkiA",
       channelImg:"https://yt3.ggpht.com/BOomnT3SS1g-FQSUVBy51TaK2ylqbQzD8zeV783mM-W1q3MMbvE8jdjEeWwFqHmlm5Dk4dSAtg=s68-c-k-c0x00ffffff-no-rj",
       title:"Basics of time compolexcity",
       channelName:"Take you Forward",
       views:"892k",
       timestamps:"5 months ago"
},{
    thumbnail:"https://i.ytimg.com/vi/7JXkKVA5RAA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXviFVE1V61Njd80U2GO0biUSkiA",
       channelImg:"channels4_profile.jpg",
       title:"Paytm gonna survive? RBI VS PAYTM",
       channelName:"Think School",
       views:"3M",
       timestamps:"10 hours ago"
}]

export const  VideoGrid=()=>{

return (
    <div className="grid grid-4">
        {Videos.map(video =>  <div>
            <VideoCaard
       thumbnail= {video.thumbnail}
       channelImg={video.channelImg}
       title={video.title}
       channelName={video.channelName}
       views={video.views}
       timestamps={video.timestamps}
       > </VideoCaard>
            </div>
            )}

    </div>
)


}
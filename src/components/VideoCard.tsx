  export function VideoCaard(props : any){
    return  (
    <div> 
          <img className={"rounded-2xl"} src={props.thumbnail}></img>
       <div className=" grid grid-cols-12">
         <div className="col-span-1">
         <img  className= {"rounded-full  w-20 h-20 pt-2"}src={props.channelImg}></img> 
         </div>
         <div className="col-span-10  text-2xl pt-2 pl-5">
            <div> {props.title}</div>
            <div className="col-span-10 text-gray-400 text-base">
            {props.channelName}
         </div>
         <div className="col-span-10 text-gray-400 text-base">
            {props.views}         |  {props.timestamps}
         </div>
       </div>
         </div>
    </div>
) }
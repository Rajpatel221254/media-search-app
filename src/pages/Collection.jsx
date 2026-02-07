import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCollection, removeFromCollection, removeToast } from "../redux/slices/collectionSlice";

const Collection = () => {
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [gifs, setGifs] = useState([]);

  const collection = useSelector((store) => store.collection.items);
  const dispatch = useDispatch()

  useEffect(() => {
    const photoArr = [];
    const videoArr = [];
    const gifArr = [];

    collection.forEach((item) => {
      if (item.assest_type === "gif") {
        gifArr.push(item.elem);
      } else if (item.assest_type === "video") {
        videoArr.push(item.elem);
      } else {
        photoArr.push(item.elem);
      }
    });

    setPhotos(photoArr);
    setVideos(videoArr);
    setGifs(gifArr);
  }, [collection]);

  function removefromcollection(elem){
    dispatch(removeFromCollection(elem))
    dispatch(removeToast())
  }

  return (
  <div className="flex flex-col gap-7 mt-5">

    <div className="flex items-center justify-between px-5">
      <h1 className="text-3xl font-bold">Your Collection</h1>
      <button onClick={()=>{
        dispatch(clearCollection())
      }} className="px-4 py-2 rounded font-semibold active:scale-95 bg-red-600">Clear Collection</button>
    </div>

    <div className="bg-(--c1) px-5 py-4">
      <h1 className="pb-4 font-semibold text-2xl">Photos</h1>
    <div className="slider flex flex-nowrap overflow-auto gap-5">
      {photos.map((elem) => {
        return (
          <div className="relative shrink-0" key={elem.id}>
            <img
              className="w-70 h-70 object-cover object-center rounded-xl"
              src={elem.urls.regular}
              alt=""
            />
            <div className="up absolute bottom-0 flex justify-between p-3 items-center w-full h-20 overflow-hidden my-2">
              <h4 className="w-[70%]">{elem.alt_description}</h4>
              <button
                onClick={() => {
                  removefromcollection(elem);
                }}
                className="px-4 py-2 bg-red-700 rounded active:scale-95"
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
    </div>

    <div className="bg-(--c1) px-5 py-4">
      <h1 className="pb-4 font-semibold text-2xl">Videos</h1>
    <div className="slider flex flex-nowrap overflow-auto gap-5">
       {videos.map((elem) => {
        return (
          <div className="relative shrink-0" key={elem.id}>
            <video
              className="w-70 h-70 object-cover object-center rounded-xl"
              muted
              autoPlay
              loop
              src={elem.video_files[2].link}
            ></video>
            <div className="up absolute bottom-0 flex justify-between p-3 items-center w-full h-20 overflow-hidden my-2">
              <h4 className="w-[70%]">{elem.user.name}</h4>
              <button
                onClick={() => {
                  removefromcollection(elem);
                }}
                className="px-4 py-2 bg-red-700 rounded active:scale-95"
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
    </div>

    <div className="bg-(--c1) px-5 py-4">
      <h1 className="pb-4 font-semibold text-2xl">Gifs</h1>
    <div className="slider flex flex-nowrap overflow-auto gap-5">
       {gifs.map((elem) => {
        return (
          <div className="relative shrink-0" key={elem.id}>
            <video
              autoPlay
              loop
              muted
              src={elem.images.original.mp4}
              className="w-70 h-70 object-cover object-center rounded-xl"
            ></video>
            <div className="up absolute bottom-0 flex justify-between p-3 items-center w-full h-20 overflow-hidden my-2">
              <h4 className="w-[70%]">{elem.title}</h4>
              <button
                onClick={() => {
                  removefromcollection(elem);
                }}
                className="px-4 py-2 bg-red-700 rounded active:scale-95"
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  </div>
  )
};

export default Collection;

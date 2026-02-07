import React from "react";
import { addedToast, addToCollection } from "../redux/slices/collectionSlice";
import { useDispatch, useSelector } from "react-redux";

const videos = (props) => {
  const result = props.results;
  const dispatch = useDispatch();
  const { collection } = useSelector((store) => store.collection);

  function addtocollection(obj) {
      dispatch(addToCollection(obj));
        dispatch(addedToast());
    }

  return (
    <div className="flex gap-5 flex-wrap">
      {result.map((elem) => {
        return (
          <div className="relative" key={elem.id}>
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
                    addtocollection({
                      elem: elem,
                      assest_type: "video",
                    })
                }}
                className="px-4 py-2 bg-emerald-700 rounded active:scale-95"
              >
                Save
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default videos;

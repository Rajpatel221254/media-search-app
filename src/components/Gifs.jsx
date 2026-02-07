import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addedToast, addToCollection } from "../redux/slices/collectionSlice";

const gifs = (props) => {
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
                    addtocollection({
                      elem: elem,
                      assest_type: "gif",
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

export default gifs;

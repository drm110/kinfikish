import React from "react";
import { useDrag } from "react-dnd";
import Image from "next/image";

const Dragpicture = ({ id, url }) => {
  // console.log("CHECKING DRAGPICTURE:> ", id, url)
  // const [{isDragging}, drag] = useDrag(()=>({
  //     type: "image",
  //     item: {id: id},
  //     collect: (monitor)=> ({
  //         isDragging: !!monitor.isDragging(),
  //     }),
  // }));
  return (
    <Image src={url} width={27} className="rounded-full" alt="Drag Image" />
  );
};

export default Dragpicture;

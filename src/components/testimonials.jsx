import { useState } from "react";
import Card from "./card";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
const Testimonials = (props) => {
  let review = props.reviews;
  const [index,setIndex]=useState(0);
  function leftShiftHandler(){
      if(index-1<0){
        setIndex(review.length-1);
      }
      else{
        setIndex(index-1);
      }
  }
  function rightShiftHandler(){
      if(index+1>=review.length){
        setIndex(0);
      }
      else{
        setIndex(index+1);
      }
  }
  function surpriseHandler(){
      let randomIndex=Math.floor(Math.random()*review.length);
      setIndex(randomIndex);
  }
  return (
    <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      <Card review={review[index]}></Card>

      <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold text-center mx-auto ">
        <button  onClick={leftShiftHandler} className="cursor-pointer hover:text-violet-500 "><FiChevronLeft></FiChevronLeft></button>
        <button  onClick={rightShiftHandler} className="cursor-pointer hover:text-violet-500 "> <FiChevronRight></FiChevronRight></button>
      </div>
      <div className="mt-6">
        <button onClick={surpriseHandler} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">Surprise me</button>
      </div>
    </div>
  );
};
export default Testimonials;

import React from "react";

const Shimmer = () => {
  return (
    <div>
      <div class="spinner">
        <div class="cube1"></div>
        <div class="cube2"></div>
      </div>
    </div>
  );
};

const ShimmerCard=()=>{
    return <div>

        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
    </div>
}

export default ShimmerCard;
import React from "react";

const TestCard = () => {
  let text = "";
  const switchIcon = (type) => {
    switch (type) {
      case "To be delivered":
        return <img className="h-8 w-8" src="/images/toBe.png" />;
      case "Delivered":
        return <img className="h-8 w-8" src="/images/delivered.png" />;
      case "Pending":
        return <img className="h-8 w-8" src="/images/pending.png" />;
      case "Resheduled":
        return <img className="h-8 w-8" src="/images/resheduled.png" />;
      case "Cancelled":
        return <img className="h-8 w-8" src="/images/cancelled.png" />;
    }
  };

  const statCard = (amount, type) => {
    return (
      <div className="border-2 px-2 flex items-center w-44 py-1 m-1">
        {switchIcon(type)}
        <div className="ml-5">
          <p className="font-semibold">{amount}</p>
          <p className="text-gray-500 text-xs text-gray-400 mt-1">{type}</p>
        </div>
      </div>
    );
  };

  const orderCreateCard = () => {
    return (
      <div className="border-2 flex items-center w-44 px-2 justify-between py-1">
        <p className="font-semibold uppercase text-sm">Create Order</p>
        <img className="h-6 w-6" src="/images/plus.png" />{" "}
      </div>
    );
  };

  const searchBar = () => {
    return (
      <div className="border-2 flex items-center w-[620px] px-2 justify-between py-1">
        <p className="uppercase text-sm text-gray-400">Type to Search </p>
        <img className="h-6 w-6" src="/images/magni.png" />
      </div>
    );
  };

  const viewAmount = () => {
    return (
      <div className="flex items-center w-28  justify-between ">
        <p className="font-semibold uppercase text-sm ">View</p>
        <div className="border-2 px-2 py-2 flex items-center justify-between">
          <p className="text-xs text-gray-400">10</p>
          <img className="h-2 w-3.5 ml-4" src="/images/downArrow.png" />
        </div>
      </div>
    );
  };
  const dropDownCard = (amount, type) => {
    return (
      <div className="border-2 flex items-center w-44 px-2 justify-between py-1">
        <p className="uppercase text-sm text-gray-400">Dubai</p>
        <img className="h-2 w-3.5" src="/images/downArrow.png" />
      </div>
    );
  };
  return (
    <div className="w-9/12 px-8 bg-white shadow-inner shadow-lg rounded-lg lg:ml-5 py-4 mt-5 lg:mt-0">
      <div className="flex flex-col justify-between h-full">
        <div className="flex items-center justify-between flex-wrap">
          {statCard(500, "To be delivered")}
          {statCard(330, "Delivered")}
          {statCard(150, "Pending")}
          {statCard(15, "Resheduled")}
          {statCard(5, "Cancelled")}
        </div>
        <div className="flex items-center justify-between flex-wrap">
          {orderCreateCard()}
          {searchBar()}
          {viewAmount()}
        </div>
        <div className="flex items-center justify-between flex-wrap">
          {dropDownCard()}
          {dropDownCard()}
          {dropDownCard()}
          {dropDownCard()}
          {dropDownCard()}
        </div>
      </div>
    </div>
  );
};

export default TestCard;

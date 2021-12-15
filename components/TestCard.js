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
      <div className="border-2 p-2 flex items-center w-40">
        {switchIcon(type)}
        <div className="ml-5">
          <p className="font-semibold">{amount}</p>
          <p className="text-gray-500 text-xs text-gray-400 mt-1">{type}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-9/12 px-8 bg-white shadow-inner shadow-lg rounded-lg ml-5">
      <div>
        <div className="flex items-center justify-between flex-wrap mt-4 ">
          {statCard(500, "To be delivered")}
          {statCard(330, "Delivered")}
          {statCard(150, "Pending")}
          {statCard(15, "Resheduled")}
          {statCard(5, "Cancelled")}
        </div>

        <div className="flex items-center justify-between flex-wrap mt-7">
          <div className="w-28">
            <p className="font-semibold">1</p>
            <p className="text-gray-500 text-xs text-gray-400 mt-1">
              Refunded Orders
            </p>
          </div>
          <div className="w-28">
            <p className="font-semibold">15</p>
            <p className="text-gray-500 text-xs mt-1">Returned Orders</p>
          </div>
          <div className="w-28">
            <p className="font-semibold">20</p>
            <p className="text-gray-500 text-xs mt-1">Cancelled Orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCard;

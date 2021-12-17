import React from "react";

function StaticsCard() {
  return (
    <div className="lg:w-4/12 max-w-md py-4 px-8 bg-white shadow-lg rounded-lg">
      <div>
        <text className="text-gray-800 text-lg font-semibold uppercase">
          Order Statistics
        </text>
        <div className="flex items-center justify-between flex-wrap mt-4">
          <div className="w-28">
            <p className="font-semibold">1,500,500</p>
            <p className="text-gray-500 text-xs text-gray-400 mt-1">
              Number of orders
            </p>
          </div>
          <div className="w-28">
            <p className="font-semibold">1,500,430</p>
            <p className="text-gray-500 text-xs mt-1">Delivered Orders</p>
          </div>
          <div className="w-28" />
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
}

export default StaticsCard;

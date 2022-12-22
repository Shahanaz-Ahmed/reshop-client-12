import React from "react";

const AboutUs = () => {
  return (
    <div className="hero bg-base-200 mb-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2 md:1/2 h-[500px] rounded-lg shadow-2xl">
          <img
            className="h-[500px]"
            src="https://images.unsplash.com/photo-1533756102515-155e3863ee1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 md:1/2 px-5">
          <h1 className="text-5xl font-serif italic font-bold">About ReShop</h1>
          <p className="py-6 text-2xl">
            ReShop is a e-commerce and resale platform founded in 2002.On ReShop
            a user can both sell and the books in reasonable price. For the
            seller, the fees for using ReShop Local are the same as using
            regular ReShop, and you have the added convenience of not having to
            physically ship your items and the safety of not having to meet-up
            with a stranger. In order to sell on ReShop you have to go through
            some procedure and verified by Admin. On the other hand, Buyer can
            easily buy items from here
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

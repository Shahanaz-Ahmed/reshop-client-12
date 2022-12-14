import React, { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";
import toast from "react-hot-toast";

const BookingModal = ({ selectedBook, setSelectedBook }) => {
  const { name, resale_price, img } = selectedBook;

  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const location = form.location.value;

    // console.log(name, resale_price, phone, location);
    const booking = {
      img,
      name: user.displayName,
      email: user.email,
      item_name: name,
      price: resale_price,
      phone_number: phone,
      meeting_location: location,
    };
    console.log(booking);

    fetch("https://reshop-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setSelectedBook(null); //modal k close korar jonno
          toast.success("Booking Confirmed");
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-4 mt-10"
          >
            <input
              type="text"
              defaultValue={`User Name: ${user?.displayName}`}
              disabled
              placeholder="Type here"
              className="input w-full"
            />
            <input
              type="text"
              defaultValue={`User Email: ${user?.email}`}
              disabled
              placeholder="Type here"
              className="input w-full"
            />
            <input
              type="text"
              defaultValue={`Item Name: ${name}`}
              disabled
              placeholder="Type here"
              className="input w-full"
            />
            <input
              type="text"
              defaultValue={`Resale Price: ${resale_price}`}
              disabled
              placeholder="Type here"
              className="input w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              className="input w-full"
            />
            <input
              type="text"
              name="location"
              placeholder="Meeting location"
              className="input w-full"
            />{" "}
            <br />
            <input
              className="w-full btn btn-black"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;

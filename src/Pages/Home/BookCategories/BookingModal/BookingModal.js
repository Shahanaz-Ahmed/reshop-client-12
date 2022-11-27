import React, { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";

const BookingModal = ({ selectedBook, setSelectedBook }) => {
  const {
    _id,
    img,
    name,
    location,
    original_price,
    posted_time,
    resale_price,
    seller_name,
    years_of_use,
  } = selectedBook;

  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const location = form.location.value;

    console.log(name, resale_price, phone, location);
    const booking = {
      name: user.displayName,
      email: user.email,
      item_name: name,
      price: resale_price,
      phone_number: phone,
      meeting_location: location,
    };
    console.log(booking);
    setSelectedBook(null); //modal k close korar jonno
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
              defaultValue={`User Name: ${user.displayName}`}
              placeholder="Type here"
              className="input w-full"
            />
            <input
              type="text"
              defaultValue={`User Email: ${user.email}`}
              placeholder="Type here"
              className="input w-full"
            />
            <input
              type="text"
              defaultValue={`Item Name: ${name}`}
              placeholder="Type here"
              className="input w-full"
            />
            <input
              type="text"
              defaultValue={`Resale Price: ${resale_price}`}
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

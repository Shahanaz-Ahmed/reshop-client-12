import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const AllSeller = () => {
  const [deletingUser, setDeletingUser] = useState(null);

  const closeModal = () => {
    setDeletingUser(null);
  };

  const { data: users = [], refetch } = useQuery({
    queryKey: ["userType"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/userType?role=seller`);
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteUser = (user) => {
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("User deleted Successfully");
        }
      });
  };
  return (
    <div>
      <h2 className="text-center text-2xl font-serif font-bold italic mb-5">
        All seller
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>User Type</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.login_user}</td>
                <td>
                  <label
                    onClick={() => setDeletingUser(user)}
                    htmlFor="confirmation-modal"
                    className="btn btn-outline btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingUser && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`if you delete, it cannot be undone`}
          successAction={handleDeleteUser}
          modalData={deletingUser}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllSeller;

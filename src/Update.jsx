import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser } from './userSlice';

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.find((user) => parseInt(id) === user.id);
  const [userInfo, setUserInfo] = useState({
    name: existingUser.name,
    email: existingUser.email,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateInput = (ev) => {
    setUserInfo((prevState) =>
      ev.target.name === 'text'
        ? { ...prevState, name: ev.target.value }
        : { ...prevState, email: ev.target.value }
    );
  };

  const handleUpdate = (ev) => {
    ev.preventDefault();

    const updateExistingUser = {
      ...existingUser,
      name: userInfo.name,
      email: userInfo.email,
    };

    dispatch(updateUser(updateExistingUser));

    navigate('/');
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="text"
              value={userInfo.name}
              className="form-control"
              placeholder="Enter Name"
              onChange={(ev) => updateInput(ev)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              className="form-control"
              onChange={(ev) => updateInput(ev)}
            />
          </div>
          <button
            className="btn btn-info mt-3"
            onClick={(ev) => handleUpdate(ev)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;

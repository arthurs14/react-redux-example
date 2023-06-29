import { useState } from 'react';
import { addUser } from './userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  const updateInput = (e) => {
    setUserInfo((prevState) =>
      e.target.name === 'text'
        ? { ...prevState, name: e.target.value }
        : { ...prevState, email: e.target.value }
    );
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const newUser = {
      id: users[users.length - 1].id + 1,
      name: userInfo.name,
      email: userInfo.email,
    };

    console.log(newUser);

    dispatch(addUser(newUser));

    navigate('/');
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New User</h3>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="text"
              value={userInfo.name}
              className="form-control"
              placeholder="Enter Name"
              onChange={(e) => updateInput(e, 'name')}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              className="form-control"
              onChange={(e) => updateInput(e, 'email')}
            />
          </div>
          <button
            className="btn btn-info mt-3"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;

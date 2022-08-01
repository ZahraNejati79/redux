import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userFetch } from "../redux/user/UserAction";

const UserContainer = () => {
  const userData = useSelector((state) => state.user);
  const { loading, error, data } = userData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userFetch());
  }, []);

  const renderUsers = () => {
    if (loading) return <p>loading ....</p>;
    if (!loading && error) return <p>{error}</p>;
    if (data && data.length)
      return (
        <div>
          <h2>
            {data.map((user) => (
              <div key={user.id}>{user.name}</div>
            ))}
          </h2>
        </div>
      );
  };
  return <duv>{renderUsers()}</duv>;
};

export default UserContainer;

import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { clearAllUsers } from "../store/actions";
// import { deleteUsers } from "../store/slices/UserSlice";

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`;
export const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const onDeleteUsers = () => {
    dispatch(clearAllUsers());
  };

  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={onDeleteUsers}>
        Clear Users
      </button>
    </Wrapper>
  );
};

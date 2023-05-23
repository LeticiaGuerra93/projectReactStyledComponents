import React from "react";
import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .text {
    font-weight: bold;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ type, from, value }) => {
  return (
    <Item>
      <span className="text">{type}</span>
      <span>{from}</span>
      <span>{value}</span>
    </Item>
  );
};

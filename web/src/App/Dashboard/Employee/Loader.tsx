import React from "react";
import Loader from "Components/Loader";

export default () => {
  return (
    <tr>
      <td colSpan={5}>
        <Loader />
      </td>
    </tr>
  );
};

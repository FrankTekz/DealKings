import React from "react";
import { Checkbox } from "pretty-checkbox-react";

export default function CheckboxProton({ changeChecked, category }) {
  const { checked, label, id } = category;

  return (
    <div id="proton-flex">
      <Checkbox
        checked={checked}
        onChange={() => changeChecked(id)}
        shape={"round"}
        variant={"fill"}
      />
      <p>{label}</p>
    </div>
  );
}

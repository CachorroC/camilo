'use client'
import React from "react";

import { useFieldArray } from "react-hook-form";

const NestedFieldArray = (
  { nestIndex, control, register }
) => {
  const { fields, remove, append } = useFieldArray(
    {
      control,
      name: `test.${ nestIndex }.nestedArray`
    }
  );

  return (
    <div>
      { fields.map(
        (
          item, k
        ) => {
          return (
            <div key={ item.id } style={ { marginLeft: 20 } }>
              <label>Nested Array:</label>
              <input
                { ...register(
                  `test.${ nestIndex }.nestedArray.${ k }.field1`,
                  {
                    required: true
                  }
                ) }
                style={ { marginRight: "25px" } }
              />

              <input { ...register(
                `test.${ nestIndex }.nestedArray.${ k }.field2`
              ) } />
              <button type="button" onClick={ () => {
                return remove(
                  k
                )
              } }>
                Delete Nested
              </button>
            </div>
          );
        }
      ) }

      <button
        type="button"
        onClick={ () => {
          return append(
            {
              field1: "field1",
              field2: "field2"
            }
          )
        }
        }
      >
        Append Nested
      </button>

      <hr />
    </div>
  );
};


export default NestedFieldArray
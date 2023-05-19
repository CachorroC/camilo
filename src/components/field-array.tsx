'use client'
import React from "react";
import { useFieldArray } from "react-hook-form";
import NestedFieldArray from './nested-field-array';

let renderCount = 0;

export default function Fields (
  { control, register, setValue, getValues }
) {
  const { fields, append, remove, prepend } = useFieldArray(
    {
      control,
      name: "conductasProblema"
    }
  );

  renderCount++;

  return (
    <>
      <ul>
        { fields.map(
          (
            item, index
          ) => {
            return (
              <li key={ item.id }>
                <input { ...register(
                  `conductasProblema.${ index }.name`
                ) } />
                <input type="checkbox" placeholder={ `conductasProblema.${ index }.isDone` } { ...register(
                  `conductasProblema.${ index }.isDone`
                ) } />
                <input type="range" placeholder={ `conductasProblema.${ index }.cantidad` }  { ...register(
                  `conductasProblema.${ index }.cantidad`
                ) } />
                <input type="text" placeholder={ `conductasProblema.${ index }.extra` }  { ...register(
                  `conductasProblema.${ index }.extra`
                ) } />
                <button type="button" onClick={ () => {
                  return remove(
                    index
                  )
                } }>
                  Delete
                </button>
                <NestedFieldArray nestIndex={ index } { ...{
                  control,
                  register
                } } />
              </li>
            );
          }
        ) }
      </ul>

      <section>
        <button
          type="button"
          onClick={ () => {
            append(
              { name: "append" }
            );
          } }
        >
          append
        </button>

        <button
          type="button"
          onClick={ () => {
            setValue(
              "test",
              [
                ...( getValues().test || [] ),
                {
                  name: "append",
                  nestedArray: [ {
                    field1: "append",
                    field2: "append"
                  } ]
                }
              ]
            );
          } }
        >
          Append Nested
        </button>

        <button
          type="button"
          onClick={ () => {
            prepend(
              { name: "append" }
            );
          } }
        >
          prepend
        </button>

        <button
          type="button"
          onClick={ () => {
            setValue(
              "test",
              [
                {
                  name: "append",
                  nestedArray: [ {
                    field1: "Prepend",
                    field2: "Prepend"
                  } ]
                },
                ...( getValues().test || [] )
              ]
            );
          } }
        >
          prepend Nested
        </button>
      </section>

      <span className="counter">Render Count: { renderCount }</span>
    </>
  );
}

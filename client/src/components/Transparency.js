import React from 'react';

export const Transparency = (props) => (
  <div id={props.id} className={(typeof(props.condition) === "function" && props.condition()) || (typeof(props.condition) === "boolean" && props.condition)  ? props.classes: null}></div>
)

export default Transparency
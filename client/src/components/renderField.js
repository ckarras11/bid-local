import React from "react";

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) =>
    <div className="form-control">
      <input {...input} className={touched && error ? 'err' : ''}placeholder={label} type={type}/> 
      {/* touched &&
        ((error &&
          <span>
            {error}
          </span>) ||
          (warning &&
            <span>
              {warning}
            </span>)) */}
    </div>

export default renderField
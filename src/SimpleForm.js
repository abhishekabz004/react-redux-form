import React from "react";
import { Field, reduxForm } from "redux-form";

const SimpleForm = props => {
  const { handleSubmit, reset } = props;
  return (
    <div class="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>NAME: </label>
          <div>
            <Field
              name="name"
              component="input"
              type="text"
              placeholder="Name"
              className="form-control"
            />
          </div>
        </div>
        <div>
          <label>SHOP NAME:</label>
          <div>
            <Field
              name="shopName"
              component="input"
              type="text"
              placeholder="Shop Name"
              className="form-control"
            />
          </div>
        </div>

        <div>
          <label>STATUS: </label>
          <div>
            <Field name="status" component="textarea" />
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(SimpleForm);

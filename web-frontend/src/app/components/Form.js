import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Field, Form } from "formik";
import axios from "axios";

const handleClose = () => {
  console.log("TEST");
};

const useStyles = makeStyles((theme) => ({
  text: {
    color: "white",
  },
}));

function Forms(props) {
  const classes = useStyles();
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          value: "",
          cost: "",
          quantity: "",
          expiry: "",
          claimable: false,
          shopName: "",
          description: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            for (let i = 0; i < values.quantity; i++) {
              const data = {
                name: values.name,
                value: values.value,
                claimable: values.claimable,
                cost: values.cost,
                description: values.description,
                shopName: values.shopName,
                expiry: values.expiry,
              };
              axios
                .post("http://localhost:8080/api/vouchers", data)
                .then(function (response) {
                  //handle success
                  console.log(response);
                })
                .catch(function (response) {
                  //handle error
                  console.log(response);
                });
            }
            setSubmitting(false);
          }, 300);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div className={classes.formField}>
              <h4>Voucher Name</h4>
              <input
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </div>

            <h4>Description</h4>
            <input
              type="string"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />

            <h4>Shop Name</h4>
            <input
              type="string"
              name="shopName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.shopName}
            />

            <div id="my-radio-group">
              <h4>Claimable</h4>
            </div>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="claimable" value={true} />
                Yes
              </label>
              <label>
                <Field type="radio" name="claimable" value={false} />
                No
              </label>
            </div>

            <h4>Expiry Date</h4>
            <input
              type="string"
              name="expiry"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.expiry}
            />
            <h4>Value</h4>
            <input
              type="number"
              name="value"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.value}
            />
            <h4>Cost Price</h4>
            <input
              type="number"
              name="cost"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cost}
            />
            <h4>Quantity</h4>
            <input
              type="number"
              name="quantity"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.quantity}
            />
            <br />
            <br />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <button type="button" onClick={handleClose}>
              Cancel
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default Forms;

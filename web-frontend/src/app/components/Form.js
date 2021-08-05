import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Field } from "formik";
import { TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import axios from "axios";

const handleClose = () => {
  console.log("TEST");
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "1500px",
  },
  form: {
    display: "table",
    minWidth: "100%",
  },
  text: {
    color: "white",
  },
  submitButton: {
    backgroundColor: "green",
    display: "table-cell",
    color: "white",
    padding: "5px",
    borderRadius: "5px",
    marginRight: "10px",
    borderWidth: "1px",
    cursor: "pointer",
  },
  cancelButton: {
    padding: "5px",
    display: "table-cell",
    borderRadius: "5px",
    marginRight: "10px",
    borderWidth: "1px",
    cursor: "pointer",
  },
  formField: {
    display: "table-row",
  },
  field: {
    display: "table-cell",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  buttonContainer: {
    display: "flex",
    float: "right",
  },
}));

function Form(props) {
  const classes = useStyles();
  return (
    <div>
      <Formik
        className={classes.root}
        initialValues={{
          voucherName: "",
          value: "",
          costPrice: "",
          quantity: "",
          expiryDate: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            for (let i = 0; i < values.quantity; i++) {
              const data = {
                name: values.voucherName,
                value: values.value,
                claimable: values.claimable,
                cost: values.costPrice,
                description: values.description,
                shopName: values.shopName,
                expiry: values.expiryDate,
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
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className={classes.form}>
            <FormControl className={classes.formField}>
              <TextField
                fullWidth
                type="name"
                label="Voucher Name"
                name="voucherName"
                className={classes.field}
                onChange={handleChange}
              />
            </FormControl>
            <br></br>
            <FormControl className={classes.formField}>
              <TextField
                fullWidth
                type="string"
                label="Description"
                name="description"
                className={classes.field}
                onChange={handleChange}
              />
            </FormControl>
            <br></br>
            <FormControl className={classes.formField}>
              <TextField
                fullWidth
                type="date"
                label="Expiry Date"
                name="expiryDate"
                defaultValue="yyyy-mm-dd"
                className={classes.field}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
            <br></br>
            <div className={classes.formField}>
              <TextField
                fullWidth
                type="number"
                name="value"
                label="Value ($)"
                className={classes.field}
                onChange={handleChange}
              />
            </div>
            <div id="my-radio-group">
              <h4>Claimable</h4>
            </div>
            <FormControl className={classes.formField}>
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
            </FormControl>
            <br></br>
            <FormControl className={classes.formField}>
              <TextField
                fullWidth
                type="decimal"
                name="costPrice"
                label="Cost Price ($)"
                className={classes.field}
                onChange={handleChange}
              />
            </FormControl>
            <br></br>
            <FormControl className={classes.formField}>
              <TextField
                fullWidth
                type="number"
                name="quantity"
                label="Quantity"
                className={classes.field}
                onChange={handleChange}
              />
            </FormControl>
            <br />
            <br />
            <div className={classes.buttonContainer}>
              <Button
                variant="contained"
                type="submit"
                className={classes.submitButton}
                disabled={isSubmitting}
              >
                Submit
              </Button>
              <Button
                variant="contained"
                type="button"
                className={classes.cancelButton}
                onClick={handleClose}
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
export default Form;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import { TextField } from '@material-ui/core';

const handleClose = () => {
 console.log("TEST");
}

const useStyles = makeStyles((theme) => ({
 root: {
  width: '1500px',
 },
 form: {
  display: 'table',
  minWidth: '100%',
 },
  text: {
    color: 'white',
  },
  submitButton: {
   backgroundColor: 'green',
   display: 'table-cell',
   color: 'white',
   padding: '5px',
   borderRadius: '5px',
   marginRight: '10px',
   borderWidth: '1px',
   cursor: 'pointer',
   '&:hover': {
     backgroundColor: '#FFBC42',
   },
  },
  cancelButton: {
   padding: '5px',
   display: 'table-cell',
   borderRadius: '5px',
   marginRight: '10px',
   borderWidth: '1px',
   cursor: 'pointer',
   '&:hover': {
     backgroundColor: 'grey',
   },
  },
  formField: {
   display: 'table-row',
  },
  field: {
   display: 'table-cell',
   marginLeft: theme.spacing(1),
   marginRight: theme.spacing(1),
  },
  buttonContainer: {
    float: 'right',
  },
  }));

function Form(props) {
 const classes = useStyles();
return (
   <div>
     <Formik className={classes.root}
       initialValues={{ voucherName: '', value: '', costPrice: '', quantity: '', expiryDate: '', }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
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
         <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.formField}>
           <TextField
             fullWidth
             type="name"
             label="Voucher Name"
             name="voucherName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.voucherName}
             className={classes.field}
           />
          </div>
          <br></br>
          <div className={classes.formField}>
           <TextField
             fullWidth
             type="date"
             label="Expiry Date"
             name="expiryDate"
             defaultValue="2017-05-24"
             className={classes.field}
             InputLabelProps={{
               shrink: true,
             }}
           />
          </div>
          <br></br>
          <div className={classes.formField}>
           <TextField
             fullWidth
             type="number"
             name="value"
             label="Value"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.value}
             className={classes.field}
           />
          </div>
          <br></br>
          <div className={classes.formField}>
           <TextField
             fullWidth
             type="number"
             name="costPrice"
             label="Cost Price"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.costPrice}
             className={classes.field}
           />
          </div>
          <br></br>
           <div className={classes.formField}>
           <TextField
             fullWidth
             type="number"
             name="quantity"
             label="Quantity"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.quantity}
             className={classes.field}
           />
           </div>
           <br/>
           <br/>
           <div className={classes.buttonContainer}>
            <button type="submit" className={classes.submitButton} disabled={isSubmitting}>
             Submit
            </button>
            <button type="button" className={classes.cancelButton} onClick={handleClose}>Cancel</button>
           </div>
         </form>
       )}
     </Formik>
   </div>
 );
}
 export default Form;

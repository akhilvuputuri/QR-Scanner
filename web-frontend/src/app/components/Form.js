import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';

const handleClose = () => {
 console.log("TEST");
}

const useStyles = makeStyles((theme) => ({
  text: {
    color: 'white',
  },
  }));

function Form(props) {
 const classes = useStyles();
return (
   <div>
     <Formik
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
         <form onSubmit={handleSubmit}>
          <div className={classes.formField}>
           <h4>Voucher Name</h4>
           <input
             type="name"
             name="voucherName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.voucherName}
           />
          </div>
          
           <h4>Expiry Date</h4>
           <input
             type="string"
             name="expiryDate"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.expiryDate}
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
             name="costPrice"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.costPrice}
           />
           <h4>Quantity</h4>
           <input
             type="number"
             name="quantity"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.quantity}
           />
           <br/>
           <br/>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
           <button type="button" onClick={handleClose}>Cancel</button>
         </form>
       )}
     </Formik>
   </div>
 );
}
 export default Form;

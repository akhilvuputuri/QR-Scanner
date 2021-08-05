import * as React from "react";
import { DataGrid, GridAddIcon } from "@material-ui/data-grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "value",
    headerName: "Value",
    type: "number",
    width: 120,
  },
  {
    field: "cost",
    headerName: "Cost Price",
    type: "number",
    width: 150,
  },
  {
    field: "name",
    headerName: "Voucher Name",
    type: "string",
    width: 180,
  },
  {
    field: "redeem",
    headerName: "Redeemed Vouchers",
    type: "string",
    sortable: true,
    width: 250,
  },
  {
    field: "expiry",
    headerName: "Expiry Date",
    description: "This column has a value getter and is not sortable.",
    type: "string",
    sortable: true,
    width: 160,
  },
];

// const rows = [
//   {
//     id: 1,
//     value: 50,
//     costPrice: 48.2,
//     voucherName: "Test1",
//     redeemedVouchers: "6/10",
//     expiryDate: "25/07/2021",
//   },
//   {
//     id: 2,
//     value: 50,
//     costPrice: 42.5,
//     voucherName: "Test2",
//     redeemedVouchers: "5/25",
//     expiryDate: "22/09/2021",
//   },
//   {
//     id: 3,
//     value: 30,
//     costPrice: 28.1,
//     voucherName: "Test3",
//     redeemedVouchers: "4/8",
//     expiryDate: "21/06/2021",
//   },
//   {
//     id: 4,
//     value: 20,
//     costPrice: 18,
//     voucherName: "Test4",
//     redeemedVouchers: "15/100",
//     expiryDate: "21/02/2021",
//   },
//   {
//     id: 5,
//     value: 20,
//     costPrice: 18.2,
//     voucherName: "Test5",
//     redeemedVouchers: "2/100",
//     expiryDate: "23/07/2021",
//   },
//   {
//     id: 6,
//     value: 50,
//     costPrice: 48.2,
//     voucherName: "Test1",
//     redeemedVouchers: "6/10",
//     expiryDate: "25/07/2021",
//   },
//   {
//     id: 7,
//     value: 50,
//     costPrice: 42.5,
//     voucherName: "Test2",
//     redeemedVouchers: "5/25",
//     expiryDate: "22/09/2021",
//   },
//   {
//     id: 8,
//     value: 30,
//     costPrice: 28.1,
//     voucherName: "Test3",
//     redeemedVouchers: "4/8",
//     expiryDate: "21/06/2021",
//   },
//   {
//     id: 9,
//     value: 20,
//     costPrice: 18,
//     voucherName: "Test4",
//     redeemedVouchers: "15/100",
//     expiryDate: "21/02/2021",
//   },
//   {
//     id: 10,
//     value: 20,
//     costPrice: 18.2,
//     voucherName: "Test5",
//     redeemedVouchers: "2/100",
//     expiryDate: "23/07/2021",
//   },
//   {
//     id: 11,
//     value: 50,
//     costPrice: 48.2,
//     voucherName: "Test1",
//     redeemedVouchers: "6/10",
//     expiryDate: "25/07/2021",
//   },
//   {
//     id: 12,
//     value: 50,
//     costPrice: 42.5,
//     voucherName: "Test2",
//     redeemedVouchers: "5/25",
//     expiryDate: "22/09/2021",
//   },
//   {
//     id: 13,
//     value: 30,
//     costPrice: 28.1,
//     voucherName: "Test3",
//     redeemedVouchers: "4/8",
//     expiryDate: "21/06/2021",
//   },
//   {
//     id: 14,
//     value: 20,
//     costPrice: 18,
//     voucherName: "Test4",
//     redeemedVouchers: "15/100",
//     expiryDate: "21/02/2021",
//   },
//   {
//     id: 15,
//     value: 20,
//     costPrice: 18.2,
//     voucherName: "Test5",
//     redeemedVouchers: "2/100",
//     expiryDate: "23/07/2021",
//   },
// ];

export default function DataTable({ vouchers }) {
  const useStyles = makeStyles((theme) => ({
    titleContainer: {
      display: "flex",
      justifyContent: "space-between",
    },
    title: {
      flexGrow: 1,
      textAlign: "center",
      padding: "5px",
      fontWeight: "bold",
      fontSize: "24px",
    },
    icon: {
      marginTop: "50px",
      fontSize: "35px",
      float: "right",
      "&:hover": {
        color: "grey",
      },
      cursor: "pointer",
    },
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

  return (
    <div style={{ height: 400, minWidth: "100%" }}>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>All Vouchers</Typography>
        <GridAddIcon
          className={classes.icon}
          onClick={handleOpen}
        ></GridAddIcon>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
      <DataGrid
        rows={vouchers}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  IconButton,
  Badge,
  Popover,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Box,
  Button,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import CartItem from "./cart_item";
import { Link } from "react-router-dom";

const Cart = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const cart = useSelector((state) => state.products.cart);
  const stock = useSelector((state) => state.products.stock);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton color="inherit" onClick={handleClick}>
        <Badge badgeContent={Object.keys(cart).length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>#</TableCell>
                <TableCell></TableCell>
                <TableCell>Cost</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(cart).map((keyName) => (
                <CartItem
                  key={keyName}
                  length={keyName}
                  count={cart[keyName]}
                  stock={stock[keyName]}
                />
              ))}
            </TableBody>
          </Table>
          <Box display="flex" justifyContent="center" my={3}>
            {Object.keys(cart).length === 0 ? (
              <Typography>Cart is empty</Typography>
            ) : (
              <Button
                component={Link}
                to="/checkout"
                variant="contained"
                onClick={() => setAnchorEl(null)}
              >
                Checkout
              </Button>
            )}
          </Box>
        </TableContainer>
      </Popover>
    </>
  );
};

export default Cart;

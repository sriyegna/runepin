import React from "react";
import PageBase from "../../components/page_base/page_base";
import CartItem from "../../components/cart/cart_item";
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
} from "@material-ui/core";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cart = useSelector((state) => state.products.cart);
  const stock = useSelector((state) => state.products.stock);

  return (
    <PageBase>
      <Grid container>
        <Grid item xs={12} md={7}>
          <Box mx={5}>
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
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          checkout
        </Grid>
      </Grid>
    </PageBase>
  );
};

export default Checkout;

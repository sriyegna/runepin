import React, { useState } from "react";
import { TableRow, TableCell, Input, IconButton } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { deleteProduct, setProduct } from "../../redux/actions/products";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSnackbar } from "notistack";

const CartItem = (props) => {
  const { length, stock } = props;
  const [count, setCount] = useState(props.count);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const onUpdateClick = () => {
    dispatch(setProduct({ length, count: parseInt(count) }));
    enqueueSnackbar(`Cart modified: ${length}-Day Membership set to ${count}`, {
      variant: "warning",
    });
  };

  const onDeleteClick = () => {
    dispatch(deleteProduct({ length }));
    enqueueSnackbar(
      `Cart modified: ${length}-Day Membership removed from cart`,
      { variant: "error" }
    );
  };

  return (
    <TableRow>
      <TableCell>{length}-Day Membership</TableCell>
      <TableCell>
        <Input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          inputProps={{ min: 1, max: stock }}
          style={{ width: "40px" }}
        />
      </TableCell>
      <TableCell>
        <IconButton onClick={onUpdateClick}>
          <SaveIcon />
        </IconButton>
      </TableCell>
      <TableCell>Cost</TableCell>
      <TableCell>
        <IconButton onClick={onDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default CartItem;

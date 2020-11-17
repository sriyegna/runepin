import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { Box, Input } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import "./shopping_card.css";
import { addProduct } from "../../redux/actions/products";
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";

const ShoppingCard = (props) => {
  const { length, color, image } = props;
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const stock = useSelector((state) => state.products.stock);
  const cart = useSelector((state) => state.products.cart);

  const onClick = () => {
    if (cart[length] && parseInt(count) + cart[length] > stock[length]) {
      enqueueSnackbar(`Insufficient stock of ${length}-Day Memberships`, {
        variant: "error",
      });
    } else {
      dispatch(addProduct({ length, count: parseInt(count) }));
      enqueueSnackbar(`Added ${count} ${length}-Day Memberships to cart`, {
        variant: "success",
      });
    }
  };

  return (
    <Box my={2}>
      <Card className="root">
        <CardMedia className="media" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {length}-Day Membership
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Purchase a code that gives you 16 days of Old School or Runescape 3
            membership!
          </Typography>
          <Box mt={1}>
            <Typography variant="body2" color="textSecondary" component="p">
              Stock: {stock[length]}
            </Typography>
          </Box>
        </CardContent>
        <Box display="flex" justifyContent="space-between" mx={3} mb={2}>
          <Box>
            <Input
              type="number"
              value={count}
              onChange={(e) => setCount(e.target.value)}
              inputProps={{ min: 1, max: stock }}
              style={{ width: "40px" }}
            />
          </Box>
          <Box>
            <Button size="small" color="primary" fullWidth onClick={onClick}>
              Purchase
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default ShoppingCard;

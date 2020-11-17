import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import ShoppingCard from "../../components/shopping_card/shopping_card";
import blackSantaHat from "../../assets/black_santa_hat.png";
import purplePartyHat from "../../assets/partyhat_purple.png";
import yellowPartyHat from "../../assets/partyhat_yellow.png";
import greenPartyHat from "../../assets/partyhat_green.png";
import redPartyHat from "../../assets/partyhat_red.png";
import whitelePartyHat from "../../assets/partyhat_white.png";
import bluePartyHat from "../../assets/partyhat_blue.png";
import christmasCracker from "../../assets/christmas_cracker.png";
import "./home.css";
import PageBase from "../../components/page_base/page_base";
import Server from "../../utils/Server";
import { setStock } from "../../redux/actions/products";
import { useDispatch } from "react-redux";

// Black Santa Hat: 2950 - 3277m
// Purple: 7000 - 7800m
// Yellow: 7025 - 7375m
// Green: 7750 - 8150m
// Red: 9685 - 10,710m
// White: 13,925 - 14,530m
// Blue: 17,700 - 18,325m
// Christmas Cracker - 25000m

const Home = () => {
  const dispatch = useDispatch();

  const getStock = () => {
    Server.get("/api/stock/allStock")
      .then((response) => {
        dispatch(setStock(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStock();
  });

  return (
    <PageBase>
      <Box display="flex" justifyContent="space-evenly" flexWrap="wrap" px={10}>
        <ShoppingCard length={16} color="santa" image={blackSantaHat} />
        <ShoppingCard length={24} color="santa" image={purplePartyHat} />
        <ShoppingCard length={40} color="santa" image={yellowPartyHat} />
        <ShoppingCard length={48} color="santa" image={greenPartyHat} />
        <ShoppingCard length={72} color="santa" image={redPartyHat} />
        <ShoppingCard length={96} color="santa" image={whitelePartyHat} />
        <ShoppingCard length={144} color="santa" image={bluePartyHat} />
        <ShoppingCard length={292} color="santa" image={christmasCracker} />
        <ShoppingCard length={null} color="santa" image={blackSantaHat} />
      </Box>
    </PageBase>
  );
};

export default Home;

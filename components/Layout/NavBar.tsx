import { Typography, Grid, Button } from "@mui/material";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import imageLoader from "../../pages/ImageLoader";
import BasicModal from "../modalpops/modalPopup";
import BasicModal2 from "../modalpops/modalpop2";
import Link from "next/link";

function NavBar() {
  return (
    <Grid>
      <Head>
        <title>Next Js App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fa vicon.ico" />
      </Head>

      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#f9fcfd;",
          paddingTop: "6px",
        }}
      >
        <Typography>
          <Image
            loader={imageLoader}
            src="https://s26352.pcdn.co/wp-content/themes/tt2/assets/images/logo-tt-full.svg"
            alt="Picture of the author"
            width={180}
            height={38}
          />
        </Typography>

        <Grid sx={{ display: "flex" }}>
          <Typography>{/* <BasicModal2/> */}</Typography>

          <BasicModal />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NavBar;

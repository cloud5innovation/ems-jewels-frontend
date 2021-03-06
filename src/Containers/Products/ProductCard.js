import React from "react";
import {withRouter} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        // height: "auto",
      // maxHeight: 50,
      margin: "0 auto",
      cursor: "pointer",
    //  border: "1px solid #808080",
     width: "100%",
      },
    media: {
      width: "100%",
      height: 250,
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    button: {
      background: "none",
      margin: "0 auto",
    //   color: "white",
    //   fontFamily: "Helvetica",
      width: "80%",
      "&:hover": {
        background: "none",
  
      }
    },
    price: {
      marginTop: "1rem",
      fontWeight: 400,
      fontSize: 24,
    },
    card: {
        border: "none",
    },
    title: {
        // border: "6px solid red",
        fontFamily: "Helvetica, Arial, sans-serif",
        marginTop: "1rem",
    },
    img: {
      // border: "1px solid green"
    }
  }));

const ProductCard = (props) => {
    const classes = useStyles();
    console.log(props, "props")
    return(    
    <Grid variant="outlined" className={classes.root} container
    direction="column"
   
    alignItems="center" onClick={() => props.history.push(`/product/${props.product.id}`)}>
      {/* <Grid className={classes.img}> */}
      <img className={classes.media} src={props.product.image_url} alt={props.product.title} />

      {/* </Grid> */}
   {/* <CardContent> */}
   <Typography variant="button"  component="h6" className={classes.price}>
      ${props.product.price}
    </Typography>
    <Typography variant="overline"  component="h5" className={classes.title}>
      {props.product.title}
    </Typography>
    {/* <Typography  variant="caption" gutterBottom >
      {props.product.description}
    </Typography> */}
   
    {/* <Typography  variant="caption" gutterBottom >
      {props.category}
    </Typography> */}
  {/* </CardContent> */}
    {/* <Button className={classes.button} size="small">
    <Typography variant="overline" display="block">
        Edit
      </Typography></Button> */}
</Grid>
)
};

export default withRouter(ProductCard);
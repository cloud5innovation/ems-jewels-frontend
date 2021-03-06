import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { Grid, GridList, GridListTile } from "@material-ui/core";
import ProductCard from "../../Containers/Products/ProductCard";
import { makeStyles } from "@material-ui/core/styles";
import { getProducts } from "../../Store/Actions/products";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      
      justifyContent: "center",
      height: "auto",
      flexGrow: 1,
    },
    gridList: {
      alignItems: "center",
      width: "100%",
      // marginTop: "10rem",
      // border: "3px solid red",

      // flexWrap: 'wrap',
      // width: 500,
      [theme.breakpoints.down('md')]: {
        width: "100%",
      }
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
    gridListTile: {
      margin: "7rem auto 0 auto",
      width: "100%",
      justifyContent: "space-between",
      maxWidth: 1070,
      // border: "3px solid red",
    },
  }));

const ProducstList = (props) => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);
    const classes = useStyles();
    console.log("products from list: ", products)

    useEffect(() => {
        dispatch(getProducts())
        
        return () => {
            console.log("unsubscribe ");
          };
    }, [dispatch]);

    const getGridListCols = () => {
        if (isWidthUp("xl", props.width)) {
          return 5;
        }
    
        if (isWidthUp("lg", props.width)) {
          return 4;
        }
    
        if (isWidthUp("md", props.width)) {
          return 3;
        }
        if (isWidthUp("sm", props.width)) {
          return 2;
        }
        return 1;
      };

    return (
        <Grid>
            <GridList
                cols={getGridListCols()}
                cellHeight={380}
                className={classes.gridList}>
                {products.map((product, key) => (
                    <GridListTile className={classes.gridListTile} key={key}>
                        <ProductCard
                            product={product}
                        ></ProductCard>
                    </GridListTile>
                ))}
      </GridList>
        </Grid>
    )
};

export default withWidth()(ProducstList);
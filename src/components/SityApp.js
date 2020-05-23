import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ChosenSities from "./ChosenSities";
import InputSearchSity from "./InputSearchSity";
import { addSity, removeSity } from "../reducers/actions";
import { connect } from "react-redux";

const useStyles = makeStyles({
  sitiesWrap: {
    border: "1px solid red",
    padding: 15,
    height: "70vh",
    overflowY: "auto",
  },
});

const SityApp = (props) => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: 20 }}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={6}
          container
          direction="column"
        >
          <h2>Города России</h2>
          <InputSearchSity
            sities={props.loadedSities}
            addSity={props.addSity}
          />
        </Grid>
        <Grid
          item
          xs={6}
          container
          direction="column"
        >
          <div className={classes.sitiesWrap}>
            <h2>Выбранные города:</h2>
            <ChosenSities
              removeSity={props.removeSity}
              chosenSities={props.chosenSities}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
const mapDispachToProps = {
  addSity,
  removeSity,
};
const mapStateToProps = (state) => ({
  chosenSities: state.app.chosenSities,
});
export default connect(mapStateToProps, mapDispachToProps)(SityApp);

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  root: {
    display: "flex",
    marginBottom: 20,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ChosenSities({ chosenSities, removeSity }) {
  const classes = useStyles();

  return chosenSities.map((sityName) => (
    <Card key={sityName.id} className={classes.root}>
      <CardContent>
        <Typography variant="h5">{sityName.name}</Typography>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="delete"
          onClick={() => removeSity(sityName.id)}
          size="small"
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  ));
}

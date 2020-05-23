import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  wrap: {
    display: "flex",
  },
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
  root: {
    marginRight: 21,
    width: "70%",
  },
  btn: {
    maxHeight: 40,
    margin: 10,
  },
});

const InputSearchSity = (props) => {

  const classes = useStyles();
  const [inputValue, setInputValue] = React.useState("");
  const [value, setValue] = React.useState("");
  const [blur, setBlur] = React.useState(false);

  let countryToFlag = (label) => {
    if (inputValue && inputValue.length >= 3) {
      return typeof String.fromCodePoint !== "undefined" ? label : false;
    }
  };
  let addHandler = () => {
    if (inputValue) {
      let newSity = {
        name: inputValue,
        id: Date.now().toString(),
      };
      props.addSity(newSity);
      setInputValue("");
    }
  };
  return (
    <div className={classes.wrap}>
      <Autocomplete
        className={classes.root}
        clearOnEscape={true}
        open={
          inputValue && inputValue.length >= 3 && blur !== true ? true : false
        }
        value={value}
        onInputChange={(event) => {
          let target = event.target.value;
          if (target) {
            setInputValue(target.trim());
          }
        }}
        options={props.sities ? props.sities : false}
        classes={{
          option: classes.option,
        }}
        noOptionsText="нет данного города"
        getOptionLabel={(option) => option.city}
        renderOption={(option) => (
          <React.Fragment>
            <span style={{ color: "red" }}>{countryToFlag(option.city)}</span>
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            onBlur={() => setBlur(true)}
            onFocus={() => setBlur(false) && setInputValue("")}
            label="введите 3 и более символов"
            variant="outlined"
          />
        )}
      />
      <Button
        onClick={addHandler}
        className={classes.btn}
        variant="contained"
        size="small"
        color="secondary"
      >
        Выбрать
      </Button>
    </div>
  );
};

export default InputSearchSity;

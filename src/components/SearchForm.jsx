import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Grid from "@material-ui/core/Grid";

const countries = [
  { label: "Andorra", phone: "376" },
  { label: "United Arab Emirates", phone: "971" },
  { label: "Afghanistan", phone: "93" },
  { label: "Antigua and Barbuda", phone: "1-268" },
  { label: "Anguilla", phone: "1-264" },
  { label: "Albania", phone: "355" },
  { label: "Armenia", phone: "374" },
  { label: "Angola", phone: "244" },
  { label: "Antarctica", phone: "672" },
  { label: "Argentina", phone: "54" },
  { label: "American Samoa", phone: "1-684" },
  { label: "Austria", phone: "43" },
  { label: "Australia", phone: "61", suggested: true },
  { label: "Aruba", phone: "297" },
  { label: "Alland Islands", phone: "358" },
  { label: "Azerbaijan", phone: "994" },
  { label: "Bosnia and Herzegovina", phone: "387" },
  { label: "Barbados", phone: "1-246" },
  { label: "Bangladesh", phone: "880" },
  { label: "Belgium", phone: "32" },
  { label: "Burkina Faso", phone: "226" },
  { label: "Bulgaria", phone: "359" },
  { label: "Bahrain", phone: "973" },
  { label: "Burundi", phone: "257" },
  { label: "Benin", phone: "229" },
  { label: "Saint Barthelemy", phone: "590" },
  { label: "Bermuda", phone: "1-441" },
  { label: "Brunei Darussalam", phone: "673" },
  { label: "Bolivia", phone: "591" },
  { label: "Brazil", phone: "55" },
  { label: "Bahamas", phone: "1-242" },
  { label: "Bhutan", phone: "975" },
  { label: "Bouvet Island", phone: "47" },
  { label: "Botswana", phone: "267" },
  { label: "Belarus", phone: "375" },
  { label: "Belize", phone: "501" },
  { label: "Canada", phone: "1", suggested: true },
  { label: "Cocos (Keeling) Islands", phone: "61" },
  { label: "Congo, Democratic Republic of the", phone: "243" },
  { label: "Central African Republic", phone: "236" },
  { label: "Congo, Republic of the", phone: "242" },
  { label: "Switzerland", phone: "41" },
  { label: "Cote d'Ivoire", phone: "225" },
  { label: "Cook Islands", phone: "682" },
  { label: "Chile", phone: "56" },
  { label: "Cameroon", phone: "237" },
  { label: "China", phone: "86" },
  { label: "Colombia", phone: "57" },
  { label: "Costa Rica", phone: "506" },
  { label: "Cuba", phone: "53" },
  { label: "Cape Verde", phone: "238" },
  { label: "Curacao", phone: "599" },
  { label: "Christmas Island", phone: "61" },
  { label: "Cyprus", phone: "357" },
  { label: "Czech Republic", phone: "420" },
  { label: "Germany", phone: "49", suggested: true },
  { label: "Djibouti", phone: "253" },
  { label: "Denmark", phone: "45" },
  { label: "Dominica", phone: "1-767" },
  { label: "Dominican Republic", phone: "1-809" },
  { label: "Algeria", phone: "213" },
  { label: "Ecuador", phone: "593" },
  { label: "Estonia", phone: "372" },
  { label: "Egypt", phone: "20" },
  { label: "Western Sahara", phone: "212" },
  { label: "Eritrea", phone: "291" },
  { label: "Spain", phone: "34" },
  { label: "Ethiopia", phone: "251" },
  { label: "Finland", phone: "358" },
  { label: "Fiji", phone: "679" },
  { label: "Falkland Islands (Malvinas)", phone: "500" },
  { label: "Micronesia, Federated States of", phone: "691" },
  { label: "Faroe Islands", phone: "298" },
  { label: "France", phone: "33", suggested: true },
  { label: "Gabon", phone: "241" },
  { label: "United Kingdom", phone: "44" },
  { label: "Grenada", phone: "1-473" },
  { label: "Georgia", phone: "995" },
  { label: "French Guiana", phone: "594" },

  { label: "Jersey", phone: "44" },
  { label: "Jamaica", phone: "1-876" },
  { label: "Jordan", phone: "962" },
  { label: "Japan", phone: "81", suggested: true },
  { label: "Kenya", phone: "254" },
  { label: "Kyrgyzstan", phone: "996" },
  { label: "Cambodia", phone: "855" },
  { label: "Kiribati", phone: "686" },
  { label: "Comoros", phone: "269" },
  { label: "Saint Kitts and Nevis", phone: "1-869" },
  { label: "Korea, Democratic People's Republic of", phone: "850" },
  { label: "Korea, Republic of", phone: "82" },
  { label: "Kuwait", phone: "965" },
  { label: "Cayman Islands", phone: "1-345" },
  { label: "Kazakhstan", phone: "7" },
  { label: "Lao People's Democratic Republic", phone: "856" },
  { label: "Lebanon", phone: "961" },
  { label: "Saint Lucia", phone: "1-758" },
  { label: "Liechtenstein", phone: "423" },
  { label: "Sri Lanka", phone: "94" },
  { label: "Liberia", phone: "231" },
  { label: "Lesotho", phone: "266" },
  { label: "Lithuania", phone: "370" },
  { label: "Luxembourg", phone: "352" },
  { label: "Latvia", phone: "371" },
  { label: "Libya", phone: "218" },
  { label: "Morocco", phone: "212" },
  { label: "Monaco", phone: "377" },
  { label: "Moldova, Republic of", phone: "373" },
  { label: "Montenegro", phone: "382" },
  { label: "Saint Martin (French part)", phone: "590" },
  { label: "Madagascar", phone: "261" },
  { label: "Marshall Islands", phone: "692" },
  {
    label: "Macedonia, the Former Yugoslav Republic of",
    phone: "389",
  },
  { label: "Mali", phone: "223" },
  { label: "Myanmar", phone: "95" },
  { label: "Mongolia", phone: "976" },
  { label: "Macao", phone: "853" },
  { label: "Northern Mariana Islands", phone: "1-670" },
  { label: "Martinique", phone: "596" },
  { label: "Mauritania", phone: "222" },
  { label: "Montserrat", phone: "1-664" },
  { label: "Malta", phone: "356" },
  { label: "Mauritius", phone: "230" },
  { label: "Maldives", phone: "960" },
  { label: "Malawi", phone: "265" },
  { label: "Mexico", phone: "52" },
  { label: "Malaysia", phone: "60" },
  { label: "Mozambique", phone: "258" },
  { label: "Namibia", phone: "264" },
  { label: "New Caledonia", phone: "687" },
  { label: "Niger", phone: "227" },
  { label: "Norfolk Island", phone: "672" },
  { label: "Nigeria", phone: "234" },
  { label: "Nicaragua", phone: "505" },
  { label: "Netherlands", phone: "31" },
  { label: "Norway", phone: "47" },
  { label: "Nepal", phone: "977" },
  { label: "Nauru", phone: "674" },
  { label: "Niue", phone: "683" },
  { label: "New Zealand", phone: "64" },
  { label: "Oman", phone: "968" },
  { label: "Panama", phone: "507" },
  { label: "Peru", phone: "51" },
  { label: "French Polynesia", phone: "689" },
  { label: "Papua New Guinea", phone: "675" },
  { label: "Philippines", phone: "63" },
  { label: "Pakistan", phone: "92" },
  { label: "Poland", phone: "48" },
  { label: "Saint Pierre and Miquelon", phone: "508" },
  { label: "Pitcairn", phone: "870" },
  { label: "Puerto Rico", phone: "1" },
  { label: "Palestine, State of", phone: "970" },
  { label: "Portugal", phone: "351" },
  { label: "Palau", phone: "680" },
  { label: "Paraguay", phone: "595" },
  { label: "Qatar", phone: "974" },
  { label: "Reunion", phone: "262" },
  { label: "Romania", phone: "40" },
  { label: "Serbia", phone: "381" },
  { label: "Russian Federation", phone: "7" },
  { label: "Rwanda", phone: "250" },
  { label: "Saudi Arabia", phone: "966" },
  { label: "Solomon Islands", phone: "677" },
  { label: "Seychelles", phone: "248" },
  { label: "Sudan", phone: "249" },
  { label: "Sweden", phone: "46" },
  { label: "Singapore", phone: "65" },
  { label: "Saint Helena", phone: "290" },
  { label: "Slovenia", phone: "386" },
  { label: "Svalbard and Jan Mayen", phone: "47" },
  { label: "Slovakia", phone: "421" },
  { label: "Sierra Leone", phone: "232" },
  { label: "San Marino", phone: "378" },
  { label: "Senegal", phone: "221" },
  { label: "Somalia", phone: "252" },
  { label: "Suriname", phone: "597" },
  { label: "South Sudan", phone: "211" },
  { label: "Sao Tome and Principe", phone: "239" },
  { label: "El Salvador", phone: "503" },
  { label: "Sint Maarten (Dutch part)", phone: "1-721" },
  { label: "Syrian Arab Republic", phone: "963" },
  { label: "Swaziland", phone: "268" },
  { label: "Turks and Caicos Islands", phone: "1-649" },
  { label: "Chad", phone: "235" },
  { label: "French Southern Territories", phone: "262" },
  { label: "Togo", phone: "228" },
  { label: "Thailand", phone: "66" },
  { label: "Tajikistan", phone: "992" },
  { label: "Tokelau", phone: "690" },
  { label: "Timor-Leste", phone: "670" },
  { label: "Turkmenistan", phone: "993" },
  { label: "Tunisia", phone: "216" },
  { label: "Tonga", phone: "676" },
  { label: "Turkey", phone: "90" },
  { label: "Trinidad and Tobago", phone: "1-868" },
  { label: "Tuvalu", phone: "688" },
  { label: "Taiwan, Province of China", phone: "886" },
  { label: "United Republic of Tanzania", phone: "255" },
  { label: "Ukraine", phone: "380" },
  { label: "Uganda", phone: "256" },
  { label: "United States", phone: "1", suggested: true },
  { label: "Uruguay", phone: "598" },
  { label: "Uzbekistan", phone: "998" },
  { label: "Holy See (Vatican City State)", phone: "379" },
  { label: "Saint Vincent and the Grenadines", phone: "1-784" },
  { label: "Venezuela", phone: "58" },
  { label: "British Virgin Islands", phone: "1-284" },
  { label: "US Virgin Islands", phone: "1-340" },
  { label: "Vietnam", phone: "84" },
  { label: "Vanuatu", phone: "678" },
  { label: "Wallis and Futuna", phone: "681" },
  { label: "Samoa", phone: "685" },
  { label: "Kosovo", phone: "383" },
  { label: "Yemen", phone: "967" },
  { label: "Mayotte", phone: "262" },
  { label: "South Africa", phone: "27" },
  { label: "Zambia", phone: "260" },
  { label: "Zimbabwe", phone: "263" },
];
// const filterBooks = (books, searchQuery) =>
//   books.filter(
//     o =>
//       o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
//       o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
//   );

const useStyles = makeStyles({
  option: {
   
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
  root: {
    marginTop: 30,
    width: "90%",
  },
});

export default function SearchForm() {
  const [value, setValue] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");


    console.log(inputValue.length)
  const countryToFlag = (label) => {
    if (inputValue && inputValue.length >= 3) {
      return label.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
        ? label
        : false;
    }
  };
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={6}
        container
        direction="row"
        justify="start"
        alignItems="center"
      >
        <Autocomplete
          className={classes.root}
          value={value}
          open={ inputValue.length >=3 ? true : false}
          
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          options={countries}
          classes={{
            option: classes.option,
          }}
          noOptionsText = "нет данной страны"
          getOptionLabel={(option) => option.label}
        
          renderOption={(option) => (
            <React.Fragment >
             <span 
                onClick={() => {
                  console.log("click");
                }}
              >
                {countryToFlag(option.label)}
                
              </span>
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a country"
              variant="outlined"
            />
          )}
        />
      </Grid>
    </Grid>
  );
}

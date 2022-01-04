import {
  Box,
  Button,
  Hidden,
  List,
  ListItem,
  ListItemText,
  TextField
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "98vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  textField: {
    width: "100%",
    backgroundColor: "white",
    border: "none"
  },
  contentBox: {
    width: "50%",
    height: "70%",
    padding: "20px",
    backgroundColor: "#f6f6f6",
    borderRadius: "20px"
  },
  contentBoxSmall: {
    width: "100%",
    height: "98%",
    padding: "20px",
    backgroundColor: "#f6f6f6",
    borderRadius: "20px"
  },
  listBox: {
    margin: "8px 0px",
    height: "calc(100% - 125px)"
  },
  button: {
    color: "red",
    backgroundColor: "#c8c8c8",
    margin: "8px 0"
  }
}));

const App = () => {
  const classes = useStyles();
  const [value, setValue] = useState(undefined);
  const [valueTextField, setValueTextField] = useState(undefined);
  const text = encodeURI(
    "oi, boa tarde.American Nexstar Media Group, agora precisa de pouco gerente de promo??o e algum assistente de promo??o, trabalho de casa, opera??o simples ， n?o há limite！ Para entrada diária de 300USD！ e entrada mensal a partir de 9000USD！ A cota é limitada. Para detalhes, por favor entre em contato WhatsApp: https://wa.me/380990668520 Correo electrónico: nmg.hralex@gmail.com a01"
  );

  return (
    <Box className={classes.root}>
      <Hidden smDown>
        <Box className={classes.contentBox}>
          <Box>
            <TextField
              className={classes.textField}
              value={valueTextField || ""}
              onChange={(e) => {
                const value = e.target.value.split("+").slice(1);
                setValue(value);
                setValueTextField(e.target.value);
              }}
              label="Numbers"
              placeholder="+84525252525..."
              type="text"
              multiline
              maxRows="1"
            />
          </Box>
          <Box>
            <Button
              onClick={() => {
                setValue(undefined);
                setValueTextField(undefined);
              }}
              className={classes.button}
            >
              clear all
            </Button>
          </Box>
          <Box className={classes.listBox}>
            <List
              sx={{
                width: "100%",
                bgcolor: "background.paper",
                position: "relative",
                overflow: "auto",
                height: "100%",
                "& ul": { padding: 0 }
              }}
              subheader={<li />}
            >
              {value?.map((Numbers, index) => (
                <ListItem key={`section-${Numbers}`}>
                  <ListItemText>
                    <a
                      href={`https://api.whatsapp.com/send?phone=${Numbers}&text=${text}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {index + 1} Click to WhatsApp Chat
                    </a>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Hidden>
      <Hidden smUp>
        <Box className={classes.contentBoxSmall}>
          <Box>
            <TextField
              className={classes.textField}
              value={valueTextField || ""}
              onChange={(e) => {
                const value = e.target.value.split("+").slice(1);
                setValue(value);
                setValueTextField(e.target.value);
              }}
              label="Numbers"
              placeholder="+84525252525..."
              type="text"
              multiline
              maxRows="1"
            />
          </Box>
          <Box>
            <Button
              onClick={() => {
                setValue(undefined);
                setValueTextField(undefined);
              }}
              className={classes.button}
            >
              clear all
            </Button>
          </Box>
          <Box className={classes.listBox}>
            <List
              sx={{
                width: "100%",
                bgcolor: "background.paper",
                position: "relative",
                overflow: "auto",
                height: "100%",
                "& ul": { padding: 0 }
              }}
              subheader={<li />}
            >
              {value?.map((Numbers, index) => (
                <ListItem key={`section-${Numbers}`}>
                  <ListItemText>
                    <a
                      href={`https://api.whatsapp.com/send?phone=${Numbers}&text=${text}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {index + 1} Click to WhatsApp Chat
                    </a>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Hidden>
    </Box>
  );
};

export default App;

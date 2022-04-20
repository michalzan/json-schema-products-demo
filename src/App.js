import createTheme from "./theme";
import Form from "@rjsf/material-ui";
import { ThemeProvider, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import schemas from "./schemas";

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: "630px",
    borderRadius: 8,
    marginTop: theme.spacing(1),
    padding: theme.spacing(2, 1, 1),
    border: `1px solid ${theme.palette.digitalBlack[50]}`,
    "& > p": {
      margin: theme.spacing(0, 1),
    },
  },
}));

const SchemeForm = ({ schema }) => {
  const classes = useStyles();
  return (
    <Paper elevation={1} className={classes.paper}>
      <Form
        schema={schema}
        omitExtraData={true}
        liveOmit={true}
        onSubmit={(event) => {
          console.log(event.formData);
        }}
      ></Form>
    </Paper>
  );
};

function App() {
  const [selectedSchema, setSelectedSchema] = React.useState(schemas[0]);
  return (
    <ThemeProvider theme={createTheme()}>
      <Select
        value={selectedSchema}
        onChange={(event) => setSelectedSchema(event.target.value)}
      >
        {schemas.map((schema) => (
          <MenuItem key={schema.title} value={schema}>
            {schema.title}
          </MenuItem>
        ))}
      </Select>

      <SchemeForm schema={selectedSchema} />
    </ThemeProvider>
  );
}

export default App;

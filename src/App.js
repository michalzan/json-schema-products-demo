import createTheme from "./theme";
import Form from "@rjsf/material-ui";
import { ThemeProvider } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import schemas from "./schemas";

function App() {
  const [selcetedSchema, setSelcetedSchema] = React.useState(schemas[0]);
  return (
    <ThemeProvider theme={createTheme()}>
      <Select
        value={selcetedSchema}
        onChange={(event) => setSelcetedSchema(event.target.value)}
      >
        {schemas.map((schema) => (
          <MenuItem key={schema.title} value={schema}>
            {schema.title}
          </MenuItem>
        ))}
      </Select>
      <Form
        schema={selcetedSchema}
        omitExtraData={true}
        liveOmit={true}
        onSubmit={(event) => {
          console.log(event.formData);
        }}
      ></Form>
    </ThemeProvider>
  );
}

export default App;

import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import Header from "../../component/Header";
import * as yup from "yup";

const Form = () => {
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const checkoutSchema = yup.object().shape({
    firstname: yup.string().required("required"),
    lastname: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
  });
  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          contact: "",
          address1: "",
          address2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={checkoutSchema}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="First Name"
                  sx={{ gridColumn: "span 2" }}
                  name="firstname"
                  value={values.firstname}
                  onChange={handleChange}
                  error={touched.firstname && errors.firstname}
                  helperText={touched.firstname && errors.firstname}
                  onBlur={handleBlur}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Last Name"
                  sx={{ gridColumn: "span 2" }}
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  error={touched.lastname && errors.lastname}
                  helperText={touched.lastname && errors.lastname}
                  onBlur={handleBlur}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Email"
                  sx={{ gridColumn: "span 4" }}
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && errors.email}
                  helperText={touched.email && errors.email}
                  onBlur={handleBlur}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Contact Number"
                  sx={{ gridColumn: "span 4" }}
                  name="contact"
                  value={values.contact}
                  onChange={handleChange}
                  error={touched.contact && errors.contact}
                  helperText={touched.contact && errors.contact}
                  onBlur={handleBlur}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Address 1"
                  sx={{ gridColumn: "span 4" }}
                  name="address1"
                  value={values.address1}
                  onChange={handleChange}
                  error={touched.address1 && errors.address1}
                  helperText={touched.address1 && errors.address1}
                  onBlur={handleBlur}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Address 2"
                  sx={{ gridColumn: "span 4" }}
                  name="address2"
                  value={values.address2}
                  onChange={handleChange}
                  error={touched.address2 && errors.address2}
                  helperText={touched.address2 && errors.address2}
                  onBlur={handleBlur}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Create New User
                </Button>
              </Box>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Form;

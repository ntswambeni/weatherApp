import React from 'react';
import { 
  Formik,
  Form,
  Field,
} from 'formik';
import * as Yup from 'yup';
import SearchContainer from './Style';

// value types of the form fields
interface FormValues {
  city: string;
}

const SearchBar: React.FC<{}> = () => {
  // validation schema for city name
  const citySchema = Yup.object().shape({
    city: Yup.string()
          .min(1, 'Too short for being a city name')
          .max(85, 'Too long for being a city name')
          .required('Type a city name')
  })

  // iniial value of the form fields
  const initialValues: FormValues = { city: '' };
  return (
    <SearchContainer>
      <Formik
        validationSchema={citySchema}
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {props => (
          <Form onSubmit={props.handleSubmit}>
            <div>
              <Field
                type="text"
                name="city"
                placeholder="type the name of the city"
              />
              <button type="submit">go</button>
            </div>
            {props.errors.city && <div id="feedback">{props.errors.city}</div>}
          </Form>
        )}
      </Formik>
    </SearchContainer>
   )
 };

 export default SearchBar
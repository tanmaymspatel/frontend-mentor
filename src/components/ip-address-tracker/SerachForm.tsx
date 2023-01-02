import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

function SerachForm() {

    /**
     * intitial value of the search form
     */
    const initialValues = {
        ipAddress: ''
    };

    const onSubmit = (values: any, { resetForm }: any) => {

        console.log(values);
        resetForm({ values: '' })

    }


    const validationSchema = Yup.object({
        ipAddress: Yup.string().required('This Field is required!')
    })

    return (
        <div className="my-3">
            <Formik
                initialValues={initialValues}
                onSubmit={(values, { resetForm }) => onSubmit(values, { resetForm })}
                validationSchema={validationSchema}
                enableReinitialize
            >
                <Form>
                    <div className="d-flex">
                        <div>
                            <Field type='text' className='border-0 form-control' id='ipAddress' name='ipAddress' placeholder="Search for any IP address or domain" />
                        </div>
                        <button type="submit" className="bg-primary border-0"><span className="icon-arrow-right text-light " /></button>
                    </div>
                    <ErrorMessage name='ipAddress'>
                        {errorMsg => <small className="text-light">{errorMsg}</small>}
                    </ErrorMessage>
                </Form>
            </Formik>
        </div>
    )
};

export default SerachForm;

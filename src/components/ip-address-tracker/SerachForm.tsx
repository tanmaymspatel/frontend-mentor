import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

import { ISearchFormDetailsProps, ISerachFormProps } from "./interfaces/interfaces";
/**
 * @returns A search Form for Ip Tracking
 */
function SerachForm({ setIpAddress }: ISerachFormProps) {
    /**
     * intitial value of the search form
     */
    const initialValues = {
        ipAddress: null
    };
    /**
     * @name onSubmit
     * @param values form details after hitting the submit button
     * @param resrtForm To reset form after submitting the value
     */
    const onSubmit = (values: ISearchFormDetailsProps, { resetForm }: any) => {
        setIpAddress(values.ipAddress as number);
        resetForm({ values: '' })
    }
    /**
     * Validation criteria for the search form
     */
    const validationSchema = Yup.object({
        ipAddress: Yup.string().required('This Field is required!')
    })

    return (
        <div className="container my-3">
            <Formik
                initialValues={initialValues}
                onSubmit={(values, { resetForm }) => onSubmit(values, { resetForm })}
                validationSchema={validationSchema}
                enableReinitialize
            >
                <Form>
                    <div className="mx-3 mx-sm-auto d-flex">
                        <div className="input-field d-flex position-relative">
                            <Field type='text' className='border-0 form-control p-3' id='ipAddress' name='ipAddress' placeholder="Search for any IP address or domain" autoComplete="off" />
                            <button type="submit" className="bg-primary border-0 btn-ip-submit p-3"><span className="icon-arrow-right text-light " /></button>
                            <ErrorMessage name='ipAddress' className="w-100 mx-auto">
                                {errorMsg => <small className="error-text text-light position-absolute ">{errorMsg}</small>}
                            </ErrorMessage>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
};

export default SerachForm;

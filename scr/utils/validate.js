import * as yup from 'yup'


export  const carValidationSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, ({ min }) => `Name must be at least ${min} characters`)
        .required('Name is Required'),
    color: yup
        .string()
        .required('Color is required'),
    model: yup
        .string()
        .min(4, ({ min }) => `Model number is invalide`)
        .max(4, ({ max }) => `Model number is invalide`)
        .required('Model is required'),
    make: yup
        .string()
        .min(4, ({ min }) => `Make number is invalide`)
        .max(4, ({ max }) => `Make number is invalide`)
        .required('Make is required'),
    regNo: yup
        .string()
        .required('Make is required')
        .min(5, ({ min }) => `Registration # must be at least ${min} characters`)
        .max(8, ({ max }) => `Registration # is invalide`),
})
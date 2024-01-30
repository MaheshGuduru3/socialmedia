import * as Yup  from 'yup'

export const formValid = new Yup.object({
    email:Yup.string().email().required("Required Email"),
    username:Yup.string().min(5).max(30).required("Required username"),
    phonenumber:Yup.number().integer().required("Required Phonenumber"),
    password:Yup.string().min(8).required("Required Password").matches("^[A-Z]+[a-z]+[^a-zA-Z0-9]+[0-9]+","Atleast one number,Uppercase,Lowercase,special characters"),
    repassword:Yup.string().required("Required reenterpassword").oneOf([ Yup.ref('password') , null ], "mismatch password") 
})
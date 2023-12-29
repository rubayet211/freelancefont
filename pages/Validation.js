import axios from "axios";
import { useRouter } from "next/router";

const Validation = (values) =>
{
    const errors = {};
    const flag = false;

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values.name === ""){
        errors.name = "Name is Required";
    }

    if(values.email === ""){
        errors.email = "Email is Required";
    }else if(!email_pattern.test(values.email)){
        errors.email = "Email did not match required pattern";
    }

     if(values.password === ""){
        errors.password = "Password is Required";
    }else if(!password_pattern.test(values.password)){
        errors.password = "Password did not match required pattern"
    }

     if(values.confirmpassword === ""){
        errors.confirmpassword = "Confirm your password";
    }else if(values.password != values.confirmpassword){
        errors.confirmpassword = "Passwords do not match";
    }

     if(values.image === ""){
        errors.image = "Select an image";
    }

    if(Object.keys(errors).length === 0){
        try {
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('email', values.email);
            formData.append('password', values.password);
            formData.append('image', document.querySelector('#image').files[0]);
            const response = axios.post('http://localhost:3000/clients/newclient', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
        } catch (error) {
            console.error(error);
        }
        errors.flag = "yes";
    }
    console.log(errors);
    console.log(Object.keys(errors).length);

    return errors;

}

export default Validation;
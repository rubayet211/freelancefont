import axios from "axios";

const ValidationFreelancer = (values) =>
{
    const errors = {};
    const flag = false;

    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    if(values.name === ""){
        errors.name = "Name is Required";
    }

    if(values.hr === ""){
        errors.email = "Rate is Required";
    }

     if(values.password === ""){
        errors.password = "Password is Required";
    }else if(!password_pattern.test(values.password)){
        errors.password = "Password did not match required pattern"
    }

    if(values.email === ""){
        errors.email = "Email is Required";
    }else if(!email_pattern.test(values.email)){
        errors.email = "Email did not match required pattern";
    }

     if(values.confirmpassword === ""){
        errors.confirmpassword = "Description is required";
    }

     if(values.image === ""){
        errors.image = "Select an image";
    }

    if(Object.keys(errors).length === 0){
        try {
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('hourlyRate', values.hr);
            formData.append('password', values.password);
            formData.append('description', values.confirmpassword);
            formData.append('email', values.confirmpassword);
            formData.append('image', document.querySelector('#image').files[0]);
            const response = axios.post('http://localhost:3000/freelancer/newFreelancer', formData, {
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

export default ValidationFreelancer;
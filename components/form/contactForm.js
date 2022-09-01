import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    firstName: yup.string().required("Please enter your name").min(3, "Name must include minimum of 3 characters"),
    lastName: yup.string().required("Please enter your name").min(4, "Name must include minimum of 4 characters"),
    email: yup.string().required("Please enter your email address").email("Please enter a valid email address"),
    message: yup.string().required("Please enter your message").min(10, "Message must include minimum of 10 characters"),
});

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    console.log(errors);
    
return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="First name.."{...register("firstName")} />
            {errors.firstName && <span>{errors.firstName.message}</span>}
          <input placeholder="Last name.."{...register("lastName")} />
            {errors.lastName && <span>{errors.lastName.message}</span>}
          <input placeholder="Email.."{...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}
        <select name="options" id="options">
          <option value="optionOne">Option 1</option>
          <option value="optionTwo">Option 2</option>
          <option value="optionThree">Option 3</option>
          <option value="optionFour">Option 4</option>
        </select>
          <textarea placeholder="Message.."{...register("message")} />
            {errors.message && <span>{errors.message.message}</span>}    
          <button>Submit</button>
        </form>
    </>
 );
}
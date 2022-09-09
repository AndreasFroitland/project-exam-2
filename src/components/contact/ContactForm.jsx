import { useState } from "react";
import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import FormError from "../common/FormError";
import * as yup from "yup";
import useAxios from "../../hooks/useAxios";

const schema = yup.object().shape({
    name: yup.string().required().min(3),
    email: yup.string().email().required(),
    message: yup.string().required().min(20)
});

export default function AddContact() {
    const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);

    const navigate = useNavigate();
    const http = useAxios();

    const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
    });

    async function onSubmit(data){
        data.status = "publish";

        const contact = {
            title: data.title,
            content: data.content,
            status: "publish",
            fields: {
                name: data.name,
                email: data.email,
                message: data.message
            }
        }
        console.log(contact)

        try {
			const response = await http.post("wp/v2/contact", contact);
			console.log("response:", response.data);
			navigate("/");
		} catch (error) {
			console.log("error", error);
			setServerError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

    return (
			<form onSubmit={handleSubmit(onSubmit)}>
				{serverError && <FormError>{serverError}</FormError>}
				<fieldset disabled={submitting}>
					<div>
                        <input {...register("name")} placeholder="Name"/>
						{errors.name && <FormError>{errors.name?.message}</FormError>}
					</div>

                    <div>
                        <input {...register("email")} placeholder="E-mail"/>
						{errors.email && <FormError>{errors.email?.message}</FormError>}
					</div>

                    <div>
                        <textarea {...register("message")} placeholder="Message"/>
						{errors.message && <FormError>{errors.message?.message}</FormError>}
					</div>
					<button>{submitting ? "Submitting..." : "Submit"}</button>
				</fieldset>
			</form>
	);
}
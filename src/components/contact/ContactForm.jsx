import { useState } from "react";
import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import FormError from "../common/FormError";
import * as yup from "yup";
import { BASE_URL } from "../../constants/api";
import axios from "axios";
import { ContainerForm, StyleForm, StyleFieldset, StyleInput, StyleTextarea, StyleButton } from "../layout/StyleForm";

const schema = yup.object().shape({
    fullname: yup.string().required("Please enter your name").min(5, "Name must be at least 5 letters"),
    email: yup.string().email("E-mail must be valid").required("Please enter your email"),
    message: yup.string().required("Please enter your message").min(20, "Message must be at least 20 letters")
});

export default function AddContact() {
    const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);

    const navigate = useNavigate();
    const url = BASE_URL + "wp/v2/messages";

    const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
    });

    async function onSubmit(data){
        data.status = "publish";

        const contact = {
            title: data.title,
            content: data.content,
            status: "publish",
            fullname: data.fullname,
            email: data.email,
            message: data.message  
        }
        console.log(contact)

        try {
			const response = await axios.post(url, contact);
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
        <ContainerForm>
			<StyleForm onSubmit={handleSubmit(onSubmit)}>
				{serverError && <FormError>{serverError}</FormError>}
				<StyleFieldset disabled={submitting}>
					<div>
                        <p>Name:</p>
                        <StyleInput {...register("fullname")} placeholder="name..."/>
						{errors.fullname && <FormError>{errors.fullname?.message}</FormError>}
					</div>

                    <div>
                        <p>E-mail:</p>
                        <StyleInput {...register("email")} placeholder="e-mail..."/>
						{errors.email && <FormError>{errors.email?.message}</FormError>}
					</div>

                    <div>
                        <p>Message:</p>
                        <StyleTextarea {...register("message")} placeholder="message..."/>
						{errors.message && <FormError>{errors.message?.message}</FormError>}
					</div>
					<StyleButton>{submitting ? "Submitting..." : "Submit"}</StyleButton>
				</StyleFieldset>
			</StyleForm>
        </ContainerForm>
	);
}
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import * as yup from "yup";
import axios from "axios";
import { BASE_URL } from "../../../constants/api"
import { ContainerForm,
         StyleForm,
         StyleFieldset,
         StyleInput,
         StyleButton } from "../../layout/styles/StyleForm";

const schema = yup.object().shape({
    fullname: yup.string().required("Please enter your name").min(5, "Name must be at least 5 letters"),
    email: yup.string().email("E-mail must be valid").required("Please enter your email"),
    hotel: yup.string().required("Please enter your message").min(5, "Message must be at least 5 letters"),
    date: yup.string().required("Please enter choose a date")
});

export default function AddBooking() {
    const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
    });

    async function onSubmit(data){
        setSubmitting(true);
		setServerError(null);

        const booking = {
            status: "publish",
            fullname: data.fullname,
            email: data.email,
            hotel: data.hotel,
            date: data.date
        }
        console.log(booking)

        try {
			const response = await axios.post(BASE_URL + "contact-form-7/v1/contact-forms/132/feedback", booking, {
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            });
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
                        <p>Hotel:</p>
                        <StyleInput {...register("hotel")} placeholder="hotel..."/>
						{errors.hotel && <FormError>{errors.hotel?.message}</FormError>}
					</div>

                    <div>
                        <p>Date:</p>
                        <StyleInput {...register("date")} type="date" min="2022-09-19"/>
						{errors.date && <FormError>{errors.date?.message}</FormError>}
					</div>
					<StyleButton>{submitting ? "Submitting..." : "Submit"}</StyleButton>
				</StyleFieldset>
			</StyleForm>
        </ContainerForm>
	);
}
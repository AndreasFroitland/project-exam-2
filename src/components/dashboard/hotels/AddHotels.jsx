import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import useAxios from "../../../hooks/useAxios";
import Heading from "../../layout/Heading";
import DashboardPage from "../DashboardPage";
import { ContainerForm, ContainerHeader, StyleForm, StyleInput, StyleTextarea, StyleButton, StyleFieldset } from "../../layout/StyleForm";

const schema = yup.object().shape({
	hotel_name: yup.string().required("Please enter a hotel name"),
	hotel_description: yup.string().required("Please enter a hotel description"),
});

export default function AddHotels() {
	const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);

	const navigate = useNavigate();
	const http = useAxios();

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
	});

	async function onSubmit(data) {
		setSubmitting(true);
		setServerError(null);
		
		data.status = "publish";

		console.log(data);

		const addHotels = {
			status: "publish",
			hotel_name: data.hotel_name,
			hotel_description: data.hotel_description,
		}

		try {
			const response = await http.post("wp/v2/hotel", addHotels);
			console.log("response:", response.data);
			navigate("/dashboard/hotels");
		} catch (error) {
			console.log("error", error);
			setServerError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<DashboardPage>
			<ContainerForm>
				<ContainerHeader>
			        <Heading content="Add hotel" />
			    </ContainerHeader>
			<StyleForm onSubmit={handleSubmit(onSubmit)}>
				{serverError && <FormError>{serverError}</FormError>}
				<StyleFieldset disabled={submitting}>
					<div>
						<p>Hotel name:</p>
						<StyleInput name="hotel_name" placeholder="hotel name..." {...register("hotel_name")} />
						{errors.hotel_name && <FormError>{errors.hotel_name?.message}</FormError>}
					</div>

					<div>
						<p>Hotel description:</p>
						<StyleTextarea name="hotel_description" placeholder="hotel description..." rows="7" {...register("hotel_description")} />
					</div>

					<StyleButton>{submitting ? "Submitting..." : "Submit"}</StyleButton>
				</StyleFieldset>
			</StyleForm>
			</ContainerForm>
		</DashboardPage>
	);
}
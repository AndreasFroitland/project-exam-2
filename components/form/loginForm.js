import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "./formError";
import { FORM_URL, TOKEN_PATH } from "../../constants/api";
import AuthContext from "./authContext";

const url = FORM_URL + TOKEN_PATH;

const schema = yup.object().shape({
	username: yup.string().required("Please enter your username"),
	password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);

	const history = useHistory();

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	const [auth, setAuth] = useContext(AuthContext);

	async function onSubmit(data) {
	  setSubmitting(true);
	  setLoginError(null);

		try {
		    const response = await axios.post(url, data);
		    console.log("response", response.data);
		    setAuth(response.data);
		    history.push("/admin");
		} catch (error) {
		    console.log("error", error);
		    setLoginError(error.toString());
		} finally {
		    setSubmitting(false);
		}
	}

	return (
	  <>
		<form onSubmit={handleSubmit(onSubmit)}>
		  {loginError && <FormError>{loginError}</FormError>}
			<fieldset disabled={submitting}>
			  <div>
				<input placeholder="Username" {...register("username", { required: true })} />
				{errors?.username && <FormError>{errors.username.message}</FormError>}
			  </div>
			  <div>
				<input placeholder="Password" {...register("password", { required: true })} type="password" />
				{errors?.password && <FormError>{errors.password.message}</FormError>}
			  </div>
				<button>{submitting ? "Loggin in..." : "Login"}</button>
			</fieldset>
		</form>
	  </>
	);
}
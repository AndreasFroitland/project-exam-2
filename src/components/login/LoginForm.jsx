import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import AuthContext from "../../context/AuthContext";
import { ContainerForm, StyleForm, StyleFieldset, StyleInput, StyleButton } from "../layout/styles/StyleForm";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
	username: yup.string().required("Please enter your username"),
	password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);

	const navigate = useNavigate();

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	const [, setAuth] = useContext(AuthContext);

	async function onSubmit(data) {
		setSubmitting(true);
		setLoginError(null);

		try {
			const response = await axios.post(url, data);
			console.log("response", response.data);
			setAuth(response.data);
			navigate("/dashboard");
		} catch (error) {
			console.log("error", error);
			setLoginError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
        <>
		  <ContainerForm>
            <StyleForm onSubmit={handleSubmit(onSubmit)}>
              {loginError && <FormError>{loginError}</FormError>}
              <StyleFieldset disabled={submitting}>
                <div>
				  <p>Username:</p>
                  <StyleInput placeholder="username..." {...register("username", { required: true })} />
                  {errors?.username && <FormError>{errors.username.message}</FormError>}
                </div>

                <div>
				  <p>Password:</p>
                  <StyleInput placeholder="password..." {...register("password", { required: true })} type="password" />
                  {errors?.password && <FormError>{errors.password.message}</FormError>}
                </div>
                  <StyleButton>{submitting ? "Loggin in..." : "Login"}</StyleButton>
              </StyleFieldset>
            </StyleForm>
		  </ContainerForm>
        </>
      );
  }
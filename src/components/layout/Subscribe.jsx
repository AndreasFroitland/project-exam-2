import { ContainerSubscribe } from "./styles/StyleSubscribe";

function Subscribe() {
	return (
		<ContainerSubscribe>
            <form>
                <p>Sign up and get the best deals sent to you</p>
                <input type="text" id="email" name="email" placeholder="your e-mail..." />
                <button>Submit</button>
            </form>
		</ContainerSubscribe>
	);
}

export default Subscribe;
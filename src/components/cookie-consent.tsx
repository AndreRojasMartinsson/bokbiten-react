import { useCallback, useState } from "react";
import Button from "./button";

export default function CookieConsent() {
	const [show, setShow] = useState<boolean>(() => {
		if (window.localStorage === undefined) return false;

		return !window.localStorage.getItem("cookie_consent");
	});

	const handleClick = useCallback(() => {
		setShow(false);
		window.localStorage.setItem("cookie_consent", "true");
	}, [setShow]);

	return (
		<div
			className="cookie__consent"
			style={{ display: show ? "block" : "none" }}
		>
			<h5 className="cookie__title">We value your privacy</h5>
			<p className="cookie__text">
				We use cookies to enhance your browsing experience, serve personalized
				ads or content, and analyze our traffic. By clicking "Accept All", you
				consent to our use of cookies.
			</p>
			<div className="cookie__buttons">
				<Button onClick={() => handleClick()} intent="secondary">
					Accept All
				</Button>
				<Button onClick={() => handleClick()} intent="primary">
					Reject All
				</Button>
			</div>
		</div>
	);
}

import "./Alert.css";

export const Alert = ({ variant, outlined, elevated, children }) => {
  const classNames = ["alert", variant];

  if (outlined) {
		classNames.push("is-outlined");
	}

  if (elevated) {
		classNames.push("is-elevated");
	}

  return <p className={classNames.join(" ")}>{children}</p>;
};
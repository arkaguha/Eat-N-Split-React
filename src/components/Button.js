function Button({ children, buttonName, onclick }) {
  return (
    <button
      style={{
        color: "black",
        background: "rgb(255, 153, 0)",
        borderRadius: "6px",
      }}
      onClick={onclick}
    >
      {buttonName}
      {children}
    </button>
  );
}

export default Button;

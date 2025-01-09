const Button: React.FC<{ children: React.ReactNode; link: string, color?: "white" }> = (
	props
) => {
	return (
		<div className="button_background">
			<a className={"button " + props.color} href={props.link} target="_blank">
				{props.children}
			</a>
		</div>
	)
}

export default Button

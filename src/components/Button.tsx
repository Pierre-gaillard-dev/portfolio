const Button: React.FC<{ children: React.ReactNode; link: string, color?: "white"; target?: string}> = (
	props
) => {
	return (
		<div className="button_background">
			<a className={"button " + props.color} href={props.link} target={props.target}>
				{props.children}
			</a>
		</div>
	)
}

export default Button

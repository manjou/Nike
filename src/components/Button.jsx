const Button = ({ label, iconUrl}) => {
  return (
    <Button className="">
      {label}

      <img 
        src={iconUrl}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5"
      />
    </Button>
  )
}

export default Button

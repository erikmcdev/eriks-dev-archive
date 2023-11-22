const EyeIcon = props => {
  return (
    <svg
      width={35}
      height={35}
      className="w-5 inline-block transition-transform group-hover:rotate-[20deg]"
      viewBox="0 0 40 40"
      fill="none"
      {...props}
    >
      <image
        href="/images/eye_icon.png"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
      />
    </svg>
  )
}

export default EyeIcon

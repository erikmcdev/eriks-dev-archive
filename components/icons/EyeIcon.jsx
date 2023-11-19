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
      {/* Replace the path elements with an image element */}
      <image
        href="/images/eye_icon.png" // Replace with the actual path to your image
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
      />

      {/* Other elements (if needed) can be added here */}
    </svg>
  )
}

export default EyeIcon

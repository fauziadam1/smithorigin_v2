const Logo = ({ className, ...props }) => (
  <svg
    className={className} 
    {...props}
    width="100%" 
    height="100%"
    viewBox="0 0 347 408"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="151.5"
      y="134.579"
      width="44"
      height="141"
      rx="22"
      fill="currentColor" 
    />
    <path
      d="M0.5 222.579V305.079L172.5 406.579L346.5 305.579V230.579L247.5 172.579V279.579L172.5 322.579L0.5 222.579Z"
      fill="currentColor"
      stroke="currentColor"
    />
    <path
      d="M346.5 184.579V102.079L174.5 0.579346L0.5 101.579V176.579L99.5 234.579V127.579L174.5 84.5793L346.5 184.579Z"
      fill="currentColor"
      stroke="currentColor" 
    />
  </svg>
);

export default Logo;

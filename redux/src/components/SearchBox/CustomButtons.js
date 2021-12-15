import './Style.css';
export const CustomButtons = ({ className, action, text }) => {
  return (
    <button className={className} onClick={action}>
      {text}
    </button>
  );
};
export default CustomButtons;

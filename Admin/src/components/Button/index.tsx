import './style.css';
type TButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ type = 'button', className, children, onClick, ...props }: TButton) => {
  return (
    <button className={`original-btn ${className}`} type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

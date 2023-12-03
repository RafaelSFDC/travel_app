import Image from "next/image";
type ButtonProps = {
  type: "button" | "submit" | "reset";
  title: string;
  icon?: string;
  variant:
    | "btn_dark_green"
    | "btn_light_green"
    | "btn_dark_orange"
    | "btn_light_orange";
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="regular-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;

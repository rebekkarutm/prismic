import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

type ButtonProps = {
    link: LinkField | null | undefined;
    label: string;
}

const Button = ({link, label}: ButtonProps) => {
    return (
        <button style={{width:'24px', height:'24px', background:'black', color:'white'}}>
            <PrismicNextLink field={link}>{label}</PrismicNextLink>
        </button>
    )
}

export default Button
import identitystyles from "./identity.module.scss";
import CardProfileContext from "@/app/context/cardProfileContext";
import { useContext } from "react";

type IdentityType = {
  icon?: string;
  img?: string;
  title: string;
  alt: string;
  text?: string;
  id?: number;
  name?: string;
};

export default function Identity({
  icon,
  img,
  title,
  text,
  alt,
  id,
  name,
}: IdentityType) {
  const { documentImage, setDocumentImage }: any =
    useContext(CardProfileContext);

  const handleDocumentImage = (e: any) => {
    setDocumentImage({ ...documentImage, [e.target.name]: e.target.files[0] });
  };

  return (
    <article className={identitystyles.inputFiles}>
      {icon && <img src={icon} alt={alt} />}
      <h3>{title}</h3>
      {text && <p className={identitystyles.inputFiles__text}>{text}</p>}
      {img && <img className={identitystyles.selfie__icon} src={img} />}
      <label>
        <input
          type="file"
          required
          accept="image/*"
          name={name}
          onChange={(e) => handleDocumentImage(e)}
        />
      </label>
    </article>
  );
}

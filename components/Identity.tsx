import identitystyles from "./identity.module.scss";

type IdentityType = {
  icon?: string;
  img?: string;
  title: string;
  alt: string;
  text?: string;
};

export default function Identity({
  icon,
  img,
  title,
  text,
  alt,
}: IdentityType) {
  return (
    <article className={identitystyles.inputFiles}>
      {icon && <img src={icon} alt={alt} />}
      <h3>{title}</h3>
      {text && <p className={identitystyles.inputFiles__text}>{text}</p>}
      {img && <img className={identitystyles.selfie__icon} src={img} />}
      <label>
        <input type="file" required accept="image/*" />
      </label>
    </article>
  );
}

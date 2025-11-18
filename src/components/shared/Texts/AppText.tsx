type TextType =
  | "title_xxl"
  | "title_xl"
  | "title_lg"
  | "title"
  | "title_sm"
  | "p_lg"
  | "p";

interface WTextProps {
  type?: TextType;
  text: string;
  otherStyle?: string;
}

export default function AppText({ type = "p", text, otherStyle = "" }: WTextProps) {
  if (type === "title_xxl") {
    return (
      <p className={`lg:text-title_xxl font-bold xsm:text-title_lg md:text-title_xl ${otherStyle}`}>
        {text}
      </p>
    );
  }

  if (type === "title_xl") {
    return (
      <p className={`md:text-title_xl font-bold xsm:text-title_lg ${otherStyle}`}>
        {text}
      </p>
    );
  }

  if (type === "title_lg") {
    return (
      <p className={`md:text-title_lg font-bold xsm:text-title ${otherStyle}`}>
        {text}
      </p>
    );
  }

  if (type === "title") {
    return (
      <p className={`md:text-title xsm:text-title_sm font-bold ${otherStyle}`}>
        {text}
      </p>
    );
  }

  if (type === "title_sm") {
    return (
      <p className={`xsm:text-title_sm font-bold ${otherStyle}`}>
        {text}
      </p>
    );
  }

  if (type === "p_lg") {
    return (
      <p className={`xsm:text-p_lg font-regular ${otherStyle}`}>
        {text}
      </p>
    );
  }

  return <p className={`text-p font-regular ${otherStyle}`}>{text}</p>;
}

import style from "./Aside.module.css";
import { AiFillLinkedin } from "react-icons/ai";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { IoIosMail } from "react-icons/io";

const Aside = () => {
  return (
    <div className={style.container}>
      <a
        title="Github"
        className={style.a}
        href="https://github.com/Jaider-Nieto"
        target="_blanck"
      >
        <VscGithub className={style.icon} />
      </a>

      <a
        title="Gmail"
        className={style.a}
        href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsTNGfLrBXqxDgDSCWNbSPfZrwRNXNxwzxHHMmtdDhmtMvNRlcghZCHMtlCnXWWlXjzQkMVV"
        target="_blanck"
      >
        <IoIosMail className={style.icon} />
      </a>

      <a
        title="Linkedin"
        className={style.a}
        href="https://www.linkedin.com/in/jaider-nieto-588567238/"
        target="_blanck"
      >
        <AiFillLinkedin className={style.icon} />
      </a>

      <a
        title="Whatsapp"
        className={style.a}
        href="https://wa.me/+573245255370?text=Buen%20día"
        target="_blanck"
      >
        <FaSquareWhatsapp className={style.icon} />
      </a>
    </div>
  );
};

export default Aside;

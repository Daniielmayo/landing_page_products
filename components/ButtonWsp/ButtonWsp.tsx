import React from "react";
import { Button } from "@nextui-org/react";
import { WspIcon } from "../icons/Home/WspIcon";
import styles from "./ButtonWsp.module.css";
import Link from "next/link";

export default function ButtonWsp() {
  return (
    <Link
      className="flex gap-4 w-[250px] items-center"
      href="https://wa.me/17376109586?text=Hola!,%20quiero%20m%C3%A1s%20informaci%C3%B3n."
      target="_blank"
    >
      <Button className={styles.buttonWhatsApp} endContent={<WspIcon />}>
        Escríbeme
      </Button>
    </Link>
  );
}

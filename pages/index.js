import Head from "next/head";
import Image from "next/image";
import { components } from "react-select";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/navbar/Navbar";
export default function Home() {
  return (
    <>
      <h1>My test page</h1>
      <p>There should be a nav bar above, the sub menu should be hidden</p>
    </>
  );
}

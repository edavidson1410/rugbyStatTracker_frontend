import Image from "next/image";
import styles from "./page.module.css";
import AppBar from '../components/AppBar';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <main className={styles.main}>
      <AppBar/>
      <Typography>Rugby Stats</Typography>
    </main>
  );
}

//import Head from 'next/head'
import {useRouter} from "next/router"
//import styles from '../styles/Home.module.css'

export default function Restaurant() {
  const router = useRouter()
  return (
    <div>
      <h1>Dynamic Restaurant page {router.query.restaurant}</h1>
    </div>
  );
}
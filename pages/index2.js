//  in 28.13 this magically moved from beign under restaurants to being under pages, so I moved it.
import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
    // hard coding an array of rest. l8r we will connect to db 
    const restaurants = [
        {name:"WoodsHill"},
        {name:"Fiorellas"},
        {name:"Karma"}
    ];
    return (
        <div>
            <Head>
                <title>Restaurants</title>
            </Head>

            <h1>Restaurant List</h1>
            {/* these few lines are done differently in 28.13, similar to what Chat GPT was suggesting */}
            {restaurants.map( item => {
                return <div>
                    <Link as={"/restaurants/" + item.name} href="restaurants/[restaurant]">
                        <a>{item.name}</a>
                    </Link>
                </div>
            })}
            <br />


            {/* Dynamic link to the contact page */}
            <hr />
            <h5>
                <Link href="/contact">
                    <a>Contact Us</a>
                </Link>
            </h5>

            {/* Dynamic link to the privacy policy page */}
            <h5>
                <Link href="/privacy">
                    <a>View our Privacy Policy</a>
                </Link>
            </h5>
        </div>
  );
};


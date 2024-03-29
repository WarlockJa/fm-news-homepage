import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import styles from "./page.module.scss";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            <Content />
        </main>
    );
}

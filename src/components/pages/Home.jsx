import styles from "./Home.module.css"
import mockBooks from "../../mocks/mock"
import CarouselLivros from "../layout/CarouselPrincipal"
import CarouselBooksHome from "../layout/CarouselBooksHome"



function Home() {
    const top5 = [...mockBooks]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5)

    return (
        <div className={styles.container}>
            <section className={styles.carousel_principal}>
                <CarouselLivros livros={mockBooks} />
            </section>

            <div className={styles.sub_container}>
                <div className={styles.mid_carousel}>
                    <section className={styles.descubra_carousel}>
                        <CarouselBooksHome titulo="Descubra Novos Mundos" livros={mockBooks} />
                    </section>
                    <section className={styles.nacional_carousel}>
                        <CarouselBooksHome titulo="Obras nacionais" livros={mockBooks} />
                    </section>
                </div>

                <div className={styles.top_cinco}>
                    <h2>Top 5 muito bem avaliados</h2>
                    <div className={styles.livros}>
                        {top5.map((livro, index) => (
                            <div
                                className={styles.livro}
                                key={index}
                            >
                                {/* index + 1 pra enumerar de 1 a 5 */}
                                <span className={`${styles.numero} ${index < 3 ? styles.top3 : ""}`}>
                                    {index + 1}.
                                </span>{" "}
                                <span>{livro.title} <span className={styles.rating}>⭐{livro.rating}</span></span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home 
import { useParams, useNavigate } from "react-router-dom";
import styles from "./BookPage.module.css";
import mockBooks from "../../mocks/mock";
import save from "../../assets/images/save.png";

function BookPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const book = mockBooks.find(b => b.id === id);


    if (!book) {
        return <h1>Livro não encontrado</h1>;
    }

    return (
        <div className={styles.container}>
            <button className={styles.voltar} onClick={() => navigate(-1)}>⬅ Voltar</button>

            <div className={styles.conteudo}>
                <div className={styles.info_top}>
                    <div className={styles.imagem}>
                        <img src={book.imageUrl} alt={book.title} />
                    </div>
                    <div className={styles.info_top_side}>
                        <h1 className={styles.titulo}>{book.title}</h1>
                        <h2 className={styles.autor}>{book.author}</h2>
                        <p className={styles.shortInfo}>{book.shortInfo}</p>
                        <p className={styles.avaliacao}> ⭐ {book.rating}</p>
                        <div className={styles.save_image}>
                            <img src={save}/>
                            <p>Adicionar a sua biblioteca</p>
                        </div>

                    </div>
                </div>

                <div className={styles.info_down}>
                    <div className={styles.info_down_left}>
                        <h2>Descrição</h2>
                        <p>{book.description}</p>
                    </div>

                    <div className={styles.info_down_right}>
                        <div className={styles.info_down_right_i}>
                            <h2>Editores</h2>
                            <p className={styles.texto}>{book.editors}</p>
                        </div>

                        <div className={styles.info_down_right_i}>
                            <h2>Linguagem</h2>
                            <p className={styles.texto}>{book.language}</p>
                        </div>

                        <div className={styles.info_down_right_i}>
                            <h2>Brochura</h2>
                            <p className={styles.texto}>{book.brochure}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookPage;

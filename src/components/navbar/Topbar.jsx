import Input from "../form/input";
import UserProfile from "../layout/UserProfile";
import styles from "./Topbar.module.css";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import mockBooks from "../../mocks/mock";

function Topbar({ usuario }) {
    const { register, handleSubmit, watch } = useForm();
    const [sugestoes, setSugestoes] = useState([]);

    const nomeLivro = watch("nomeLivro");

    const onSearch = (data) => {
        console.log("Pesquisar por:", data.nomeLivro);
    };

    useEffect(() => {
        if (nomeLivro) {
            const resultados = mockBooks.filter((livro) =>
                livro.title.toLowerCase().includes(nomeLivro.toLowerCase())
            );
            setSugestoes(resultados);
        } else {
            setSugestoes([]);
        }
    }, [nomeLivro]);

    // Preenche o input quando clicar na sugestão
    const handleSelect = (titulo) => {
        setSugestoes([]);
        // Opcional: preencher o input diretamente
        document.querySelector('input[name="nomeLivro"]').value = titulo;
    };

    return (
        <nav className={styles.container}>
           <div className={styles.container_esquerda}>
                 {/*<div className={styles.logo}>
                    <img src={logo} alt="Logo" />
                </div> */}
                <form onSubmit={handleSubmit(onSearch)}>
                    <Input
                        registerProps={register("nomeLivro")}
                        placeholder="Digite o nome de um livro"
                    />
                    {sugestoes.length > 0 && (
                        <ul className={styles.sugestoes}>
                            {sugestoes.map((livro, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSelect(livro.title)}
                                >
                                    {livro.title}
                                </li>
                            ))}
                        </ul>
                    )}
                </form>
            </div>

            <div className={styles.user_info}>
                <UserProfile
                    nome={usuario?.nome}
                    fotoUrl={usuario?.fotoUrl}
                />
            </div>
        </nav>
    );
}

export default Topbar;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./CarouselPrincipal.module.css";
import { Link } from "react-router-dom";

function CarouselLivros({ livros }) {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation]} //Setinhas
        navigation //MOstra os botões de navegação
        spaceBetween={20} //espaço entre slides
        slidesPerView={1} //Qauntos slides aparece ao msm tempo
        loop
        className={styles.swiper}
      >
        {livros.map((livro, index) => ( //Cada livro
          <SwiperSlide key={index} className={styles.slide}>
            <Link to={`/book/${livro.id}`} className={styles.card}>
              <img
                src={livro.imageUrl || "https://via.placeholder.com/120x160"}
                alt={livro.title}
                className={styles.image}
              /> 
            </Link>

            <div className={styles.livro_info}>
                <h1>{livro.title}</h1>
                <h2>{livro.author}</h2>
                <h3>{livro.pagesNumber} páginas</h3>
                <p>{livro.shortInfo}</p>
                <div className={styles.rating}>
                    <p>⭐ {livro.rating}</p>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarouselLivros;

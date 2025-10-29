import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./CarouselBooksHome.module.css";
import { Link } from "react-router-dom";


function CarouselBooksHome({ livros, titulo }) {
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <h2 className={styles.title}>{titulo}</h2>

                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={8}
                    slidesPerView={3}
                    loop={false}
                    className={styles.swiper}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {livros.map((livro, index) => (
                        <SwiperSlide key={livro.id} className={styles.slide}>
                            <Link to={`/book/${livro.id}`} className={styles.card}>
                                <img
                                    src={livro.imageUrl || "https://via.placeholder.com/120x160"}
                                    alt={livro.title}
                                    className={styles.image}
                                />
                                <h4>{livro.title}</h4>
                            </Link>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default CarouselBooksHome;

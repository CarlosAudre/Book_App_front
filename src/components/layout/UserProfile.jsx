import React from "react";
import defaultUser from "../../assets/images/default-user.png"; // importa a imagem
import styles from "./UserProfile.module.css"

function UserProfile({ nome = "Usuário", fotoUrl }) {
  return (
    <div className={styles.container}>
      <img
        src={fotoUrl || defaultUser} // fallback seguro
        alt={nome}
        className={styles.imagem}
      />
      <span className={styles.nome}>{nome}</span>
    </div>
  );
}

export default UserProfile;

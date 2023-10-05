import React from 'react';
import styles from './CardProject.module.css';

const CardProject = () => {
  return (
    <div className={`${styles.postcard} ${styles.dark} ${styles.blue}`}>
      <a className={styles.postcard__img_link} href="#">
        <img className={styles.postcard__img} src="https://picsum.photos/1000/1000" alt="Image Title" />
      </a>
      <div className={styles.postcard__text}>
        <h1 className={`${styles.postcard__title} ${styles.blue}`}>
          <a href="#">Podcast Title</a>
        </h1>
        <div className={styles.postcard__subtitle}>
          <h2 className={styles.postcard__subtitle_title}>
            Python
          </h2>
        </div>
        <div className={styles.postcard__bar}></div>
        <div className={styles.postcard__preview_txt}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!
        </div>
        <ul className={styles.postcard__tagbox}>
          <li className={styles.tag__item}><i className={`fas fa-tag ${styles['mr-2']}`}></i>Projeto</li>
          <li className={`${styles.tag__item} ${styles.play} ${styles.blue}`}>
            <a href="#"><i className={`fas fa-play ${styles['mr-2']}`}></i>Saiba Mais</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardProject;

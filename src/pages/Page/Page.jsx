import React from "react";
import { useParams } from "react-router-dom";
import classes from "./Page.module.css";

const about = [
    {
        id: 1,
        src: "https://i.pinimg.com/564x/1b/db/fa/1bdbfac2d0fc15e94a1e024ac0286af8.jpg",
        title: "Photoshop - Web Design",
        price: "$290",
        description: "Celebrate success right, the only way, apple. To succeed you must believe, you will succeed.",
    },
    {
        id: 2,
        src: "https://i.pinimg.com/564x/02/52/e3/0252e3a3282f752ab9c0e97400eb7778.jpg",
        title: "Sketch - Mobile App",
        price: "$170",
        description: "Celebrate success right, the only way, apple. To succeed you must believe, you will succeed.",
    },
    {
        id: 3,
        src: "https://i.pinimg.com/564x/14/fc/d1/14fcd189633936157ee354b6a092169d.jpg",
        title: "Corel - Fashion Design",
        price: "$290",
        description: "Celebrate success right, the only way, apple. To succeed you must believe, you will succeed.",
    }
];

const Page = () => {
    const { id } = useParams();
    const image = about.find((img) => +img.id === +id);
    return (
        <div>
            <div className={classes.HEAD}>
                <img className={classes.PHOTO} src="https://i.pinimg.com/564x/00/84/07/008407f5664700f45a2ee62687039368.jpg" alt="" />
                <div className={classes.description}>
                    <h1>COURSES GRID 3 COLUMS</h1>
                    <p>Home  {'>'}  Courses Grid</p>
                </div>
            </div>
            <div>
                <h1 className={classes.text}> UI-UX WEB Design, Graphic Design</h1>
                <div className={classes.info}>
                    {<img className={classes.man} src="https://i.pinimg.com/564x/16/2c/ab/162cab53399f5ed588011e0161ec8724.jpg" alt="" />}
                    <div>
                        <p>Keny White</p>
                        <p className={classes.work}>Teacher</p>
                    </div>
                    <div>
                        <p>Photoshop</p>
                        <p className={classes.work}>Category</p>
                    </div>
                    <div>
                        <div className={classes.rating}>
                            <img className={classes.star} src="https://previews.123rf.com/images/barks/barks1712/barks171200372/92093475-%D0%BF%D1%8F%D1%82%D0%B8%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4%D0%BE%D1%87%D0%BD%D1%8B%D0%B9-%D1%80%D0%B5%D0%B9%D1%82%D0%B8%D0%BD%D0%B3-4-5.jpg" alt="" />
                            <p>25 Reviews</p>
                        </div>
                        <p className={classes.work}>Reviews</p>
                    </div>
                </div>
                <img className={classes.picture} src={image.src} alt="" />
            </div>
        </div>
    );
};

export default Page;

import React from "react";
import { Link } from "react-router-dom";
import classes from "./styles.module.css";

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
const Home = () => {
    return (
        <div className={classes.images}>
            {about.map((image) => (
                <div className={classes.img_con}>
                    <Link to={`/image/${image.id}`}>
                        <img src={image.src} alt="" />
                    </Link>
                    <div className={classes.img_detail}>
                        <p>{image.title}</p>
                        <div className={classes.rating}>
                            <img className={classes.star} src="https://previews.123rf.com/images/barks/barks1712/barks171200372/92093475-%D0%BF%D1%8F%D1%82%D0%B8%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4%D0%BE%D1%87%D0%BD%D1%8B%D0%B9-%D1%80%D0%B5%D0%B9%D1%82%D0%B8%D0%BD%D0%B3-4-5.jpg" alt="" />
                            <p>25 Reviews</p>
                        </div>
                        <p className={classes.price}>{image.price}</p>
                        <p>{image.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
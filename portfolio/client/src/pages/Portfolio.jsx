import React, {useContext, useEffect} from 'react';
import {Col, Row} from "react-bootstrap";
import {AnimatePresence, motion} from "framer-motion";

import {useNavigate} from "react-router";
import {WORK_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchWorks} from "../http/portfolioAPI";


const Portfolio = observer(() => {
    const navigate = useNavigate()
    const {work} = useContext(Context)

    useEffect(() => {
        fetchWorks().then(data=>work.setWorks(data.rows))
    }, [])

    return (
        <AnimatePresence>
            <motion.section
                initial={{ y:10, opacity: 0 }}
                animate={{y:0, opacity: 1 }}
                exit={{y:10, opacity: 0 }}
                className="portfolio mx-auto px-5 px-sm-4 px-md-0" style={{maxWidth: 576}}>

                <div className="portfolio__category d-flex flex-column justify-content-start align-items-start my-5">
                    <h1 className="mb-2 h-auto w-auto pb-1">Web</h1>
                    <div className="d-flex flex-wrap flex-row justify-content-between row-cols-1 row g-2 row-cols-sm-2 mb-5">
                        {
                            work.works.map(work =>
                                <motion.div onClick={() => navigate(WORK_ROUTE + '/' + work.id)}
                                            key={work.id}
                                            style={{cursor:"pointer"}}
                                            initial={{ opacity: 0, x:100 }}
                                            whileInView={{ opacity: 1, x:0 }}
                                            viewport={{ once: true }}
                                            whileHover={{scale:1.025}}

                                            className="portfolio__work h-100 d-flex flex-column justify-content-center align-items-center">
                                    <img className="portfolio__work_image mb-2" src={process.env.REACT_APP_API_URL + work.thumbnail}/>
                                    <h1 className="portfolio__work_name text-center mb-2">{work.name}</h1>
                                    <p className="portfolio__work_description">{work.smallDescription}</p>
                                </motion.div>
                            )
                        }
                    </div>
                </div>
            </motion.section>
        </AnimatePresence>
    );
});

export default Portfolio;
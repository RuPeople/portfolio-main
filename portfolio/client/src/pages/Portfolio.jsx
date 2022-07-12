import React from 'react';
import {Col, ListGroup, Row} from "react-bootstrap";

import work_img1 from '../static/Work1.png'
import work_img2 from '../static/Work2.svg'
import work_img3 from '../static/Work3.svg'
import work_img4 from '../static/Work4.svg'
import work_img5 from '../static/Work5.svg'
import {AnimatePresence, motion} from "framer-motion";

import {useNavigate} from "react-router";
import {WORK_ROUTE} from "../utils/consts";
const Portfolio = () => {
    const navigate = useNavigate()
    return (
        <AnimatePresence>
            <motion.section
                initial={{ y:10, opacity: 0 }}
                animate={{y:0, opacity: 1 }}
                exit={{y:10, opacity: 0 }}
                className="portfolio mx-auto px-5 px-sm-4 px-md-0" style={{maxWidth: 576}}>

                <div className="portfolio__category d-flex flex-column justify-content-start align-items-start my-5">
                    <h1 className="mb-2 h-auto w-auto pb-1">Web</h1>
                    <Row className="d-flex flex-row justify-content-between g-2 w-100 row-cols-1 row-cols-sm-2 mb-5">
                        <motion.div onClick={() => navigate(WORK_ROUTE + '/' + 1)}
                                    style={{cursor:"pointer"}}
                                    initial={{ opacity: 0, x:100 }}
                                    whileInView={{ opacity: 1, x:0 }}
                                    viewport={{ once: true }}

                             className="portfolio__work d-flex flex-column justify-content-center align-items-center mb-3">
                            <img className="w-100 mb-2" src={work_img1}/>
                            <h1 className="text-center mb-2">Sprint</h1>
                            <p>An online store of goods for fishing from outdoor activities</p>
                        </motion.div>
                        <motion.div onClick={() => navigate(WORK_ROUTE + '/' + 1)}
                                    style={{cursor:"pointer"}}
                                    initial={{ opacity: 0, x:100 }}
                                    whileInView={{ opacity: 1, x:0 }}
                                    viewport={{ once: true }}

                             className="portfolio__work d-flex flex-column justify-content-center align-items-center mb-3">
                            <img className="w-100 mb-2" src={work_img2}/>
                            <h1 className="text-center mb-2">Truckstore</h1>
                            <p>An pat-project of Online truck store with constructor</p>
                        </motion.div>
                        <motion.div onClick={() => navigate(WORK_ROUTE + '/' + 1)}
                                    style={{cursor:"pointer"}}
                                    initial={{ opacity: 0, x:100 }}
                                    whileInView={{ opacity: 1, x:0 }}
                                    viewport={{ once: true }}

                             className="portfolio__work d-flex flex-column justify-content-center align-items-center mb-3">
                            <img className="w-100 mb-2" src={work_img3}/>
                            <h1 className="text-center mb-2">Sprint</h1>
                            <p>An online store of goods for fishing from outdoor activities</p>
                        </motion.div>
                        <motion.div onClick={() => navigate(WORK_ROUTE + '/' + 1)}
                                    style={{cursor:"pointer"}}
                                    initial={{ opacity: 0, x:100 }}
                                    whileInView={{ opacity: 1, x:0 }}
                                    viewport={{ once: true }}

                             className="portfolio__work d-flex flex-column justify-content-center align-items-center mb-3">
                            <img className="w-100 mb-2" src={work_img4}/>
                            <h1 className="text-center mb-2">Truckstore</h1>
                            <p>An pat-project of Online truck store with constructor</p>
                        </motion.div>
                    </Row>
                    <h1 className="mb-2 h-auto w-auto pb-1">Unity</h1>
                    <Row className="d-flex flex-row justify-content-between g-2 w-100 row-cols-1 row-cols-sm-2 mb-5">
                        <Col className="portfolio__work d-flex flex-column justify-content-center align-items-center mb-3">
                            <img className="w-100 mb-2" src={work_img5}/>
                            <h1 className="text-center mb-2">Sprint</h1>
                            <p>An online store of goods for fishing from outdoor activities</p>
                        </Col>
                    </Row>
                </div>
            </motion.section>
        </AnimatePresence>
    );
};

export default Portfolio;
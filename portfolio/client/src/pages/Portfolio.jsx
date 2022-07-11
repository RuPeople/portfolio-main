import React from 'react';
import {Col, ListGroup, Row} from "react-bootstrap";

import work_img1 from '../static/Work1.png'
import work_img2 from '../static/Work2.svg'
import work_img3 from '../static/Work3.svg'
import work_img4 from '../static/Work4.svg'
import work_img5 from '../static/Work5.svg'

const Portfolio = () => {
    return (
        <section className="portfolio mx-auto px-5 px-sm-0" style={{maxWidth: 576}}>
            <div className="portfolio__category d-flex flex-column justify-content-start align-items-start my-5">
                <h1 className="mb-2 h-auto w-auto pb-1">Web</h1>
                <Row className="d-flex flex-row justify-content-between g-2 w-100 row-cols-1 row-cols-sm-2 mb-5">
                    <Col className="portfolio__work d-flex flex-column justify-content-center align-items-center mb-3">
                        <img className="w-100 mb-2" src={work_img1}/>
                        <h1 className="text-center mb-2">Sprint</h1>
                        <p>An online store of goods for fishing from outdoor activities</p>
                    </Col>
                    <Col className="portfolio__work d-flex flex-column justify-content-center align-items-center mb-3">
                        <img className="w-100 mb-2" src={work_img2}/>
                        <h1 className="text-center mb-2">Truckstore</h1>
                        <p>An pat-project of Online truck store with constructor</p>
                    </Col>
                    <Col className="portfolio__work d-flex flex-column justify-content-center align-items-center mb-3">
                        <img className="w-100 mb-2" src={work_img3}/>
                        <h1 className="text-center mb-2">Sprint</h1>
                        <p>An online store of goods for fishing from outdoor activities</p>
                    </Col>
                    <Col className="portfolio__work d-flex flex-column justify-content-center align-items-center mb-3">
                        <img className="w-100 mb-2" src={work_img4}/>
                        <h1 className="text-center mb-2">Truckstore</h1>
                        <p>An pat-project of Online truck store with constructor</p>
                    </Col>
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
        </section>
    );
};

export default Portfolio;
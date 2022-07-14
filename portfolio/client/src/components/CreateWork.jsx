import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../index";
import work from "../pages/Work";
import {createWork, fetchCategories} from "../http/portfolioAPI";
import {observer} from "mobx-react-lite";

const CreateWork = observer(({show, onHide}) => {
    const {work} = useContext(Context)

    const [name, setName] = useState('')
    const [smallDescription, setSmallDescription] = useState('')
    const [thumbnail, setThumbnail] = useState(null)
    const [bigDescription, setBigDescription] = useState('')
    const [website, setWebsite] = useState('')
    const [stack, setStack] = useState('')
    const [year, setYear] = useState(0)

    const [image, setImage] = useState([])

    useEffect(() => {
        fetchCategories().then(data=>work.setCategories(data))
    }, [])

    const selectFile = e => {
        setThumbnail(e.target.files[0])
    }

    const addImage = () => {
        setImage([...image, {img: '', number: Date.now()}])
    }
    const removeImage = (number) => {
        setImage(image.filter(i => i.number !== number))
    }

    const changeImage = (key, image, number) => {
        setImage(image.map(i => i.number === number ? {...i, [key]:value}:i))
    }

    const addWork = () => {
        const formData = new FormData()
        formData.append('name',name)
        formData.append('smallDescription',smallDescription)
        formData.append('thumbnail', thumbnail)
        formData.append('bigDescription',bigDescription)
        formData.append('website',website)
        formData.append('stack',stack)
        formData.append('year',year)
        formData.append('image',JSON.stringify(image))
        createWork(formData).then(data => onHide())

    }


    return (
        <Modal
            show={show}
            onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Create work</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>
                            {/*{work.selectedCategory.name || "Pick category"}*/}

                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                work.categories.map(category =>
                                <Dropdown.Item key={category.id} onClick={()=> work.setSelectedCategory(category)} >
                                    {category.name}
                                </Dropdown.Item>
                                )
                            }
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Control
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        className="my-2"
                    />
                    <Form.Control
                        value={smallDescription}
                        onChange={(e) => setSmallDescription(e.target.value)}
                        placeholder="Small Description"
                        className="my-2"
                    />
                    <Form.Control
                        placeholder="Thumbnail"
                        type="file"
                        className="my-2"
                        onChange={selectFile}
                    />
                    <Form.Control
                        value={bigDescription}
                        onChange={(e) => setBigDescription(e.target.value)}
                        placeholder="Big Description"
                        className="my-2"
                    />
                    <Form.Control
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="Website"
                        className="my-2"
                    />
                    <Form.Control
                        value={stack}
                        onChange={(e) => setStack(e.target.value)}
                        placeholder="Stack"
                        className="my-2"
                    />
                    <Form.Control
                        value={year}
                        onChange={(e) => setYear(Number(e.target.value))}
                        placeholder="Year"
                        type="number"
                        className="my-2"
                    />

                    <Button onClick={addImage}>
                        Add new Image
                    </Button>
                    {image.map(i =>
                        <Row key={i.number} className="my-2">
                            <Col className="col-9">
                                <Form.Control
                                    value={i.image}
                                    onChange={(e) => changeImage('img',e.target.value, i.number)}
                                    placeholder="image"
                                    type="file"
                                />
                            </Col>
                            <Col>
                                <Button onClick={() => removeImage(i.number)}>Delete</Button>
                            </Col>
                        </Row>
                    )}

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={addWork} >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateWork;
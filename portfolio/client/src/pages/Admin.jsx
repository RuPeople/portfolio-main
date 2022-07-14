import React, {useContext, useState} from 'react';
import {Button, Card} from "react-bootstrap";
import CreateWork from "../components/CreateWork";
import {Context} from "../index";
import CreateCategory from "../components/CreateCategory";

const Admin = () => {
    const [workVisible, setWorkVisible] = useState(false)
    const [categoryVisible, setCategoryVisible] = useState(false)

    const work = useContext(Context)

    return (
        <Card style={{width: 300}} className="text-white mx-auto p-2">
            <Button onClick={() => setWorkVisible(true)} className="my-2">
                Add Work
            </Button>
            <Button onClick={() => setCategoryVisible(true)} className="my-2">
                Add Category
            </Button>
            <CreateWork show={workVisible} onHide={() => setWorkVisible(false) } />
            <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false) } />
        </Card>
    );
};

export default Admin;
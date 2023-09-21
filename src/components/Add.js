import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

const Add=()=>{
    const dispatch = useDispatch();

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [content, setContent] = useState('')

    const handle = (e)=>{
        e.preventDefault();
        dispatch({
            type: "Add-Post", // Dispatch the action type expected by your reducer
            payload: { title, category, content} ,
        });
    };

    return(
        <div>
            <ToastContainer/>
            <h4 className="text-secondary">Add New Blog</h4>
            <Form onSubmit={(handle)}>
                <FormGroup >
                    <Label for ="title">Title</Label>
                    <Input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} id = "title" placeholder="Enter a title" />
                </FormGroup>
                <FormGroup >
                    <Label for ="category">Category</Label>
                    <Input type="text" onChange={(e)=>setCategory(e.target.value)} value={category} id = "category" placeholder="Enter category" />
                </FormGroup>
                <FormGroup >
                    <Label for ="content">Content</Label>
                    <Input type="textarea" onChange={(e)=>setContent(e.target.value)} value={content} id = "content" placeholder="Enter content" />
                </FormGroup>

                <Button type="submit" className="btn-secondary mx-2" >Add</Button>
                <Button type="button" className="btn-secondary me-2" onClick={() => {setTitle(""); setCategory(""); setContent("");}}>Clear
                </Button>

                <Link tag ="a" to ="/">
                    <Button className="btn-secondary">Back</Button>
                </Link>

            </Form>
        </div>
    );
}
export default Add;

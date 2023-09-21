import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";


function Edit(){

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch();
    const { id } = useParams();



    const handle = (e)=>{
        e.preventDefault();
        dispatch({
            type: "Edit-Post", // Dispatch the action type expected by your reducer
            payload: { title, category, content, index: parseInt(id),} ,
        });
    };

    return(
        <div>
            <h4 className="text-secondary">
                Edit Blog
            </h4>
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
                <Button type="submit" className="btn-secondary mx-2" >Edit</Button>
                <Button type="reset" className="btn-secondary me-2">Clear</Button>
                
                <Link tag ="a" to ={`/details/${id}`}>
                    <Button className="btn-secondary">Back</Button>
                </Link>
            </Form>
        </div>
    );
}
export default Edit;
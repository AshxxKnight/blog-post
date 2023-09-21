import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardText, CardTitle } from "reactstrap";

const Details=()=>{
    const dispatch = useDispatch();
    
    const counter = useSelector((state)=>state.counter);
    const count = useSelector((state)=>state.count);
    const data = useSelector((state) => state.data);

    const dataArray = Object.values(data);

    const { id } = useParams();
    //console.log(id);

    return (
        <div>
            
            <Link tag ="a" to ="/view">
                <Button className="btn-secondary">Back</Button>
            </Link>
            <Card className="my-2">
                
                <CardBody>
                    <CardTitle tag="h4">
                        {dataArray[0][id].title}
                    </CardTitle>
                    <CardText>
                        {dataArray[0][id].category}
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                            {dataArray[0][id].content}
                        </small>
                    </CardText>
                </CardBody>

                <CardFooter>
                    <Link tag ="a" to ={`/edit/${id}`}>
                        <Button className='me-2'>
                        <img src="https://img.icons8.com/material-outlined/25/000000/edit.png" alt="edit" />
                        </Button>
                    </Link>
                    
                    <Button className='me-2' onClick={()=>{
                        dispatch({type:"Delete",payload:id});
                    }}>
                    <img src="https://img.icons8.com/material-outlined/25/000000/delete.png"  alt="delete"/>
                    </Button>
                    
                    <Button className='me-2 text-black ' onClick={()=>{dispatch({type:"Like"})}}>
                        <span className='me-2 black' style={{ fontWeight: 'bold' }}>{counter}</span>
                        <img src="https://img.icons8.com/material-outlined/25/000000/facebook-like.png" alt="like"/>
                    </Button>
                    
                    <Button onClick={()=>{
                        dispatch({type:"Dislike"});
                    }}>
                        <span className='me-2 text-black' style={{ fontWeight: 'bold' }}>{count}</span>
                        <img style={{ transform: "scaleY(-1) scaleX(-1)" }} alt='count' src="https://img.icons8.com/material-outlined/25/000000/facebook-like.png"/>
                    </Button>

                </CardFooter>
            </Card>

        </div>
    )
}
export default Details;
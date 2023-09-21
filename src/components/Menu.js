import { Link } from "react-router-dom";
import { Card, ListGroup } from "reactstrap";

const Menu=()=>{
    return(
        <div>
            
            <ListGroup>
                <Card className="mb-1">
                <Link className="list-group-item list-group-item-action text-center" tag="a" to="/" >Home</Link>
                </Card>
                <Card className="mb-1">
                <Link className="list-group-item list-group-item-action text-center" tag="a" to="/add" >Add</Link>
                </Card>
                <Card>
                <Link className="list-group-item list-group-item-action text-center" tag="a" to="/view" >View</Link>
                </Card>
            </ListGroup>

        </div>
    );
}
export default Menu ;
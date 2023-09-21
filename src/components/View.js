import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Col, Row } from "reactstrap";

const View = () => {
    const data = useSelector((state) => state.data);
    const dataArray = Object.values(data);

    return (
        <div>
            <Row>
                {dataArray[0].length > 0 ? (
                dataArray[0].map((post, index) => (
                    <Col key={index} xs="12" sm="6" md="4">
                        <Card className="my-2" style={{ width: '18rem' }}>
                            <CardHeader>
                                <br/>
                            </CardHeader>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {post.title}
                                </CardTitle>
                                <CardText>
                                    {post.category}
                                </CardText>
                                <Link tag="a" to={`/details/${index}`}>
                                    <Button className="btn-secondary">Details</Button>
                                </Link>
                            </CardBody>
                            <CardFooter>
                                <br/>
                            </CardFooter>
                        </Card>
                    </Col>
                ))):(<div className="text-center">
                <p>No Post Available</p>
            </div>)}
            </Row>
        </div>
    );
}

export default View;

import React from "react";
import { Card } from "reactstrap";

function Header(){
    return (
        <div >
            <Card className="bg-secondary my-3 mx-5">
            <h2 className = "mt-2 text-center">BLOG POST APP</h2>
            <h6 className="text-center ">Where reading is fun</h6>
            </Card>
        </div>
    );
}
export default Header;
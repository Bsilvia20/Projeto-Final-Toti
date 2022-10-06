import { Button } from "bootstrap";
import React from "react";

class Buttons extends React.Component {
    constructor(){
    super();

    this.state = {
        carros: []
        }
    }

    componentDidMount() {
        this.peticionGet();
    }
}
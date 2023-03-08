import { createElement } from "react";
import { useState } from 'react';
import classNames from "classnames";
import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/ContainerPrint.css";

export default function ContainerPrint({ ClassName }) {

    const [className, setClassName] = useState("");


    const printContainerContents = () => {
        const containerContents = document.querySelector(`.${ClassName}`).innerHTML;
        const newWindow = window.open();
        newWindow.document.write(`<html><body>${containerContents}</body></html>`);
        newWindow.print();
    }

    return <img src={"https://docs.mendix.com/icons/print-text.svg"} onClick={printContainerContents}></img>

}

import React from "react";
import Aux from "../../hoc/Auxillary";
import Classes from "./Review.module.scss";
import { FaQuoteRight, FaAngleRight, FaAngleLeft } from "react-icons/fa";
function Review(props) {
    const { image, name, job, text } = props.view;
    // const { click } = props.click;
    let classes = `card shadow rounded ${Classes.Review}`;
    return (
        <Aux>
            <div className={classes}>
                <img src={image} className="card-img-top" alt={name} />
                <div className={Classes.Bg}></div>
                <span className={Classes.Quote}>
                    <FaQuoteRight />
                </span>
                <div className="card-body p-0">
                    <h5 className="card-title text-capitalize">{name}</h5>
                    <h6 className="card-title text-uppercase">{job}</h6>
                    <p className="card-text text-muted">{text}</p>
                </div>
                <div>
                    <span onClick={props.prevClick} className={Classes.Left}>
                        <FaAngleLeft />
                    </span>
                    <span onClick={props.nextClick} className={Classes.Right}>
                        <FaAngleRight />
                    </span>
                </div>
                <button
                    onClick={props.random}
                    type="button"
                    className="btn btn-primary text-capitalize"
                >
                    surprise me
                </button>
            </div>
        </Aux>
    );
}

export default Review;

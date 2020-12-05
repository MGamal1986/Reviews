import React, { useState, useEffect } from "react";
import Review from "../Review/Review";
import Aux from "../../hoc/Auxillary";

function Reviews({ views }) {
    const [index, setIndex] = useState(0);

    // check index of views array to be between [min:0 , max: views.length]
    const checkIndex = (index) => {
        if (index > views.length - 1) {
            return 0;
        } else if (index < 0) {
            return views.length - 1;
        } else {
            return index;
        }
    };
    // increase index by 1 to change review (next review)
    const nextReview = () => {
        setIndex((prevIndex) => {
            let newIndex = prevIndex + 1;
            return checkIndex(newIndex);
        });
    };
    // decrease index by 1 to change review (previous review)
    const prevReview = () => {
        setIndex((prevIndex) => {
            let newIndex = prevIndex - 1;
            return checkIndex(newIndex);
        });
    };

    // get random number between 0 and views length min:0 , max:views.length
    const getRandom = () => {
        return Math.floor(Math.random() * views.length);
    };

    // get random review and exclude dublicated
    const randomIndex = () => {
        let randomIndex = getRandom();
        if (index === randomIndex) {
            randomIndex = index + 1;
        }
        setIndex(checkIndex(randomIndex));
    };

    return (
        <Aux>
            <Review
                view={views[index]}
                nextClick={nextReview}
                prevClick={prevReview}
                random={randomIndex}
            />
        </Aux>
    );
}
export default Reviews;

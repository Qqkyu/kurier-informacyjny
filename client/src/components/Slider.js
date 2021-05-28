/* React */
import React from "react";

/* Material UI */
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const marks = [
    {
        value: 0,
        label: "lewica",
    },
    {
        value: 50,
        label: "centrum",
    },
    {
        value: 100,
        label: "prawica",
    },
];

function valuetext(value) {
    switch (value) {
        case 0:
            return "lewica";
        case 50:
            return "centrum";
        case 100:
            return "prawica";
        default:
            return "centrum";
    }
}

/**
 *
 * @param {function} setValue
 */
function BeliefsSlider({ setValue }) {
    return (
        <div className="w-full">
            <Typography
                className="text-center font-bold"
                id="discrete-slider-restrict"
                gutterBottom
            >
                Poglądy polityczne
            </Typography>
            <Slider
                track={false}
                defaultValue={50}
                getAriaValueText={valuetext}
                aria-labelledby="track-false-slider"
                step={null}
                marks={marks}
                onChange={(e, val) => setValue(val)}
            />
        </div>
    );
}

export default BeliefsSlider;

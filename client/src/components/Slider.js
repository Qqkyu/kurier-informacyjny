import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const marks = [
    {
        value: 0,
        label: "left",
    },
    {
        value: 50,
        label: "center",
    },
    {
        value: 100,
        label: "right",
    },
];

function valuetext(value) {
    switch (value) {
        case 0:
            return "left";
        case 50:
            return "center";
        case 100:
            return "right";
        default:
            return "center";
    }
}

function BeliefsSlider() {
    return (
        <div className="w-full">
            <Typography
                className="text-center font-bold"
                id="discrete-slider-restrict"
                gutterBottom
            >
                Political Views
            </Typography>
            <Slider
                track={false}
                defaultValue={50}
                getAriaValueText={valuetext}
                aria-labelledby="track-false-slider"
                step={null}
                marks={marks}
            />
        </div>
    );
}

export default BeliefsSlider;

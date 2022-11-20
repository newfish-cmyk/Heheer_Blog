import React from "react";

import Header from "../components/Header";
import Photo from "../components/Photo"

export default function Photos() {
    return (
        <div>
            <Header />
            <div className="text-white text-4xl">
                <div>
                    <Photo />
                </div>
            </div>
        </div>
    )
}
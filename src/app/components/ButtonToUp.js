"use client"

import Image from "next/image";

export default function ButtonToUp() {

    return (
        <div className="button-up" onClick={() => { window.scrollTo(0, 0); }}>
            <img src="/icon-arrow.png" alt="up" />
        </div>
    )
}
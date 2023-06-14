import Link from "next/link";
import Image from "next/image";
import { styled } from "styled-components";

export default function NavLogo(props) {
    return (
        <Link href="/" >
            <Image className="logo" width={50} height={50} src="https://i.pinimg.com/564x/94/d9/40/94d940b8c8025686e6cc444821301628.jpg" alt="logo" />
        </Link>
    );
}
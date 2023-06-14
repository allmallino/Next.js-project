import Link from "next/link";

export default function NavButton(props) {
    return (
        <Link className="nav-link" href={props.href}>
            {props.children}
        </Link>
    );
}
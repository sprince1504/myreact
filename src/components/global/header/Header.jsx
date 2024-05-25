import './header.css';

export default function Header ({title}) {
    return (
    <li>
        <a href={title}>{title}</a>
        </li>
    );
}
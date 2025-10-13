import Link from "next/link"

export default function Header(){
    const navigation = [
        { id: 1, name: "Main", href: "/main" }
    ]
    return (
        <>

            <ul>
                {navigation.map(({ id, name, href }) => (
                    <li key={id}>
                        <Link className="text-3xl" href={href}>{name}</Link>
                    </li>))}
            </ul>
        </>
    )
}
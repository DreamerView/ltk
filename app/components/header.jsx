import Link from "next/link";

const HeaderModule = () => {
    return(
        <header>
            <div className="headerBlock">
                <div className="logo">
                    <img src="/images/logo.svg" alt="" />
                </div>
                <nav>
                    <ul>
                        <li><Link href="/">Example 1</Link></li>
                        <li><Link href="/">Example 2</Link></li>
                        <li><Link href="/about">Example 3</Link></li>
                        <li><Link href="/about">Example 4</Link></li>
                        <li><Link href="/about">Example 5</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default HeaderModule;
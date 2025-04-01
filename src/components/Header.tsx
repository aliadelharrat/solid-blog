import { A } from "@solidjs/router";

const Header = () => {
  const links = [
    { href: "/", text: "Home" },
    { href: "/blog", text: "Blog" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
    { href: "/admin", text: "Admin Dashboard" },
  ];
  return (
    <header class="flex gap-10">
      <A href="/">Solid Blog</A>

      <nav>
        <ul class="flex gap-10">
          {links.map((l) => (
            <li>
              <A href={l.href} activeClass="text-sky-500" end={true}>
                {l.text}
              </A>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

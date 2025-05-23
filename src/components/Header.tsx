import { A } from "@solidjs/router";

const Header = () => {
  const links = [
    { href: "/blog", text: "المواضيع النشطة" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
    { href: "/admin", text: "Admin Dashboard" },
  ];
  return (
    <header>
      <A href="/" class="space-y-2 block border-b py-5 mb-5">
        <h1 class="text-2xl font-bold">منتديات الأمل</h1>
        <p class="text-sm text-zinc-500">مجتمع نشط لمشاركة و نقاش الأفكار</p>
      </A>
    </header>
  );
};

export default Header;

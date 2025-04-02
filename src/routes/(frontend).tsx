import Footer from "~/components/Footer";
import Header from "~/components/Header";

const FrontendLayout = (props: { children: ChildNode }) => {
  return (
    <section class="container flex flex-col min-h-dvh">
      <Header />
      <main class="flex-1">{props.children}</main>
      <Footer />
    </section>
  );
};

export default FrontendLayout;

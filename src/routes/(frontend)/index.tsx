import Forum from "~/components/frontend/categories/Forum";
import Header from "~/components/frontend/categories/Header";
import { categories } from "~/lib/mock-data/forums";

export default function Home() {
  return (
    <main class="space-y-5">
      {categories.map((category) => (
        <section class="space-y-1 bg-zinc-50 p-2 rounded">
          <Header categoryName={category.name} />

          <div class="space-y-3">
            {category.forums.map((forum) => (
              <Forum {...forum} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

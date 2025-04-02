import { mock_data } from "~/lib/mock-data/forums";

export default function Home() {
  return (
    <main class="space-y-5">
      {mock_data.map((category) => (
        <section class="space-y-1 bg-zinc-50 p-2 rounded">
          <header class="grid grid-cols-12 gap-2 p-2">
            <p class="col-span-4">{category.name}</p>
            <div class="text-center">المواضيع</div>
            <div class="text-center">الردود</div>
            <p class="col-span-2">آخر رد</p>
            {/* <p>المراقب</p> */}
            {/* <p>نائبه</p> */}
            <p class="col-span-3">المشرفون</p>
          </header>

          <div class="space-y-3">
            {category.forums.map((forum) => (
              <div class="grid grid-cols-12 gap-2 p-2 border bg-white rounded">
                <div class="col-span-4 flex gap-4 items-center">
                  <div class="aspect-square overflow-hidden size-10 rounded-full">
                    <img
                      src={forum.photo}
                      alt={forum.name}
                      class="size-full object-cover"
                    />
                  </div>
                  <div class="space-y-1">
                    <p>{forum.name}</p>
                    <p class="text-xs text-zinc-500">{forum.description}</p>
                  </div>
                </div>
                <div class="text-center grid place-items-center">
                  {forum.stats.topics}
                </div>
                <div class="text-center grid place-items-center">
                  {forum.stats.replies}
                </div>
                <p class="col-span-2 flex flex-col gap-y-1">
                  <span>{forum.last_reply.date}</span>
                  <span>{forum.last_reply.by}</span>
                </p>
                {/* <p>{category.supervisor}</p> */}
                {/* <p>{category.vice_supervisor}</p> */}
                <p class="col-span-3 gap-2">
                  {forum.moderators.map((mod) => (
                    <span>{mod}</span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

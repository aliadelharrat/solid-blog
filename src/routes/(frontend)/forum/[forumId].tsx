import { useParams } from "@solidjs/router";
import { topics } from "~/lib/mock-data/forums";

const ForumPage = () => {
  const { forumId } = useParams();
  return (
    <section class="space-y-2">
      <header class="grid grid-cols-12 bg-zinc-50">
        <p class="col-span-6">topic</p>
        <p class="col-span-2">author and date</p>
        <p>replies</p>
        <p>views</p>
        <p class="col-span-2">last reply</p>
      </header>

      <div class="space-y-2">
        {topics.map((topic) => (
          <article class="grid grid-cols-12">
            <p class="col-span-6">{topic.title}</p>
            <p class="col-span-2 flex flex-col gap-2">
              <span>{topic.author.name}</span>
              <span>{topic.author.date}</span>
            </p>
            <p>{topic.replies}</p>
            <p>{topic.views}</p>
            <p class="col-span-2 flex flex-col gap-2">
              <span>{topic.last_reply.by}</span>
              <span>{topic.last_reply.date}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ForumPage;

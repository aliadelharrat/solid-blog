import { useParams } from "@solidjs/router";
import { BsStar } from "solid-icons/bs";
import { FiStar } from "solid-icons/fi";
import { SiTarget } from "solid-icons/si";
import { For, Show } from "solid-js";

const author = {
  name: "ItsAdel",
  photo:
    "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1385&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  postsNumber: 35,
  descriptions: ["عضو فريق العمل", "مطور Go"],
  daysSinceJoining: 45,
  pointsOfDistinction: 345,
};

const TopicPage = () => {
  const { topicId } = useParams();
  return (
    <section class="container flex justify-between gap-10">
      <aside class="max-w-32 bg-sky-50">
        <div>
          <h2>{author.name}</h2>

          <div class="grid grid-cols-4 gap-y-1">
            <FiStar class="fill-current text-green-700" />
            <FiStar class="fill-current text-green-700" />
            <FiStar class="fill-current text-green-700" />
            <FiStar class="fill-current text-green-700" />
            <FiStar class="fill-current text-green-700" />
            <FiStar class="fill-current text-green-700" />
          </div>

          <div>
            <img src={author.photo} alt={author.name} />
          </div>

          <Show when={author.descriptions.length > 0}>
            <div>
              <For each={author.descriptions}>{(desc) => <p>{desc}</p>}</For>
            </div>
          </Show>

          <div>
            <p class="flex gap-1">
              <span>{author.postsNumber}</span>
              <span>مشاركة</span>
            </p>

            <p class="flex gap-1">
              <span>{author.pointsOfDistinction}</span>
              <span>نقطة تميز</span>
            </p>

            <p class="flex gap-1">
              <span>الأيام منذ الإنضمام:</span>
              <span>{author.daysSinceJoining}</span>
            </p>
          </div>
        </div>
      </aside>
      <article class="flex-1 bg-gray-50">Article</article>
    </section>
  );
};

export default TopicPage;

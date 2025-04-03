import { For } from "solid-js";

const Moderators = ({ moderators }: { moderators: string[] }) => {
  return (
    <p class="col-span-3 gap-2">
      <For each={moderators}>{(mod) => <span>{mod}</span>}</For>
    </p>
  );
};

export default Moderators;

import { A } from "@solidjs/router";

type ForumInfoProps = {
  photo: string;
  name: string;
  description: string;
};

const ForumInfo = (props: ForumInfoProps) => {
  const { photo, name, description } = props;
  return (
    <A href="/forum/1" class="col-span-4 flex gap-4 items-center">
      <div class="aspect-square overflow-hidden size-10 rounded-full">
        <img src={photo} alt={name} class="size-full object-cover" />
      </div>
      <div class="space-y-1">
        <p>{name}</p>
        <p class="text-xs text-zinc-500">{description}</p>
      </div>
    </A>
  );
};

export default ForumInfo;

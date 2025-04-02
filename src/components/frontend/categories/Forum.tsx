import ForumInfo from "./ForumInfo";
import Moderators from "./Moderators";

type ForumProps = {
  photo: string;
  name: string;
  description: string;
  stats: {
    topics: number;
    replies: number;
  };
  last_reply: {
    by: string;
    date: string;
  };
  moderators: string[];
};

const Forum = (props: ForumProps) => {
  const { name, description, last_reply, photo, moderators, stats } = props;
  return (
    <div class="grid grid-cols-12 gap-2 p-2 border bg-white rounded">
      <ForumInfo name={name} photo={photo} description={description} />

      <div class="text-center grid place-items-center">{stats.topics}</div>
      <div class="text-center grid place-items-center">{stats.replies}</div>
      <p class="col-span-2 flex flex-col gap-y-1">
        <span>{last_reply.date}</span>
        <span>{last_reply.by}</span>
      </p>
      {/* <p>{category.supervisor}</p> */}
      {/* <p>{category.vice_supervisor}</p> */}

      <Moderators moderators={moderators} />
    </div>
  );
};

export default Forum;

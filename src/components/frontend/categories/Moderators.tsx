type ModeratorsProps = {
  moderators: string[];
};

const Moderators = (props: ModeratorsProps) => {
  const { moderators } = props;
  return (
    <p class="col-span-3 gap-2">
      {moderators.map((mod) => (
        <span>{mod}</span>
      ))}
    </p>
  );
};

export default Moderators;

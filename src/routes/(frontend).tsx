const FrontendLayout = (props: { children: ChildNode }) => {
  return (
    <div>
      <span>frontend layout :</span>
      {props.children}
    </div>
  );
};

export default FrontendLayout;

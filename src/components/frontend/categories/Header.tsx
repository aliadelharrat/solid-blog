const Header = ({ categoryName }: { categoryName: string }) => {
  return (
    <header class="grid grid-cols-12 gap-2 p-2">
      <p class="col-span-4">{categoryName}</p>
      <div class="text-center">المواضيع</div>
      <div class="text-center">الردود</div>
      <p class="col-span-2">آخر رد</p>
      {/* <p>المراقب</p> */}
      {/* <p>نائبه</p> */}
      <p class="col-span-3">المشرفون</p>
    </header>
  );
};

export default Header;

import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <header>
      <div onClick={() => router.push("/")}>home</div>
      <div onClick={() => router.push("/blog")}>blog</div>
      <div onClick={() => router.push("/album")}>album</div>
    </header>
  );
};

export default Header;

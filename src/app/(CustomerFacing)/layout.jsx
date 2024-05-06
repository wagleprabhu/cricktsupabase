import Image from "next/image";

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}) {
  return (
    <>
      <div className="container m-0 p-1">{children}</div>
      <Image
        src={"/generalAssets/footer.jpeg"}
        width={0}
        height={0}
        sizes="100vw"
        style={{width: "100%", height: "auto"}}
        alt=""
      ></Image>
    </>
  );
}

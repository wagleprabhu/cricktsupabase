import Header from "../../_components/Header";


export default function BookingLayout({
  children,
}) {
  return (
    <>
      <Header></Header>
      <div className="container m-0 p-0">{children}</div>      
    </>
  );
}

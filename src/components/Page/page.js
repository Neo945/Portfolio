import "./page.css";
export default function Page(params) {
  return (
    <div id={params.id} className={"page"}>
      <params.component />
    </div>
  );
}

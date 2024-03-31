const name = ["Gautam","Hari", "Sita"];
function displayMessage() {
  return "Wow!";
}
function Hello({object}) {
  return (
    <div>
      <h1>{object.message} {object.name} with an id {object.id}</h1>
    </div>
  );
}
export default Hello;

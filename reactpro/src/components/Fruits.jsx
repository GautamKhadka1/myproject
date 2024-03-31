//.map() function in js helps us to loop through every element in array
// eg: const price= [10,20,30,40];
// const discount= price.map(x=>price*0.3)
// document.write(discount); this will loop through array and perform
//following operation to each element
export default function Fruits() {
  const fruits = ["Apple", "Orange", "Banana", "Mango"];
  return (
    <div>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </div>
  );
}

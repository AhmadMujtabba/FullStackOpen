const Total = ({ sum }) => {
const arr=sum.map(n=>n.exercises)
 let s=0
 for(let i=0;i<arr.length;i++)
 {
    s=arr[i]+s
 }
 return(
    <b><p>Total exercises {s}</p></b>
 )
}

export default Total
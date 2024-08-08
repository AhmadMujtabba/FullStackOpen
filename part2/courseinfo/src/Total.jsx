const Total = ({ sum }) => {
const total=sum.map(n=>n.exercises)
const x=total.reduce((s,curr)=>{
s=s+curr
return s
},0)
return <b><p>Total exercises {x}</p></b>
}
export default Total
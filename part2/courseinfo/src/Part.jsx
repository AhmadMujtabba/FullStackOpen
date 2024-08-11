const Part = ({ partsreftopart }) =>
{
return(
partsreftopart.map((data,i)=>{
  return <p key={i}>{data.name}{data.exercises}</p>
})
)
}
export default Part
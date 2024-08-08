import Part from "./Part"
const Content = ({ partsref }) => {
  const arr = partsref
  return (
    arr.map((n,i)=><Part partsreftopart={n} key={i}/>)
  )
}
export default Content
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
const Course = ({course}) => {
return (
course.map((coursedata,index)=>{
    return (
    <div key={index}>
    <Header title={coursedata.name}/>
    <Content partsref={coursedata.parts}/>
    <Total sum={coursedata.parts}/>
    </div>
    )
})
)
}
export default Course
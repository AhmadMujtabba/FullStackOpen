const Notification=({message,status})=>
{
    if(message===null && status===null)
    {
        return null
    }
    return(
        <div className={status}>
            <p>{message}</p>
        </div>
    )
}
export default Notification
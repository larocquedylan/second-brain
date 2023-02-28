export default function Comment({username, time, children}) {
    return (
        <>
        <p> {username} commented at {time}</p>
        {children}
        </>
    )
}
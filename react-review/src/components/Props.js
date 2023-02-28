export default function Props() {
    const type = "text";

    const props = {
        id: "input",
        type: "text",
        maxLength: "3",
    }

    return (
        <div>
            <label htmlFor="input"> input</label>
            <input id="input" type="text" maxLength="3" />
            <input id="input" type={type} maxLength="3" />
            <input {...props} placeholder="user" style={{
                backgroundColor: "red",
                fontSize: 20,
            }}/>

        </div>
    );
}

import {useState} from "react"

function Login({onLogin}) {
    const [email, setEmail] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://127.0.0.1:3001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        })
        .then((resp) => resp.json())
        .then((user) => console.log(user))
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login
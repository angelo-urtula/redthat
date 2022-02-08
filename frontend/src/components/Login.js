import {useState} from "react"

function Login({onLogin}) {
    const [email, setEmail] = useState("")

    function handleLogin(e) {
        e.preventDefault()
        fetch("http://localhost:9292/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        })
        .then((resp) => resp.json())
        .then((user) => onLogin(user))
    }
    return (
        <form onSubmit={handleLogin}>
            <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login
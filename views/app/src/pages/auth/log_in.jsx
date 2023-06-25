export default function LogIn(props) {
    const submitForm = (e) => {
        e.preventDefault();
    };
    fetch("/api/v1/helloworld")
        .then((v) => v.json())
        .then((v) => console.log(v));
    const vertical = "m-auto flex flex-col";
    const input_div = "bg-black text-white w-[90%]";
    return (
        <div id="login_form" className="h-full">
            <form>
                <h1>Log in</h1>
                <input type="email" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Next</button>
                <a href="/forgot_password">Forgot your password?</a>
            </form>
        </div>
    );
}

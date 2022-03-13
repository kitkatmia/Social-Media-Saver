import { useEffect } from "react";
const Loading = () => {

    var excuses = ['Loading content', 'Signing you in', 'Prettifying everything']

    useEffect(() => {
        const timeout = setTimeout(() => {console.log('Hi')
        }, 3000);
    }, []);

    function wait(ms) {
        var start = new Date().getTime();
        var end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
        return 'Hi'
    }
    var i = 0;
    var renew = setInterval(function () {
        document.getElementById("exc").textContent = 'Hi';
    }, 10000);


    // setInterval(function () {
    //     document.getElementById("image").style.visibility = hidden ? "visible" : "hidden";
    //     hidden = !hidden;
    // }, 5000);

    
    return (
        <>
            <div onLoad={renew}>
                <center >
                    <img id='image' src='https://flevix.com/wp-content/uploads/2019/07/Curve-Loading.gif' alt='loading icon'></img>
                </center>
            </div>
        </>
    )
}

export default Loading

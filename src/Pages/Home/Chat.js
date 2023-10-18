import React, { Component } from 'react'
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
export class Chat extends Component {

    componentDidMount() {

        (function (d, m) {
            var kommunicateSettings =
                { "appId": "14865e938d4b5c1eeb1c16973bb3c1835", "popupWidget": true, "automaticChatOpenOnNavigation": true };
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }

    render() {
        return (
            <div className="flex justify-center py-3 text-zinc-700">
                <a href="https://www.facebook.com/" target="_blank"><FaFacebook size="1.5rem" className="mr-5 cursor-pointer text-blue-400 text-xl" /></a>
                <a href="https://www.youtube.com/" target="_blank"><FaYoutube size="1.5rem" className="mr-5 cursor-pointer text-red-600 text-xl" /></a>
                <a href="https://www.twitter.com/" target="_blank"><FaTwitter size="1.5rem" className="mr-5 cursor-pointer text-sky-500 text-xl" /></a>
                <a href="https://www.linkedin.com/" target="_blank"><FaLinkedin size="1.5rem" className="mr-5 cursor-pointer text-blue-500 text-xl" /></a>
                <a href="https://www.instagram.com/" target="_blank"><BsInstagram size="1.5rem" className="cursor-pointer text-red-500 text-xl" /></a>
            </div>
        )
    }
}

export default Chat
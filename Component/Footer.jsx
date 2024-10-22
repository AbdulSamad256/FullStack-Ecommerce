import { FacebookOutlined, GithubOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from "@ant-design/icons";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <h1 className="font-mono text-xl md:text-2xl text-center md:text-left mb-4 md:mb-0">All Rights Reserved</h1>
                <div className="flex gap-6 justify-center md:justify-end">
                    <a href="" target="_blank" rel="noreferrer">
                        <FacebookOutlined className="text-gray-700 hover:text-blue-600 transition duration-300" style={{ fontSize: 30 }} />
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                        <InstagramOutlined className="text-gray-700 hover:text-pink-500 transition duration-300" style={{ fontSize: 30 }} />
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                        <TwitterOutlined className="text-gray-700 hover:text-blue-400 transition duration-300" style={{ fontSize: 30 }} />
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                        <YoutubeOutlined className="text-gray-700 hover:text-red-600 transition duration-300" style={{ fontSize: 30 }} />
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                        <GithubOutlined className="text-gray-700 hover:text-gray-900 transition duration-300" style={{ fontSize: 30 }} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

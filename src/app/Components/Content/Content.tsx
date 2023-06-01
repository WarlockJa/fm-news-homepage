import Image from "next/image";
import HeroMobile from "assets/images/image-web-3-mobile.jpg";
import HeroDesktop from "assets/images/image-web-3-desktop.jpg";
import ArticleImage1 from "assets/images/image-retro-pcs.jpg";
import ArticleImage2 from "assets/images/image-top-laptops.jpg";
import ArticleImage3 from "assets/images/image-gaming-growth.jpg";
import "./content.scss";

// simulating news data fetch from an API
const NewsData = [
    {
        title: "Hydrogen vs Electric Cars",
        content: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
        title: "The Downsides of AI artistry",
        content:
            "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
        title: "Is VC Funding Drying Up?",
        content:
            "Private funding by VS firms is down 50% YOY. We take a look at what that means.",
    },
];

const ArticlesData = [
    {
        title: "Reviving Retro PCs",
        text: "What happens when old PCs are given modern upgrades?",
        image: ArticleImage1,
    },
    {
        title: "Top 10 Laptops of 2022",
        text: "Our best picks for various needs and budgets.",
        image: ArticleImage2,
    },
    {
        title: "The Growth of Gaming",
        text: "How the pandemic has sparked fresh opportunities.",
        image: ArticleImage3,
    },
];

const Content = () => {
    // news data
    const newsContent = NewsData.map((item, index) => (
        <div key={index} className="news__item">
            <h2 className="news__item--header">{item.title}</h2>
            <p className="news__item--content">{item.content}</p>
            {NewsData.length > index + 1 && (
                <div className="news__item--divider"></div>
            )}
        </div>
    ));

    //articles data
    const articlesContent = ArticlesData.map((item, index) => (
        <div key={index} className="articles__item">
            <div className="articles__item__imgWrapper">
                <Image
                    src={item.image}
                    alt="article"
                    className="articles__item--image"
                />
            </div>
            <div className="articles__item__textWrapper">
                <div className="articles__item--number">
                    {index > 9 ? index : "0".concat((index + 1).toString())}
                </div>
                <h2 className="articles__item--header">{item.title}</h2>
                <p className="articles__item--text">{item.text}</p>
            </div>
        </div>
    ));

    return (
        <div className="content" id="home">
            <section className="web3">
                <div className="web3__imgWrapper">
                    <Image
                        src={HeroMobile}
                        alt="hero"
                        className="web3__image--mobile"
                        priority
                    />
                    <Image
                        src={HeroDesktop}
                        alt="hero"
                        className="web3__image--desktop"
                        priority
                    />
                </div>
                <div className="web3__contentWrapper">
                    <h1 className="web3__contentHeader">
                        The Bright Future of Web 3.0?
                    </h1>
                    <div className="web3__contentColumn">
                        <p className="web3__contentColumn--p">
                            We dive into the next evolution of the web that
                            claims to put the power or the platforms back into
                            the hands of the people. But is it really fulfilling
                            its promise?
                        </p>
                        <button className="web3__contentColumn--button">
                            read more
                        </button>
                    </div>
                </div>
            </section>

            <section className="news">
                <h1 className="news__contentHeader">New</h1>
                {newsContent}
            </section>

            <section className="articles">{articlesContent}</section>
        </div>
    );
};

export default Content;

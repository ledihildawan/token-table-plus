import { SITE_TITLE, useDocumentTitle } from "@/hooks/use-document-title"

export default function Home() {
  useDocumentTitle(SITE_TITLE)

  return (
    <>
      <h1>Token Table Plus</h1>

      <p>
        Token Table Plus is your comprehensive gateway to the world of
        cryptocurrencies and digital tokens. This cutting-edge platform offers
        users an unparalleled experience in tracking and exploring the vast
        universe of crypto assets.
      </p>

      <p>With Token Table Plus, you can:</p>

      <ul>
        <li>
          Stay Informed: Access real-time data on thousands of cryptocurrency
          tokens, including their current prices, market capitalization, trading
          volume, and historical performance.
        </li>
        <li>
          Customized Views: Tailor your token table to your preferences. Choose
          the tokens you want to monitor and arrange them in a way that makes
          the most sense to you.
        </li>
        <li>
          Portfolio Management: Easily manage your crypto portfolio by tracking
          your holdings and their current values, all within the intuitive
          interface of Token Table Plus.
        </li>
        <li>
          Market Analysis: Dive deep into the cryptocurrency market with
          insightful charts, graphs, and historical data to make informed
          investment decisions.
        </li>
        <li>
          News and Insights: Stay updated with the latest news and trends in the
          crypto world. Token Table Plus provides curated news and expert
          insights to keep you in the know.
        </li>
        <li>
          User-Friendly: Our user-friendly design ensures that both beginners
          and experienced traders can navigate the crypto landscape
          effortlessly.
        </li>
        <li>
          Security: Your data's security is our top priority. Token Table Plus
          employs robust security measures to safeguard your information.
        </li>
      </ul>

      <p>
        Whether you're a seasoned crypto investor or just beginning your journey
        into the world of digital assets, Token Table Plus empowers you with the
        tools and information you need to make confident decisions in the
        ever-evolving crypto market. Join the growing community of crypto
        enthusiasts who rely on Token Table Plus for their cryptocurrency
        tracking needs. Explore, analyze, and excel with Token Table Plus today!
      </p>
    </>
  )
}

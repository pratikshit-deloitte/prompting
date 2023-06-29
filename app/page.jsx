import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Discover & share
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center"> AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center"> Promting is an open-source AI propmting tool for Mordern World.</p>

        {/* Feed */}
        <Feed />
    </section>
  )
}

export default Home

function Home ($container) {
    this.$container = $container;

    this.setState = () => {
        this.render();
    }

    this.render = () => {
        this.$container.innerHTML=`
            <main class="mainPage">HOME</main>
        `
    }

    this.render();
}
export default Home;

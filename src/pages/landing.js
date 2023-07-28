function Landing($container) {
    this.$container = $container;

    this.setState = () => {
        this.render();
    }

    this.render = () => {
        this.$container.innerHTML=`
            <main class="landingPage">This is landing Page</main>
        `
    }

    this.render();
}
export default Landing;

function User($container) {
    this.$container = $container;

    this.setState = () => {
        this.render();
    }

    this.render = () => {
        this.$container.innerHTML=`
            <main class="userPage">User Page</main>
        `
    }

    this.render();
}
export default User;

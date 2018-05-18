<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">TriviaApp</a>
            <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span> -->
            <!-- </button> -->
            <div  id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/chuck">Chuck</router-link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    };
</script>

<style>
</style>
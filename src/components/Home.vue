<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div id="home" :class="bgClass">
        <div class="container">
            <div class="row">
                <div class="col ">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="/"> <img :src="logo" class="img-fluid" width="170"
                                    alt="Logo"></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item jost">
                                        <a :class="'nav-link ' + colorText" href="#home" aria-current="page">Home</a>
                                    </li>
                                    <li class="nav-item jost">
                                        <a :class="'nav-link ' + colorText"
                                            @click="changeHash('#tecnologias')">Tecnologias</a>
                                    </li>
                                    <li class="nav-item jost">
                                        <a :class="'nav-link ' + colorText" @click="changeHash('#projetos')"
                                            aria-current="page">Projetos</a>
                                    </li>
                                    <li class="nav-item jost">
                                        <a :class="'nav-link ' + colorText" @click="changeHash('#sobre')">Sobre</a>
                                    </li>
                                    <li class="nav-item mt-2">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch"
                                                id="flexSwitchCheckDefault" v-model="isDarkMode">
                                        </div>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div class="row d-flex justify-content-between align-items-center" style="height: 80vh;">
                <div class="col col-lg-5 col-md-5 col-sm-12 line typing-animation" id="nomes">
                    <h1 class="jost pb-0">
                        <span id="fistName" :class="colorText">Gyderlan</span> <br> <span id="lastName"
                            class="salmaoText">Matos</span>
                    </h1>
                    <p :class="'jost pt-3 pb-3 sub ' + colorText">
                        Desenvolvedor de Sites e Aplicativos
                    </p>
                    <span class="icons">
                        <a href="https://github.com/gyderzin" target="_blank">
                            <i class="fa-brands fa-github fa-2xl mb-4" @mouseleave="changeStyle('git', 'leave', 'git')"
                                @mouseenter="changeStyle('git', 'enter', 'git')" :style="styleIconeGit" id="git"></i>
                        </a>
                    </span>
                    <span class="icons">
                        <a href="https://www.linkedin.com/in/gyderlan-matos-00274b21a/" target="_blank">
                            <i class="fa-brands fa-linkedin fa-2xl" @mouseleave="changeStyle('link', 'leave', 'link')"
                                @mouseenter="changeStyle('link', 'enter', 'link')" :style="styleIconeLinke"
                                id="link"></i>
                        </a>
                    </span>
                    <span class="icons">
                        <a href="https://wa.me/556984927592" target="_blank">
                            <i class="fa-brands fa-whatsapp fa-2xl" @mouseleave="changeStyle('wpp', 'leave', 'wpp')"
                                @mouseenter="changeStyle('wpp', 'enter', 'wpp')" :style="styleIconeWpp" id="wpp"></i>
                        </a>
                    </span>
                </div>
                <div class="col col-lg-5 col-md-5 col-sm-12 line typing-animation" id="boxFoto">
                    <img :src="fotoGyder" class="img-fluid" alt="foto_gyder" id="foto">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        atualizarHash: {
            required: true,
            type: Function
        },
        darkMode: {
            required: true,
            type: Boolean,
        },
        bgClass: {
            required: true,
            type: String
        },
        colorText: {
            required: true,
            type: String
        }
    },
    mounted() {
        this.atualizarHash(document.getElementById('home'))
    },
    created() {
        if (this.darkMode) {
            this.changeMode('dark')
        } else {
            this.changeMode('light')
        }
    },
    data() {
        return {
            logo: '',
            fotoGyder: '',
            isDarkMode: this.darkMode
        }
    },
    watch: {
        isDarkMode(newVal) {
            if (newVal == false) {
                this.changeMode('light')
            } else {
                this.changeMode('dark')
            }
            this.$emit('updateDarkMode', newVal);
        }
    },
    methods: {
        changeHash(hash) {
            this.setControleScroller()
            location.hash = hash
        },
        changeMode(mode) {
            if (mode == 'dark') {
                this.logo = '/assets/pages/logoLight.png'
                this.styleIconeGit = 'color: #F2F2F2;'
                this.styleIconeLinke = 'color: #F2F2F2;'
                this.styleIconeWpp = 'color: #F2F2F2;'
                this.fotoGyder = '/assets/pages/fotoGyder-dark.png'
            } else if (mode == 'light') {
                this.logo = '/assets/pages/logoDark.png'
                this.styleIconeGit = 'color: #222121;'
                this.styleIconeLinke = 'color: #222121;'
                this.styleIconeWpp = 'color: #222121;'
                this.fotoGyder = '/assets/pages/fotoGyder-light.png'
            }
        },
    }
}
</script>

<style lang="css" escoped>
@keyframes typing {
    from {
        width: 0;
    }
}

.nav-link:hover {
    cursor: pointer;
}

.sub {
    font-size: large;
}

#fistName {
    font-size: 75px;
    font-weight: 900;
}

#lastName {
    font-size: 75px;
    font-weight: 900;
}

.line {
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
    margin: 0 auto;
}

.typing-animation {
    opacity: 1;
    animation: typing 3s normal
}


.nav-item {
    padding-left: 20px;
}

.navbar-nav {
    padding-left: 10px;
    --bs-nav-link-hover-color: #F25D50;
}

.navbar-collapse {
    flex-grow: 0;
}

.navbar-toggler {
    background-color: #F25D50;
}

.icons {
    padding: 15px;
}

#nomes {
    margin-left: 50px;
}

#boxFoto {
    margin: auto;
}

#home {
    height: 100vh;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    #fistName {
        font-size: 50px;
    }

    #boxFoto {
        display: none;
    }

    #lastName {
        font-size: 50px;
    }

    #nomes {
        margin-left: 30px;
    }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    #fistName {
        font-size: 50px;
    }

    #boxFoto {
        display: none;
    }

    #lastName {
        font-size: 50px;
    }

}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    #fistName {
        font-size: 50px;
        font-weight: 900;
    }

    #nomes {
        margin-left: 50px;
    }

    #lastName {
        font-size: 50px;
    }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    #fistName {
        font-size: 60px;
    }

    #lastName {
        font-size: 60px;
    }

    #nomes {
        margin-left: 50px;
    }
}
</style>
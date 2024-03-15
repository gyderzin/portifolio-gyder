<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div id="sobre" :class="bgClass">
        <div class="container hidden" ref="sobre">
            <a href="#home" :style="darkMode ? 'color:#1F1F1F' : 'color:#F2F2F2'">
                <button type="link" :class="'btn btn-md hidden ' + classBtnSubir" @mouseenter="animarBTN('enter', 'iconeSubir-sobre')" @click="setControleScroller"
                    @mouseleave="animarBTN('leave', 'iconeSubir-sobre')" id="btn_subir-sobre">
                    <i class="fa-solid fa-arrow-up fa-lg" id="iconeSubir-sobre"></i>
                </button>
            </a>
            <div class="row rowSobre">
                <div
                    class="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 avatarLG justify-content-center colAvatar">
                    <v-avatar class="avatarLG" size="450" color="#F25D50">
                        <v-img alt="John" src="/assets/fotoSemBg.png"></v-img>
                    </v-avatar>
                </div>
                <div
                    class="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 avatarMD justify-content-center colAvatar">
                    <v-avatar class="avatarLG" size="300" color="#F25D50">
                        <v-img alt="John" src="/assets/fotoSemBg.png"></v-img>
                    </v-avatar>
                </div>
                <div
                    class="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 avatarSM justify-content-center colAvatar">
                    <v-avatar class="avatarLG" size="150" color="#F25D50">
                        <v-img alt="John" src="/assets/fotoSemBg.png"></v-img>
                    </v-avatar>
                </div>

                <div class="col-12 col-md-12 col-xl-6 col-xxl-6 col-lg-6  jost">
                    <h2 class="salmao pt-3 titulo">
                        Sobre mim
                    </h2>
                    <p class="textSobre">
                        Olá, me chamo Gyderlan Matos, tenho 18 anos, moro na capital do estado
                        de Rondônia e sou programador full-stack.
                    </p>
                    <p class="textSobre">
                        Comecei a estudar programação em 2020 com o básico do front-end e fui
                        aprimorando meus conhecimentos para me tornar um desenvolvedor full-stack. Atualmente estou no
                        3º período de <b>Engenharia de Software</b> pela faculdade Unopar, e buscando sempre mais
                        conhecimentos conforme as necessidades do mercado.
                    </p>
                    <p class="textSobre">
                        Tenho conhecimento e experiencia no desenvolvimento front-end e
                        back-end, API's RESTful, arquitetura MVC, aplicativos nativos, versionamento de código e
                        metodologias ágeis Scrum e Kanban.
                    </p>
                    <p class="textSobre">
                        Atualmente, busco por uma oportunidade de pôr em prática os meus
                        conhecimentos e de aprender com outros programadores. Tenho muita facilidade de trabalhar em
                        grupo e grande disposição para aprender.
                    </p>
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
        animatePage: {
            required: true,
            type: Function,
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
        this.atualizarHash(document.getElementById('sobre'))
        this.animatePage(this.$refs.sobre)
        this.animatePage(document.getElementById('btn_subir-sobre'))
    }
}
</script>

<style lang="css">
#sobre {
    height: 100vh
}

.avatarLG {
    display: flex;
}

.avatarMD {
    display: none;
}

.avatarSM {
    display: none;
}

.colAvatar {
    height: 500px;
}

.rowSobre {
    height: 90vh;
    align-items: center;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .textSobre {
        font-size: small;
    }

    .rowSobre {
        align-items: normal;
        height: auto;
    }

    .avatarLG {
        display: none;
    }

    .avatarMD {
        display: none;
    }

    .colAvatar {
        height: 150px;
    }

    .avatarSM {
        display: flex;
    }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .textSobre {
        font-size: small;
    }

    .rowSobre {
        align-items: normal;
        height: auto;
    }

    .colAvatar {
        height: 150px;
    }

    .avatarLG {
        display: none;
    }

    .avatarMD {
        display: none;
    }

    .avatarSM {
        display: flex;
    }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .avatarLG {
        display: none;
    }

    .textSobre {
        font-size: small;
    }

    .rowSobre {
        align-items: normal;
        height: auto;
    }
    .colAvatar {
        height: 300px;
    }
    
    .avatarMD {
        display: flex;
    }

    .avatarSM {
        display: none;
    }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .avatarLG {
        display: flex;
    }

    .avatarMD {
        display: none;
    }
    .colAvatar {
        height: 450px;
    }
    
    .avatarSM {
        display: none;
    }
}
</style>
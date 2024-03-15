<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div id="fullstack">
        <div class="d-flex flex-row pt-5">
            <div class="tabVertical">
                <v-tabs v-model="tab" color="#F25D50" direction="vertical">
                    <v-tab :value="'option-' + index + 1" v-for="(projeto, index) in projetos" :key="index">
                        Projeto {{ index + 1 }}
                    </v-tab>
                </v-tabs>
            </div>
            <v-window v-model="tab">
                <v-window-item :value="'option-' + index + 1" v-for="(projeto, index) in projetos" :key="index">
                    <v-card flat :color="darkMode == true ? '#222121' : '#F2F2F2'">
                        <div class="row ml-3">
                            <div class="col-12 col-lg-5 col-md-12 colTecs">
                                <h3 class="salmao jost title">{{ projeto.nome }}</h3>
                                <p class="jost paragrafo" v-for="(paragrafo, indexP) in projeto.descriçao"
                                    :key="indexP">
                                    {{ paragrafo }}
                                </p>
                                <span class="linksHorizontais">
                                    <a :href="projeto.links[0]" target="_blank" class="mr-5 pr-5">
                                        <i class="fa-brands fa-github fa-2xl mb-4"
                                            @mouseleave="changeStyle('git', 'leave', 'gitProjeto' + index)"
                                            @mouseenter="changeStyle('git', 'enter', 'gitProjeto' + index)"
                                            :style="styleIconeGit" :id="'gitProjeto' + index"></i>
                                    </a>
                                    <a :href="projeto.links[1]" target="_blank">
                                        <i class="fa-solid fa-play fa-2xl mb-4"
                                            @mouseleave="changeStyle('play', 'leave', 'playProjeto1' + index)"
                                            @mouseenter="changeStyle('play', 'enter', 'playProjeto1' + index)"
                                            :style="styleIconePlay" :id="'playProjeto1' + index"></i>
                                    </a>
                                </span>
                                <div class="linksVerticais">
                                    <div class="row d-flex">
                                        <div class="col">
                                            <a :href="projeto.links[0]" target="_blank" class="mr-5 pr-5">
                                                <i class="fa-brands fa-github fa-2xl mb-4"
                                                    @mouseleave="changeStyle('git', 'leave', 'gitProjeto2' + index)"
                                                    @mouseenter="changeStyle('git', 'enter', 'gitProjeto2' + index)"
                                                    :style="styleIconeGit" :id="'gitProjeto2' + index"></i>
                                            </a>
                                        </div>


                                        <div class="col d-flex justify-content-end">
                                            <a :href="projeto.links[1]" target="_blank">
                                        <i class="fa-solid fa-play fa-2xl mb-4"
                                            @mouseleave="changeStyle('play', 'leave', 'playProjeto2' + index)"
                                            @mouseenter="changeStyle('play', 'enter', 'playProjeto2' + index)"
                                            :style="styleIconePlay" :id="'playProjeto2' + index"></i>
                                    </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-5 col-md-12 colTecs">
                                <div class="row align-items-center h-100">
                                    <v-carousel show-arrows="hover" class="img-fluid h-100" cycle hide-delimiters
                                        interval="4000">
                                        <v-carousel-item v-for="(imagem, i) in projeto.imagens" :key="i" :src="imagem">
                                        </v-carousel-item>
                                    </v-carousel>
                                </div>

                            </div>

                        </div>
                    </v-card>
                </v-window-item>
            </v-window>
        </div>
        <div class="tabHorizontal fixed-bottom">
            <v-tabs v-model="tab" color="#F25D50" align-tabs="center" next-icon="mdi-arrow-right-bold-box-outline"
                prev-icon="mdi-arrow-left-bold-box-outline" show-arrows>
                <v-tab :value="'option-' + index + 1" v-for="(projeto, index) in projetos" :key="index">
                    Projeto {{ index + 1 }}
                </v-tab>
            </v-tabs>
        </div>

    </div>
</template>

<script>

export default {
    props: {
        darkMode: {
            required: true,
            type: Boolean,
        },
        projetos: {
            required: true,
            type: Array
        }
    },
    created() {
        if (this.darkMode) {
            this.changeMode('dark')
        } else {
            this.changeMode('light')
        }
    },
    watch: {
        darkMode() {
            if (this.darkMode) {
                this.changeMode('dark')
            } else {
                this.changeMode('light')
            }
        }
    },
    data() {
        return {
            tab: 'option-1',
            bgCard: '',
            teste: true,
        }
    },
    methods: {
        changeMode(mode) {
            if (mode == 'dark') {
                this.styleIconeGit = 'color: #F2F2F2;'
                this.styleIconePlay = 'color: #F2F2F2;'
            } else {
                this.styleIconeGit = 'color: #222121;'
                this.styleIconePlay = 'color: #222121;'
            }
        }
    }
}
</script>

<style lang="css">
.colTecs {
    height: 70vh;

}

.linksVerticais {
    display: none;
    position: fixed;
    right: 30%;
    left: 30%;
    bottom: 7%;
}

.tabHorizontal {
    display: none;
}

.bgDark1 {
    background-color: #222121;
    color: #F2F2F2;
}

.fotosTecProjeto {
    width: 40px;
    height: 40px;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .colTecs {
        height: 36vh;
        font-size: small;
    }

    .tabVertical {
        display: none;
    }

    .tabHorizontal {
        display: block;
    }

    .linksVerticais {
        display: block;
    }

    .linksHorizontais {
        display: none;
    }

}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .colTecs {
        height: 36vh;
    }

    .tabVertical {
        display: none;
    }

    .tabHorizontal {
        display: block;
    }

    .linksVerticais {
        display: block;
    }

    .linksHorizontais {
        display: none;
    }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .colTecs {
        height: 36vh;
    }

    .tabVertical {
        display: none;
    }

    .tabHorizontal {
        display: block;
    }

    .linksVerticais {
        display: block;
    }

    .linksHorizontais {
        display: none;
    }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {}
</style>
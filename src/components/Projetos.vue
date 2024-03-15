<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div id="projetos" :class="bgClass">
        <div class="container hidden" ref="projetos">
            <a href="#home" :style="darkMode ? 'color:#1F1F1F' : 'color:#F2F2F2'">
                <button type="link" :class="'btn btn-md hidden ' + classBtnSubir"
                    @mouseenter="animarBTN('enter', 'iconeSubir-projetos')" @click="setControleScroller"
                    @mouseleave="animarBTN('leave', 'iconeSubir-projetos')" id="btn_subir-projetos">
                    <i class="fa-solid fa-arrow-up fa-lg" id="iconeSubir-projetos"></i>
                </button>
            </a>
            <div class="row">
                <h1 class="jost salmao text-center pt-2 titulo">
                    PROJETOS
                </h1>
            </div>
            <div class="row">
                <div class="col-12">
                    <v-tabs v-model="tab" align-tabs="center" color="#F25D50"
                        next-icon="mdi-arrow-right-bold-box-outline" prev-icon="mdi-arrow-left-bold-box-outline"
                        show-arrows>
                        <v-tab class="jost" value="1">Full Stack</v-tab>
                        <v-tab class="jost" value="2">Front-End</v-tab>
                        <v-tab class="jost" value="3">Back-End</v-tab>
                        <v-tab class="jost" value="4">Mobile</v-tab>
                    </v-tabs>
                    <v-window v-model="tab">
                        <v-window-item value="1">
                            <ModeloProjetoVue :darkMode="darkMode" :projetos="projetosFullStack"> </ModeloProjetoVue>
                        </v-window-item>
                        <v-window-item value="2">
                            <ModeloProjetoVue :darkMode="darkMode" :projetos="projetosFullStack"> </ModeloProjetoVue>
                        </v-window-item>
                        <v-window-item value="3">
                            <ModeloProjetoVue :darkMode="darkMode" :projetos="projetosFullStack"> </ModeloProjetoVue>
                        </v-window-item>
                        <v-window-item value="4">
                            <ModeloProjetoVue :darkMode="darkMode" :projetos="projetosFullStack"> </ModeloProjetoVue>
                        </v-window-item>
                    </v-window>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ModeloProjetoVue from '@/view/ModeloProjeto.vue'
export default {
    components: { ModeloProjetoVue },
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
        this.animatePage(this.$refs.projetos)
        this.atualizarHash(document.getElementById('projetos'))
        this.animatePage(document.getElementById('btn_subir-projetos'))
    },
    data() {
        return {
            classBtnSubir: '',
            tab: null,
            projetosFullStack: [
                {
                    tab: '1', nome: 'fodase.com',
                    descriçao: [
                        'O finans é um site completo de finança pessoal, onde o usuário pode ter controle total de sua vida finançeira.',
                        'O projeto foi desenvolvido para por em prática os meus conhecimentos de programaçao full-stack. Ele foi desenvolvido em Vue JS, como uma SPA, consumindo uma API desenvolvida em PHP com Slim Framework.',
                        'O finans conta com um sistema de autenticaçao, criaçao de conta, envio de emails, configuraçao de primeiro acesso, registro de despesas fixas e avulsas, emissao de relatórios mensais, e muitos mais. '
                    ],
                    imagens: [
                        '/assets/fotosProjetos/image.png',                        
                    ], links: [
                        'https://github.com/gyderzin',
                        'https://github.com/gyderzin'
                    ]
                },
                {
                    tab: '2', nome: 'fodase.com2', descriçao: [
                        'O finans é um site completo de finança pessoal, onde o usuário pode ter controle total de sua vida finançeira.',
                        'O projeto foi desenvolvido para por em prática os meus conhecimentos de programaçao full-stack. Ele foi desenvolvido em Vue JS, como uma SPA, consumindo uma API desenvolvida em PHP com Slim Framework.',
                        'O finans conta com um sistema de autenticaçao, criaçao de conta, envio de emails, configuraçao de primeiro acesso, registro de despesas fixas e avulsas, emissao de relatórios mensais, e muitos mais. '
                    ], imagens: [
                        '/assets/fotoGyder-dark.png',
                        '/assets/logoLight.png',
                        '/assets/logoLight.png',
                    ], links: [
                        'https://github.com/gyderzin',
                        'https://github.com/gyderzin'
                    ]
                }
            ]
        }
    },
    computed: {
        rotaAtual() {
            return this.$route.name
        }
    }
}
</script>

<style lang="css">
.title {
    font-weight: 700;
}

.paragrafo {
    text-align: justify;
}

.botaoSubir-Dark {
    float: right;
    position: relative;
    background-color: #F25D50;
    top: 30px;
    right: 8%;
}

.botaoSubir-Dark:hover {
    background-color: #F2F2F2;
}

.botaoSubir-Light {
    float: right;
    position: relative;
    background-color: #F25D50;
    top: 30px;
    right: 8%;
}

.botaoSubir-Light:hover {
    background-color: #1F1F1F;
}

.nav-underline .nav-link {
    padding-left: 40px;
    padding-right: 40px;
}

.nav-link:hover {
    color: #F25D50;
}

.nav {
    position: relative;
    right: 2%;
}

.nav-underline .nav-link.active {
    color: #F25D50;
}

#projetos {
    height: 100vh;
}
</style>
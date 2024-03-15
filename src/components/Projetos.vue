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
                            <ModeloProjetoVue :darkMode="darkMode" :projetos="projetosFrontEnd"> </ModeloProjetoVue>
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
                    tab: '1', nome: 'Finans App',
                    descriçao: [
                        'O Finans é um site completo de finanças pessoais, onde o usuário pode ter controle total de sua vida financeira. O projeto foi desenvolvido para colocar em prática meus conhecimentos de programação full-stack.',
                        'Foi desenvolvido em Vue JS, utilizando VueRouter para o gerenciamento de rotas, Vuex para o gerenciamento de estados, Vuetify para estilização e Axios para requisições HTTP. Foi criado como uma SPA (Single Page Application), consumindo uma API desenvolvida em PHP com o Slim Framework, fazendo o CRUD em um banco de dados MySQL',
                        'O Finans conta com um sistema de autenticação, criação de conta, envio de e-mails, configuração de primeiro acesso, registro de despesas fixas e avulsas, emissão de relatórios mensais, e muito mais. Crie uma conta para testar o app.',                        
                    ],
                    imagens: [
                        '/assets/fotosProjetos/finans/foto1.png',         
                        '/assets/fotosProjetos/finans/foto2.png',         
                        '/assets/fotosProjetos/finans/foto3.png',         
                        '/assets/fotosProjetos/finans/foto4.png',         
                        '/assets/fotosProjetos/finans/foto5.png',         
                        '/assets/fotosProjetos/finans/foto6.png',         
                        '/assets/fotosProjetos/finans/foto7.png',         
                        '/assets/fotosProjetos/finans/foto8.png',         
                        '/assets/fotosProjetos/finans/foto9.png',         
                        '/assets/fotosProjetos/finans/foto10.png',         
                        '/assets/fotosProjetos/finans/foto11.png',         
                        '/assets/fotosProjetos/finans/foto12.png',         
                        '/assets/fotosProjetos/finans/foto13.png',         
                        '/assets/fotosProjetos/finans/foto14.png',         
                    ], links: [
                        'https://github.com/gyderzin/Finans',
                        'https://finans-94h9hbqwy-gyderzins-projects.vercel.app'
                    ]
                },
                {
                    tab: '2', nome: 'Almoxarifado NSG', descriçao: [
                        'Este é um projeto realizado para uma empresa na qual trabalhei como Jovem Aprendiz, visando atender as demandas do almoxarifado.',
                        'O sistema foi desenvolvido após identificar as falhas no sistema utilizado pela empresa na época e apresentar uma solução mais eficiente aos meus superiores.',
                        'O mesmo engloba funções de entrada e saída de materiais e ferramentas, histórico, cadastro de funcionários, controle de ferramentas pendentes de devolução, entre outros recursos.',
                        'O sistema foi desenvolvido com PHP, seguindo o padrão de arquitetura MVC, e utilizando HTML, CSS e JavaScript.',
                        'Para deploy, entre com o email gyderlanmos@gmail.com, e a senha 13579.'
                    ], imagens: [
                        '/assets/fotosProjetos/almoxarifado_nsg/foto1.png',
                        '/assets/fotosProjetos/almoxarifado_nsg/foto2.png',
                        '/assets/fotosProjetos/almoxarifado_nsg/foto3.png',
                        '/assets/fotosProjetos/almoxarifado_nsg/foto4.png',
                        '/assets/fotosProjetos/almoxarifado_nsg/foto5.png',
                        '/assets/fotosProjetos/almoxarifado_nsg/foto6.png',
                        '/assets/fotosProjetos/almoxarifado_nsg/foto7.png',
                        '/assets/fotosProjetos/almoxarifado_nsg/foto8.png',
                    ], links: [
                        'https://github.com/gyderzin/almoxarifado_nsg',
                        ''
                    ]
                }
            ],
            projetosFrontEnd: [
            {
                    tab: '1', nome: 'Spotify Clone',
                    descriçao: [
                        'Projeto desenvolvido para praticar meus conhecimentos de Front-End e WebDesigner, onde criei um clone do site do Spotify. O projeto foi desenvolvido usando HTML, CSS e Bootstrap.'
                    ],
                    imagens: [
                        '/assets/fotosProjetos/spotify/foto1.png',
                        '/assets/fotosProjetos/spotify/foto2.png',
                        '/assets/fotosProjetos/spotify/foto3.png',
                    ], links: [
                        'https://github.com/gyderzin/Spotify-Clone',
                        'https://gyderzin.github.io/Spotify-Clone/'
                    ]
            },
            {
                    tab: '1', nome: 'Finans Apresentation',
                    descriçao: [
                        'Projeto desenvolvido para servir de página de apresentação para o sistema Finans que foi demostrado na seção de FullStack. O mesmo foi desenvolvido com HTML CSS e bootstrap'
                    ],
                    imagens: [
                        '/assets/fotosProjetos/finans_apresentation/foto1.png',
                        '/assets/fotosProjetos/finans_apresentation/foto2.png',
                        '/assets/fotosProjetos/finans_apresentation/foto3.png',
                        '/assets/fotosProjetos/finans_apresentation/foto4.png',
                    ], links: [
                        'https://github.com/gyderzin/FinansApresentation',
                        'https://gyderzin.github.io/FinansApresentation/'
                    ]
            },
            {
                    tab: '1', nome: 'App orçamento pessoal',
                    descriçao: [
                        'Projeto desenvolvido para praticar os meus conhecimentos de JavaScript e lógica de programação. O sistema permite que o usário cadastre despesas por categorias e consultar as mesmas, fazendo a persistência de informações através do localStorage.'
                    ],
                    imagens: [
                        '/assets/fotosProjetos/orçamento_pessoal/foto1.png',
                        '/assets/fotosProjetos/orçamento_pessoal/foto2.png',
                        '/assets/fotosProjetos/orçamento_pessoal/foto3.png',                        
                    ], links: [
                        'https://github.com/gyderzin/OrcamentoPessoal',
                        'https://gyderzin.github.io/OrcamentoPessoal/'
                    ]
            },
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
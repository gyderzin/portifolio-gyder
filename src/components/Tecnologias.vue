<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="tecnologias" :class="bgClass">
        <div class="container hidden" ref="tecnologias">
            <a href="#home" :style="darkMode ? 'color:#1F1F1F' : 'color:#F2F2F2'">
                <button type="link" :class="'btn btn-md hidden ' + classBtnSubir" @mouseenter="animarBTN('enter', 'iconeSubir')"  @click="setControleScroller"
                    @mouseleave="animarBTN('leave','iconeSubir')" ref="btn_subir">
                    <i class="fa-solid fa-arrow-up fa-lg" id="iconeSubir"></i>
                </button>
            </a>
            <div class="row">
                <h1 class="jost text-center pt-3 salmao titulo" >
                    TECNOLOGIAS
                </h1>
                <p :class="'jost text-center mb-0 pb-0 ' + colorText">Tenho conhecimento e experiência com as tecnologias
                    abaixo.</p>
            </div>
            <div class="row linhasTec">
                <div class="col-4 col-lg-3 col-md-4 col-sm-4 d-flex justify-content-center tecnologias hidden"
                    v-for="(tecnologia, index) in tecnologias" :key="index" :id="tecnologia.idCol">
                    <div :class="'popover ' + bgClassPop" :id="tecnologia.popover">
                        <div class="row">
                            <span :class="'text-center titlePopover ' + colorTextPop">{{ tecnologia.nome }}</span>
                            <p :class="'pb-2 mb-0 jost textPopover ' + colorTextPop">Nível: <b>{{ tecnologia.nivel }}</b></p>
                            <p :class="'pb-2 mb-0 jost textPopover ' + colorTextPop">Experiência: <b>{{ tecnologia.experiencia
                            }}</b></p>
                        </div>
                    </div>
                    <img class="img-fluid fotosTec" @mouseenter="showPopover(tecnologia.popover)"
                        @mouseleave="esconderPopover(tecnologia.popover)" :src="tecnologia.foto" :alt="tecnologia.nome">
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="js">

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
    created() {
        if (this.darkMode) {
            this.bgClassPop = 'bgLight2'
            this.colorTextPop = 'darkText'
            this.classBtnSubir = 'botaoSubir-Dark'
        } else {
            this.bgClassPop = 'bgDark2'
            this.colorTextPop = 'lightText'
            this.classBtnSubir = 'botaoSubir-Light'
        }
    },
    watch: {
        darkMode() {
            if (this.darkMode) {
                this.bgClassPop = 'bgLight2'
                this.colorTextPop = 'darkText'
                this.classBtnSubir = 'botaoSubir-Dark'
            } else {
                this.bgClassPop = 'bgDark2'
                this.colorTextPop = 'lightText'
                this.classBtnSubir = 'botaoSubir-Light'
            }
        }
    },
    data() {
        return {
            bgClassPop: '',
            colorTextPop: '',
            classBtnSubir: '',
            tecnologias: [
                { nome: 'HTML 5', nivel: 'Avançado', experiencia: '3 anos +', foto: '/assets/icons/html.png', popover: 'pop-html', idCol: 'html'},
                { nome: 'CSS 3', nivel: 'Intermediário', experiencia: '3 anos +', foto: '/assets/icons/css.png', popover: 'pop-css', idCol: 'css' },
                { nome: 'JavaScript', nivel: 'Avançado', experiencia: '3 anos +', foto: '/assets/icons/js.png', popover: 'pop-js', idCol: 'js' },
                { nome: 'Vue.JS', nivel: 'Avançado', experiencia: '2 anos +', foto: '/assets/icons/vue.png', popover: 'pop-vue', idCol: 'vue' },
                { nome: 'Bootstrap', nivel: 'Avançado', experiencia: '3 anos +', foto: '/assets/icons/bootstrap.png', popover: 'pop-bootstrap', idCol: 'bootstrap' },
                { nome: 'PHP', nivel: 'Avançado', experiencia: '3 anos +', foto: '/assets/icons/php.png', popover: 'pop-php', idCol: 'php' },
                { nome: 'Laravel', nivel: 'Intermediário', experiencia: '1 ano -', foto: '/assets/icons/laravel.png', popover: 'pop-laravel', idCol: 'laravel' },
                { nome: 'Slim', nivel: 'Avançado', experiencia: '2 anos +', foto: '/assets/icons/slim.png', popover: 'pop-slim', idCol: 'slim' },
                { nome: 'MySQL', nivel: 'Avançado', experiencia: '3 anos +', foto: '/assets/icons/sql.png', popover: 'pop-sql', idCol: 'sql' },
                { nome: 'Flutter', nivel: 'Intermediário', experiencia: '1 ano -', foto: '/assets/icons/flutter.png', popover: 'pop-flutter', idCol: 'flutter' },
                { nome: 'Dart', nivel: 'Intermediário', experiencia: '1 ano -', foto: '/assets/icons/dart.png', popover: 'pop-dart', idCol: 'dart' },
                { nome: 'Ionic', nivel: 'Intermediário', experiencia: '1 ano -', foto: '/assets/icons/ionic.png', popover: 'pop-ionic', idCol: 'ionic' },
            ]
        }
    },
    mounted() {
        this.animatePage(this.$refs.tecnologias)
        this.animatePage(this.$refs.btn_subir)
        this.atualizarHash(document.getElementById('tecnologias'))
        this.tecnologias.forEach(element => {
            this.animatePage(document.getElementById(element.idCol))
        });
    },
    methods: {
        showPopover(element) {
            var popover = document.querySelector('#' + element)
            popover.classList.add('showPopover')

        },
        esconderPopover(element) {
            var popover = document.querySelector('#' + element)
            popover.classList.remove('showPopover')
            popover.classList.add('esconderPopover')
        },     
    }
}


</script>
<style lang="css">
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

.popover {
    position: relative;
    right: 70px;
    top: 20px;
    width: 140px;
    height: 85px;
    opacity: 0;
}

.titlePopover {
    font-family: "Jost", sans-serif;
    font-weight: 600;
    font-size: large;
}

.textPopover {
    margin-left: 5px;
    font-size: small;
}

.esconderPopover {
    animation: leavePopover 1s normal;
}

.showPopover {
    opacity: 1;
    animation: enterPopover 1s normal;
}

.tecnologias {
    margin-top: 60px;
}

.borda {
    border: 1px solid #F25D50;
}

.fotosTec {
    width: 130px;
    height: 130px;
    position: relative;
    right: 65px;
}

.salmao {
    color: #F25D50;
}

#tecnologias {
    height: 100vh;
}

@keyframes leavePopover {
    from {
        opacity: 1;
        height: 85px;
    }

    to {
        opacity: 0;
        height: 0;
    }
}

@keyframes enterPopover {
    from {
        height: 0;
        opacity: 0;
    }

    to {
        height: 85px;
        opacity: 1;
    }
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 376px) {
    .fotosTec {
        width: 70px;
        height: 70px;
        position: static;
        right: 0px;
    }

    .popover {
        display: none;
    }

    .botaoSubir-Dark {
        display: none;
    }

    .botaoSubir-Light {
        display: none;
    }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 377px) and (max-width: 767.98px) {
    .fotosTec {
        width: 90px;
        height: 90px;
        position: static;
        right: 0px;
    }

    .popover {
        display: none;
    }

    .botaoSubir-Dark {
        display: none;
    }

    .botaoSubir-Light {
        display: none;
    }



}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .fotosTec {
        width: 100px;
        height: 100px;
        position: static;
        right: 0px;
    }

    .popover {
        display: none;
    }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .fotosTec {
        width: 100px;
        height: 100px;
    }

    .popover {
        position: relative;
        right: 70px;
        top: 20px;
        width: 100px;
        height: 85px;
        opacity: 0;
        background-color: #F2F2F2;
    }

    .titlePopover {
        font-size: medium;
    }

    .textPopover {
        margin-left: 2px;
        font-size: x-small;
    }

}</style>
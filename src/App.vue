<template>
    <home :setControleScroller="setControle"  :atualizarHash="atualizarHash" :darkMode="darkMode" :bgClass="bgClass1" :colorText="colorText"
        @updateDarkMode="setDarkMode"></home>
    <tecnologias :setControleScroller="setControle" :atualizarHash="atualizarHash" :animatePage="animatePage"
        :bgClass="bgClass2" :colorText="colorText" :darkMode="darkMode"></tecnologias>
    <projetos :setControleScroller="setControle" :atualizarHash="atualizarHash" :animatePage="animatePage"
        :darkMode="darkMode" :bgClass="bgClass1" :colorText="colorText"></projetos>
    <Sobre :setControleScroller="setControle" :atualizarHash="atualizarHash" :animatePage="animatePage"
        :darkMode="darkMode" :bgClass="bgClass2" :colorText="colorText"></Sobre>
    <Contato :setControleScroller="setControle" :atualizarHash="atualizarHash" :animatePage="animatePage"
        :darkMode="darkMode" :bgClass="bgClass1" :colorText="colorText"> </Contato>
</template>

<script>
import Home from './components/Home.vue';
import Tecnologias from './components/Tecnologias.vue';
import Projetos from './components/Projetos.vue';
import Sobre from './components/Sobre.vue';
import Contato from './components/Contato.vue';

export default {
    components: { Home, Tecnologias, Projetos, Sobre, Contato },
    created() {
        if (localStorage.getItem('darkMode') !== null) {
            var darkMode = localStorage.getItem('darkMode')
            if (darkMode == 'true') {
                this.darkMode = true
                this.bgClass1 = 'bgDark1'
                this.bgClass2 = 'bgDark2'
                this.colorText = 'lightText'
            } else {
                this.darkMode = false
                this.bgClass1 = 'bgLight1'
                this.bgClass2 = 'bgDark2'
                this.colorText = 'darkText'
            }
        } else {
            this.darkMode = true
            this.bgClass1 = 'bgDark1'
            this.bgClass2 = 'bgDark2'
            this.colorText = 'lightText'
        }

    },
    data() {
        return {
            darkMode: undefined,
            bgClass1: '',
            bgClass2: '',
            colorText: '',
            controleScroller: false,
            rotaAlvo: undefined
        }
    },
    watch: {
        darkMode() {
            this.changeColorSite(this.darkMode)
        },
    },
    methods: {
        setControle() {            
            this.controleScroller = true
        },
        setDarkMode(value) {
            this.darkMode = value
            localStorage.setItem('darkMode', value)
        },
        changeColorSite(state) {
            if (state == false) {
                this.bgClass1 = 'bgLight1'
                this.bgClass2 = 'bgLight2'
                this.logo = '/assets/logoDark.png'
                this.colorText = 'darkText'
            } else {
                this.bgClass1 = 'bgDark1'
                this.bgClass2 = 'bgDark2'
                this.colorText = 'lightText'
            }
        },
        atualizarHash(element) {
            const observer = new IntersectionObserver(entries => {
                let elements = []
                elements[1] = 'home'
                elements[2] = 'tecnologias'
                elements[3] = 'projetos'
                elements[4] = 'sobre'
                elements[5] = 'contato'
                this.$router.beforeEach((to, from) => {
                    let fromNumber = this.tranformarRotaNumber(to.hash)
                    let toNumber = this.tranformarRotaNumber(from.hash)

                    if (this.controleScroller) {
                        if (fromNumber != toNumber - 1 && toNumber != fromNumber - 1) {
                            elements.forEach(element => {
                                if (element !== elements[fromNumber] && element !== elements[toNumber]) {
                                    observer.unobserve(document.getElementById(element))
                                    this.rotaAlvo = elements[fromNumber]
                                }
                            });
                        }
                    }
                })
                if (entries[0].isIntersecting) {
                    if (element.id == this.rotaAlvo) {
                        elements.forEach(element => {
                            setTimeout(() => {
                                this.atualizarHash(document.getElementById(element))
                            }, 1000)
                        })
                        this.controleScroller = false
                        this.rotaAlvo = undefined
                    }
                    this.$router.replace('#' + element.id)
                }

            }, {

                threshold: 0.00001
            })
            observer.observe(element)
        },
        animatePage(element) {
            const observer = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) {
                    element.classList.remove('hidden')
                    element.classList.add('animateHidden')
                } else {
                    element.classList.add('hidden')
                    element.classList.remove('animateHidden')
                }
            }, {
                threshold: 0.1
            })
            observer.observe(element)
        },
        tranformarRotaNumber(value) {
            let retorno = undefined
            switch (value) {
                case '#home': retorno = 1; break;
                case '#tecnologias': retorno = 2; break;
                case '#projetos': retorno = 3; break;
                case '#sobre': retorno = 4; break;
                case '#contato': retorno = 5; break;
            }
            return retorno
        }
    }
}

</script>

<style lang="css">
@keyframes showPage {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.jost {
    font-family: "Jost", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
}

.bgDark1 {
    background-color: #222121;
    color: #F2F2F2;
}

.bgDark2 {
    background-color: #1F1F1F;
    color: #F2F2F2;
}

.lightText {
    color: #F2F2F2;
}

.bgLight1 {
    background-color: #F2F2F2;
}

.bgLight2 {
    background-color: #eeeded;
}

.darkText {
    color: #222121;
}

.titulo {
    font-weight: 600;
}

.salmaoText {
    color: #F25D50;
}

.hidden {
    opacity: 0;
}

.animateHidden {
    animation: showPage 4s normal;
}
</style>

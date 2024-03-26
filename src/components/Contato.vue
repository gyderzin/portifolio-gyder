<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="contato" :class="bgClass">
        <div class="hidden container" ref="contato">
            <a href="#home" :style="darkMode ? 'color:#1F1F1F' : 'color:#F2F2F2'">
                <button type="link" :class="'btn btn-md hidden ' + classBtnSubir"
                    @mouseenter="animarBTN('enter', 'iconeSubir-contato')" @click="setControleScroller"
                    @mouseleave="animarBTN('leave', 'iconeSubir-contato')" id="btn_subir-contato">
                    <i class="fa-solid fa-arrow-up fa-lg" id="iconeSubir-contato"></i>
                </button>
            </a>
            <div class="row">
                <div class="col-12 d-flex justify-content-center p-5">
                    <v-card width="600" :color="colorBgCard">
                        <h1 :class="'jost text-center salmao tituloCard mt-3' + colorTextCard">
                            CONTATO
                        </h1>
                        <p class="jost px-3 mb-5">Entre em contato comigo! Me diga o que você achou do meu trabalho ou
                            me
                            envie uma proposta e eu garanto que você terá uma resposta muito em breve. </p>
                        <v-form @submit.prevent ref="form" class="px-3">
                            <v-text-field variant="outlined" class="mb-1" v-model="nome"
                                :rules="[v => !!v || 'Digite seu nome.']" label="Qual seu nome?" required
                                prepend-icon="mdi-account"></v-text-field>

                            <v-text-field variant="outlined" class="mb-1" v-model="email"
                                :rules="[v => !!v || 'Digite seu e-mail.']" 
                                label="E-mail" prepend-icon="mdi-email"
                                required></v-text-field>

                            <v-textarea v-model="mensagem" class="mb-1" :rules="[v => !!v || 'Digite uma mensagem']"
                                variant="outlined" label="Mensagem" prepend-icon="mdi-comment" rows="4"></v-textarea>
                        </v-form>
                        <div class="row">
                            <div class="col-12 px-5 mb-5 d-flex justify-content-end">
                                <v-btn color="#F25D50" density="default" icon="mdi-send" :loading="loading"
                                    @click="enviarMensagem"></v-btn>
                            </div>
                        </div>
                    </v-card>
                </div>
            </div>
        </div>
        <transition name="custom-classes" enter-active-class="animate__animated animate__backInRight"
            leave-active-class="animate__animated animate__backOutRight" mode="out-in">
            <div class='d-flex justify-center alert' v-if="alert">
                <v-alert v-model="alert" type="success" dense width="95%">
                    <span class="jost">
                        Mensagem enviada com sucesso! Em poucos instantes você receberá uma resposta no seu e-mail.
                    </span>
                </v-alert>
            </div>
        </transition>

        <transition name="custom-classes" enter-active-class="animate__animated animate__backInRight"
            leave-active-class="animate__animated animate__backOutRight" mode="out-in">
            <div class='d-flex justify-center alert' v-if="alertError">
                <v-alert v-model="alertError" type="error" dense width="95%">
                    <span class="jost">
                        Erro ao enviar mensagem, tente novamente mais tarde.
                    </span>
                </v-alert>
            </div>
        </transition>

    </div>
</template>
<script>
import axios from 'axios'
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
        if (this.darkMode == true) {
            this.colorBgCard = '#F2F2F2'
            this.colorTextCard = '#222121'
        } else {
            this.colorBgCard = '#222121'
            this.colorTextCard = '#F2F2F2'
        }
    },
    watch: {
        darkMode() {
            if (this.darkMode == true) {
                this.colorBgCard = '#F2F2F2'
                this.colorTextCard = '#222121'
            } else {
                this.colorBgCard = '#222121'
                this.colorTextCard = '#F2F2F2'
            }
        },
        alert(newValue) {
            if (newValue == true) {
                setTimeout(() => {
                    this.alert = false
                }, 5000)
            }
        },
        alertError(newValue) {
            if (newValue == true) {
                setTimeout(() => {
                    this.alertError = false
                }, 5000)
            }
        },
    },
    data() {
        return {
            form: false,
            nome: '',
            email: '',
            mensagem: '',
            loading: false,
            emailInvalid: false,
            alert: false,
            alertError: false,
            colorTextCard: undefined,
            colorBgCard: undefined
        }
    },
    methods: {
        async enviarMensagem() {
            const { valid } = await this.$refs.form.validate()
            if (valid) {
                this.loading = true
                axios.post('https://apithundermonkey.com.br/enviarEmailPortifolio', {
                    mensagem: this.mensagem,
                    email: this.email,
                    nome: this.nome
                }).then(res => {
                    this.loading = false
                    if (res.data.codigo_status == 1) {
                        this.$refs.form.reset()
                        this.alert = true
                    } else {
                        this.alertError = true
                    }
                })
            }
        }
    },
    mounted() {
        this.animatePage(this.$refs.contato)
        this.atualizarHash(document.getElementById('contato'))
        this.animatePage(document.getElementById('btn_subir-contato'))
    },
}
</script>
<style lang="css">
#contato {
    height: 100vh;
}

.tituloCard {
    font-size: 40px;
    padding: 10px;
}

.alert {
    position: fixed;
    left: 27%;
    right: 27%;
    bottom: 2%;
    z-index: 1;
}
</style>
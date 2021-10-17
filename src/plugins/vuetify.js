import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme:{
        themes:{
            light:{
                error: '#be4242',
                primary: '#1361af',
                success: '#32deb2'
            }
        }
    }
});

export default vuetify
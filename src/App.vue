<template>
  <div id="app">
    <form action="/ioashd">
      <!-- (value) from event emitted is called in updateFormState -->
      <!-- new value from changed data is added to component value -->
      <HelloWorld
        name="fname"
        @typing="(eventValue) => updateFormState('fname', eventValue)"
        :value="formState.data.fname"
      />
      <HelloWorld
        name="lname"
        @typing="(eventValue) => updateFormState('lname', eventValue)"
        :value="formState.data.lname"
      />
      <br />
      <!-- Form is sent  -->
      <button type="submit" @click.prevent="submitForm">Submit</button>
    </form>
  </div>
</template>

<script>
import _ from 'lodash';
import HelloWorld from './components/HelloWorld.vue';
import FormHelper from './components/FormHelper';
export default {
  name: 'App',

  mixins: [FormHelper],

  components: {
    HelloWorld,
  },

  data: () => {
    return {
      formState: {
        data: {
          fname: '',
          lname: '',
        },

        loading: false,

        loadingText: 'Please Wait',
      },
    };
  },

  methods: {
    submitForm() {
      console.log('ajax', this.formState);
    },

    postRequest(body) {
      axios
        .post('/message', {
          body,
        })
        .then(
          (resp) => {},
          (error) => {
            console.log(error);
          }
        );
    },

    sendMessage() {
      if (this.userMessageInput.length !== 0) {
        this.postRequest(this.userMessageInput);
        this.chatMessages.push({
          body: this.userMessageInput,
        });
        this.userMessageInput = '';
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

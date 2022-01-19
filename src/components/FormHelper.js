export default {
  methods: {
    // formStateKey is default value
    updateFormState(key, value, formStateObject) {
      // formStateKey is assumed undefined
      if (formStateObject === undefined) {
        formStateObject = 'formState';
      }

      // value is always defined
      // The key of the formStateObject is changed to new value, data is changed
      this[formStateObject][key] = value;
    },
  },
};

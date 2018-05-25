new Vue({
      el: '#app',
      data: function() {
        return { 
          visible: false,
          input: '',
          formInline: {
            user: '',
            region: ''
          }
         }
        },
      methods: {
        onSubmit() {
          console.log('submit!');
        }
      }
    })
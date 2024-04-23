export default {
  data () {
    return {
      num: 18,
    }
  },
  mounted () {
    console.log('mixins mounted');
  },
  methods: {
    incrementNum () {
      this.add()
    }
  }
};
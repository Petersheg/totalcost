<template>
  
   <main class="main_content_area">
        <section class="section_block saturate-primary">
            <div class="container section_wrapper">
                <div class="entry_content centered">
                    <div class="block_panel auth_panel bg-white">
                       <div class="hr_line"></div>
                        <header class="block_header text-center">
                            <h2 class="color-primary pane_title">Activate your Account.</h2>
                        </header>
                        <div class="content_inner">
                            <div class="error_message hidden">
                                <p>Incorrect verification code. Please try again</p>
                            </div>
                            <form @submit.prevent="submit">
                              
                                <div class="form-group text-left">
                    
                                    <span v-if="errors">
                                        <p v-for="error in errors" :key="error">{{error}}</p>
                                    </span>
                                    <span v-else> 
                                            <p>A 6 digit verification code has been sent to your email address <mark>{{email}}</mark> 
                                            Please enter the code in the field provided below to verify your account.</p>
                                    </span>
                                </div>

                                <div class="form-group">
                                    <label class="control-label">
                                        Verification Code
                                    </label>
                                    <input type="text" class="font-md form-control text-center" v-model="userToken" placeholder="Enter verification code">
                                </div>
                                <div class="section_cto text-center">
                                    <button type="submit" class="btn btn-inverse">Activate</button>
                                </div>                           
                            </form>
                            
                            <p>Didn't receive any code? <button @click="reRegister" class="btn-link font-bold">Resend Code</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'Verification',
  data(){
      return{
          userToken:"",
          //newEmail:"",
          email: this.$route.params.email,
          //email: localStorage.getItem('regEmail'),
          check:false
      }
  },
  computed:{
      ...mapGetters({errors:"returnVeryE",success:"returnVeryS"})
  },
  methods:{
      ...mapActions(["Verification"]),
      
    async submit(){
        const verify = {
            email:this.email,
            token:this.userToken,
        }
        try {
            await this.Verification(verify)
            if(this.success==="success"){
                this.$router.push({name:"Login"})
            }
            console.log(verify);
        } catch (error) {
            console.log(error);
        }
        
    },
    getLength(){
        return !!this.errors
    }
  },
  mounted(){  
      console.log(!!this.errors);
  },
  created(){
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

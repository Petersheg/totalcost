<template>
    <div class="modal fade" id="update_bio">
        <div class="modal-dialog">
                <div class="modal-content">
                    <header class="modal-header">
                        <h4 class="modal-title font-bold color-primary">About Me</h4>
                        <button class="close_dialog" data-dismiss="modal" aria-hidden="true"></button>
                    </header>
                    <div class="modal-body">
                        <form action="">
                            <div class="input_grid row">
                                <div class="col-sm-6 input_block">
                                    <label class="control-label font-bold">Profile Image
                                    </label>
                                    <p class="help-block"><strong>TIP:</strong>We recommend a .Jpg or .png image of 1:1 aspect ration, e.g 128px by 128px</p>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mediaUploadControl">
                                        <figure class="mediaUploadPreview">
                                            <div class="user_avatar">
                                                <img :src="this.getSrc('/img/test_dp.png')" alt="David Olaniyi">
                                            </div>
                                        </figure>
                                        <div class="mediaUploadInfo">
                                            <div class="file_upload">
                                                <label for="banner_image" class="btn btn-sm btn-primary">
                                                <input type="file" name="file" id="banner_image" class="inputfile">
                                                    <span>Change Image</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="input_grid row">
                                <div class="col-sm-6 input_block">
                                <label class="control-label font-bold">
                                    Profile Banner
                                </label>
                                <p class="help-block"><strong>TIP:</strong> Uplaod a cover image that best communicate who you are.</p>
                                </div>
                                <div class="col-sm-6">
                                    <figure class="banner_preview">
                                        <div class="preview_holder" style="background-image: url(./img/banners/bridal_gown.jpg);">
                                        </div>
                                    </figure>
                                    <div class="file_upload">
                                        <label for="banner_image" class="btn btn-sm btn-primary">
                                        <input type="file" name="file" id="banner_image" class="inputfile">
                                            <span>Change Image</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-check form-check-inline">
                                    <label for="gender_fml" class="control-label">
                                        <input type="radio" id="gender_fml" name="us_gender">
                                        <span>Female</span>
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <label for="gender_ml" class="control-label">
                                        <input type="radio" id="gender_ml" name="us_gender">
                                        <span>Male</span>
                                    </label>
                                </div>
                            </div>
                            <div class="form-horizontal">
                                <div class="form-group funky_form col-sm-6">
                                    <label class="control-label">First Name</label>
                                    <input type="text" class="form-control" placeholder="First Name">
                                </div>
                                <div class="form-group funky_form col-sm-6">
                                    <label class="control-label">Last Name</label>
                                    <input type="text" class="form-control" placeholder="Last Name">
                                </div>
                            </div>
                            <div class="form-group funky_form">
                                <label class="control-label">About Me</label>
                                <textarea rows="5" class="form-control" placeholder="Tell us a little about yourself"></textarea>
                            </div>
                            <div class="form-horizontal">
                                <div class="form-group funky_form col-sm-4">
                                    <label class="control-label">Day</label>
                                    <select class="form-control">
                                        <option>Day</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                    </select>
                                </div>
                                <div class="form-group funky_form col-sm-4">
                                    <label class="control-label">Month</label>
                                    <select class="form-control">
                                        <option>Month</option>
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>Novermber</option>
                                        <option>December</option>
                                    </select>
                                </div>
                                <div class="form-group funky_form col-sm-4">
                                    <label class="control-label">Year</label>
                                    <select class="form-control">
                                        <option>Year</option>
                                        <option>2000</option>
                                        <option>1999</option>
                                        <option>1998</option>
                                        <option>1997</option>
                                        <option>1996</option>
                                        <option>1995</option>
                                        <option>1994</option>
                                        <option>1993</option>
                                        <option>1992</option>
                                        <option>1991</option>
                                        <option>1990</option>
                                        <option>1989</option>
                                        <option>1988</option>
                                        <option>1987</option>
                                        <option>1986</option>
                                        <option>1985</option>
                                        <option>1984</option>
                                        <option>1983</option>
                                        <option>1982</option>
                                        <option>1981</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-sm btn-inverse">
                            Save Changes
                        </button>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from 'axios'
export default {
  name: 'Updatebio',
  methods:{
      getSrc(src){
          return require('@/assets'+src)
      }
  },
  data:function(){
      return{
      }
  },

  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
        const User={
            email: this.form.email,
            password: this.form.password
        }
      try {
        await this.LogIn(User);
        if(this.success){
            this.$router.go({name:"VendorProfile"});
        }
      } catch (error) {
        console.log(error);
      }
    },
    
  },
  computed:{
        ...mapGetters({errors:'returnMessage',success:'returnData', auth:'isAuthenticated'}),
        //...mapGetters()
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

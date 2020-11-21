<template>
  
   <main class="main_content_area bg-off-white">
        
        <section class="section_block ">
            <div class="container ct_slim">
                <div class="content_wrapper">
                    <header class="user_infoHeader">
                        <h3 class="pane_title text-caps color-primary">Edit Profile</h3>
                    </header>
                    <div class="content_inner">
                    <fieldset>
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
                                            <img src="../../assets/img/test_dp.png" alt="David Olaniyi">
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
                    </fieldset>
                    <fieldset>
                        <header class="form_section_header">
                            <h4 class="form_section_title text-caps">Personal Details</h4>
                        </header>
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
                    </fieldset>
                    <fieldset>
                        <header class="form_section_header">
                            <h4 class="form_section_title text-caps">Contact Details</h4>
                        </header>
                        <div class="form-horizontal">
                            <div class="form-group funky_form col-sm-6">
                                <label class="control-label">Phone Number</label>
                                <input type="tel" class="form-control" placeholder="Phone Number">
                            </div>
                            <div class="form-group funky_form col-sm-6">
                                <label class="control-label">Website</label>
                                <input type="url" class="form-control" placeholder="Website">
                            </div>
                        </div>
                        <div class="form-group funky_form">
                            <label class="control-label">Address Line 1</label>
                             <textarea class="form-control" placeholder="E.g. No 3, Adeniyi Jones, Ikeja"></textarea>
                        </div>
                        <div class="form-horizontal ">
                            <div class="col-sm-6 funky_form form-group">
                                <label for="" class="control-label">State</label>
                                <select class="form-control">
                                    <option>--State--</option>
                                    <option>Lagos</option>
                                    <option>Kaduna</option>
                                    <option>Kano</option>
                                    <option>Sokoto</option>
                                    <option>Jigawa</option>
                                    <option>Oyo</option>
                                    <option>Delta</option>
                                    <option>Benue</option>
                                    <option>Borno</option>
                                    <option>Bauchi</option>
                                    <option>Adamawa</option>
                                    <option>Anambra</option>
                                    <option>Rivers</option>
                                    <option>Cross Rivers</option>
                                    <option>Enugu</option>
                                    <option>Yola</option>
                                    <option>Ogun</option>
                                    <option>Osun</option>
                                    <option>Ondo</option>
                                    <option>Edo</option>
                                    <option>Akwa Ibom</option>
                                </select>
                            </div>
                            <div class="col-sm-6 funky_form form-group">
                                <label for="" class="control-label">City/Town</label>
                                <select class="form-control">
                                    <option>--City/Town--</option>
                                    <option>Alausa</option>
                                    <option>Ikeja</option>
                                    <option>Ojodu</option>
                                    <option>Ojota</option>
                                    <option>Maryland</option>
                                    <option>Mende</option>
                                    <option>Festac</option>
                                    <option>Surulere</option>
                                    <option>Yaba</option>
                                    <option>Ojuelegba</option>
                                    <option>Mushin</option>
                                    <option>Ogba</option>
                                    <option>Magboro</option>
                                    <option>Magodo</option>
                                    <option>Victoria Island</option>
                                    <option>Ikoyi</option>
                                    <option>Ajah</option>
                                    <option>Leki</option>
                                    <option>Command</option>
                                    <option>Abule Egba</option>
                                    <option>Ipaja</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-horizontal ">
                            <div class="col-sm-6 funky_form form-group">
                                <label class="control-label">Zip/Postal Code</label>
                                <input type="tel" class="form-control" placeholder="Zip/Postal Code">
                            </div>
                            <div class="col-sm-6 funky_form form-group">
                                <label for="" class="control-label">Country</label>
                                <select class="form-control">
                                    <option>--Country--</option>
                                    <option selected>Nigeria</option>
                                    <option>United States of America</option>
                                    <option>Hunduras</option>
                                    <option>France</option>
                                    <option>Germany</option>
                                    <option>China</option>
                                    <option>Korea</option>
                                    <option>Japan</option>
                                    <option>Canada</option>
                                    <option>United Kingdom</option>
                                    <option>Netherlands</option>
                                    <option>Ukraine</option>
                                    <option>Spain</option>
                                    <option>Ghana</option>
                                    <option>Morocco</option>
                                    <option>Kenya</option>
                                    <option>South Africa</option>
                                </select>
                            </div>
                        </div>
                        
                    </fieldset>
                    <fieldset>
                            <header class="form_section_header">
                                <h4 class="form_section_title text-caps">Social Accounts</h4>
                            </header>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        Facebook
                                    </span>
                                    <input type="url" class="form-control" placeholder="https://facebook.com/david_01">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        Twitter
                                    </span>
                                    <input type="url" class="form-control" placeholder="https://twitter.com/david_01">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        Pinterest
                                    </span>
                                    <input type="url" class="form-control" placeholder="https://pinterest.com/david_01">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        Instagram
                                    </span>
                                    <input type="url" class="form-control" placeholder="https://instagram.com/david_01">
                                </div>
                            </div>
                        </fieldset>
                    <div class="section_cto text-center">
                        <button type="button" class="btn btn-default">Cancel</button>
                        <button type="submit" class="btn btn-inverse">Save Changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

</template>

<script>
export default {
  name: 'EditProfile'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

<template>
    <div class="FileUploader">
<h1 class=text-center> Convert Files to PDF</h1>
  <p class="text-primary">
      This utility will help you to convert your files to desired
      format. Please select the files and choose the format to be converted to.
      </p>
      <p class=text-warning>
        This is adfree site and is only for personal use. 
      </p>
  <h2> Click on below button to select the files to convert to PDF, you can select multiple files.
  </h2>
  <multiple-file-uploader postURL="http://.." successMessagePath="" errorMessagePath=""></multiple-file-uploader>
  </br>
  </br>
  </br>
  </br>
  </div>
 </template>
        
 <script>
 import MultipleFileUploader from '@updivision/vue2-multi-uploader'
export default {
    name:'FileUploader',
    props:{
        msg:{
            type:String,
            dafault:'Foobar'
        }
    },
    data(){
        return {
        }
    },
    methods:{
      
    },
     components: {
            MultipleFileUploader
        }
    }
  
</script>
<style scoped>

</style>


       
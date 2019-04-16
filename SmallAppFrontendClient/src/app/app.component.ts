import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// declare var $: any;
export class AppComponent {
  title = 'ProductAppClient';
  // ngOnInit(){
  //   $('#file_select_icon').on('click', function() {
  //     $('#selectFile').click();
  // });
  
  // $('#selectFile').on('change', function() {
  //     $('#file_name').val($('#selectFile').prop('files')[0].name);
  // });
  
  // $('#checkAndImport').on('click', function() {
  //   var fileExist = $("#file_name").val();
  //   if(fileExist == null || fileExist == ""){
  //     alert("Let's selecting a csv file.");
  //   } else {
  //     $('#insertProduct').submit();
  //   }
    
  // });
  // }
}

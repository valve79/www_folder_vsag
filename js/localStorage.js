$(document).ready(function() {
                  if (localStorage) {
                  localStorage.setItem("flag", "set");
                  // Browser supports it
                  $(".stored").change(function () {
                                      var data = $(this).val();
                                      var thisName = $(this).attr('name');
                                      var thisValue = $(this).val();
                                      localStorage.setItem(thisName, thisValue);
                                      });
                  
                  // Test if there is already saved data
                  if (localStorage.getItem("flag") == "set") {
                  
                  // Same iteration stuff as before
                  var data = $("#formID").serializeArray();
                  
                  // Only the only way we can select is by the name attribute, but jQuery is down with that.
                  $.each(data, function (i, obj) {
                         $("[name='" + obj.name + "']").val(localStorage.getItem(obj.name));
                         $('#formID .bottom img').each(function() { $(this).attr('src', localStorage.getItem($(this).attr('name'))); });
                         });
                  }}
                  $('.ynDropdown').ddslick({
                                           data:ynData,
                                           width:75,
                                           selectText: "YES/NO",
                                           background: "#8DC53E",
                                           imagePosition:"right",
                                           onSelected: function(selectedData){
                                           //PC - Leave this empty for now
                                           }
                                           });
                  $('.ratingDropdown').ddslick({
                                               data:ratingData,
                                               width:75,
                                               selectText: "RATING",
                                               background: "#8DC53E",
                                               imagePosition:"right",
                                               onSelected: function(selectedData){
                                               //PC - Leave this empty for now
                                               }
                                               });
                  //Second, the save to local storage functionality. When they click a button with #save, localstorage support is checked.
                  //Once established that locastorage is ready, set a flag. Then serialize the form and store it in a var called data.
                  //Then loop through the array created by serializeArray() and set each name value pair to local storage. This is done dynamically.
                  $('.saveIt').on('click', function() {
                                if (localStorage) {
                                localStorage.setItem("flag", "set");
                                var data = $('#formID').serializeArray();
                                $.each(data, function (i, obj) {
                                       // HTML5 magic
                                       localStorage.setItem(obj.name, obj.value);
                                       });
                                }
                                });
                  //Here, we check localStorage on page load to see if there is anything in localStorage. If so, we bring those values back into the form.
                  // Test if there is already saved data
                  if (localStorage.getItem("flag") == "set") {
                  // Same iteration stuff as before
                  var data = $("#formID").serializeArray();
                  // Only the only way we can select is by the name attribute, but jQuery is down with that.
                  $.each(data, function (i, obj) {
                         $("[name='" + obj.name + "']").val(localStorage.getItem(obj.name));
                         //one more line of code to say take the value of the previous element and
                         });
                  }
                  
                  
                
                  
                  function dropdownVals() {
                  $('.dd-selected-value').each(function() {
                                               if ( $(this).val() !== null ) {
                                               var selectedValue = $(this).val();
                                               $(this).next().text(selectedValue);
                                               }
                                        });
                  }
                  
                  dropdownVals();
                  
                  function dropdownVals2() {
                  $('.dd-selected-value').each(function() {
                                               if ( $(this).val() == "" ) {
                                               
                                               $(this).next().text("SELECT");
                                               }
                                               });
                  }
                  
                  dropdownVals2();
                  // remove the first part of the url so i can call the page with in the application folder since im getting the full url dynamically LS
                  var currentPage = location.pathname;
                  var currentPage = currentPage.split('www/')[1];
                  localStorage.setItem("currentPage", currentPage);
                  console.log(localStorage.getItem("currentPage"));
                
                  });

                  $(document).ready(function(){
                                    $("#quickJump").click(function(){
                                                          $(".hiddenMenu").toggle('showOrHide');
                                        });
                  });

                  $(document).ready(function(){
                                    $("#cancelProject").click(function(){
                                                              var deleteConfirmation = confirm("You are about to delete your entire report! Are you sure you want to do this?");
                                                              if(deleteConfirmation) {
                                                                localStorage.clear();
                                                                window.location = ("../index.html");
                                                              }
                                    
                                        });
                  });


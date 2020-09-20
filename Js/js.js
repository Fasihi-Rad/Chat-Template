


(function () {
   const textDirection = function(text, id){
      // console.log(text, id)
      let textNoSpace = text.replace(/ /g, "");
      const langdic = {
                 "arabic" : /[\u0600-\u06FF]/,
                 "persian" : /[\u0750-\u077F]/,
                 "Hebrew" : /[\u0590-\u05FF]/,
                 "Syriac" : /[\u0700-\u074F]/,
                 "Bengali" : /[\u0980-\u09FF]/,
                 "Ethiopic" : /[\u1200-\u137F]/,
                 "Greek and Coptic" : /[\u0370-\u03FF]/,
                 "Georgian" : /[\u10A0-\u10FF]/,
                 "Thai" : /[\u0E00-\u0E7F]/,
                 "english" : /^[a-zA-Z]+$/
                   //add other languages her
               }
         const keys = Object.entries(langdic);
         Object.entries(langdic).forEach(([key, value]) => {  
            if (value.test(textNoSpace) == true){
               console.log(`#${id}`)
               return key === "arabic" ? $(`#${id}`).css({'text-align': 'end'}) : $(`#${id}`).css({'text-align': 'star'}); 
            }
         });
   }
   var Message;
   Message = function (arg) {
      (this.text = arg.text), (this.message_side = arg.message_side);
      this.draw = (function (_this) {
         return function () {
            const messageId = uuidv4()
            var $message;
            $message = $($(".message_template").clone().html());
            $message
               .addClass(_this.message_side)
               .find(".text")
               .html(_this.text);
            $message.find(".timestape").html("1111111");
            $message.find(".username").html("Ali");
            $message.find(".user_role").html("Admin");
            $message.find(".text").attr('id', messageId);
            textDirection(_this.text, messageId)
            $(".messages").append($message);
            return setTimeout(function () {
               return $message.addClass("appeared");
            }, 0);
         };
      })(this);
      return this;
   };
   $(function () {
      var getMessageText, message_side, sendMessage;
      message_side = "right";
      getMessageText = function () {
         var $message_input;
         $message_input = $(".message_input");
         return $message_input.val();
      };
      sendMessage = function (text) {
         var $messages, message;
         if (text.trim() === "") {
            return;
         }
         $(".message_input").val("");
         $messages = $(".messages");
         message_side = "right";
         message = new Message({
            text: text,
            message_side: message_side,
         });
         message.draw();
         return $messages.animate(
            { scrollTop: $messages.prop("scrollHeight") },
            300
         );
      };

      getMessage = function (text) {
         ///get message form api
         var $messages, message;
         if (text.trim() === "") {
            return;
         }
         $(".message_input").val("");
         $messages = $(".messages");
         message_side = "left";
         message = new Message({
            text: text,
            message_side: message_side,
         });
         message.draw();
         return $messages.animate(
            { scrollTop: $messages.prop("scrollHeight") },
            300
         );
      };

      $(".send_message").click(function (e) {
         
         return sendMessage(getMessageText());
      });
      $(".message_input").keyup(function (e) {
         if (e.which === 13) {
            // return getMessage(getMessageText());
            return userMaker();
         }
      });
   });
}.call(this));

$(document).ready(function () {
   let darkMod = true;
   $(".dark_mode_btn").css({ color: "white" });
   $(".top_menu").addClass("dark_mode");
   $(".bottom_wrapper").addClass("dark_mode");
   $(".messages").addClass("dark_mode_messages");
   $("#dark_mode_btn").removeClass("fa-moon");
   $("#dark_mode_btn").addClass("fa-sun");
   $(".message_input_wrapper").addClass("dark_mode_message_input_wrapper");
   $(".dark_mod_message_input_wrapper").removeClass("message_input_wrapper");
   $(".message_input").css({ color: "#f2e6ff" });
   $(".message_input").addClass("dark_mode_message_input");
   $(".message").addClass("dark_mode_message");
   $(".system_message").addClass("dark_mode_system_message");
   $(".send_message").addClass("dark_mode_send_message");
   $(".dark_mode_send_message").removeClass("send_message");
   $(".users_tab").addClass("dark_mode");

   $(document).on("click", "#dark_mode_btn", function () {
      console.log("it work");
      if (darkMod === false) {
         $(".dark_mode_btn").css({ color: "white" });
         $(".top_menu").addClass("dark_mode");
         $(".bottom_wrapper").addClass("dark_mode");
         $(".messages").addClass("dark_mode_messages");
         $("#dark_mode_btn").removeClass("fa-moon");
         $("#dark_mode_btn").addClass("fa-sun");
         $(".message_input_wrapper").addClass(
            "dark_mode_message_input_wrapper"
         );
         $(".dark_mod_message_input_wrapper").removeClass(
            "message_input_wrapper"
         );
         $(".message_input").css({ color: "#f2e6ff" });
         $(".message_input").addClass("dark_mode_message_input");
         $(".message").addClass("dark_mode_message");
         $(".system_message").addClass("dark_mode_system_message");
         $(".send_message").addClass("dark_mode_send_message");
         $(".dark_mode_send_message").removeClass("send_message");
         $(".users_tab").addClass("dark_mode");
         darkMod = true;
      } else if (darkMod === true) {
         $(".dark_mode_btn").css({ color: "#65598A" });
         $(".top_menu").removeClass("dark_mode");
         $(".bottom_wrapper").removeClass("dark_mode");
         $(".messages").removeClass("dark_mode_messages");
         $("#dark_mode_btn").removeClass("fa-sun");
         $("#dark_mode_btn").addClass("fa-moon");
         $(".dark_mod_message_input_wrapper").addClass("message_input_wrapper");
         $(".message_input_wrapper").removeClass(
            "dark_mode_message_input_wrapper"
         );
         $(".message_input").css({ color: "gray" });
         $(".message_input").removeClass("dark_mode_message_input");
         $(".message").removeClass("dark_mode_message");
         $(".system_message").removeClass("dark_mode_system_message");
         $(".dark_mode_send_message").addClass("send_message");
         $(".send_message").removeClass("dark_mode_send_message");
         $(".users_tab").removeClass("dark_mode");

         darkMod = false;
      }
   });
});

userMaker = function () {
   var $user;
   var $users = $(".users");
   $user = $($(".user_template").clone().html());
   $(".users").append($user);
   return $user.addClass("appeared");
};

let userTab = true;
let mobileUserTab = false;
$(window).width(function () {
   let width = $(window).width();
   if (width < 501) {
      $("#send_btn_txt").hide();
      $("#user_tab_btn").removeClass("fa-times");
      $("#user_tab_btn").addClass("fa-bars");
   } else {
      $("#send_btn_txt").show();
   }
});

$(window).resize(function () {
   let width = $(window).width();
   if (width < 501) {
      userTab = false;
      $("#send_btn_txt").hide();
      $("#user_tab_btn").removeClass("fa-times");
      $("#user_tab_btn").addClass("fa-bars");
   } else {
      $("#send_btn_txt").show();
   }
});

$("#user_tab_btn").click(function () {
   let width = $(window).width();
   if (width < 501) {
      if (mobileUserTab === false) {
         $(".users_tab").css({ transform: "translateX(0)" });
         $(".users_tab").addClass("user_tab_shadow");
         mobileUserTab = true;
      }
   } else {
      if (userTab === false) {
         $(".users_tab").css({ width: "400px", "min-width": "250px" });
         $("#user_tab_btn").removeClass("fa-bars");
         $("#user_tab_btn").addClass("fa-times");
         userTab = true;
      } else {
         $(".users_tab").css({ width: "0", "min-width": "0" });
         $("#user_tab_btn").removeClass("fa-times");
         $("#user_tab_btn").addClass("fa-bars");
         userTab = false;
      }
   }
});

$(".chat_window").mouseup(function () {
   if (mobileUserTab === true) {
      $(".users_tab").css({ transform: "translateX(-100%)" });
      $(".users_tab").removeClass("user_tab_shadow");
      mobileUserTab = false;
   }
});

$('.message_input').keypress(function(){
   let text = $(this).val().replace(/ /g, "");
   const langdic = {
              "arabic" : /[\u0600-\u06FF]/,
              "persian" : /[\u0750-\u077F]/,
              "Hebrew" : /[\u0590-\u05FF]/,
              "Syriac" : /[\u0700-\u074F]/,
              "Bengali" : /[\u0980-\u09FF]/,
              "Ethiopic" : /[\u1200-\u137F]/,
              "Greek and Coptic" : /[\u0370-\u03FF]/,
              "Georgian" : /[\u10A0-\u10FF]/,
              "Thai" : /[\u0E00-\u0E7F]/,
              "english" : /^[a-zA-Z]+$/
                //add other languages her
            }
      //const keys = Object.keys(langdic); //read  keys
      //const keys = Object.values(langdic); //read  values
      const keys = Object.entries(langdic); // read  keys and values from the dictionary
      Object.entries(langdic).forEach(([key, value]) => {  // loop to read all the dictionary items if not true
         if (value.test(text) == true){   //Check Unicode to see which one is true
            console.log(key)
            return key === "arabic" ? $(this).css({'direction': 'rtl'}) : $(this).css({'direction': 'ltr'}); 
         }
      });
})

